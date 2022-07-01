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

##Three Cards with 3/1 aspect ratio:

<div style="max-width:800px;" markdown>
![Swiss Army Knife Functional Card Power Outlet D06 Light Off]
![Swiss Army Knife Functional Card Power Outlet D06 Light On]
![Swiss Army Knife Functional Card Power Outlet D06 Dark Off]
![Swiss Army Knife Functional Card Power Outlet D06 Dark On]
</div>

##Two Cards with 4/1 aspect ratio:

After I created the Sensor Card (with and without history), I liked them more than the cards above, so created two cards based on the sensor card. One with no switch functionality and no history, but with the status of the switch. And one with switching capabilities and history.
<div style="max-width:800px;" markdown>
![Swiss Army Knife Functional Card Power Outlet2 D06 Light Off]
![Swiss Army Knife Functional Card Power Outlet2 D06 Light On]
![Swiss Army Knife Functional Card Power Outlet2 D06 Dark Off]
![Swiss Army Knife Functional Card Power Outlet2 D06 Dark On]
</div>

<!-- GT/GL -->
##:sak-sak-logo: Visualization

These cards are half width cards for power outlets with or without switches.

=== "3/1 Card - Kitchen"
    - The 'half circle' design element :smile:
    - An Entity icon
    - Name and Secondary Info below it
    - Vertical Line separator
    - Full Segmented Arc showing energy power
=== "3/1 Card - Air"
    - The 'half circle' design element :smile:
    - An Entity icon
    - Name and Secondary Info below it
    - Vertical Line separator
    - Half Segmented Arc showing energy power
    - Switch to toggle the power outlet
=== "3/1 Card - Air \#2"
    - Animated, state (on/off) dependent 'half circle' design element
    - Animated, state (on/off) dependent Icon
    - Switch to toggle the power outlet
    - Name and Secondary Info below it
    - Vertical Line separator
    - Full Segmented Arc showing energy power
=== "4/1 Card - Kitchen Power"
    - Animated, state (on/off) dependent 'half circle' design element
    - Animated, state (on/off) dependent Icon
    - Minimal Segmented Arc showing energy power
    - Name and power below it
=== "4/1 Card - Kitchen Power \#2"
    - Animated, state (on/off) dependent 'half circle' design element
    - Animated, state (on/off) dependent Icon
    - Switch to toggle state (on/off)
    - Minimal Segmented Arc showing energy power
    - 24 hour History on background showing energy power
    - Name and power below it

##:sak-sak-logo: Interaction

=== "3/1 Card - Kitchen"
    - All tools connected to an entity do show by default the "more-info" dialog once clicked.
=== "3/1 Card - Air"
    - Has a switch to toggle the outlet on/off
    - All other tools connected to an entity do show by default the "more-info" dialog once clicked.
=== "3/1 Card - Air \#2"
    - The half circle, icon and little switch toggle the outlet on/off
    - All other tools connected to an entity do show by default the "more-info" dialog once clicked.
=== "4/1 Card - Kitchen Power"
    - All tools connected to an entity do show by default the "more-info" dialog once clicked.
=== "4/1 Card - Kitchen Power \#2"
    - The half circle, icon and little switch toggle the outlet on/off
    - All other tools connected to an entity do show by default the "more-info" dialog once clicked.

##:sak-sak-logo: YAML Definition
=== "3/1 Card - Kitchen"
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
                      
              # ================================================================
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
                    entity_index: 1
                    show:
                      uom: none
                    styles:
                      state:
                        text-anchor: middle
                        font-size: 14em
                        font-weight: 500
                        opacity: 0.7

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
              - toolset: column-load
                template:
                  name: toolset_tutorial_02_part1
                  variables:
                    - var_entity_index: 0
                    - var_toolset_position_cx: 250
                    - var_segarc_scale_max: 200
        ```
=== "3/1 Card - Air"
    ??? Info "Full definition of card"
        ```yaml
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
                    
              # ================================================================
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
                    entity_index: 1
                    show:
                      uom: none
                    styles:
                      state:
                        text-anchor: middle
                        font-size: 14em
                        font-weight: 500
                        opacity: 0.7

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

=== "3/1 Card - Air \#2"
    ??? Info "Full definition of card"
        ```yaml
        - type: 'custom:swiss-army-knife-card'
          entities:
            - entity: sensor.kitchen_group_energy_power
              name: 'Air #2'
            - entity: sensor.kitchen_group_energy_power
              secondary_info: last_changed
              format: relative
            - entity: switch.washingmachine_energy
              name: 'Air #2'
          # Define aspect ratio
          aspectratio: 3/1                          # Card is 300x100 grid

          layout:
            toolsets:
              # ================================================================
              - toolset: column-icon
                position:
                  cx: 0
                  cy: 50
                tools:
                  # ------------------------------------------------------------
                  - type: circle
                    position:
                      cx: 50
                      cy: 50
                      radius: 50
                    entity_index: 2
                    animations:
                      - state: 'on'
                        styles:
                          circle:
                            fill: var(--theme-sys-color-primary)
                            # animation: flash 2s ease-in-out 5
                      - state: 'off'
                        styles:
                          circle:
                            fill: var(--theme-sys-color-secondary-container)
                    # Remove user actions part to just display the state
                    # or disable pointer-events via a class or style
                    # Using a class enables the use of variables that can
                    # disable pointer-events to none!
                    user_actions:
                      tap_action:
                        haptic: light
                        actions:
                          - action: call-service
                            service: switch.toggle
                    styles:
                      circle:
                        fill: var(--theme-sys-color-secondary-container)
                        stroke: var(--theme-sys-color-secondary)
                        stroke-width: 0em

                  # ------------------------------------------------------------
                  - type: icon
                    position:
                      cx: 75
                      cy: 50
                      align: center
                      icon_size: 30
                    entity_index: 2
                    animations:
                      - state: 'on'
                        styles:
                          icon:
                            # animation: spin 3s linear infinite
                            fill: var(--primary-background-color)
                      - state: 'off'
                        styles:
                          icon:
                            # fill: var(--theme-sys-color-on-secondary-container)
                            fill: var(--theme-sys-color-secondary)
                    styles:
                      icon:
                        fill: var(--theme-sys-color-secondary)
                        # opacity: 0.7
                        pointer-events: none

              # ================================================================
              - toolset: switch
                position:
                  cx: 25                           # On 1/3 of card width
                  cy: 75
                  scale: 2
                tools:
                  # ------------------------------------------------------------
                  - type: switch
                    position:
                      cx: 50
                      cy: 50
                      orientation: 'horizontal'
                      track:
                        width: 15
                        height: 5
                        radius: 2.5
                      thumb:
                        width: 3
                        height: 3
                        radius: 2.5
                        offset: 4.5
                    entity_index: 2
                    user_actions:
                      tap_action:
                        haptic: light
                        actions:
                          - action: call-service
                            service: switch.toggle
                    styles:
                      track:
                        --switch-checked-track-color: var(--primary-background-color)
                        --switch-unchecked-track-color: var(--theme-sys-color-secondary)
                        # --switch-checked-button-color: 
                      thumb:
                        --thumb-stroke: 'var(--primary-background-color)'
                        
              # ================================================================
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
                    entity_index: 1
                    show:
                      uom: none
                    styles:
                      state:
                        text-anchor: middle
                        font-size: 14em
                        font-weight: 500
                        opacity: 0.7

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
              - toolset: column-load
                template:
                  name: toolset_tutorial_02_part1
                  variables:
                    - var_entity_index: 0
                    - var_toolset_position_cx: 250
                    - var_segarc_scale_max: 200

        ```
=== "4/1 Card - Kitchen Power"
    ??? Info "Full definition of card"
        ```yaml
        - type: 'custom:swiss-army-knife-card'
          entities:
            - entity: sensor.dsmr_reading_electricity_currently_delivered
              name: 'Kitchen Power'
            - entity: switch.washingmachine_energy
              name: 'Kitchen Switch'
            - entity: sensor.washingmachine_energy_power  # Just for the demo!!!!
              name: 'Kitchen Switch #2'
          # Define aspect ratio
          aspectratio: 4/1                          # Card is 400x100 grid

          layout:
            styles:
              card:
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
                    entity_index: 1
                    animations:
                      - state: 'on'
                        styles:
                          circle:
                            fill: var(--theme-sys-color-primary)
                      - state: 'off'
                        styles:
                          circle:
                            fill: var(--theme-sys-elevation-surface-neutral4)
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
                    entity_index: 2
                    scale:
                      min: 0
                      max: 200
                      width: 6
                      offset: 12
                    show:
                      scale: false
                      style: 'colorlist'
                    segments:
                      colorlist:
                        gap: 1
                        colors:
                          - var(--theme-sys-color-secondary)
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
                    entity_index: 1
                    animations:
                      - state: 'on'
                        styles:
                          icon:
                            fill: var(--primary-background-color)
                      - state: 'off'
                        styles:
                          icon:
                            fill: var(--theme-sys-color-secondary)
                    styles:
                      icon:
                        fill: var(--theme-sys-color-secondary)
                        opacity: 0.9
                    
              # ================================================================
              - toolset: column-name
                position:
                  cx: 70                # Left part = 75, so 75+(300-75)/2
                  cy: 50
                tools:
                  # ------------------------------------------------------------
                  - type: name
                    position:
                      cx: 50
                      cy: 37
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
                    entity_index: 2
                    styles:
                      state:
                        text-anchor: start
                        font-size: 26em
                        font-weight: 500
                        opacity: 0.7

        ```
=== "4/1 Card - Kitchen Power \#2"
    ??? Info "Full definition of card"
        ```yaml
        - type: 'custom:swiss-army-knife-card'
          entities:
            - entity: sensor.dsmr_reading_electricity_currently_delivered
              name: 'Kitchen Power #2'
            - entity: switch.washingmachine_energy
              name: 'Kitchen Switch #2'
            - entity: sensor.washingmachine_energy_power  # Just for the demo!!!!
              name: 'Kitchen Switch #2'
          # Define aspect ratio
          aspectratio: 4/1                          # Card is 400x100 grid

          layout:
            styles:
              card:
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
                    entity_index: 1
                    animations:
                      - state: 'on'
                        styles:
                          circle:
                            fill: var(--theme-sys-color-primary)
                      - state: 'off'
                        styles:
                          circle:
                            fill: var(--theme-sys-color-secondary-container)
                    user_actions:
                      tap_action:
                        haptic: light
                        actions:
                          - action: call-service
                            service: switch.toggle
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
                    entity_index: 2           # Extra sensor for testing
                    scale:
                      min: 0
                      max: 200                # Controls a fan for testing
                      width: 6
                      offset: 12
                    show:
                      scale: false
                      style: 'colorlist'
                    segments:
                      colorlist:
                        gap: 1
                        colors:
                          - var(--theme-sys-color-secondary)
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
                  cy: 45
                tools:
                  # ------------------------------------------------------------
                  - type: icon
                    position:
                      cx: 50
                      cy: 50
                      align: center
                      icon_size: 45
                    entity_index: 1
                    animations:
                      - state: 'on'
                        styles:
                          icon:
                            fill: var(--primary-background-color)
                      - state: 'off'
                        styles:
                          icon:
                            fill: var(--theme-sys-color-secondary)
                    styles:
                      icon:
                        fill: var(--theme-sys-color-secondary)
                        pointer-events: none
                    
              # ================================================================
              - toolset: switch
                position:
                  cx: 25                           # On 1/3 of card width
                  cy: 75
                  scale: 1.8
                tools:
                  # ------------------------------------------------------------
                  - type: switch
                    position:
                      cx: 50
                      cy: 50
                      orientation: 'horizontal'
                      track:
                        width: 15
                        height: 5
                        radius: 2.5
                      thumb:
                        width: 3
                        height: 3
                        radius: 2.5
                        offset: 4.5
                    entity_index: 1
                    user_actions:
                      tap_action:
                        haptic: light
                        actions:
                          - action: call-service
                            service: switch.toggle
                    styles:
                      track:
                        --switch-checked-track-color: var(--primary-background-color)
                        --switch-unchecked-track-color: var(--theme-sys-color-secondary)
                        # --switch-checked-button-color: 
                      thumb:
                        --thumb-stroke: 'var(--primary-background-color)'


              # ================================================================
              - toolset: column-bar
                position:
                  cx: 235                     # 400-70/2 + 70=235
                  cy: 50
                tools:
                  # ------------------------------------------------------------
                  - type: bar
                    id: 1
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
                  # ------------------------------------------------------------
                  - type: name
                    position:
                      cx: 50
                      cy: 37
                    entity_index: 0
                    styles:
                      name:
                        text-anchor: start
                        font-size: 30em
                        font-weight: 700
                  # ------------------------------------------------------------
                  - type: state
                    position:
                      cx: 50
                      cy: 70
                    entity_index: 2
                    styles:
                      state:
                        text-anchor: start
                        font-size: 26em
                        font-weight: 700
                        opacity: 0.8

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
[Swiss Army Knife Functional Card AQI Sensor D06 Light]: ../assets/screenshots/sak-functional-card-12-full-width-environment-sensor-theme-d06-light.png
[Swiss Army Knife Functional Card Binary Sensor D06 Light]: ../assets/screenshots/sak-functional-card-12-half-width-binary-sensor-theme-d06-light.png


[Swiss Army Knife Functional Card Power Outlet D06 Light Off]: ../assets/screenshots/sak-functional-card-12-half-width-power-outlet-theme-d06-light-off.png
[Swiss Army Knife Functional Card Power Outlet D06 Light On]: ../assets/screenshots/sak-functional-card-12-half-width-power-outlet-theme-d06-light-on.png
[Swiss Army Knife Functional Card Power Outlet D06 Dark Off]: ../assets/screenshots/sak-functional-card-12-half-width-power-outlet-theme-d06-dark-off.png
[Swiss Army Knife Functional Card Power Outlet D06 Dark On]: ../assets/screenshots/sak-functional-card-12-half-width-power-outlet-theme-d06-dark-on.png

[Swiss Army Knife Functional Card Power Outlet2 D06 Light Off]: ../assets/screenshots/sak-functional-card-12-half-width-power-outlet2-theme-d06-light-off.png
[Swiss Army Knife Functional Card Power Outlet2 D06 Light On]: ../assets/screenshots/sak-functional-card-12-half-width-power-outlet2-theme-d06-light-on.png
[Swiss Army Knife Functional Card Power Outlet2 D06 Dark Off]: ../assets/screenshots/sak-functional-card-12-half-width-power-outlet2-theme-d06-dark-off.png
[Swiss Army Knife Functional Card Power Outlet2 D06 Dark On]: ../assets/screenshots/sak-functional-card-12-half-width-power-outlet2-theme-d06-dark-on.png

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->

[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[ham3-url]: https://material3-themes-manual.amoebelabs.com/
[ham3-c12-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-c12-magenta/