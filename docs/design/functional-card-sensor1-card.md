---
template: main.html
title: "Functional Cards: Sensor Card #1"
description: E"xample of functional card, sensor card #1"
hideno:
  toc
tags:
  - Design
  - Functional Card
  - Sensor Card
---
<!-- GT/GL -->
##:sak-sak-logo: Visualization

![Swiss Army Knife Functional Card Sensor1 D06 Light]( ../assets/screenshots/sak-functional-card-12-sensor1ab-theme-d06-light-variants.png){width="600"}
<br>![Swiss Army Knife Functional Card Sensor1 D06 Dark]( ../assets/screenshots/sak-functional-card-12-sensor1ab-theme-d06-dark-variants.png){width="600"}

This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]

!!! info "You see different variations of the same card. These are controlled by variable settings"

| Description| Aspect Ratio| Target Size |
|-|-|-|
| A card that displays a sensor value. Both using a segmented arc and as state| 4/1 | Grid with 2 columns |

| SAK Tool| Used for |
|-|-|
| Circle | The half circle, as the left part of the circle is cutoff by the card. Configurable colorstop|
| Icon | Entity Icon. Configurable colorstop |
| SegArc | Minimalistic implementation of segmented arc showing the sensors state. Configurable colorstop |
| Name / State | Name and Value of Entity for setting name above state = true |
| State / Name | Value and Name of Entity for setting name above state = false |
| State | Secondary Info of entity |
| Bar | 24 hour history, if history enabled through variable |

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Card | All tools connected to an entity do show by default the "more-info" dialog once clicked |

##:sak-sak-logo: Usage
[:octicons-tag-24: 1.0.0-rc.3][github-releases]

!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: sensor.dsmr_reading_electricity_currently_delivered
      name: 'Sensor #1-1'
  layout:
    template:
      name: sak_layout_fce_sensor1
      variables:
        - sak_layout_sensor_history_disabled: true
        - sak_layout_sensor_scale_max: 2

########################################################################

- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: sensor.dsmr_reading_electricity_currently_delivered
      name: 'Sensor #1-2'
  layout:
    template:
      name: sak_layout_fce_sensor1
      variables:
        - sak_layout_sensor_name_above_state: false
        - sak_layout_sensor_scale_max: 2
```

| Data | Default| Required | Description |
|-|-|-|-|
| entities |  | :material-check: | The single entity on the card |
| sak_layout_sensor_name_above_state | true | :material-close: | Determines order of these two: name/state or state/name. <br><br>Note that both versions are defined. The setting only disables one of them and enables the other! |
| sak_layout_sensor_history_disabled | false | :material-close: | Disable history tool |
| sak_layout_sensor_colorstops_template | colorstops_energy_2kw | :material-close: | Specify the colorstop template if you specified `colorstops` for one of the tools |
| sak_layout_sensor_scale_max | 2 | :material-close: | Scale max must align to given colorstop and/or sensor range! |
| sak_layout_sensor_circle_style | default | :material-close: | Can be either `default`, or `colorstops` |
| sak_layout_sensor_icon_style | default | :material-close: | Can be either `default`, or `colorstops` |
| sak_layout_sensor_segarc_style | colorlist | :material-close: | Can be either `colorlist`, or `colorstops` |

##:sak-sak-logo: YAML Template Definition
[:octicons-tag-24: 1.0.0-rc.3][github-releases]
??? Info "Full definition of card (variant 1a)"
    ```yaml linenums="1"
    sak_layout_fce_sensor1:
      template:
        type: layout
        defaults: 
          - sak_layout_sensor_name_above_state: true
          - sak_layout_sensor_history_disabled: false
          - sak_layout_sensor_circle_style: default
          - sak_layout_sensor_icon_style: default
          - sak_layout_sensor_segarc_style: colorlist
          - sak_layout_sensor_scale_max: 2
          - sak_layout_sensor_colorstops_template: colorstops_energy_2kw

      layout:
        aspectratio: 4/1
        toolsets:
          # ================================================================
          - toolset: half-circle
            position:
              cx: 0                             # Center on cards border 
              cy: 50
            tools:
              # ------------------------------------------------------------
              - type: circle
                position:
                  cx: 50
                  cy: 50
                  radius: 50
                show:
                  style: '[[sak_layout_sensor_circle_style]]'
                entity_index: 0
                colorstops:
                  template:
                    name: '[[sak_layout_sensor_colorstops_template]]'
                styles:
                  circle:
                    stroke: none
                    fill: var(--theme-sys-elevation-surface-neutral4)

              # ------------------------------------------------------------ 
              - type: 'segarc'
                id: 0
                position:
                  cx: 50
                  cy: 50
                  start_angle: 25
                  end_angle: 155
                  width: 4
                  radius: 58
                entity_index: 0
                scale:
                  min: 0
                  max: '[[sak_layout_sensor_scale_max]]'
                  width: 6
                  offset: 12
                show:
                  scale: false
                  style: '[[sak_layout_sensor_segarc_style]]'
                  lastcolor: true
                segments:
                  colorlist:
                    gap: 1
                    colors:
                      - var(--theme-sys-color-secondary)
                  colorstops:
                    template:
                      name: '[[sak_layout_sensor_colorstops_template]]'
                      variables:
                        - thegap: 2
                styles:
                  foreground:
                    fill: darkgrey
                  background:
                    fill: var(--theme-sys-color-secondary)
                    opacity: 0.5

          # ================================================================
          - toolset: column-icon
            position:
              cx: 25
              cy: 50
            tools:
              # ------------------------------------------------------------
              - type: icon
                position:
                  cx: 50
                  cy: 50
                  align: center
                  icon_size: 45
                entity_index: 0
                show:
                  style: '[[sak_layout_sensor_icon_style]]'
                colorlist:
                  colors:
                    - var(--theme-sys-color-secondary)
                colorstops:
                  template:
                    name: '[[sak_layout_sensor_colorstops_template]]'
                styles:
                  icon:
                    fill: var(--theme-sys-color-secondary)
                    opacity: 0.9
                
          # ================================================================
          - toolset: column-bar
            position:
              cx: 235                     # 400-70/2 + 70=235
              cy: 50
            tools:
              # ------------------------------------------------------------
              - type: bar
                id: 1
                disabled: '[[sak_layout_sensor_history_disabled]]'
                entity_index: 0
                position:
                  orientation: vertical
                  cx: 50
                  cy: 50
                  width: 330              # 400-70=330
                  height: 100
                  margin: 1
                hours: 24
                barhours: 1
                show:
                  style: 'minmaxgradient'
                minmaxgradient:
                  fill: true
                  colors:
                    min: var(--theme-sys-palette-secondary85)
                    max: var(--theme-sys-palette-secondary65)
                styles:
                  bar:
                    stroke-linecap: square
                    opacity: 0.25
                    
          # ================================================================
          - toolset: column-name
            position:
              cx: 70                # Left part = 75, so 75+(300-75)/2
              cy: 50
            tools:
              # Variant 1a, name above state...
              # The YAML parser can't interpret logical operators, so we
              # have to use JavaScript to do this...
              # ------------------------------------------------------------
              - type: name
                position:
                  cx: 50
                  cy: 37
                variables:
                  name_above_state: '[[sak_layout_sensor_name_above_state]]'
                disabled:  '[[[[ return !tool_config.variables.name_above_state; ]]]]'
                entity_index: 0
                styles:
                  name:
                    text-anchor: start
                    font-size: 30em
                    font-weight: 700
                    opacity: 1
              # ------------------------------------------------------------
              - type: state
                position:
                  cx: 50
                  cy: 70
                variables:
                  name_above_state: '[[sak_layout_sensor_name_above_state]]'
                disabled:  '[[[[ return !tool_config.variables.name_above_state; ]]]]'
                entity_index: 0
                styles:
                  state:
                    text-anchor: start
                    font-size: 26em
                    font-weight: 500
                    opacity: 0.7

              # Variant 1b, state above name...
              # ------------------------------------------------------------
              - type: state
                position:
                  cx: 50
                  cy: 37
                disabled: '[[sak_layout_sensor_name_above_state]]'
                entity_index: 0
                styles:
                  state:
                    text-anchor: start
                    font-size: 30em
                    font-weight: 700
                    opacity: 1
              # ------------------------------------------------------------
              - type: name
                position:
                  cx: 50
                  cy: 70
                disabled: '[[sak_layout_sensor_name_above_state]]'
                entity_index: 0
                styles:
                  name:
                    text-anchor: start
                    font-size: 26em
                    font-weight: 500
                    opacity: 0.7
    ```

<!-- Image references -->

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[github-releases]: https://github.com/amoebelabs/swiss-army-knife-card/releases/
