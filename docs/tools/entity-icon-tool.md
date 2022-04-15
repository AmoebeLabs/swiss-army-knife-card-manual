---
template: main.html
---

[entity-icon-tool support]: https://github.com/amoebelabs/swiss-army-knife/releases/
# The Entity Icon tool
[:octicons-tag-24: 1.0.0][entity-icon-tool support] ·
:octicons-package-dependents-24: Output

The Entity Icon tool displays the Home Assistant Entity Icon.

   :material-thermometer:

##:sak-sak-logo: Basic usage
The Entity Icon tool needs a center position and the entity_index from which the icon definition is used.
=== "Connected"
```yaml linenums="1" hl_lines="1"
- type: 'icon'              # tooltype is 'icon'
  position:                 # Position on (100x100) canvas
    cx: 50                  # cx=50 is center position
    cy: 50                  # cy=50 is center position
    icon_size: 10           # Relative size of 10 (em)
    align: center           # Align (center, end, start)
  entity_index: 0           # connect to state of entity 0
  styles:
    icon:
      fill: var(--primary-text-color)
      color: var(--primary-text-color)
```

!!! Warning "At this moment BOTH fill and color must be specified for the icon"
    This is due to different browser rendering paths (Chrome alike and Safari) for icons
    
##:sak-sak-logo: Styling
The Entity Icon tool has support for the following forms of styling:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `classes`    | :material-check: | Using SAK or User defined class definitions  |
| `styles`     | :material-check: | Using inline SVG and CSS styles |

The Entity Icon tool is composed of a single object: "icon" and this is the selector for styling:
```yaml linenums="1"hl_lines="9 12"
- type: 'icon'
  position:
    cx: 50
    cy: 50
    icon_size: 10
    align: center
  entity_index: 0
  classes:
    icon:                   # icon selector
      <...>
  styles:
    icon:                   # icon selector
      <...>
```
Populair properties:

| Property       | Does what?            | Example                                                 |
| :-------------- | :-------------------- | :------------------------------------------------------ |
| `fill`          | Fill color            | `fill: red` sets fill to color red |
| `color`         | Fill color            | `color: red` sets fill to color red |
| `opacity`       | Opacity (stroke/fill) | `opacity: 0.7` sets the opacity of text to 70% |

--8<-- "docs/tools/default-haptics.md"

##:sak-sak-logo: Animations
The Entity Icon tool has support for the following forms of animations:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `colorstops` | :material-check: | List of state values to set the color |
| `colorlists` | :material-close: | Using a colorlist definition |
| `animations` | :material-check: | Operator state based animations with class/style styling |


