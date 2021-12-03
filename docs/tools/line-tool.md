---
template: overrides/main.html
---

[line-tool support]: https://github.com/amoebelabs/swiss-army-knife/releases/tag/1.0.0
# The Line tool
[:octicons-tag-24: 1.0.0][line-tool support] ·
:octicons-tools-24: WIP

The Line tool is based on the SVG basic `<line>` element shape

<svg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg" width="100px">
  <line x1="5" y1="5" x2="95" y2="5" stroke="black" stroke-width="2"/>
</svg>

##:sak-sak-logo: Basic usage

```yaml linenums="1" hl_lines="1"
- type: 'line'              # tooltype is 'line'
  position:                 # Position on (100x100) canvas
    cx: 50                  # cx=50 is center position
    cy: 50                  # cy=50 is center position
    length: 25              # length of line.
    orientation: 'vertical' # Vertical or horizontal
  style:
    line:
      stroke-width: 2       # Set stroke width using CSS attribute
```
!!! Tip "There will be future support for (x1,y1) and (x2,y2) coordinates to draw non vertical/horizontal lines"
    Until then you can try the transform attribute to rotate the tool:
    
    - Use `transform: rotate(45deg)` for example to rotate the line by 45 degrees.
    
    Note however that this does not always give the expected results as the transform origin is not always the center of the tool, but the center of the toolset.
    
##:sak-sak-logo: Styling
The Line tool has support for the following forms of styling:

| Method       | Support          | Description |
| :----------- | :--------------: | :-------------------- |
| `classes`    | :material-check: | Using SAK or User defined class definitions |
| `styles`     | :material-check: | Using inline SVG and CSS styles |


The Line tool is composed of a single object: "line" and this is the selector for styling:
```yaml linenums="1" hl_lines="8 11"
- type: 'line'
  position:
    cx: 50
    cy: 50
    length: 25
    orientation: 'vertical'
  classes:
    line:                   # Line selector
      <...>
  styles:
    line:                   # Line selector
      <...>
```

Populair attributes:

| Attribute      | Does what?         | Example                                                 |
| :------------- | :----------------- | :------------------------------------------------------ |
| `stroke-width` | Line width         | `stroke-width: 2em` sets width to relative width of 2em |
| `stroke`       | Line color         | `stroke: red`                                           |
| `opacity`      | Line opacity       | `opacity: 0.7` sets the opacity of the stroke to 70%    |

Reference: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line

##:sak-sak-logo: Animations
The Line tool has support for the following forms of animations:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `colorstops` | :material-check: | List of state values to set the color |
| `colorlists` | :material-close: | Using a colorlist definition |
| `animations` | :material-check: | Operator state based animations with class/style styling |


!!! Info "The use of animations require the tool to be connected to an entity"


