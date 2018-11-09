## Link Component

Link can be passed an `href` or an `onClick` function depending on the necessity.

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| onClick  | function | -            | -          |  |
| href     | string   | -            | -          |  |
| children | node     | -            | +          |  |

### Example

``` js
<A
  href="mailto:info@fixico.nl"
  onClick={() => { /* do something */ }}
>
  {props.children}
</A>
```
