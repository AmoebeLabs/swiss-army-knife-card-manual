---
template: overrides/main.html
---

[rectex-tool support]: https://github.com/amoebelabs/swiss-army-knife/releases/tag/1.0.0
# The Rectangle Ex(tended) tool
[:octicons-tag-24: 1.0.0][rectex-tool support]

The RectEx tool is based on the SVG basic `<path>`element shape.

The RectEx tool lets you define the radius for each corner, where the Rectangle tool lets you specify a single radius for all corners.

!!! Info "The rectex might replace the rectangle tool in the future..."

<svg viewBox="0 0 520 100" xmlns="http://www.w3.org/2000/svg" width="500px">
  <rect x="10" y="10" height="80" width="100" rx="0" fill="var(--md-primary-fg-color--light)" stroke="var(--md-primary-fg-color--dark)" stroke-width="2"/>
  <rect x="150" y="10" height="80" width="100" rx="10" fill="var(--md-primary-fg-color--light)" stroke="var(--md-primary-fg-color--dark)" stroke-width="2"/>
  <path d="M 280 10 l 80 0 q 20 0 20 20 v 60 q 0 0 0 0 l -100 0 z " fill="var(--md-primary-fg-color--light)" stroke="var(--md-primary-fg-color--dark)" stroke-width="2"/>
  <path d="M 410 10 l 80 0 q 20 0 20 20 v 50 q 0 10 -10 10 l -90 0 z " fill="var(--md-primary-fg-color--light)" stroke="var(--md-primary-fg-color--dark)" stroke-width="2"/>
</svg>

##:sak-sak-logo: Basic usage

=== "Standalone"
  ```yaml linenums="1" hl_lines="1"
  - type: 'rectex'            # tooltype is 'rectex'
    position:                 # Position on (100x100) canvas
      cx: 50                  # cx=50 is center position
      cy: 50                  # cy=50 is center position
      height: 75              # height of 75
      width: 100              # width of 100
      radius:
        all: 0                # corner radius: square
      # per side options:
        top: 2
        left: 2
        right: 2
        bottom: 2
      # per corner options:
        top_left: 2
        top_right: 2
        bottom_left: 2
        bottom_right: 2
    styles:
      rectex:
        stroke-width: 2       # width of stroke. 0 = no stroke.
  ```
=== "Connected"
  ```yaml linenums="1" hl_lines="1 9"
  - type: 'rectex'            # tooltype is 'rectex'
    position:                 # Position on (100x100) canvas
      cx: 50                  # cx=50 is center position
      cy: 50                  # cy=50 is center position
      height: 75              # height of 75
      width: 100              # width of 100
      radius:
        all: 0                # corner radius: square
    entity_index: 0           # connect to state of entity 0
    styles:
      rectex:
        stroke-width: 2       # width of stroke. 0 = no stroke.
  ```

##:sak-sak-logo: Styling
The RectEx tool has support for the following forms of styling:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `classes`    | :material-check: | Using SAK or User defined class definitions  |
| `styles`     | :material-check: | Using inline SVG and CSS styles |

The RectEx tool is composed of a single object: "rectex" and this is the selector for styling:
```yaml linenums="1"hl_lines="10 13"
- type: 'rectex'
  position:
    cx: 50
    cy: 50
    height: 75              # height of 75
    width: 100              # width of 100
    radius:
      all: 0                # corner radius: square
  classes:
    rectex:                 # RectEx selector
      <...>
  styles:
    rectex:                 # RectEx selector
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
The RectEx tool has support for the following forms of animations:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `colorstops` | :material-check: | List of state values to set the color |
| `colorlists` | :material-close: | Using a colorlist definition |
| `animations` | :material-check: | Operator state based animations with class/style styling |

!!! Info "The use of animations require the tool to be connected to an entity"




