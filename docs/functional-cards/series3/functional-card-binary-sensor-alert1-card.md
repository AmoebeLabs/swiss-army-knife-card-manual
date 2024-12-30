---
template: main.html
title: "Functional Cards Series 3: Binary Sensor with Alert Card #1"
description: "Example of functional card, Binary Sensor with Alert #1"
hideno:
  toc
tags:
  - Design
  - Functional Card - Series 3
  - Binary Card with Alert
---
<!-- GT/GL -->
!!! warning "Series 3 will be released in 2025!"

##:sak-sak-logo: Visualization

![Swiss Army Knife Functional Card Binary Sensor With Alert1 D06 Light Off](../../assets/screenshots/sak-functional-card-s3-binary-sensor-alert1-theme-d06-light-off.png){width="300"}
![Swiss Army Knife Functional Card Binary Sensor With Alert1 D06 Light On](../../assets/screenshots/sak-functional-card-s3-binary-sensor-alert1-theme-d06-light-on.png){width="300"}

This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]

| Description| Aspect Ratio| Target Size |
|-|-|-|
| A card that shows the state of a binary sensor, including an icon as an alert. Card includes battery and link levels, the time of the last state change, and a history chart (per hour of current day) that shows when alerts where detected.<br><br>Nice for doors, windows and occupancy alerts.| 1/1 | Grid with 2 columns |


##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Card | All tools connected to an entity do show by default the "more-info" dialog once clicked |

##:sak-sak-logo: Usage
[:octicons-tag-24: 4.0.1][github-releases]

!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: binary_sensor.livingroom_movement_occupancy
      area: Woonkamer
      name: Beweging
    - entity: binary_sensor.livingroom_movement_occupancy
      secondary_info: last_changed
      format: time-24h_date-short
    - entity: sensor.livingroom_movement_battery
      decimals: 0
    - entity: sensor.livingroom_movement_linkquality
      decimals: 0
  layout:
    template:
      name: sak_layout_fce2_binary1
```

| Data | Default| Required | Description |
|-|-|-|-|
| entities |  | :material-check: | The four required entities |

##:sak-sak-logo: YAML Template Definition
[:octicons-tag-24: 4.0.1][github-releases]
??? Info "Full definition of layout template"  
    ```yaml linenums="1"
    sak_layout_fce2_binary1:
      template:
        type: layout
        defaults: 
          - sak_layout_binary_icon_color: var(--theme-sys-color-primary)
          - sak_layout_binary_icon_color_on: var(--theme-sys-color-error #var(--theme-ref-palette-error50) #var(--theme-sys-color-error-container)
          - sak_layout_binary_icon_animation: flash # none, flash, spin
          - sak_layout_binary_history_color_on: var(--theme-sys-color-error) #var(--theme-sys-color-primary)
          - sak_layout_binary_history_disabled: false
          - sak_layout_battery_colorstops_template: sak_colorstops_battery_level
          - sak_layout_sensor_icon_style: colorstops

      layout:
        aspectratio: 1/1
        toolsets:
          # ==============================================================================
          - toolset: circle-with-icon
            position:
              cx: 20
              cy: 20
            tools:
              # ------------------------------------------------------------
              - type: circle
                position:
                  cx: 50
                  cy: 50
                  radius: 12.5
                entity_index: 0
                animations:
                  - state: 'on'
                    styles:
                      circle:
                        stroke: var(--theme-sys-color-error)
                  - state: 'off'
                    styles:
                      circle:
                        # stroke: var(--theme-sys-elevation-surface-neutral10)
                        stroke: '[[sak_layout_binary_icon_color]]'
                styles:
                  circle:
                    stroke-width: 2em
                    # stroke: var(--theme-sys-elevation-surface-neutral10)
                    stroke: '[[sak_layout_binary_icon_color]]'
                    fill: var(--primary-background-color)

              # ------------------------------------------------------------
              - type: icon
                position:
                  cx: 50
                  cy: 50
                  align: center
                  icon_size: 15
                entity_index: 0
                # Define template variable for this icon tool, so it can be
                # processed by a piece of JavaScript ;-)
                # The template engine will replace the variable!
                variables:
                  sak_layout_binary_icon_animation : '[[sak_layout_binary_icon_animation]]'
                animations:
                  - state: 'on'
                    styles:
                      icon:
                        # Use template variable as the source to spin, flash or nothing
                        # the config JavaScript parameter is this tools config...
                        animation: >
                          [[[ if (tool_config.variables.sak_layout_binary_icon_animation === "spin") return "spin 3s linear infinite";
                              if (tool_config.variables.sak_layout_binary_icon_animation === "flash") return "flash 2s ease-in-out 5";
                              return "";
                          ]]]
                        fill: '[[sak_layout_binary_icon_color_on]]'
                  - state: 'off'
                    styles:
                      icon:
                        fill: '[[sak_layout_binary_icon_color]]'
                styles:
                  icon:
                    fill: '[[sak_layout_binary_icon_color]]'

          # ================================================================
          - toolset: colomn-battery
            position:
              cx: 87.5
              cy: 12.5
            tools:
              # ------------------------------------------------------------
              - type: icon
                position: &icon_pos
                  cx: 50
                  cy: 50
                  align: right
                  icon_size: 10
                entity_index: 2
                styles: &icon_styles
                  icon:
                    fill: var(--primary-text-color)
                    opacity: 1
                show:
                  style: '[[sak_layout_sensor_icon_style]]'
                colorlist:
                  colors:
                    - var(--theme-sys-color-secondary)
                colorstops:
                  template:
                    name: '[[sak_layout_battery_colorstops_template]]'

          # ================================================================
          - toolset: colomn-linkquality
            position:
              cx: 77.5
              cy: 12.5
            tools:
              # ------------------------------------------------------------
              - type: icon
                position: *icon_pos
                entity_index: 3
                styles: *icon_styles
                show:
                  style: '[[sak_layout_sensor_icon_style]]'
                colorlist:
                  colors:
                    - var(--theme-sys-color-secondary)
                colorstops:
                  template:
                    name: '[[sak_layout_battery_colorstops_template]]'

          # ==============================================================================
          - toolset: area-name
            position:
              cx: 7.5
              cy: 45
            tools:
              # ------------------------------------------------------------
              - type: area
                position:
                  cx: 50
                  cy: 50
                entity_index: 0
                show:
                  ellipsis: 12
                styles: 
                  area: 
                    text-anchor: start
                    font-size: 12em
                    font-weight: 700
                    opacity: 1
              # ------------------------------------------------------------
              - type: name
                position:
                  cx: 50
                  cy: 62.5
                entity_index: 0
                show:
                  ellipsis: 12
                styles: 
                  name: 
                    text-anchor: start
                    font-size: 10em
                    font-weight: 400
                    opacity: 0.6

          # ==============================================================================
          - toolset: alert-time-boxes
            position:
              cx: 50
              cy: 75
            tools:
              # ------------------------------------------------------------
              - type: rectex
                position:
                  cx: 20
                  cy: 50
                  width: 25
                  height: 18
                  radius:
                    left: 5
                    right: 0
                entity_index: 0
                animations:
                  - state: 'on'
                    styles:
                      rectex:
                        fill: var(--theme-sys-color-error)
                  - state: 'off'
                    styles:
                      rectex:
                        fill: var(--theme-sys-elevation-surface-neutral10)
                styles:
                  rectex:
                    fill: var(--theme-sys-elevation-surface-neutral10)
              # ------------------------------------------------------------
              - type: icon
                position:
                  cx: 20
                  cy: 50
                  align: center
                  icon_size: 12.5
                entity_index: 0
                animations:
                  - state: 'on'
                    icon: mdi:clock-alert-outline
                    styles:
                      icon:
                        fill: var(--theme-sys-color-on-error)
                  - state: 'off'
                    icon: mdi:clock-check-outline
                    styles:
                      icon:
                        fill: var(--primary-background-color)
                styles:
                  icon:
                    fill: '[[sak_layout_binary_icon_color]]'
              # ------------------------------------------------------------
              - type: rectex
                position:
                  cx: 64
                  cy: 50
                  width: 57
                  height: 18
                  radius:
                    left: 0
                    right: 5
                entity_index: 0
                animations:
                  - state: 'on'
                    styles:
                      rectex:
                        fill: var(--theme-sys-elevation-surface-error4)
                  - state: 'off'
                    styles:
                      rectex:
                        fill: var(--theme-sys-elevation-surface-neutral4)
                styles:
                  rectex:
                    fill: var(--theme-sys-color-on-error)

              # ------------------------------------------------------------
              - type: state
                position:
                  cx: 64 #92
                  cy: 50
                # entity_index: 1
                entity_indexes:
                  - entity_index: 1
                  - entity_index: 0
                animations:
                  - state: 'on'
                    entity_index: 0
                    styles:
                      state:
                        fill: var(--theme-sys-color-error)
                  - state: 'off'
                    entity_index: 0
                    styles:
                      state:
                        fill: var(--theme-sys-elevation-surface-neutral10)
                styles: 
                  state:
                    # fill: var(--theme-sys-color-error-container)
                    fill: var(--theme-sys-color-error)
                    font-size: 12em
                    text-anchor: middle #end
                    # alignment-baseline: middle
                    font-weight: 700
                  uom:
                    # fill: var(--theme-sys-color-error-container)
                    fill: var(--theme-sys-color-error)
                    alignment-baseline: hanging
                    font-weight: 600

          # ==============================================================================
          - toolset: alert-history
            position:
              cx: 50
              cy: 92.5
            tools:
              # ------------------------------------------------------------
              - type: sparkline
                # When disabled, SAK will not use this tool
                disabled: '[[sak_layout_binary_history_disabled]]'
                entity_index: 0
                position:
                  cx: 50
                  cy: 50
                  width: 85
                  height: 3
                  margin: 0
                period:
                  calendar:
                    period: day
                    offset: 0
                    duration:
                      hour: 24
                    bins:
                      per_hour: 1
                sparkline:
                  show:
                    chart_type: barcode
                    # chart_variant: stalagmites
                  state_map:
                    template:
                      name: sak_statemap_binary
                  # State value settings
                  # - set agg to max to see the binary changes
                  # - set lower_bound to -1 to offset 'off' state
                  #   the barcode will start wider now, instead of at minimum width
                  # - set upper_bound to 1 ('on') to fix upper scale
                  state_values:
                    aggregate_func: max
                    lower_bound: -1
                    upper_bound: 1
                  barcode:
                    column_spacing: 3
                    line_width: 0.1
                  colorstops_transition: hard
                  colorstops:
                    colors:
                      - value: 0
                        color: var(--theme-sys-elevation-surface-neutral10)
                      - value: 1
                        color: '[[sak_layout_binary_history_color_on]]'
                  styles: 
                    tool: 
                      opacity: 1
                    barcode_graph:
                      rx: 5
                      ry: 5
    ```

<!-- Image references -->

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[github-releases]: https://github.com/amoebelabs/swiss-army-knife-card/releases/
