## Interface Button Component with svg

Button which contains svg

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| onClick     | func   | -      | +          |  |
| children | node | -            | +          |  |
| disabled  | bool   | false          | -           | |
| size   | string    | -          | +           | 'small', 'medium', 'large' |
| icon  | string   | -          | -           | one of the svg names in the Icon svg Component |



### Example

``` js
<InterfaceWithSvg
  icon="filter_icon"
  disabled
  onClick={() => { /* no-op */ }}
  size="small"
>
  InterfaceWithSvg
</InterfaceWithSvg>
```
