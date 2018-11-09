## Slide Button Component

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| onClick     | func   | -      | +          |  |
| on  | bool   | true          | -           | |
| textOn  | string   | -          | +           | |
| textOff  | string   | -          | +          | |

### Example

``` js
<SlideButton
  onClick={onClick}
  textOn="yes"
  textOff="no"
  on={boolean('on', true)}
/>
```
