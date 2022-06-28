---
template: main.html
title: "Functional Cards: Power Outlet Sensor"
description: Example of functional card, Power Outlet sensor.
hide:
  toc
tags:
  - Design
  - Functional Card
---

![Swiss Army Knife Functional Card Power Outlet D06 Light]

<!-- GT/GL -->
##:sak-sak-logo: Description

####Card:


##:sak-sak-logo: YAML Definition

??? Info "Full definition of card"
    ```yaml
            - type: 'custom:swiss-army-knife-card'
              entities:
                - entity: sensor.kitchen_group_energy_power
                  name: 'Kitchen'
                - entity: sensor.kitchen_group_energy_power
                  secondary_info: last_changed
                  format: relative
              # Define aspect ratio
              aspectratio: 3/1                          # Card is 300x100 grid

              layout:
                toolsets:
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
                        styles:
                          icon:
                            # fill: var(--primary-background-color)
                            opacity: 0.8
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
                            opacity: 0.5
                        
                  # ================================================================
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
                        entity_index: 1
                        show:
                          uom: none
                        styles:
                          state:
                            text-anchor: middle
                            font-size: 14em
                            font-weight: 500

                  # ================================================================
                  - toolset: line1
                    position:
                      cx: 200                           # On 1/3 of card width
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
                  - toolset: colomn-load
                    template:
                      name: toolset_tutorial_02_part1
                      variables:
                        - var_entity_index: 0
                        - var_toolset_position_cx: 250
                        - var_segarc_scale_max: 200
                  # # ================================================================
                  # - toolset: switch
                    # position:
                      # cx: 250                           # On 1/3 of card width
                      # cy: 50
                      # scale: 3
                    # tools:
                      # # ------------------------------------------------------------
                      # - type: switch
                        # position:
                          # cx: 50
                          # cy: 50
                        # entity_index: 0
                        # user_actions:
                          # tap_action:
                            # haptic: light
                            # actions:
                              # - action: call-service
                                # service: light.toggle

            ########################################################################

            - type: 'custom:swiss-army-knife-card'
              entities:
                - entity: sensor.washingmachine_energy_power
                  name: 'Air'
                - entity: sensor.washingmachine_energy_power
                  secondary_info: last_changed
                  format: relative
                - entity: switch.washingmachine_energy
                  name: 'Air'
              # Define aspect ratio
              aspectratio: 3/1                          # Card is 300x100 grid

              layout:
                toolsets:
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
                        styles:
                          icon:
                            # fill: var(--primary-background-color)
                            # animation: flash 3s linear infinite
                            opacity: 0.8
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
                            opacity: 0.5
                        
                  # ================================================================
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
                        entity_index: 1
                        show:
                          uom: none
                        styles:
                          state:
                            text-anchor: middle
                            font-size: 14em
                            font-weight: 500

                  # ================================================================
                  - toolset: line1
                    position:
                      cx: 200                           # On 1/3 of card width
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
                  - toolset: column-power
                    position:
                      cx: 250
                      cy: 50
                    tools:
                      # ------------------------------------------------------------------------
                      - type: state
                        position:
                          cx: 50
                          cy: 50
                        entity_index: 0
                        styles:
                          state:
                            text-anchor: middle
                            font-size: 20em
                            font-weight: 700
                            fill: var(--primary-text-color)
                          uom:
                            fill: var(--primary-text-color)
                            font-weight: 700

                      # ------------------------------------------------------------------------
                      - type: 'segarc'
                        position:
                          cx: 50
                          cy: 50
                          start_angle: -90                            # Arc clockwise from
                          end_angle: 90                               # -90 to 90 degrees
                          width: 6
                          radius: 40                                # Radius on 100x100 grid
                        entity_index: 0
                        scale:
                          min: 0
                          max: 200
                          width: 6
                          offset: 12
                        show:
                          scale: false                              # Disable scale of segarc
                          style: 'colorlist'
                        segments:
                          colorlist:
                            gap: 1                                  # Gap between segments
                            colors:
                              - var(--theme-sys-palette-primary50)  # Use 4 system palette
                              - var(--theme-sys-palette-primary45)  # colors that adhere
                              - var(--theme-sys-palette-primary40)  # to light and dark
                              - var(--theme-sys-palette-primary35)  # theme modes!
                        styles:
                          foreground:
                            fill: darkgrey
                          background:
                            fill: var(--theme-sys-elevation-surface-neutral4)
                            opacity: 1

                  # ================================================================
                  - toolset: switch
                    position:
                      cx: 250                           # On 1/3 of card width
                      cy: 80
                      scale: 3
                    tools:
                      # ------------------------------------------------------------
                      - type: switch
                        position:
                          cx: 50
                          cy: 50
                        entity_index: 2
                        user_actions:
                          tap_action:
                            haptic: light
                            actions:
                              - action: call-service
                                service: switch.toggle

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
[Swiss Army Knife Functional Card AQI Sensor D06 Light]: ../assets/screenshots/sak-functional-card-12-full-width-environment-sensor-theme-d06-light.png
[Swiss Army Knife Functional Card Binary Sensor D06 Light]: ../assets/screenshots/sak-functional-card-12-half-width-binary-sensor-theme-d06-light.png


<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->

[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[ham3-url]: https://material3-themes-manual.amoebelabs.com/
[ham3-c12-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-c12-magenta/