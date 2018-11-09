## Stepper Component

The Stepper component allow the user to visualize how many steps are required to finish an action, fill in a form for instance.   

It accepts the props `steps` which is an array composed with boolean values, with as many values as the total amount of steps to complete the action, the length of the array represents the amount os steps, if the boolean is true it means that the steps will be blue (which is the current step or already completed steps).   
Like `['true', 'true', 'false']`.   


### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| steps    | array    | -            | +          | ['true', 'true', 'false'] |


### Example

``` js
<Stepper
  steps={['true', 'true', 'false', 'false']}
/>
```
