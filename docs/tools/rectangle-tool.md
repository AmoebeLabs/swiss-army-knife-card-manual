---
template: overrides/main.html
---

[rectangle-tool support]: https://github.com/amoebelabs/swiss-army-knife/releases/tag/1.0.0
# The Rectangle tool
[:octicons-tag-24: 1.0.0][rectangle-tool support]

The Rectangle tool is based on the SVG basic `<rect>`element shape.

<svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg" width="400px">
  <rect x="10" y="10" height="80" width="100" rx="0" fill="var(--md-primary-fg-color--light)" stroke="var(--md-primary-fg-color--dark)" stroke-width="2"/>
  <rect x="150" y="10"height="80" width="100" rx="10" fill="var(--md-primary-fg-color--light)" stroke="var(--md-primary-fg-color--dark)" stroke-width="2"/>
</svg>

##:sak-sak-logo: Basic usage

=== "Standalone"
    ```yaml linenums="1" hl_lines="1"
    - type: 'rectangle'         # tooltype is 'rectangle'
      position:                 # Position on (100x100) canvas
        cx: 50                  # cx=50 is center position
        cy: 50                  # cy=50 is center position
        height: 75              # height of 75
        width: 100              # width of 100
        rx: 0                   # corner radius: square
      styles:
        rectangle:
          stroke-width: 2       # width of stroke. 0 = no stroke.
    ```
=== "Connected"
    ```yaml linenums="1" hl_lines="1 8"
    - type: 'rectangle'         # tooltype is 'rectangle'
      position:                 # Position on (100x100) canvas
        cx: 50                  # cx=50 is center position
        cy: 50                  # cy=50 is center position
        height: 75              # height of 75
        width: 100              # width of 100
        rx: 0                   # corner radius: square
      entity_index: 0           # connect to state of entity 0
      styles:
        rectangle:
          stroke-width: 2       # width of stroke. 0 = no stroke.
    ```

##:sak-sak-logo: Styling
The Rectangle tool has support for the following forms of styling:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `classes`    | :material-check: | Using SAK or User defined class definitions  |
| `styles`     | :material-check: | Using inline SVG and CSS styles |

The Rectangle tool is composed of a single object: "rectangle" and this is the selector for styling:
```yaml linenums="1"hl_lines="7 10"
- type: 'rectangle'
  position:
    cx: 50
    cy: 50
    height: 75              # height of 75
    width: 100              # width of 100
    rx: 0                   # corner radius: square
  classes:
    rectangle:              # Rectangle selector
      <...>
  styles:
    rectangle:              # Rectangle selector
      <...>
```
Populair attributes:

| Attribute       | Does what?            | Example                                                 |
| :-------------- | :-------------------- | :------------------------------------------------------ |
| `fill`          | Fill color            | `fill: red` sets fill to color red |
| `stroke-width`  | Stroke width          | `stroke-width: 2em` sets width to relative width of 2em |
| `stroke`        | Stroke color          | `stroke: blue` sets stroke to blue |
| `opacity`       | Opacity (stroke/fill) | `opacity: 0.7` sets the opacity of rect to 70% |
| `fill-opacity`  | Opacity for fill      | `fill-opacity: 0.5` sets the fill opacity to 50% |
| `stroke-opacity`| Opacity for stroke    | `stroke-opacity: 0.5` sets the stroke opacity to 50% |

Reference: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect

##:sak-sak-logo: Animations
The Rectangle tool has support for the following forms of animations:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `colorstops` | :material-check: | List of state values to set the color |
| `colorlists` | :material-close: | Using a colorlist definition |
| `animations` | :material-check: | Operator state based animations with class/style styling |

!!! Info "The use of animations require the tool to be connected to an entity"




