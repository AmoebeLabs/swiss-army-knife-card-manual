---
template: overrides/main.html
---

[switch-tool support]: https://github.com/amoebelabs/swiss-army-knife/releases/tag/1.0.0

# The Switch tool
[:octicons-tag-24: 1.0.0][switch-tool support] ·
:octicons-package-dependencies-24: Input

The Switch tool is based on two SVG basic `<rectangle>` element shapes.
<br> It is a composite tool with a built-in animation to move the thumb to 'off' or 'on' position and to change the color to 'off' or 'on' color.

<svg viewBox="50 -100 300 50" xmlns="http://www.w3.org/2000/svg" width="300px">
  <g overflow="visible" id="switch-9q4tztq6a" class="sak-switch hover" transform-origin="0 -100">
      <g>
        <rect x="88" y="-94" width="64" height="28.000000000000004" rx="14.000000000000002" style="fill:var(--md-primary-fg-color--dark);pointer-events: auto;"></rect>
        <rect class="sak-switch__thumb" x="102" y="-98" width="36" height="36" rx="18" style="fill: var(--md-primary-fg-color--light);transform: translateX(-18px);"></rect>
      </g>
  </g>
</svg>

##:sak-sak-logo: Basic usage

=== "Connected"
```yaml linenums="1" hl_lines="1 6"
- type: 'switch'              # tooltype is 'switch'
  position:                   # Position on (100x100) canvas
    cx: 50                    # cx=50 is center position
    cy: 50                    # cy=50 is center position
    orientation: 'horizontal' # Vertical or horizontal
  entity_index: 0
```

!!! Warning "The switch tool must ALWAYS be connected to an 'on' / 'off' state entity."
    Lights and Switches are the most used entities for this tool.
    
##:sak-sak-logo: Extended usage
The Switch tools parts can be defined/styled individually.

```yaml linenums="1" hl_lines="1 5 7"
- type: switch
  position:
    cx: 50
    cy: 50
    track:                    # Configure track part
      radius: 1               # Round corners with radius=1
    thumb:                    # Configure thumb part
      width: 5                # Set width
      height: 5               # Set height
      radius: 1               # Set corner radius
      offset: 2.5             # offset = width/2 for on/off move
    orientation: 'horizontal'
  entity_index: 0
  animations:
    - state: 'on'             # Define thumb colors when 'on'
      id: 1
      styles:
        thumb:
          --thumb-stroke: 'var(--primary-background-color)'
          fill: 'var(--switch-checked-button-color)'
  styles:
    thumb:                    # Overwrite thumb setting
      --thumb-stroke: 'var(--primary-background-color)'
```
!!! Info "Style the switch to round or square"
    By specifying both the track and the thumb sizes and corner radius, you can create completely different switches.

##:sak-sak-logo: Styling
The Switch tool has support for the following forms of styling:

| Method       | Support          | Description |
| :----------- | :--------------: | :-------------------- |
| `classes`    | :material-check: | Using SAK or User defined class definitions |
| `styles`     | :material-check: | Using inswitch SVG and CSS styles |


The Switch tool is composed of two parts: "track" and "thumb" can be used as the selector for styling:
```yaml linenums="1" hl_lines="8 11"
- type: 'switch'
  position:
    cx: 50
    cy: 50
    orientation: 'vertical'
  entity_index: 0
  classes:
    track:                    # Track selector
      <...>
    thumb:                    # Thumb selector
      <...>
  styles:
    track:                    # Track selector
      <...>
    thumb:                    # Thumb selector
      <...>
```

Populair attributes:

| Attribute      | Does what?         | Example                                                 |
| :------------- | :----------------- | :------------------------------------------------------ |

##:sak-sak-logo: Animations
The Switch tool has support for the following forms of animations:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `colorstops` | :material-close: | List of state values to set the color |
| `colorlists` | :material-close: | Using a colorlist definition |
| `animations` | :material-check: | Operator state based animations with class/style styling |

##:sak-sak-logo: Examples
Some examples with different settings in 'off' and 'on' state.

![sak-switch-example]

[sak-switch-example]: ../assets/screenshots/sak-switch-example.png

From left to right, the partial configuration is as follows:

```yaml linenums="1" hl_lines="1 7 13 26 39"
- type: switch                    # #1
  position:
    cx: 60
    cy: 30
    orientation: 'vertical'

- type: switch                    # #2
  position:
    cx: 80
    cy: 30
    orientation: 'horizontal'

- type: switch                    # #3
  position:
    cx: 100
    cy: 30
    track:
      radius: 1
    thumb:
      width: 5
      height: 5
      radius: 1
      offset: 2.5
    orientation: 'horizontal'

- type: switch                    # #4
  position:
    cx: 120
    cy: 30
    track:
      radius: 1
    thumb:
      width: 5
      height: 10
      radius: 1
      offset: 2.5
    orientation: 'horizontal'
    
- type: switch                    # #5
  position:
    cx: 140
    cy: 30
    orientation: 'horizontal'
    thumb:
      width: 5
      height: 5
      radius: 2.5
      offset: 2.5
```

##:sak-sak-logo: Ramblings
Just thoughts, nothing more, to extend the switch with some decorators orso: you can define extra basic SVG elements to 'decorate' the track and thumb part of the switch...

```yaml linenums="1" hl_lines="14-21 29-30"
- type: switch
  position:
    cx: 50
    cy: 50
    track:                    # Configure track part
      radius: 1               # Round corners with radius=1
    thumb:                    # Configure thumb part
      width: 5                # Set width
      height: 5               # Set height
      radius: 1               # Set corner radius
      offset: 2.5             # offset = width/2 for on/off move
    orientation: 'horizontal'
  entity_index: 0
  decorators:
    thumb:
      - type: circle          # Place a circle on top of the thumb
        name: dot             # name it 'dot' used for selections
        position:
          cx: 50              # center it on the thumb
          cy: 50
          radius: 2           # small one, its called a 'dot'...
  animations:
    - state: 'on'             # Define thumb colors when 'on'
      id: 1
      styles:
        thumb:
          --thumb-stroke: 'var(--primary-background-color)'
          fill: 'var(--switch-checked-button-color)'
        thumb.dot:
          stroke: red
          
  styles:
    thumb:                    # Overwrite thumb setting
      --thumb-stroke: 'var(--primary-background-color)'
```