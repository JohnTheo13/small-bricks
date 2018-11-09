## Field Component

Field is a combination of an <Image />, a <Label /> and an <Input /> component.

Multiple props must be passed to make it work. Like all the props required for each component.   

You can see the complete list bellow:  

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| type     | string   | 'text'       | -          |  |
| placeholder | string   |-           | -         |  |
| autoFocus | boolean | -            | -          |  |
| disabled  | boolean   |-           | -          |  |
| maxLength | number   |-           | -          |  |
| active  | boolean   |-           | -            |  |
| status  | string   | -           | -            | 'error', 'success', 'warning' |
| label  | string   |-           | +            | Label name |
| icon  | string   |-           | -            | icon path |
| size  | string   |-           | -            | icon size prop is required when using icon, options 'small', medium' or 'round' |

### Example

``` js
<Field
  disabled={false}
  icon="images/eve.png"
  size="small"
  placeholder="input placeholder"
  status="success"
/>
```
