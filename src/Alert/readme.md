## Alert Component

Alert has 3 different status info, success and error.

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| body     | string   | -      | -          |  |
| header | string   |-           | -         |  |
| children | node | -            | -          |  |
| status  | string   | -           | +            | 'error', 'success', 'info' |

### Example

``` js
<Alert
  header="This is bold!"
  body="This is a notification message, inline with header"
  status="info"
/>
```
