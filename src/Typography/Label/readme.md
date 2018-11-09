## Label Component

Labels are normally used with input fields and can receive custom styles.

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| color    | string   | -            | -          |  |
| children | node     | -            | +          |  |
| styled | object     | -            | -          |  |

### Example

``` js
<Label color="red" styled={{ color:'red' }} >
  {props.children}
</Label>
```
