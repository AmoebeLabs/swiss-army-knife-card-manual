---
template: main.html
title: "Functional Cards: AirVisual Sensor"
description: Example of functional card, AirVisual sensor.
hideno:
  toc
tags:
  - Design
  - Functional Card
  - AirVisual Card
---
<!-- GT/GL -->
##:sak-sak-logo: Visualization

![Swiss Army Knife Functional AirVisual D06 Light](../assets/screenshots/sak-functional-card-12-airvisual-theme-d06-light.png){width="600"}
<br>![Swiss Army Knife Functional AirVisual D06 Dark](../assets/screenshots/sak-functional-card-12-airvisual-theme-d06-dark.png){width="600"}

This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]

| Description| Aspectratio| Target Size |
|-|-|-|
| A card that displays data from AirVisual. <br>Both the current data, as a 24 hour history is shown | 6/1 | Grid with 1 column |

| SAK Tool| Used for |
|-|-|
| Circle | The half circle, as the left part of the circle is cutoff by the card. Circle is animated, state dependent|
| Icon | Entity Icon.
| Name | Name of Entity|
| State | Secondary Info of Entity|
| Line | Vertical line as separator|
| Icon | AirVisual state Icon. Animated, state dependent |
| State | AirVisual state value |
| SegArc | Segmented Arc showing the AirVisual state. The arc is configured as a very, very, very flag ellipse and using a tiny part of the ellipse to look like a line|
| Line | Vertical line as separator|
| Text | The "Last 24 hours" text|
| Bar | The 24 hour history|

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Card | All tools connected to an entity do show by default the "more-info" dialog once clicked |

##:sak-sak-logo: Usage (Not Yet Implemented)
If the below YAML example definition is encapsulated into a decluttering_template, its usage would be:

```yaml linenums="1"
- type: custom:decluttering-card
  template: sak_card_airvisual
  variables:
    - entity_quality: sensor.u_s_air_quality_index
    - entity_quality_name: 'Tha Moon'
    - entity_pollution: entity: sensor.u_s_air_pollution_level
```

In the future, SAK will support card templates, and usage would be (I hope) something like:


```yaml linenums="1"
- type: custom:swiss-army-knife-card
  template: sak_card_airvisual
  entities:
    - entity: sensor.u_s_air_quality_index
      name: 'Tha Moon'
    - entity: sensor.u_s_air_pollution_level
    - entity: sensor.u_s_air_quality_index
      secondary_info: last_changed
      format: relative
```

##:sak-sak-logo: YAML Example Definition

??? Info "Full definition of card"
    ```yaml linenums="1"
        - type: 'custom:swiss-army-knife-card'
          entities:
            - entity: sensor.u_s_air_quality_index
              name: 'Tha Moon'
            - entity: sensor.u_s_air_pollution_level
            - entity: sensor.u_s_air_quality_index
              secondary_info: last_changed
              format: relative

          # Define aspect ratio
          aspectratio: 6/1

          layout:
            styles:
              card:
              toolsets:
              
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
                  cx: 400
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
                        font-size: 20em
                        font-weight: 700
                  # ------------------------------------------------------------
                  - type: state
                    position:
                      cx: 50
                      cy: 80
                    entity_index: 2
                    show:
                      uom: none
                    styles:
                      state:
                        text-anchor: middle
                        font-size: 14em
                        font-weight: 500
                        opacity: 0.7

              - toolset: column-state
                position:
                  cx: 300
                  cy: 50
                tools:
                  # ------------------------------------------------------------
                  - type: icon
                    position:
                      cx: 25
                      cy: 25
                      align: end
                      icon_size: 30
                    entity_index: 1
                    styles:
                      icon:
                        fill: var(--theme-sys-color-secondary)
                  # ------------------------------------------------------------
                  - type: state
                    position:
                      cx: 50
                      cy: 25
                    entity_index: 0
                    styles:
                      state:
                        text-anchor: start
                        font-size: 25em
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
                      cy: 70
                      start_angle: 190
                      end_angle: 170
                      width: 8
                      radius_x: 405         # 20 degrees = 1/9 = 45*9 = 405
                      radius_y: 1
                    entity_index: 0
                    scale:
                      min: 0
                      max: 300
                      width: 6
                      offset: 12
                    show:
                      scale: true
                      style: 'colorstops'
                    segments:
                      colorstops:
                        gap: 0.1
                        colors:
                          0: '#A8E05F'
                          51: '#FDD74B'
                          101: '#FE9B57'
                          151: '#FE6A69'
                          201: '#A97ABC'
                          301: '#A87383'
                    styles:
                      foreground:
                        fill: darkgrey
                      background:
                        fill: var(--theme-sys-elevation-surface-neutral5)

              - toolset: column-history
                position:
                  cx: 500
                  cy: 50
                tools:
                  # ------------------------------------------------------------
                  - type: text
                    position:
                      orientation: vertical
                      cx: 50
                      cy: 20
                    text: "Last 24 hours"
                    styles:
                      text:
                        text-anchor: middle
                        font-size: 15em
                        font-weight: 700

                  # ------------------------------------------------------------
                  - type: bar
                    id: 1
                    entity_index: 0
                    position:
                      orientation: vertical
                      cx: 50
                      cy: 60
                      width: 150
                      height: 40
                      margin: 1
                    hours: 24
                    barhours: 1
                    show:
                      style: 'colorstops'
                    colorstops:
                      fill: true
                      colors:
                        0: '#A8E05F'
                        51: '#FDD74B'
                        101: '#FE9B57'
                        151: '#FE6A69'
                        201: '#A97ABC'
                        301: '#A87383'
                    styles:
                      bar:
                        stroke-linecap: square

    ```


<!-- Image references -->

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
