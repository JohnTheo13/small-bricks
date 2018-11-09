## Pagination Component

Pagination should receive a `onSelect` function to redirect to the selected page, the `prev` and `next` props are the string used in the beginning and end to go to next and previous pages.   
The prop `items` is the total number of pages and the `activePage` is the current page.

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| onSelect | function | -            | +          |  |
| activePage | number | -            | +          |  |
| items    | number   | -            | +          | total number of pages |
| next     | string   | -            | +          | text for next button |
| prev     | string   | -            | +          | text for prev button |

### Example

``` js
<Pagination
  prev="prev"
  next="next"
  items={10}
  activePage={2}
  onSelect={() => { /* redirect function */ }}
/>
```
