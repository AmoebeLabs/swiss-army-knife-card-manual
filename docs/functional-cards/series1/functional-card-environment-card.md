---
template: main.html
title: "Functional Cards: Environment Sensor"
description: Example of functional card, Environment sensor.
hideno:
  toc
tags:
  - Design
  - Functional Card
  - Environment Card
---
<!-- GT/GL -->
##:sak-sak-logo: Visualization

![Swiss Army Knife Functional Card Environment Sensor D06 Light](../../assets/screenshots/sak-functional-card-12-environment-sensor-theme-d06-light.png#only-light){width="600"}
![Swiss Army Knife Functional Card Environment Sensor D06 Dark](../../assets/screenshots/sak-functional-card-12-environment-sensor-theme-d06-dark.png#only-dark){width="600"}

This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]

| Description| Aspect Ratio| Target Size |
|-|-|-|
| A card that displays some environment entities, including battery and link quality | 6/1 | Grid with 1 column |

| SAK Tool| Used for |
|-|-|
| Circle | The half circle, as the left part of the circle is cutoff by the card.|
| Icon | Entity Icon. |
| Name | Name of Entity|
| State | Value of secondary info|
| Line | Vertical Line as separator |
| First | Temperature with icon, state and segemented arc |
| Second | Humidity with icon, state and segemented arc |
| Third | Pressure with icon, state and segemented arc |
| Battery | Battery with icon, state and segmented arc |
| Linkquality | Linkquality with icon, state and segmented arc |

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
    - entity: sensor.bathroom_2f_iaq_temperature
      name: 'Environment'
      icon: mdi:home-thermometer-outline
      decimals: 1
    - entity: sensor.bathroom_2f_iaq_humidity
      decimals: 0
    - entity: sensor.bathroom_2f_iaq_pressure
      decimals: 0
    - entity: sensor.bathroom_2f_iaq_battery
      decimals: 0
    - entity: sensor.bathroom_2f_iaq_linkquality
      decimals: 0
    - entity: sensor.bathroom_2f_iaq_temperature
      secondary_info: last_changed
      format: relative
  layout:
    template:
      name: sak_layout_fce_environment
```

| Data | Default| Required | Description |
|-|-|-|-|
| entities |  | :material-check: | The six required entities |

##:sak-sak-logo: YAML Template Definition
[:octicons-tag-24: 1.0.0-rc.3][github-releases]
??? Info "Full definition of layout template"  
    ```yaml linenums="1"
    sak_layout_fce_environment:
      template:
        type: layout
        defaults: 
          - var_entity_index: 0
      layout:
        aspectratio: 6/1                          # Card is 600x100 grid
        styles:
          card:
        toolsets:
          # ================================================================
          - toolset: line1
            position:
              cx: 200
              cy: 50
            tools:
              # ------------------------------------------------------------
              - type: line
                position:
                  cx: 50
                  cy: 50
                  orientation: vertical
                  length: 50
                styles:
                  line:
                    fill: var(--primary-text-color)
                    opacity: 0.5

          # ================================================================
          - toolset: line2
            position:
              cx: 500
              cy: 50
            tools:
              # ------------------------------------------------------------
              - type: line
                position:
                  cx: 50
                  cy: 50
                  orientation: vertical
                  length: 50
                styles:
                  line:
                    fill: var(--primary-text-color)
                    opacity: 0.5


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
                  radius: 48
                styles:
                  circle:
                    fill: none
                    stroke: var(--theme-sys-color-secondary)
                    stroke-width: 3em
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
                  icon_size: 30
                entity_index: 0
                styles:
                  icon:
                    fill: var(--theme-sys-color-secondary)
                  
          - toolset: column-name
            position:
              cx: 120
              cy: 50
            tools:
              # ------------------------------------------------------------
              - type: name
                position:
                  cx: 50
                  cy: 50
                entity_index: 0
                styles:
                  name:
                    text-anchor: middle
                    font-size: 25em
                    font-weight: 700
                    opacity: 1

              # ------------------------------------------------------------
              - type: state
                position:
                  cx: 50
                  cy: 80
                entity_index: 5
                show:
                  uom: none
                styles:
                  state:
                    text-anchor: middle
                    font-size: 14em
                    font-weight: 500
                    opacity: 0.7

          # ================================================================
          - toolset: column-temperature
            position:
              cx: 260
              cy: 50
            tools:
              # ------------------------------------------------------------
              - type: icon
                position:
                  cx: 50
                  cy: 30
                  align: center
                  icon_size: 25
                entity_index: 5
                styles:
                  icon:
                    fill: var(--theme-sys-color-secondary)

              # ------------------------------------------------------------
              - type: state
                position:
                  cx: 50
                  cy: 55
                entity_index: 0
                show:
                  uom: bottom
                styles:
                  state:
                    text-anchor: middle
                    font-size: 20em
                    font-weight: 700
                    fill: var(--primary-text-color)
                  uom:
                    fill: var(--primary-text-color)
                    font-weight: 700

              # ------------------------------------------------------------ 
              - type: 'segarc'
                id: 0
                position:
                  cx: 50
                  cy: 50
                  start_angle: 0
                  end_angle: 360
                  width: 6
                  radius: 40
                entity_index: 0
                scale:
                  min: 15
                  max: 25
                  width: 6
                  offset: 12
                show:
                  scale: false
                  style: 'colorlist'
                segments:
                  colorlist:
                    gap: 1
                    colors:
                      - var(--theme-sys-palette-primary50)
                styles:
                  foreground:
                    fill: darkgrey
                  background:
                    fill: var(--theme-sys-elevation-surface-neutral4)
                    opacity: 1

          # ================================================================
          - toolset: column-humidity
            position:
              cx: 355
              cy: 50
            tools:
              # ------------------------------------------------------------
              - type: icon
                position:
                  cx: 50
                  cy: 30
                  align: center
                  icon_size: 25
                entity_index: 1
                styles:
                  icon:
                    fill: var(--theme-sys-color-secondary)

              # ------------------------------------------------------------
              - type: state
                position:
                  cx: 50
                  cy: 55
                entity_index: 1
                show:
                  uom: bottom
                styles:
                  state:
                    text-anchor: middle
                    font-size: 20em
                    font-weight: 700
                    fill: var(--primary-text-color)
                  uom:
                    fill: var(--primary-text-color)
                    font-weight: 700

              # ------------------------------------------------------------ 
              - type: 'segarc'
                id: 0
                position:
                  cx: 50
                  cy: 50
                  start_angle: 0
                  end_angle: 360
                  width: 6
                  radius: 40
                entity_index: 1
                scale:
                  min: 0
                  max: 100
                  width: 6
                  offset: 12
                show:
                  scale: false
                  style: 'colorlist'
                segments:
                  colorlist:
                    gap: 1
                    colors:
                      - var(--theme-sys-palette-primary45)
                styles:
                  foreground:
                    fill: darkgrey
                  background:
                    fill: var(--theme-sys-elevation-surface-neutral4)
                    opacity: 1

          # ================================================================
          - toolset: column-pressure
            position:
              cx: 450
              cy: 50
            tools:
              # ------------------------------------------------------------
              - type: icon
                position:
                  cx: 50
                  cy: 30
                  align: center
                  icon_size: 25
                entity_index: 2
                styles:
                  icon:
                    fill: var(--theme-sys-color-secondary)

              # ------------------------------------------------------------
              - type: state
                position:
                  cx: 50
                  cy: 55
                entity_index: 2
                show:
                  uom: bottom
                styles:
                  state:
                    text-anchor: middle
                    font-size: 20em
                    font-weight: 700
                    fill: var(--primary-text-color)
                  uom:
                    fill: var(--primary-text-color)
                    font-weight: 700

              # ------------------------------------------------------------ 
              - type: 'segarc'
                id: 0
                position:
                  cx: 50
                  cy: 50
                  start_angle: 0
                  end_angle: 360
                  width: 6
                  radius: 40
                entity_index: 2
                scale:
                  min: 950
                  max: 1050
                  width: 6
                  offset: 12
                show:
                  scale: false
                  style: 'colorlist'
                segments:
                  colorlist:
                    gap: 1
                    colors:
                      - var(--theme-sys-palette-primary40)
                styles:
                  foreground:
                    fill: darkgrey
                  background:
                    fill: var(--theme-sys-elevation-surface-neutral4)
                    opacity: 1

          # ================================================================
          - toolset: column-battery
            position:
              cx: 540
              cy: 50
            tools:
              # ------------------------------------------------------------
              - type: icon
                position:
                  cx: 30
                  cy: 30
                  align: right
                  icon_size: 25
                entity_index: 3
                styles:
                  icon:
                    fill: var(--theme-sys-color-tertiary)
                    opacity: 0.8

              # ------------------------------------------------------------
              - type: state
                position:
                  cx: 70
                  cy: 30
                entity_index: 3
                show:
                  uom: none
                styles:
                  state:
                    text-anchor: middle
                    font-size: 15em
                    font-weight: 700
                    fill: var(--primary-text-color)
                  uom:
                    fill: var(--primary-text-color)
                    font-weight: 700

              # ------------------------------------------------------------ 
              - type: 'segarc'
                id: 0
                position:
                  cx: 70
                  cy: 30
                  start_angle: 0
                  end_angle: 360
                  width: 3
                  radius: 18
                entity_index: 3
                scale:
                  min: 0
                  max: 100
                  width: 6
                  offset: 12
                show:
                  scale: false
                  style: 'colorlist'
                segments:
                  colorlist:
                    gap: 1
                    colors:
                      - var(--theme-sys-palette-tertiary45)
                styles:
                  foreground:
                    fill: darkgrey
                  background:
                    fill: var(--theme-sys-elevation-surface-neutral4)
                    opacity: 1

          # ================================================================
          - toolset: column-linkquality
            position:
              cx: 540
              cy: 50
            tools:
              # ------------------------------------------------------------
              - type: icon
                position:
                  cx: 30
                  cy: 70
                  align: right
                  icon_size: 25
                entity_index: 4
                styles:
                  icon:
                    fill: var(--theme-sys-color-tertiary)
                    opacity: 0.8

              # ------------------------------------------------------------
              - type: state
                position:
                  cx: 70
                  cy: 70
                entity_index: 4
                show:
                  uom: none
                styles:
                  state:
                    text-anchor: middle
                    font-size: 15em
                    font-weight: 700
                    fill: var(--primary-text-color)
                  uom:
                    fill: var(--primary-text-color)
                    font-weight: 700

              # ------------------------------------------------------------ 
              - type: 'segarc'
                id: 0
                position:
                  cx: 70
                  cy: 70
                  start_angle: 0
                  end_angle: 360
                  width: 3
                  radius: 18
                entity_index: 4
                scale:
                  min: 0
                  max: 100
                  width: 6
                  offset: 12
                show:
                  scale: false
                  style: 'colorlist'
                segments:
                  colorlist:
                    gap: 1
                    colors:
                      - var(--theme-sys-palette-tertiary45)
                styles:
                  foreground:
                    fill: darkgrey
                  background:
                    fill: var(--theme-sys-elevation-surface-neutral4)
                    opacity: 1
    ```

<!-- Image references -->

[AmoebeLabs Swiss Army Knife Custom Card Example 12]: ../assets/screenshots/sak-example-12.png
[AmoebeLabs Swiss Army Knife Custom Card Example 12 Light - Wide cards]: ../assets/screenshots/sak-example-12-m3-d06-light.png "Swiss Army Knife Example 12 - Wide cards, light theme"
[AmoebeLabs Swiss Army Knife Custom Card Example 12 Dark - Wide cards]: ../assets/screenshots/sak-example-12-m3-d06-dark.png "Swiss Army Knife Example 12 - Wide cards, dark theme"
[AmoebeLabs Swiss Army Knife Custom Card Example 12 Cards]: ../assets/screenshots/swiss-army-knife-example-12c-800x800.gif

[AmoebeLabs Swiss Army Knife Example 12 Alert Icons]: ../assets/screenshots/swiss-army-knife-example-12-alert-icons.png
[AmoebeLabs Swiss Army Knife Example 12 D06 Light]: ../assets/screenshots/swiss-army-knife-example-12d-d06-light.png
[AmoebeLabs Swiss Army Knife Example 12 D06 Dark On]: ../assets/screenshots/swiss-army-knife-example-12d-d06-dark-on.png
[AmoebeLabs Swiss Army Knife Example 12 D06 Dark Off]: ../assets/screenshots/swiss-army-knife-example-12d-d06-dark-off.png

[AmoebeLabs Swiss Army Knife Example 12 D07 Light]: ../assets/screenshots/swiss-army-knife-example-12d-d07-light.png
[AmoebeLabs Swiss Army Knife Example 12 C11 Light]: ../assets/screenshots/swiss-army-knife-example-12d-c11-light.png

[Swiss Army Knife Functional Card AirVisual D06 Light]: ../assets/screenshots/sak-functional-card-12-full-width-airvisual-theme-d06-light.png

[Swiss Army Knife Functional Card Binary Sensor Alert D06 Dark On]: ../assets/screenshots/sak-functional-card-12-third-width-binary-sensor-alert-theme-d06-dark-on.png
[Swiss Army Knife Functional Card Binary Sensor Alert D06 Light On]: ../assets/screenshots/sak-functional-card-12-third-width-binary-sensor-alert-theme-d06-light-on.png
[Swiss Army Knife Functional Card Binary Sensor Alert D06 Light Off]: ../assets/screenshots/sak-functional-card-12-third-width-binary-sensor-alert-theme-d06-light-off.png
[Swiss Army Knife Functional Card Switch D06 Light]: ../assets/screenshots/sak-functional-card-12-half-width-switch-theme-d06-light.png
[Swiss Army Knife Functional Card Power Outlet D06 Light]: ../assets/screenshots/sak-functional-card-12-half-width-power-outlet-theme-d06-light.png
[Swiss Army Knife Functional Card Binary Sensor D06 Light]: ../assets/screenshots/sak-functional-card-12-half-width-binary-sensor-theme-d06-light.png
[Swiss Army Knife Functional Card Server Statistics D06 Light]: ../assets/screenshots/sak-functional-card-12-full-width-server-statistics-theme-d06-light.png

[Swiss Army Knife Functional Card Environment Sensor D06 Light]: ../assets/screenshots/sak-functional-card-12-full-width-environment-sensor-theme-d06-light.png
[Swiss Army Knife Functional Card Environment Sensor D06 Dark]: ../assets/screenshots/sak-functional-card-12-full-width-environment-sensor-theme-d06-dark.png

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->

[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[ham3-url]: https://material3-themes-manual.amoebelabs.com/
[ham3-c12-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-c12-magenta/
[github-releases]: https://github.com/amoebelabs/swiss-army-knife-card/releases/
