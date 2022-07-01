---
template: main.html
title: "Functional Cards: Environment Sensor"
description: Example of functional card, Environment sensor.
hide:
  toc
tags:
  - Design
  - Functional Card
---

![Swiss Army Knife Functional Card Environment Sensor D06 Light]
![Swiss Army Knife Functional Card Environment Sensor D06 Dark]

<!-- GT/GL -->
##:sak-sak-logo: Visualization

####Card:


##:sak-sak-logo: YAML Definition


??? Info "Full definition of card"
    ```yaml linenums="1"
            - type: 'custom:swiss-army-knife-card'
              entities:
                - entity: sensor.bathroom_2f_iaq_temperature
                  name: 'Bath #2'
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
                  - toolset: colomn-icon
                    position:
                      cx: 30
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
                      # ------------------------------------------------------------
                      - type: circle
                        position:
                          cx: 50
                          cy: 50
                          radius: 22
                        styles:
                          circle:
                            fill: none
                            stroke: var(--primary-text-color)
                            stroke-width: 3em
                            opacity: 1
                        
                  - toolset: colomn-name
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

                  # ================================================================
                  - toolset: colomn-temperature
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
                  - toolset: colomn-humidity
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
                  - toolset: colomn-pressure
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
                  - toolset: colomn-battery
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
                  - toolset: colomn-linkquality
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