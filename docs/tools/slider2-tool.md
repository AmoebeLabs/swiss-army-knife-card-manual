---
template: overrides/main.html
---

[slider2-tool support]: https://github.com/amoebelabs/swiss-army-knife/releases/tag/1.0.0

# The Slider2 tool
[:octicons-tag-24: 1.0.0][slider2-tool support] ·
:octicons-package-dependencies-24: Input ·
:octicons-beaker-24: Experimental ·
:octicons-tools-24: WIP ·
:octicons-bug-24: Known Bugs

The Slider2 tool is an input tool with configurable track, thumb and label position and styling.

<svg viewBox="-200 75 450 75" xmlns="http://www.w3.org/2000/svg" width="400px">
  <g class="toolset__group-outer" style="transform-origin:center; transform-box:fill-box;" id="toolset-8qgsve32l" transform="rotate(0) scale(1, 1)">
    <svg style="overflow:visible;">
      <g class="toolset__group" transform="translate(0, 0)">
        <svg xmlns="http://www.w3.org/2000/svg" overflow="visible" pointer-events="all" id="rangeslider-hrqzz1i04">
          <rect id="rs-track" class="sak-slider__track" x="-180" y="120" width="280" height="8" rx="4" style="fill:var(--md-primary-fg-color--300);"></rect>
          <g id="rs-thumb-group" x="-50" y="104" style="transform:translate(18.787878787878782px, 0px)">
            <rect id="rs-thumb" class="sak-slider__thumb" x="-50" y="104" width="20" height="40" rx="4" style="stroke-width: 0.25em; stroke: var(--md-primary-fg-color--dark); fill: var(--md-primary-bg-color); stroke-opacity: 1;"></rect>
          </g>
          <text id="rs-label">
            <tspan data-placement="position" class="sak-slider__value" x="180" y="124" style="text-anchor: end; font-size: 2.5em; font-weight: 600;fill:var(--md-primary-fg-color--dark);">58</tspan>
            <tspan dx="-0.1em" dy="-0.35em" class="sak-slider__uom" style="font-size: 1.5em;fill:var(--md-primary-fg-color--dark);">
              %</tspan>
          </text>
        </svg>
      </g>
    </svg>
  </g>
</svg>

##:sak-sak-logo: Basic usage

=== "Connected"
--> TODO: find out if there is a simple, basic usage...
```yaml linenums="1" hl_lines="1 6"
- type: 'slider2'             # tooltype is 'slider2'
  position:                   # Position on (100x100) canvas
    cx: 50                    # cx=50 is center position
    cy: 50                    # cy=50 is center position
  entity_index: 1
```

##:sak-sak-logo: Advanced usage
Below example is the configuration of the example above.

=== "Connected"
```yaml title="From: view-sake2 (1st row, 1st card)" linenums="1" hl_lines="1"
- type: slider2
  position:
    cx: 40
    cy: 81
    capture:
      width: 80
      height: 15
    track:
      width: 70
      height: 2
      radius: 1
    thumb:
      width: 5
      height: 10
      radius: 1
    label:
      # placement can be none, thumb, position (cx,cy)
      placement: position
      cx: 95                  # Place value right from slider
      cy: 81
    orientation: horizontal   # default, other is vertical
  entity_index: 1             # The brightness attribute
  #
  # Extra:
  # Convert brightness value (0..255) to 0..100%
  derived_entity:
    input : '[[[ return state ]]]'
    state: >
      [[[
        if (typeof(entity) === 'undefined') return;
        if (typeof(state) === 'undefined') return;
        
        var bri = Math.round(state / 2.55);
        return (bri ? bri : '0');
      ]]]
    unit: >
      [[[
        if (typeof(state) === 'undefined') return undefined;
        return '%';
      ]]]
  #
  # The action for the slider if value has changed
  slider_action:
    service: light.turn_on
    parameter: brightness_pct
  scale:                      # Min/Max slider value
    min: 1
    max: 100
    step: 1
  styles:
    label:
      text-anchor: end
      font-size: 10em
      font-weight: 600
    # track:
    thumb:
      stroke-width: 0.5em
      stroke: var(--md--primary-fg-color)
      stroke-opacity: 0.8
```

##:sak-sak-logo: Styling
The Slider2 tool has support for the following forms of styling:

| Method       | Support          | Description |
| :----------- | :--------------: | :-------------------- |
| `classes`    | :material-check: | Using SAK or User defined class definitions |
| `styles`     | :material-check: | Using inslider2 SVG and CSS styles |


The Slider2 tool is composed of three parts: "track", "thumb" and "label" can be used as the selector for styling:
```yaml linenums="1" hl_lines="7 9 11 14 16 18"
- type: 'slider2'
  position:
    cx: 50
    cy: 50
  entity_index: 1
  classes:
    track:                    # Track selector
      <...>
    thumb:                    # Thumb selector
      <...>
    label:                    # Label selector
      <...>
  styles:
    track:                    # Track selector
      <...>
    thumb:                    # Thumb selector
      <...>
    label:                    # Label selector
      <...>
```

Populair attributes:

| Attribute      | Does what?         | Example                                                 |
| :------------- | :----------------- | :------------------------------------------------------ |

##:sak-sak-logo: Animations
The Slider2 tool has support for the following forms of animations:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `colorstops` | :material-close: | List of state values to set the color |
| `colorlists` | :material-close: | Using a colorlist definition |
| `animations` | :material-close: | Operator state based animations with class/style styling |

##:sak-sak-logo: Examples
Some examples with different settings for track and thumb.


