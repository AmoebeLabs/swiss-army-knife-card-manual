---
template: overrides/main.html
---

[ellipse-tool support]: https://github.com/amoebelabs/swiss-army-knife/releases/tag/1.0.0
# The Ellipse tool
[:octicons-tag-24: 1.0.0][ellipse-tool support] 

The Ellipse tool is based on the SVG basic `<ellipse>`element shape.

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100px">
  <ellipse cx="50" cy="50" rx="30" ry="45" fill="var(--md-primary-fg-color--light)" stroke="var(--md-primary-fg-color--dark)" stroke-width="2"/>
</svg>

##:sak-sak-logo: Basic usage

=== "Standalone"
    ```yaml linenums="1" hl_lines="1"
    - type: 'ellipse'            # tooltype is 'ellipse'
      position:                 # Position on (100x100) canvas
        cx: 50                  # cx=50 is center position
        cy: 50                  # cy=50 is center position
        radiusx: 50             # Width is 100
        radiusy: 25             # Height is 50
    ```
=== "Connected"
    ```yaml linenums="1" hl_lines="1"
    - type: 'ellipse'            # tooltype is 'ellipse'
      position:                 # Position on (100x100) canvas
        cx: 50                  # cx=50 is center position
        cy: 50                  # cy=50 is center position
        radiusx: 50             # Width is 100
        radiusy: 25             # Height is 50
      entity_index: 0           # connect to state of entity 0
    ```

!!! Tip "Set the x and y radius the same to create a circle"

##:sak-sak-logo: Styling
The Ellipse tool has support for the following forms of styling:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `classes`    | :material-check: | Using SAK or User defined class definitions  |
| `styles`     | :material-check: | Using inline SVG and CSS styles |

The Ellipse tool is composed of a single object: "ellipse" and this is the selector for styling:
```yaml linenums="1"hl_lines="8 11"
- type: 'ellipse'
  position:
    cx: 50
    cy: 50
    radiusx: 50
    radiusy: 25
  classes:
    ellipse:                   # Ellipse selector
      <...>
  styles:
    ellipse:                   # Ellipse selector
      <...>
```
Populair attributes:

| Attribute       | Does what?            | Example                                                 |
| :-------------- | :-------------------- | :------------------------------------------------------ |
| `fill`          | Fill color            | `fill: red` sets fill to color red |
| `stroke-width`  | Stroke width          | `stroke-width: 2em` sets width to relative width of 2em |
| `stroke`        | Stroke color          | `stroke: blue` sets stroke to blue |
| `opacity`       | Opacity (stroke/fill) | `opacity: 0.7` sets the opacity of ellipse to 70% |
| `fill-opacity`  | Opacity for fill      | `fill-opacity: 0.5` sets the fill opacity to 50% |
| `stroke-opacity`| Opacity for stroke    | `stroke-opacity: 0.5` sets the stroke opacity to 50% |

Reference: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse

##:sak-sak-logo: Animations
The Ellipse tool has support for the following forms of animations:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `colorstops` | :material-check: | List of state values to set the color |
| `colorlists` | :material-close: | Using a colorlist definition |
| `animations` | :material-check: | Operator state based animations with class/style styling |

!!! Info "The use of animations require the tool to be connected to an entity"



