# 999 元小范围修复方案样例：Webhook JSON 字段映射失败

> 公开演示样例，不是私人客户案例。所有字段和公司名称均为脱敏示例。
> 适用场景：买家已经做过 299 元诊断，确认问题集中在 1-2 个节点，需要一份可执行的小范围修复方案。

## 1. 当前问题摘要

- 平台/工具：n8n / Make / Zapier 同类自动化
- 失败流程：`lead.created webhook -> 字段映射 -> CRM 新增线索`
- 失败节点：字段映射节点进入 CRM 之前
- 买家期望输出：CRM 新增线索，包含 `email`、`company`、`source`
- 当前实际输出：CRM 报错 `missing required field email`
- 最近改动：上游表单 payload 从扁平字段改成嵌套字段

## 2. 最可能根因

### 根因 A：字段路径仍使用旧结构

- 证据：日志显示当前映射仍是 `{{$json["email"]}}`
- 实际 payload 中邮箱位置已经变成 `lead.email`
- 影响：CRM 必填字段 `email` 为空，导致创建线索失败
- 风险等级：高

### 根因 B：失败重试未暂停

- 证据：日志中 `retry_count` 为 `3`，且 `duplicate_notification_risk` 为 `high`
- 影响：如果下游部分节点已执行，继续重试可能造成重复通知或重复写入
- 风险等级：中

## 3. 建议修改

### 修改 1：修正 email 字段映射

适用位置：

```text
字段映射节点 -> CRM email 字段
```

修改前：

```text
email = {{$json["email"]}}
```

修改后：

```text
email = {{$json["lead"]["email"]}}
```

原因：

- 当前 payload 的邮箱字段在 `lead.email`
- 修正后，CRM 必填字段可以拿到真实值
- 这是本次失败的首要修复点

### 修改 2：修正 company 与 source 字段映射

适用位置：

```text
字段映射节点 -> CRM company/source 字段
```

修改前：

```text
company = {{$json["company"]}}
source = {{$json["source"]}}
```

修改后：

```text
company = {{$json["lead"]["company"]["name"]}}
source = {{$json["metadata"]["source"]}}
```

原因：

- 公司名已经移动到 `lead.company.name`
- 来源字段已经移动到 `metadata.source`
- 这两个字段不是当前报错的直接原因，但继续用旧路径会造成 CRM 资料缺失

### 修改 3：增加空邮箱保护

适用位置：

```text
CRM 节点之前的条件判断 / filter 节点
```

建议逻辑：

```text
if lead.email is empty:
  stop before CRM
  log "missing lead.email"
  do not retry automatically
```

原因：

- 防止上游再次改字段时直接打到 CRM
- 把失败挡在低风险节点，便于排查
- 避免重复通知和重复写入

### 修改 4：测试期间关闭真实发送与自动重试

适用位置：

```text
CRM 节点 / 通知节点 / retry 设置
```

建议设置：

```text
test mode = on
retry_count = 0
send_real_notification = false
```

原因：

- 当前日志已有 3 次重试记录
- 修复前继续重试会放大重复通知风险
- 测试通过后再恢复真实发送

## 4. 最小测试步骤

请不要直接全量重跑生产流程。建议按下面顺序测试：

1. 复制当前流程为测试副本，或打开测试模式。
2. 暂停真实 CRM 写入、短信、邮件、飞书、Slack 等下游通知动作。
3. 使用第 5 节的脱敏 payload 只跑到字段映射节点。
4. 确认 `email` 输出为 `alex@example.com`。
5. 确认 `company` 输出为 `Demo Co`。
6. 确认 `source` 输出为 `landing-page`。
7. 再打开 CRM 测试环境，跑一次完整测试。
8. 通过后恢复真实发送，但先只放行 1 条新线索。

## 5. 测试输入样例

```json
{
  "event": "lead.created",
  "lead": {
    "name": "Alex Demo",
    "email": "alex@example.com",
    "company": {
      "name": "Demo Co"
    }
  },
  "metadata": {
    "source": "landing-page"
  }
}
```

## 6. 通过标准

- [ ] 原错误 `missing required field email` 不再出现。
- [ ] `email`、`company`、`source` 都能解析出值。
- [ ] CRM 测试环境可以成功创建 1 条线索。
- [ ] `retry_count` 在测试期间为 `0`。
- [ ] 没有重复通知、重复写入或循环重试。
- [ ] 日志中没有 API Key、Token、Cookie、手机号原文等敏感信息。

## 7. 失败时怎么回滚

如果修改后仍失败：

1. 恢复字段映射节点到修改前版本。
2. 保持真实发送和自动重试关闭。
3. 保留新的错误截图、失败节点名称和脱敏 payload。
4. 不要同时改第二个流程或新增下游动作。
5. 把新错误发回后，再判断是否仍属于 999 元小范围修复，还是需要升级到 1999+ 的完整链路救援。

## 8. 风险提醒

- 权限风险：不要给外包方账号密码、Cookie、API Key 或 OAuth 授权。
- 数据风险：不要发送真实客户名单、手机号、邮箱批量原文。
- 重复调用风险：CRM、短信、邮件、支付通知节点必须先关真实发送。
- 成本风险：如果流程连接 LLM 节点，测试时要限制输入条数。
- 范围风险：如果失败节点超过 2-3 个，本 999 方案可能不够。

## 9. 何时升级到 1999+

出现以下情况，建议从 999 小范围修复升级到 1999+ 完整自动化救援：

- 失败流程超过 1 条。
- 同时涉及表单、CRM、消息通知、数据库、LLM 节点。
- 需要线上多轮测试或长期托管。
- 需要重新设计字段结构、错误处理和监控。
- 需要直接代操作生产后台。
- 需要处理未脱敏真实客户数据。

## 10. 给买家的交付留言

这份 999 元小范围修复方案已经把本次失败点拆成了可执行步骤。建议你先按“最小测试步骤”验证字段映射，不要直接全量重跑生产流程。

如果第一个测试通过，再恢复 CRM 测试环境；如果仍失败，请把新的错误截图、失败节点名称和脱敏 payload 发回来。我会基于当前范围判断是否还能继续在 999 元内处理，还是需要升级到更完整的链路救援。
