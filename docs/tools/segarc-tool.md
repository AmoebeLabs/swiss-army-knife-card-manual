---
template: overrides/main.html
---

[segarc-tool support]: https://github.com/amoebelabs/swiss-army-knife/releases/tag/1.0.0
# The Segmented Arc tool
[:octicons-tag-24: 1.0.0][segarc-tool support] ·
:octicons-package-dependents-24: Output

The Segmented Arc tool is a complex, multi-part tool with a custom animation.
<br>The tool consists of multiple separate segments that 'behave' like a single, segmented object.

The Arc can be between 0 and 360 degrees with configurable start and end angle. It can have an additional scale. The Arc supports colorstops and colorlists to display the state value.

It is by far the most complex tool. Was fun to make, and fairly unique.
<br>The 360 degrees arc takes a prominent place in many examples.

<svg viewBox="-175 -100 400 200" xmlns="http://www.w3.org/2000/svg" width="300px" style="overflow:visible;">
  <g class="toolset__group">
    <g overflow="visible" id="circle-mtis3kir4" class="sak-circle hover" transform-origin="0 0">
      <circle %="" <="" circle="" class="sak-circle__circle" cx="0" cy="0" r="110.00000000000001" style="fill: var(--md-primary-fg-color--50); stroke-width: 0;">
      </circle>
    </g>
    <g class="arc" id="arc-colnv30ac">
      <g>
          <!----><!----><path class="sak-segarc__background" id="arc-segment-bg-colnv30ac-0" d="M -94.55185755993168 32.5568154457157 A 100 100 0 1 0 1.7452406437283376 -99.98476951563913 L 1.3961925149826702 -79.9878156125113 A 80 80 0 1 1 -75.64148604794534 26.045452356572557 Z" style="fill: lightgrey;opacity:0.4;"></path><!----><path class="sak-segarc__background" id="arc-segment-bg-colnv30ac-1" d="M -95.63047559630355 -29.23717047227364 A 100 100 0 0 0 -95.63047559630353 29.237170472273743 L -76.50438047704282 23.389736377818995 A 80 80 0 0 1 -76.50438047704284 -23.38973637781891 Z" style="fill: lightgrey;opacity:0.4;"></path><!----><path class="sak-segarc__background" id="arc-segment-bg-colnv30ac-2" d="M -60.181502315204824 -79.86355100472929 A 100 100 0 0 0 -94.55185755993168 -32.55681544571568 L -75.64148604794534 -26.04545235657254 A 80 80 0 0 1 -48.145201852163865 -63.890840803783426 Z" style="fill: lightgrey;opacity:0.4; "></path><!----><path class="sak-segarc__background" id="arc-segment-bg-colnv30ac-3" d="M -1.7452406437283499 -99.98476951563913 A 100 100 0 0 0 -57.35764363510464 -81.91520442889916 L -45.88611490808371 -65.53216354311932 A 80 80 0 0 1 -1.3961925149826797 -79.9878156125113 Z" style="fill: lightgrey;opacity:0.4;"></path><!----><path class="sak-segarc__foreground" id="arc-segment-colnv30ac-0" d="M 99.21147013144778 -12.533323356430431 A 100 100 0 0 0 1.7452406437283376 -99.98476951563913 L 1.3961925149826702 -79.9878156125113 A 80 80 0 0 1 79.36917610515823 -10.026658685144344 Z" style="fill: darkseagreen;"></path><!----><path class="sak-segarc__foreground" id="arc-segment-colnv30ac-1" d="M -95.63047559630355 -29.23717047227364 A 100 100 0 0 0 -95.63047559630353 29.237170472273743 L -95.63047559630353 29.237170472273743 A 100 100 0 0 1 -95.63047559630355 -29.23717047227364 Z" style="fill: yellow;"></path><!----><path class="sak-segarc__foreground" id="arc-segment-colnv30ac-2" d="M -60.181502315204824 -79.86355100472929 A 100 100 0 0 0 -94.55185755993168 -32.55681544571568 L -94.55185755993168 -32.55681544571568 A 100 100 0 0 1 -60.181502315204824 -79.86355100472929 Z" style="fill: orange;"></path><!----><path class="sak-segarc__foreground" id="arc-segment-colnv30ac-3" d="M -1.7452406437283499 -99.98476951563913 A 100 100 0 0 0 -57.35764363510464 -81.91520442889916 L -57.35764363510464 -81.91520442889916 A 100 100 0 0 1 -1.7452406437283499 -99.98476951563913 Z" style="fill: red;"></path><!----><!---->
      </g>
      <g class="arc" id="arc-0y3k8q8jl">
        <g>
          <!----><!----><path class="sak-segarc__foreground" id="arc-segment-0y3k8q8jl-0" d="M -68.07733744315081 23.440907120915302 A 72 72 0 1 0 1.2565732634844031 -71.98903405126018 L 1.116954011986136 -63.99025249000904 A 64 64 0 1 1 -60.51318883835627 20.836361885258047 Z" style="fill: darkseagreen;"></path><!----><path class="sak-segarc__foreground" id="arc-segment-0y3k8q8jl-1" d="M -68.85394242933856 -21.05076274003702 A 72 72 0 0 0 -68.85394242933853 21.050762740037094 L -61.203504381634254 18.711789102255196 A 64 64 0 0 1 -61.203504381634275 -18.71178910225513 Z" style="fill: yellow;"></path><!----><path class="sak-segarc__foreground" id="arc-segment-0y3k8q8jl-2" d="M -43.33068166694748 -57.50175672340508 A 72 72 0 0 0 -68.07733744315081 -23.440907120915288 L -60.51318883835627 -20.836361885258032 A 64 64 0 0 1 -38.51616148173109 -51.11267264302674 Z" style="fill: orange;"></path><!----><path class="sak-segarc__foreground" id="arc-segment-0y3k8q8jl-3" d="M -1.2565732634844118 -71.98903405126018 A 72 72 0 0 0 -41.29750341727534 -58.978947188807396 L -36.70889192646697 -52.42573083449546 A 64 64 0 0 1 -1.1169540119861439 -63.99025249000904 Z" style="fill: red;"></path><!----><!---->
          </g>
      </g>
      </g>
    <g class="sak-state hover">
      <text>
        <tspan class="sak-state__value" x="0" y="10.00000000000003" style="text-anchor: middle; font-size: 2.5em; color: var(--primary-text-color); fill: var(--primary-text-color);">
        <!---->23<!----><!----></tspan>
          <tspan dx="-0.1em" dy="-0.35em" class="sak-state__uom" style="font-size: 1.5em;">
            %<!----></tspan>
      </text>
    </g>
  </g>
  <g class="arc" id="arc-1e2mq54wq" transform="translate(350 90)">
    <g>
          <!----><!----><path class="sak-segarc__background" id="arc-segment-bg-1e2mq54wq-0" d="M -7.141433158711026 -179.97258512815043 A 180 180 0 0 0 -183.97258512815043 -3.141433158711019 L -143.97867732189476 -2.4433369012196815 A 140 140 0 0 1 -6.443336901219687 -139.97867732189476 Z" style="fill: var(--md-primary-fg-color--50);"></path><!----><path class="sak-segarc__foreground" id="arc-segment-1e2mq54wq-0" d="M -135.2143529358541 -123.21847906716393 A 180 180 0 0 0 -183.97258512815043 -3.141433158711019 L -143.97867732189476 -2.4433369012196815 A 140 140 0 0 1 -106.05560783899763 -95.8365948300164 Z" style="fill: var(--md-primary-fg-color--900);"></path><!----><!---->
    </g>
    <g class="arc" id="arc-eyr06l3l0">
      <g>
          <!----><!----><path class="sak-segarc__foreground" id="arc-segment-eyr06l3l0-0" d="M -6.303717649721419 -131.97989576064364 A 132 132 0 0 0 -135.97989576064364 -2.303717649721414 L -127.98111419939252 -2.1640983982231465 A 124 124 0 0 1 -6.164098398223151 -123.98111419939252 Z" style="fill: var(--md-primary-fg-color--900);"></path><!----><!---->
      </g>
    </g>
  </g>  
</svg>

##:sak-sak-logo: Basic usage

=== "Connected"
    ```yaml linenums="1" hl_lines="1 9"
    - type: 'segarc'            # tooltype is 'segarc'
      position:                 # Position on (100x100) canvas
        cx: 50                  # cx=50 is center position
        cy: 50                  # cy=50 is center position
        start_angle: -130       # start angle...
        end_angle: 130          # .. --> Arc from left to right!
        width: 7                # Width of arc 'bar'
        radius: 45              # Size or arc radius
      entity_index: 0           # connect to state of entity 0
      scale:
        min: -20                # Temperatures from -20 to +40
        max: 40
        offset: -4.5            # Scale on inside of arc bar
      show:
        style: colorlist        # use single color colorlist
        scale: true             # show scale too
      segments:
        colorlist:
          gap: 1                # gap between segments
          colors:
            - 'black'
      styles:
        background:
          fill: grey
    ```

!!! Warning "The default style, 'fixedcolor' is broken, therefore the basic example uses a single color colorlist."

!!! Info "The direction of the arc is determined by the start and end angle"
    Arc from LEFT to RIGHT: end_angle > start_angle
    ```yaml
      start_angle: -90
      end_angle: 0
    ```

    Arc from RIGHT to LEFT: start_angle > end_angle
    ```yaml
      start_angle: 90
      end_angle: 0
    ```

!!! Info "A circle for example has a start_angle of 0 and end_angle of 360"

##:sak-sak-logo: Extended usage

=== "Connected"
    ```yaml linenums="1" hl_lines="1 9"
    - type: 'segarc'            # tooltype is 'segarc'
      position:                 # Position on (100x100) canvas
        cx: 50                  # cx=50 is center position
        cy: 50                  # cy=50 is center position
        start_angle: -130       # start angle...
        end_angle: 130          # .. --> Arc from left to right!
        width: 7
        radius: 45
      entity_index: 0           # connect to state of entity 0
      scale:
        min: 15                 # Inside temperature
        max: 25
        offset: -4.5            # Scale on inside of arc bar
      show:
        style: colorstops       # Use a colorstop
        lastcolor: true         # use last color to fill segments
      segments:
        colorstops:
          template:             # Use template colorstop (re-use!)
            name: colorstops_temperature_inside
            variables:
              - thegap: 1
      styles:
        background:
          fill: var(--primary-background-color)
          filter: url(#is-1)    # inset shadow for background
    ```

!!! Note "The use of show.lastcolor..."
    This setting determines whether a segment gets its color according to its own colorstop, or that the color of the last segment determines the colors of the previous segments.
    
    Example:
    
    Say we have a colorstop blue=0/green=25/yellow=50/red=75.
    
    - with the default `lastcolor = false`, with a state value of 60, you have filled blue and green segments, and a small part of the yellow segment is filled.
    - with `lastcolor = true` setting, all segments are yellow: they all take the 'last' color as their fill color.
    
##:sak-sak-logo: Styling
The Segmented Arc tool has support for the following forms of styling:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `classes`    | :material-check: | Using SAK or User defined class definitions  |
| `styles`     | :material-check: | Using inline SVG and CSS styles |

The Segmented Arc tool is composed of two objects: "foreground" and "background" are the selector for styling:

```yaml linenums="1" hl_lines="9 11 14 16"
- type: 'segarc'
  position:
    cx: 50
    cy: 50
    start_angle: -130       # start angle...
    end_angle: 130          # .. --> Arc from left to right!
    width: 7
  classes:
    background:             # Background selector
      <...>
    foreground:             # Foreground selector
      <...>
  styles:
    background:             # Background selector
      <...>
    foreground:             # Foreground selector
      <...>
```

Populair attributes for both 'foreground' and 'background' selectors:

| Attribute       | Does what?            | Example                                                 |
| :-------------- | :-------------------- | :------------------------------------------------------ |
| `fill`          | Fill color            | `fill: red` sets fill to color red |
| `stroke-width`  | Stroke width          | `stroke-width: 2em` sets width to relative width of 2em |
| `stroke`        | Stroke color          | `stroke: blue` sets stroke to blue |
| `opacity`       | Opacity (stroke/fill) | `opacity: 0.7` sets the opacity of rect to 70% |
| `fill-opacity`  | Opacity for fill      | `fill-opacity: 0.5` sets the fill opacity to 50% |
| `stroke-opacity`| Opacity for stroke    | `stroke-opacity: 0.5` sets the stroke opacity to 50% |

##:sak-sak-logo: Animations
The Segmented Arc tool 'foreground' part has support for the following forms of animations:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `colorstops` | :material-check: | List of state values to set the color |
| `colorlist`  | :material-check: | Using a colorlist definition, creating equally sized segments |
| `animations` | :material-close: | Operator state based animations with class/style styling |



##:sak-sak-logo: Detailed usage
The `segarc` tool has some functionalities which haven't been explained yet in the above examples.

###Scale placement
The scale, if enabled through `show.scale: true` can be placed inside, on or on the outside of the arc.

The `scale.offset` value is responsible for that functionality and works together with the `position.width` property.
```yaml linenums="1" hl_lines="7 13"
- type: 'segarc'            # tooltype is 'segarc'
  position:                 # Position on (100x100) canvas
    cx: 50                  # cx=50 is center position
    cy: 50                  # cy=50 is center position
    start_angle: -130       # start angle...
    end_angle: 130          # .. --> Arc from left to right!
    width: 7                # Width of arc 'bar'
    radius: 45              # Size or arc radius
  entity_index: 0           # connect to state of entity 0
  scale:
    min: -20                # Temperatures from -20 to +40
    max: 40
    offset: -4.5            # Scale on inside of arc bar
  show:
    style: colorlist        # use single color colorlist
    scale: true             # show scale too
  segments:
    colorlist:
      gap: 1                # gap between segments
      colors:
        - 'black'
  styles:
    background:
      fill: grey
```

The math is as follows:

- the arc bar `width` of the arc is `7`. As the math is from the center, we take `7/2 = 3.5` as the value to do the math with
- the scale `offset` is `-4.5`. That is the offset from the center of the arc bar. A value of `-4.5` means on the inside.
- As the `width` of the arc is `3.5` from the center, there is a 'gap' between the arc and the scale of `1`.

If you want the scale to be on the outside of the arc bar, use a positive `offset` value.

###Animation duration
The arc uses a custom animation to draw the arc. The animation duration is default 5 seconds and can be configured as follows:

```yaml linenums="1" hl_lines="3"
- type: 'segarc'            # tooltype is 'segarc'
  animation:
    duration: 5             # Animation in seconds
```

###Gap between segments
The `colorlist` or `colorstop` `show.style` determines the number of segments the arc has.

The `gap` between the drawn segments can be configured using the `gap` property. The default is `1`.
<br>Setting this to `0` removes the gap between the segments.

```yaml linenums="1" hl_lines="3"
  segments:
    colorlist:
      gap: 1                # gap between segments
      colors:
        - 'black'
```
!!! Warning "Don't make the gap larger than the size of a segment"
    It may lead to unexpected results.
