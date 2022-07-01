---
template: main.html
title: "Functional Cards: AirVisual Sensor"
description: Example of functional card, AirVisual sensor.
hide:
  toc
tags:
  - Design
  - Functional Card
---
<!-- GT/GL -->

![Swiss Army Knife Functional Card AirVisual D06 Light]
![Swiss Army Knife Functional Card AirVisual D06 Dark]

##:sak-sak-logo: Visualization

####Card:
  - First column:
      - Contains the 'half circle' design element
      - An icon that shows the entity
      - Name and Secondary Info
      - Vertical Line as separator
  - Second column:
      - Animated, state dependent AQI Icon
      - AQI state
      - Segmented Arc with colorstop
      - Vertical Line as separator
  - Third column:
      - Text "Last 24 hours"
      - 24 hour history
  
##:sak-sak-logo: Interaction
- All tools connected to an entity do show by default the "more-info" dialog once clicked.

##:sak-sak-logo: YAML Definition

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

##:sak-sak-logo: Usage
For use / re-use, use decluttering card etc.

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

[Swiss Army Knife Functional Card Binary Sensor Alert D06 Dark On]: ../assets/screenshots/sak-functional-card-12-third-width-binary-sensor-alert-theme-d06-dark-on.png
[Swiss Army Knife Functional Card Binary Sensor Alert D06 Light On]: ../assets/screenshots/sak-functional-card-12-third-width-binary-sensor-alert-theme-d06-light-on.png
[Swiss Army Knife Functional Card Binary Sensor Alert D06 Light Off]: ../assets/screenshots/sak-functional-card-12-third-width-binary-sensor-alert-theme-d06-light-off.png
[Swiss Army Knife Functional Card Switch D06 Light]: ../assets/screenshots/sak-functional-card-12-half-width-switch-theme-d06-light.png
[Swiss Army Knife Functional Card Power Outlet D06 Light]: ../assets/screenshots/sak-functional-card-12-half-width-power-outlet-theme-d06-light.png
[Swiss Army Knife Functional Card AQI Sensor D06 Light]: ../assets/screenshots/sak-functional-card-12-full-width-environment-sensor-theme-d06-light.png
[Swiss Army Knife Functional Card Binary Sensor D06 Light]: ../assets/screenshots/sak-functional-card-12-half-width-binary-sensor-theme-d06-light.png

[Swiss Army Knife Functional Card AirVisual D06 Light]: ../assets/screenshots/sak-functional-card-12-full-width-airvisual-theme-d06-light.png
[Swiss Army Knife Functional Card AirVisual D06 Dark]: ../assets/screenshots/sak-functional-card-12-full-width-airvisual-theme-d06-dark.png


<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->

[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[ham3-url]: https://material3-themes-manual.amoebelabs.com/
[ham3-c12-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-c12-magenta/