---
template: overrides/main.html
---

[text-tool support]: https://github.com/amoebelabs/swiss-army-knife/releases/tag/1.0.0
# The Text tool
[:octicons-tag-24: 1.0.0][text-tool support] ·
:octicons-package-dependents-24: Output ·
:octicons-tools-24: WIP

The Text tool is based on the SVG basic `<text>`element shape.

<svg viewBox="0 0 400 20" xmlns="http://www.w3.org/2000/svg" width="400px">
  <text x="20" y="20" font-size="20" fill="grey">
    <tspan>This is some SVG drawn text</tspan>
  </text>
</svg>

##:sak-sak-logo: Basic usage

=== "Standalone"
  ```yaml linenums="1" hl_lines="1"
  - type: 'text'              # tooltype is 'text'
    position:                 # Position on (100x100) canvas
      cx: 50                  # cx=50 is center position
      cy: 50                  # cy=50 is center position
    styles:
      text:
        font-size: 12em       # set font size to 12em
  ```
=== "Connected"
  ```yaml linenums="1" hl_lines="1"
  - type: 'text'              # tooltype is 'text'
    position:                 # Position on (100x100) canvas
      cx: 50                  # cx=50 is center position
      cy: 50                  # cy=50 is center position
    entity_index: 0           # connect to state of entity 0
    styles:
      text:
        font-size: 12em       # set font size to 12em
  ```
!!! Tip "Always use a relative font-size: it fits well with the relative sizes used by SAK"
    Unless you need a fixed size in pixels...
    
##:sak-sak-logo: Styling
The Text tool has support for the following forms of styling:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `classes`    | :material-check: | Using SAK or User defined class definitions  |
| `styles`     | :material-check: | Using inline SVG and CSS styles |

The Text tool is composed of a single object: "text" and this is the selector for styling:
```yaml linenums="1"hl_lines="7 10"
- type: 'text'
  position:
    cx: 50
    cy: 50
  classes:
    text:                   # Text selector
      <...>
  styles:
    text:                   # Text selector
      <...>
```
Populair attributes:

| Attribute       | Does what?            | Example                                                 |
| :-------------- | :-------------------- | :------------------------------------------------------ |
| `font-size`     | Font size             | `font-size: 12em` sets RELATIVE font size |
| `text-anchor`   | Anchor of text        | `text-anchor: start` or `middle`, or `end` |
| `fill`          | Fill color            | `fill: red` sets fill to color red |
| `stroke-width`  | Stroke width          | `stroke-width: 2em` sets width to relative width of 2em |
| `stroke`        | Stroke color          | `stroke: blue` sets stroke to blue |
| `opacity`       | Opacity (stroke/fill) | `opacity: 0.7` sets the opacity of text to 70% |
| `fill-opacity`  | Opacity for fill      | `fill-opacity: 0.5` sets the fill opacity to 50% |
| `stroke-opacity`| Opacity for stroke    | `stroke-opacity: 0.5` sets the stroke opacity to 50% |

Reference: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text

##:sak-sak-logo: Animations
The Text tool has support for the following forms of animations:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `colorstops` | :material-close: | List of state values to set the color |
| `colorlists` | :material-close: | Using a colorlist definition |
| `animations` | :material-check: | Operator state based animations with class/style styling |

!!! Info "The use of animations require the tool to be connected to an entity"




