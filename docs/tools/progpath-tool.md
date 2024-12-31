---
template: main.html
title: Advanced Progress Path tool
description: The progress path (progpath) tool is an advanced tool based on SVG graphics. Progess Paths come in several types and variants. Lines, Spirals, Rectangles and Circles
tags:
  - Tools
  - Tool
  - Progpath
---

!!! warning "Part of upcoming release in 2025!"

# The ProgPath tool
[:octicons-tag-24: 4.0.1][github-releases] ·
:octicons-package-dependents-24: Output

The progress path tool is an advanced tool that can display a sensor value on different path types like: line, spiral, rectangle and circle. Each type can have its own variants and specific functionality.

!!! info "This tool is still beta / highly experimental"

Some examples:

<div class="grid cards" markdown>

-   :sak-sak-logo:{ .lg .middle } __Sensor with ProgPath *"Spiral/Helix"*__

    ---

    A sensor card with a progpath showing the actual power usage using a smooth colorstop.
    <br><br>

    ![Swiss Army Knife Progpath Tool Spiral/Helix](../assets/screenshots/sak-tool-progpath-spiral-helix1-light.png#only-light)
    ![Swiss Army Knife Progpath Tool Spiral/Helix](../assets/screenshots/sak-tool-progpath-spiral-helix1-dark.png#only-dark)

    [:octicons-arrow-right-24: Spiral Usage][Spiral Usage]

-   :sak-sak-logo:{ .lg .middle } __Sensor with ProgPath *"Spiral/Spiral"*__

    ---

    A sensor card with a progpath showing the actual power usage using a smooth colorstop.
    <br><br>
    
    ![Swiss Army Knife Progpath Tool Spiral/Spiral](../assets/screenshots/sak-tool-progpath-spiral-spiral1-light.png#only-light)
    ![Swiss Army Knife Progpath Tool Spiral/Spiral](../assets/screenshots/sak-tool-progpath-spiral-spiral1-dark.png#only-dark)

    [:octicons-arrow-right-24: Spiral Usage][Spiral Usage]

-   :sak-sak-logo:{ .lg .middle } __Sensor with ProgPath *"Line"*__

    ---

    A sensor card with a progpath showing the actual power usage using a stepped colorstop.
    <br><br>

    ![Swiss Army Knife Progpath Tool Line](../assets/screenshots/sak-tool-progpath-line1-light.png#only-light)
    ![Swiss Army Knife Progpath Tool Line](../assets/screenshots/sak-tool-progpath-line1-dark.png#only-dark)

    [:octicons-arrow-right-24: Line Usage][Line Usage]

-   :sak-sak-logo:{ .lg .middle } __Sensor with ProgPath *"Circle"*__

    ---

    A sensor card with a progpath showing the actual power usage using a stepped colorstop.
    <br><br>

    ![Swiss Army Knife Progpath Tool Circle](../assets/screenshots/sak-tool-progpath-circle1-light.png#only-light)
    ![Swiss Army Knife Progpath Tool Circle](../assets/screenshots/sak-tool-progpath-circle1-dark.png#only-dark)

    [:octicons-arrow-right-24: Circle Usage][Circle Usage]

-   :sak-sak-logo:{ .lg .middle } __Sensor with ProgPath *"Rectangle"*__

    ---

    A sensor card with a progpath showing the actual power usage using a stepped colorstop.
    <br><br>

    ![Swiss Army Knife Progpath Tool Rectangle](../assets/screenshots/sak-tool-progpath-rectangle2-light.png#only-light)
    ![Swiss Army Knife Progpath Tool Rectangle](../assets/screenshots/sak-tool-progpath-rectangle2-dark.png#only-dark)

    [:octicons-arrow-right-24: Rectangle Usage][Rectangle Usage]

-   :sak-sak-logo:{ .lg .middle } __Sensor with ProgPath *"Rectangle"*__

    ---

    A sensor card with a progpath showing the actual power usage using a single color for the active path.
    <br><br>

    ![Swiss Army Knife Progpath Tool Rectangle](../assets/screenshots/sak-tool-progpath-rectangle3-light.png#only-light)
    ![Swiss Army Knife Progpath Tool Rectangle](../assets/screenshots/sak-tool-progpath-rectangle3-dark.png#only-dark)

    [:octicons-arrow-right-24: Rectangle Usage][Rectangle Usage]

</div>


##:sak-sak-logo: Basic Usage
The ProgPath tool needs at least a `path_type` and some other `show` field settings:

```yaml title="Basic show config" linenums="1"
- type: progpath
  progpath:
    show:
      path_type: spiral
      variant: arch_helix
      viz:
        linecap: round_start_end # butt, round_start_end, butt_start_end
      background: true
      track: none
      marker: navigation #none #pan-vertical #navigation
      active_track: true
      mask: true
      scale: none
```

| Field    | Value          | Description            |
| :-----------  | :--------------: | :-------------------- |
| `path_type`   | `spiral`, `line`, `circle`, `rectangle`    | The type of Progress Path  |
| `variant`   | depends on `path_type`    | See specific type for possible variants  |

Main `show` fields that enable/disable/set the various components of the ProgPath tool:

| show field    | Value          | Description            |
| :-----------  | :--------------: | :-------------------- |
| `background`  | `true`,`false`    | Add background track yes/no  |
| `track`       | `none`, `colorstops`, `dashes`     | How to display the track |
| `active_track`| `true`, `false`     | TBD |
| `marker`      | `none`, `pan-vertical`, `navigation`, etc. | Type of marker @ current position |
| `mask`        | `true`, `false`      | TBD |
| `scale`       | `none`, `colorstops` | Show scale as colorstops, or no scale |

Configuration of separate components like background, track, marker, etc.

```yaml title="Basic show config" linenums="1"
- type: progpath
    # Background config
    background:
      width: 5

    # Track config
    track:
      width: 3

    # Active Track config
    active_track:
      width: 3
      color:
        smooth: true      

    # Marker config
    marker:
      size: 12
      offset: 0   # offset sets the marker on/above/below the track
                  # seen from the center/inside of the tool
                  # A negative value like -36, sets the marker at
                  # the inside of the track
                  # 0 means centered on the track!
      color:      # A marker can have a color depending
                  # on the sensor value/colorstop
        animate: interior # outline, interior, both, none
        smooth: false
```

##:sak-sak-logo: Styling
The ProgPath tool has support for the following forms of styling:

| Method       | Support          | Description            |
| :----------- | :--------------: | :-------------------- |
| `classes`    | :material-check: | Using SAK or User defined class definitions  |
| `styles`     | :material-check: | Using inline SVG and CSS styles |

##:sak-sak-logo: ProgPath - Spiral

###Basic definition

| path_type    | variant          | Description            |
| :----------- | :--------------: | :-------------------- |
| `spiral`     | `arch_spiral`    | A true spiral from inside to outside  |
| `spiral`     | `arch_helix`     | A helix with configurable angle and offsets |

###Specific `spiral` and `arch_helix` definitions

```yaml title="Basic show config" linenums="1"
- type: progpath
    spiral:
      points: 360     # Number of points used to draw the spiral/helix
                      # More points give a smoother spiral/helix
      degrees: 1800   # Number of turns in degrees: 1800 = 5 turns
      helix:
        hw_ratio: 0
        iso_angle: 90
        offset_y: 40
        offset_x: 0
        adjust_height: true
```

| Field    | Value          | Description            |
| :----------- | :--------------: | :-------------------- |
| `points`     | number    | Number of points (or segments) used to draw the spiral/helix. More points give smoother curves. Too many will hamper performance. Experiment!  |
| `degrees`     | degrees     | Total number of turns for the spiral/helix. A full turn is 360 degrees. So 1800 is 5 turns. |

| Helix Fields    | Value          | Description            |
| :----------- | :--------------: | :-------------------- |
| `hw_ratio`     | number    | Defaults to 0. Determines the viewing angle. 0.5 gives you overlapping turns, and a view from above... |
| `iso_angle`    | degrees    | Default to 90 for vertical helix |
| `offset_y`     | number    | Vertical space between helix turns. |
| `offset_x`     | number    | Horizontal adjustment bottom of helix. A positive value will move the bottom side to the right, a negative value to the left. It determines the relative position of the bottom in relation to the top. |

###Examples with different hw_ratio, y and x

<div class="grid cards" markdown>

-   :sak-sak-logo:{ .lg .middle } __Helix, hw=0.5, y=10, x=0__

    ---

    ![Swiss Army Knife Progpath Tool Spiral/Helix](../assets/screenshots/sak-tool-progpath-spiral-helix-hw050-light.png#only-light)
    ![Swiss Army Knife Progpath Tool Spiral/Helix](../assets/screenshots/sak-tool-progpath-spiral-helix-hw050-dark.png#only-dark)


-   :sak-sak-logo:{ .lg .middle } __Helix, hw=0.75, y=10, x=0__

    ---

    ![Swiss Army Knife Progpath Tool Spiral/Helix](../assets/screenshots/sak-tool-progpath-spiral-helix-hw075-light.png#only-light)
    ![Swiss Army Knife Progpath Tool Spiral/Helix](../assets/screenshots/sak-tool-progpath-spiral-helix-hw075-dark.png#only-dark)


-   :sak-sak-logo:{ .lg .middle } __Helix, hw=0.25, y=20, x=0__

    ---

    ![Swiss Army Knife Progpath Tool Spiral/Helix](../assets/screenshots/sak-tool-progpath-spiral-helix-hw025-light.png#only-light)
    ![Swiss Army Knife Progpath Tool Spiral/Helix](../assets/screenshots/sak-tool-progpath-spiral-helix-hw025-dark.png#only-dark)


-   :sak-sak-logo:{ .lg .middle } __Helix, hw=0, y=40, x=10__

    ---

    ![Swiss Army Knife Progpath Tool Spiral/Helix](../assets/screenshots/sak-tool-progpath-spiral-helix-hw0x10-light.png#only-light)
    ![Swiss Army Knife Progpath Tool Spiral/Helix](../assets/screenshots/sak-tool-progpath-spiral-helix-hw0x10-dark.png#only-dark)


</div>


##:sak-sak-logo: ProgPath - Line

###Basic definition

| path_type    | variant          | Description            |
| :----------- | :--------------: | :-------------------- |
| `line`     | none    | A line is a line... |

###Specific `line`

```yaml title="Basic show config" linenums="1"
- type: progpath
  progpath:
    show:
      path_type: line
      viz:
        linecap: round_start_end # butt, round_start_end, butt_start_end
      background: true
      track: colorstops #dashes
      marker: none #pan-vertical #navigation
      active_track: false
      mask: true
      scale: colorstops
```

And then the line and scale config:
```yaml title="Line and Scale config" linenums="1"
- type: progpath
  progpath:
    scale:
      width: 3
      offset: -10 # Negative value means: below line graph
    line:
      margin:
        left: 5
        right: 5
```

##:sak-sak-logo: ProgPath - Circle

###Basic definition

| path_type    | variant          | Description            |
| :----------- | :--------------: | :-------------------- |
| `circle`     | none    | A circle is a circle... |

###Specific `circle`

```yaml title="Basic show config" linenums="1"
- type: progpath
  progpath:
    show:
      path_type: circle
      viz:
        linecap: round_start_end                        
      background: false
      track: none
      marker: sak-clock-hand-ring-small # Specific hand!!
      active_track: false
      mask: true
      scale: colorstops
```

And then the circle, scale and marker definitions:
```yaml title="Circle, Scale and Marker config" linenums="1"
- type: progpath
  progpath:
    circle:
      start_angle: 100
      stop_angle: 260
      direction: ccw      # Counter clock wise
    scale:
      width: 24
      offset: -20
    track:
      width: 5
    marker:
      size: 40
      offset: 0
      attach_to: center # or circumference
      color:
        animate: none
        smooth: true      
```

##:sak-sak-logo: ProgPath - Rectangle

###Basic definition

| path_type    | variant          | Description            |
| :----------- | :--------------: | :-------------------- |
| `rectangle`     | none    | A rectangle is a rectangle... |

###Specific `rectangle`

```yaml title="Basic show config" linenums="1"
- type: progpath
  progpath:
    show:
      path_type: rectangle
      viz:
        linecap: round_start_end                         
      background: true
      track: colorstops #dashes none
      marker: navigation
      active_track: false
      mask: false
```

###Example card and definition

![Swiss Army Knife Progpath Tool Rectangle](../assets/screenshots/sak-tool-progpath-rectangle1-light.png#only-light)
![Swiss Army Knife Progpath Tool Rectangle](../assets/screenshots/sak-tool-progpath-rectangle1-dark.png#only-dark)

??? Info "Full definition of example card"
    ```yaml linenums="1"
    - type: 'custom:swiss-army-knife-card'
      entities:
        - entity: sensor.dsmr_reading_electricity_currently_delivered
          name: 'Electricity'
          area: 'House'
      dev:
        real: true
      layout:
        aspectratio: 2/1
        toolsets:
          # ==============================================================================
          - toolset: circle-with-icon
            position:
              cx: 100
              cy: 50
            tools:
              # ------------------------------------------------------------
              - type: progpath
                position:
                  cx: 50
                  cy: 50
                  width: 180
                  height: 80
                entity_index: 0
                progpath:
                  show:
                    path_type: rectangle
                    viz:
                      linecap: round_start_end                         
                    background: true
                    track: colorstops #dashes
                    marker: navigation
                    active_track: false #true
                    mask: false #true
                  rectangle:
                    start:
                      side: left
                      position: -30 # 30 below center of graph
                      d: cw         # clock-wise draw
                    stop:
                      side: top
                      position: 85 # 85 right of center of graph
                    radius:
                      tl: 10      # Top left = 10
                      tr: 0       # Top right
                      br: 0       # Bottom right
                      bl: 0       # Bottom left
                  background:
                    width: 8      # Background is wider than track
                  track:
                    width: 5
                  marker:
                    size: 12      # Size of marker
                    offset: -36   # Marker on inside of graph
                    color:
                      animate: both # outline, interior, both, none
                      smooth: true  # Use gradients for colorstops
                  colorstops:
                    template:
                      name: sak_colorstops_energy_4kw_v2
                      variables:
                        - sak_colorstops_gap: 1
                styles:
                  marker:
                    fill: none
                    stroke: var(--ha-card-background,var(--card-background-color,#fff))
                    stroke-width: 0.4em
                    stroke-linejoin: round    # Use smooth edges for
                    stroke-linecap: round     # ..the navigation marker
                    scale: 0.7 1              # Adjust marker size in width/height
                    transform-origin: center  # Scale from center of marker

              # ------------------------------------------------------------
              - type: icon
                position:
                  cx: 50
                  cy: 32.5
                  align: center
                  icon_size: 20
                entity_index: 0

              # ------------------------------------------------------------
              - type: state
                position:
                  cx: 50
                  cy: 52.5
                entity_indexes:
                  - entity_index: 0
                show:
                  uom: bottom
                styles:
                  tool:
                  state:
                    text-anchor: middle
                    font-size: 16em
                    font-weight: 600
                    # fill: var(--primary-background-color)
                    transition: opacity 0.5s linear
    ```          

--8<-- "docs/tools/default-haptics.md"

[github-releases]: https://github.com/amoebelabs/swiss-army-knife-card/releases/

[Spiral Usage]: #progpath-spiral
[Line Usage]: #progpath-line
[Circle Usage]: #progpath-circle
[Rectangle Usage]: #progpath-rectangle
