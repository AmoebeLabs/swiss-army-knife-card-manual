---
template: overrides/main.html
---

[slider-tool support]: https://github.com/amoebelabs/swiss-army-knife/releases/tag/1.0.0

# The slider tool
[:octicons-tag-24: 1.0.0][slider-tool support] ·
:octicons-package-dependencies-24: Input ·

The slider tool is an input tool with configurable track, active track, thumb and label position and styling.

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

<svg viewBox="-200 75 450 75" xmlns="http://www.w3.org/2000/svg" width="400px">
  <defs>
    <linearGradient id="light-brightness-gradient" x1="1" x2="0">
      <stop stop-color="#eeeeee"/>
      <stop offset="1" stop-color="#555555"/>
    </linearGradient>
    <linearGradient id="light-brightness-gradient--orange" x1="1" x2="0">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="darkorange"/>
    </linearGradient>
  </defs>
  <g class="toolset__group-outer" style="transform-origin:center; transform-box:fill-box;" id="toolset-atn0ynfcn" transform="rotate(0) scale(1, 1)">
    <svg style="overflow:visible;">
      <g class="toolset__group" transform="translate(0, 0)">
        <svg xmlns="http://www.w3.org/2000/svg" overflow="visible" style="touch-action:none; pointer-events:none;" id="rangeslider-gdwcswl8y">
          <rect id="rs-track" class="sak-slider__track" x="-180" y="104" width="360" height="40" rx="10" style="fill: url(#light-brightness-gradient); fill-opacity: 1; stroke-width: 0.1em; stroke: white; pointer-events: none;"></rect>
          <rect id="active-track" touch-action="none" class="sak-slider__active" x="-180" y="104" width="150.8080808080808" height="40" rx="10" style="fill: url(#light-brightness-gradient--orange); pointer-events: none;"></rect>
          <g id="rs-thumb-group" x="-10" y="104" style="transform:translate(-29.191919191919197px, 0px)">
            <g style="transform-origin:center;transform-box: fill-box;">
              <rect id="rs-thumb" class="sak-slider__thumb" x="-10" y="104" width="20" height="40" rx="10" style="stroke-width: 0.2em; stroke: darkgrey; stroke-opacity: 1; fill: var(--primary-text-color); fill-opacity: 0.8; pointer-events: none;"></rect>
            </g>
          </g>
        </svg>
      </g>
    </svg>
  </g>
</svg>
        
<svg viewBox="-200 75 450 75" width="400px" xmlns="http://www.w3.org/2000/svg" overflow="visible" pointer-events="all" id="rangeslider-qzbh29328">
  <defs>
    <linearGradient id="light-color-temperature-gradient" x1="1" x2="0">
      <stop stop-color="#ffa000"/>
      <stop offset=".5" stop-color="#fff"/>
      <stop offset="1" stop-color="#a6d1ff"/>
    </linearGradient>
  </defs>
  <rect id="rs-track" class="sak-slider__track" x="-180" y="116" width="360" height="16" rx="8" style="fill: url(#light-color-temperature-gradient); fill-opacity: 1; stroke-width: 0.1em; stroke: white;"></rect>
    <g id="rs-thumb-group" x="-10" y="114" style="transform: translate(64px, 0px);">
      <rect id="rs-thumb" class="sak-slider__thumb" x="-10" y="114" width="20" height="20" rx="10" style="stroke-width: 0.3em; stroke: var(--md-primary-bg-color); stroke-opacity: 1; fill: var(--md-primary-fg-color); fill-opacity: 0.8;"></rect>
    </g>
</svg>

!!! Info "The slider can possibly also be configured as state value output in the future..."
    And used as a very compact sort of "gauge", if you look at the second example with in this case a (for lights) color temperature gradient fill on the track.
    Adding colorlist or colorstop functionality would be a nice feature too!
    
##:sak-sak-logo: Basic usage

=== "Connected"
--> TODO: find out if there is a simple, basic usage...
```yaml linenums="1" hl_lines="1 6"
- type: 'slider'              # tooltype is 'slider'
  position:                   # Position on (100x100) canvas
    cx: 50                    # cx=50 is center position
    cy: 50                    # cy=50 is center position
  entity_index: 1
```

##:sak-sak-logo: Advanced usage
Below example is the configuration of the first example above.

=== "Connected"
```yaml title="From: view-sake2 (1st row, 1st card)" linenums="1" hl_lines="1"
- type: slider
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
    update_interval: 200      # Update every 200 ms while dragging
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

##:sak-sak-logo: Update while dragging
The slider can update the setpoint/value while dragging. This means that the brightness of a light is adjusted while dragging.

The interval is specified by the `update_interval` property:

- default value is `0`, ie NO update while dragging, only on release of the slider
- any other value (in milliseconds) starts a timer that checks if the slider is changed, and than calls the `slider_action` config.

!!! Warning "Don't specifiy a very small value, as it may overload your Zigbee/Wifi network"
    A value of `200` (5x / second) or `250` (4x / second) works very well in my setup using Tradfri lights and zzh! stick.
    
    If you combine this with a light transition, brightness changes are nice and smooth!

##:sak-sak-logo: Display active track
The second example shows an orange gradient for the active track.

The active track must be enabled using:
```yaml linenums="1"
  show:
    active: true
```

And defined at the position level:
```yaml linenums="1" hl_lines="12-14"
- type: slider
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
    active:
      height: 2
      radius: 1
    thumb:
      width: 5
      height: 10
      radius: 1
```

##:sak-sak-logo: Styling
The slider tool has support for the following forms of styling:

| Method       | Support          | Description |
| :----------- | :--------------: | :-------------------- |
| `classes`    | :material-check: | Using SAK or User defined class definitions |
| `styles`     | :material-check: | Using inslider SVG and CSS styles |


The slider tool is composed of four parts: "track", "active", "thumb" and "label" + "uom" can be used as the selector for styling:
```yaml linenums="1" hl_lines="7 9 11 13 15 18 20 22 24 26"
- type: 'slider'
  position:
    cx: 50
    cy: 50
  entity_index: 1
  classes:
    track:                    # Track selector
      <...>
    active:                   # Active track selector
      <...>
    thumb:                    # Thumb selector
      <...>
    label:                    # Label selector
      <...>
    uom:                      # Unit of label selector
      <...>
  styles:
    track:                    # Track selector
      <...>
    active:                   # Active track selector
      <...>
    thumb:                    # Thumb selector
      <...>
    label:                    # Label selector
      <...>
    uom:                      # Unit of label selector
      <...>
```

Populair properties:

| Property      | Does what?         | Example                                                 |
| :------------- | :----------------- | :------------------------------------------------------ |

##:sak-sak-logo: Haptics
!!! Info "See: https://companion.home-assistant.io/docs/integrations/haptics/ for devices that support haptics"

The slider supports its own fixed haptic feedback

| Action | Haptic | Description |
| ------ | ------ | ----------- |
| Click slider | light | Feedback that slider is clicked |
| Move slider | selection | Feedback for every update to HA of the slider value |

##:sak-sak-logo: Animations
The slider tool has support for the following forms of animations:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `colorstops` | :material-close: | List of state values to set the color |
| `colorlists` | :material-close: | Using a colorlist definition |
| `animations` | :material-close: | Operator state based animations with class/style styling |

##:sak-sak-logo: Examples
Some examples with different settings for track and thumb.


