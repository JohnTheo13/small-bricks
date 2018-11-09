## Button Component

Master button, it renders 6 different buttons in 3 sizes

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| onClick     | func   | -      | +          |  |
| children | node | -            | +          |  |
| disabled  | bool   | false          | -           | |
| tag   | string    | -          | +           |'primary','secondary','outlinePrimary','cta','outlineCta','interface' |
| size   | string    | -          | +           | 'small', 'medium', 'large' |
| noMargin   | bool    | -          | -           |  |



### Example

``` js
<Button size="medium" tag="primary" onClick={() => null} >
  Primary Button
</Button>
```
