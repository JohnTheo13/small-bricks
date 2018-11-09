## Radio Button Component

Radio Button first introduced in detailed reviews component, accepts a selected state that behaves as active button

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| onClick     | function   | -      | +          |  |
| children | node | -            | +          |  |
| disabled  | bool   | false          | -           | |
| noMargin   | bool    | -          | -           |  |
| selected   | bool    | -          | -           |  |
| icon   | string    | -          | -           | file location |


### Example

``` js
<RadioButton
  selected={false}
  onClick={/* your function here */}
>
  Radio Button
</RadioButton>
```
