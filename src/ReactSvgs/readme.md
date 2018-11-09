## Icon Component

React Svg Component master.

The parent of the Icon should be responsible for passing the correct fill color through the prop color.

If it needs a different hover color, this should be managed by the parent. Or through styled-components or if a project that doesn't use styled component, through the component state.

Like (at the parent): `<Icon color={this.state.hover ? white : red} />`

### PropTypes

| propName | propType | defaultValue | isRequired | options/example |
|----------|----------|--------------|------------|---------|
| onClick     | func   | -      | -          |  |
| color | string   |-           |   -       | white, theme.error... |
| name | string | -            | +          | Icon name |
| onMouseOver | func | -            | -          |  |
| onMouseOut | func | -            | -          |  |
| viewBox | string | -            | +          |  |

### Example

``` js
<Icon
  name={icon}
  viewBox="0 0 90 90"
  color={this.state.hover ? white : red}
/>
```

### Icons names list

```
 'phone_icon'
 'email_icon'
 'help_icon'
 'user_icon'
 'chat_icon'
 'hamburger_icon'
 'exit_icon'
 'flag_icon'
 'star_icon'
 'stopwatch_icon'
 'filter_icon'
```
