---
template: main.html
title: "Functional Cards: Switch Sensor"
description: Example of functional card, switch sensor.
hide:
  toc
tags:
  - Design
  - Functional Card
---
<!-- GT/GL -->

## Two Cards with 3/1 aspect ratio:
<div style="max-width:800px;" markdown>
![Swiss Army Knife Functional Card Switch Sensor D06 Light Off]
![Swiss Army Knife Functional Card Switch Sensor D06 Light On]
![Swiss Army Knife Functional Card Switch Sensor D06 Dark Off]
![Swiss Army Knife Functional Card Switch Sensor D06 Dark On]
</div>
## Card with 4/1 aspect ratio:
<div style="max-width:800px;" markdown>
![Swiss Army Knife Functional Card Switch Sensor2 D06 Light Off]
![Swiss Army Knife Functional Card Switch Sensor2 D06 Light On]
![Swiss Army Knife Functional Card Switch Sensor2 D06 Dark Off]
![Swiss Army Knife Functional Card Switch Sensor2 D06 Dark On]
</div>

##:sak-sak-logo: Visualization
These cards are half width cards for switches. Either a switch or a light entity in most cases.

=== "First 3/1 Card"
    - Contains the 'half circle' design element :smile:
    - An icon that spins if Fan is ON
    - Name and state below it of this switch
=== "Second 3/1 Card"
    - Contains the 'half circle' design element :smile:
    - An icon that wobbles when Heater is ON
    - Name and state below it of this switch
    - An Icon as "button", which changes according to the state
=== "4/1 Card"
    - Badge is background of card.
    - Left part of badge:
        - Acts as button and has a secondary theme color
        - Contains the entity icon
        - Contains a little switch to indicate that this part of the badge functions as a button
    - Right part of badge:
        - Contains the entity name
        - And the Secondary Info below it

##:sak-sak-logo: Interaction

=== "First 3/1 Card"
    - Has a switch tool that toggles the state of the entity
    - All other tools connected to an entity do show by default the "more-info" dialog once clicked.    
=== "Second 3/1 Card"
    - Has an icon instead of a switch tool that toggles the state of the entity
    - All other tools connected to an entity do show by default the "more-info" dialog once clicked.    
=== "4/1 Card"
    - Left part of badge:
        - The whole left part functions as a button to toggle the binary sensor entity:
            - Left part has a user action
            - The icon has `pointer-events: none` to pass events to the badge behind it
            - The switch tool has its own user action, as - due to a bug - this one won't accept `pointer-events: none` to pass events to the badge behind it.
    - Right part of badge:
        - All tools connected to an entity do show by default the "more-info" dialog once clicked.

##:sak-sak-logo: YAML Definition

=== "First 3/1 Card"
    ??? example "Animated, state dependent Half Circle"
        ```yaml linenums="1"
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
                        entity_index: 0
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
                            # transition: fill 1s ease
        ```

    ??? example "Animated, state dependent Entity Icon"
        ```yaml linenums="1"
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
                          icon_size: 35
                        icon: mdi:fan
                        entity_index: 0
                        animations:
                          - state: 'on'
                            styles:
                              icon:
                                animation: spin 3s linear infinite
                                fill: var(--primary-background-color)
                          - state: 'off'
                            styles:
                              icon:
                                fill: var(--theme-sys-color-secondary)
                        styles:
                          icon:
                            fill: var(--primary-background-color)
                            opacity: 0.9
                            # transition: fill 1s ease
        ```

    ??? example "Name and Secondary Info"
        ```yaml linenums="1"
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
        ``` 

    ??? example "Vertical line as separator"
        ```yaml linenums="1"
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
        ```
    
    ??? example "Switch"
        ```yaml linenums="1"
                  - toolset: switch
                    position:
                      cx: 250                           # On 1/3 of card width
                      cy: 50
                      scale: 3
                    tools:
                      # ------------------------------------------------------------
                      - type: switch
                        position:
                          cx: 50
                          cy: 50
                        entity_index: 0
                        user_actions:
                          tap_action:
                            haptic: light
                            actions:
                              - action: call-service
                                service: light.toggle
        ```


    ??? Info "Full definition of card"
        ```yaml linenums="1"
        - type: 'custom:swiss-army-knife-card'
          entities:
            - entity: light.livingroom_light_duo_right_light
              name: 'Fan'
            - entity: light.livingroom_light_duo_right_light
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
                      radius: 50
                    entity_index: 0
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
                        # transition: fill 1s ease

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
                      icon_size: 35
                    icon: mdi:fan
                    entity_index: 0
                    animations:
                      - state: 'on'
                        styles:
                          icon:
                            animation: spin 3s linear infinite
                            fill: var(--primary-background-color)
                      - state: 'off'
                        styles:
                          icon:
                            fill: var(--theme-sys-color-secondary)
                    styles:
                      icon:
                        fill: var(--primary-background-color)
                        opacity: 0.9
                        # transition: fill 1s ease
                    
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
              - toolset: switch
                position:
                  cx: 250                           # On 1/3 of card width
                  cy: 50
                  scale: 3
                tools:
                  # ------------------------------------------------------------
                  - type: switch
                    position:
                      cx: 50
                      cy: 50
                    entity_index: 0
                    user_actions:
                      tap_action:
                        haptic: light
                        actions:
                          - action: call-service
                            service: light.toggle

        ```


=== "Second 3/1 Card"
    ??? example "Animated, state dependent Half Circle"
        ```yaml linenums="1"
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
                        entity_index: 0
                        animations:
                          - state: 'on'
                            styles:
                              circle:
                                fill: var(--theme-sys-color-primary)
                          - state: 'off'
                            styles:
                              circle:
                                fill: var(--theme-sys-elevation-surface-neutral4)
                                # opacity: 0.4
                        styles:
                          circle:
                            stroke: none
                            # transition: fill 1s ease
        ```

    ??? example "Animated, state dependent Entity Icon" 
        ```yaml linenums="1"
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
                        icon: mdi:35
                        entity_index: 0
                        animations:
                          - state: 'on'
                            icon: mdi:radiator
                            styles:
                              icon:
                                # animation: pulse 3s linear infinite
                                fill: var(--primary-background-color)
                          - state: 'off'
                            icon: mdi:radiator-off
                            styles:
                              icon:
                                fill: var(--theme-sys-color-secondary)
                        styles:
                          icon:
                            fill: var(--primary-background-color)
                            opacity: 0.9
                            # transition: fill 1s ease
        ```

    ??? example "Name and Secondary Info"
        ```yaml linenums="1"
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
        ``` 

    ??? example "Vertical line as separator"
        ```yaml linenums="1"
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
        ```
    
    ??? example "Animated Icon as button"
        ```yaml linenums="1"
                  - toolset: button-like
                    position:
                      cx: 250
                      cy: 50
                    tools:
                      # ------------------------------------------------------------
                      - type: icon
                        position:
                          cx: 50
                          cy: 50
                          align: center
                          icon_size: 60
                        entity_index: 0
                        animations:
                          - state: 'on'
                            icon: mdi:toggle-switch-variant
                            styles:
                              icon:
                                fill: var(--theme-sys-color-primary)
                          - state: 'off'
                            icon: mdi:toggle-switch-variant-off
                            styles:
                              icon:
                                fill: var(--theme-sys-color-secondary-container)
                        user_actions:
                          tap_action:
                            haptic: light
                            actions:
                              - action: call-service
                                service: light.toggle
                        styles:
                          icon:
                            fill: var(--primary-background-color)
        ```

    ??? Info "Full definition of card"
        ```yaml linenums="1"
        - type: 'custom:swiss-army-knife-card'
          entities:
            - entity: light.livingroom_light_duo_left_light
              name: 'Heater'
            - entity: light.livingroom_light_duo_left_light
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
                      radius: 50
                    entity_index: 0
                    animations:
                      - state: 'on'
                        styles:
                          circle:
                            fill: var(--theme-sys-color-primary)
                      - state: 'off'
                        styles:
                          circle:
                            fill: var(--theme-sys-elevation-surface-neutral4)
                            # opacity: 0.4
                    styles:
                      circle:
                        stroke: none
                        # transition: fill 1s ease

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
                    icon: mdi:35
                    entity_index: 0
                    animations:
                      - state: 'on'
                        icon: mdi:radiator
                        styles:
                          icon:
                            # animation: pulse 3s linear infinite
                            fill: var(--primary-background-color)
                      - state: 'off'
                        icon: mdi:radiator-off
                        styles:
                          icon:
                            fill: var(--theme-sys-color-secondary)
                    styles:
                      icon:
                        fill: var(--primary-background-color)
                        opacity: 0.9
                        # transition: fill 1s ease
                    
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
              - toolset: button-like
                position:
                  cx: 250
                  cy: 50
                tools:
                  # ------------------------------------------------------------
                  - type: icon
                    position:
                      cx: 50
                      cy: 50
                      align: center
                      icon_size: 60
                    entity_index: 0
                    animations:
                      - state: 'on'
                        icon: mdi:toggle-switch-variant
                        styles:
                          icon:
                            fill: var(--theme-sys-color-primary)
                      - state: 'off'
                        icon: mdi:toggle-switch-variant-off
                        styles:
                          icon:
                            fill: var(--theme-sys-color-secondary-container)
                    user_actions:
                      tap_action:
                        haptic: light
                        actions:
                          - action: call-service
                            service: light.toggle
                    styles:
                      icon:
                        fill: var(--primary-background-color)
        ```

=== "4/1 Card"
    ??? example "Card Background"
        ```yaml linenums="1"
                  - toolset: badge-background
                    position:
                      cx: 150
                      cy: 50
                    tools:
                      - type: badge
                        position:
                          cx: 50
                          cy: 50
                          height: 100
                          width: 300
                          ratio: 25
                          radius: 5
                          divider: 30
                        entity_index: 0
                        user_actions:
                          tap_action:
                            haptic: light
                            actions:
                              - action: call-service
                                service: light.toggle
                        animations:
                          - state: 'on'
                            styles:
                              left:
                                fill: var(--theme-sys-color-primary)
                          - state: 'off'
                            styles:
                              left:                     # Use as filled tonal button (m3)
                                fill: var(--theme-sys-color-secondary-container)
                        styles:
                          left:
                            fill: grey
                          right:
                            fill: none                  # Show background
                            pointer-events: none        # Disable user interaction

        ```

    ??? example "Animated, state dependent Entity Icon"
        ```yaml linenums="1"
                  - toolset: column-icon
                    position:
                      cx: 37.5                           # On 12.5% f width
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
                        animations:
                          - state: 'on'
                            icon: 'mdi:fan'
                            styles:
                              icon:
                                animation: spin 3s linear infinite
                                fill: var(--primary-background-color)
                          - state: 'off'
                            icon: 'mdi:fan'
                            styles:
                              icon:
                                fill: var(--theme-sys-color-secondary)
                        styles:
                          icon:
                            fill: var(--primary-background-color)
                            opacity: 0.9
                            pointer-events: none        # Disable user interaction
        ```
    
    ??? example "Switch"
        !!! Warning "There still is a configuration merge bug in the Switch Tool"
            This means that changing the width of the switch gives unexpected results: the `offset` thumb value is ignored.
            
            Furthermore disabling pointer-events also doesn't work, so therefore `user_actions` are defined to make sure that if user taps the switch that the `switch` service is called. If pointer-events are disabled, the left part of the badge tool will receive the events, and act upon it.
            
        ``` yaml linenums="1"
                  - toolset: switch
                    position:
                      cx: 37.5                           # On 1/3 of card width
                      cy: 85
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
                        entity_index: 0
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
        ```

    ??? example "Name and Secondary Info"
        ```yaml linenums="1"
                  - toolset: column-name
                    position:
                      cx: 110
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
                        entity_index: 1
                        show:
                          uom: none
                        styles:
                          state:
                            text-anchor: start
                            font-size: 26em
                            font-weight: 500
                            opacity: 0.7
        ``` 

    ??? Info "Full definition of card"
        ```yaml linenums="1"
        - type: 'custom:swiss-army-knife-card'
          entities:
            - entity: light.livingroom_light_duo_right_light
              name: 'Fan #2'
            - entity: light.livingroom_light_duo_right_light
              secondary_info: last_changed
              format: relative
          # Define aspect ratio
          aspectratio: 4/1                          # Card is 400x100 grid

          layout:
            toolsets:
              # ================================================================
              - toolset: badge-background
                position:
                  cx: 150
                  cy: 50
                tools:
                  - type: badge
                    position:
                      cx: 50
                      cy: 50
                      height: 100
                      width: 300
                      ratio: 25
                      radius: 5
                      divider: 30
                    entity_index: 0
                    user_actions:
                      tap_action:
                        haptic: light
                        actions:
                          - action: call-service
                            service: light.toggle
                    animations:
                      - state: 'on'
                        styles:
                          left:
                            fill: var(--theme-sys-color-primary)
                      - state: 'off'
                        styles:
                          left:                     # Use as filled tonal button (m3)
                            fill: var(--theme-sys-color-secondary-container)
                    styles:
                      left:
                        fill: grey
                      right:
                        fill: none                  # Show background
                        pointer-events: none        # Disable user interaction

              # ================================================================
              - toolset: column-icon
                position:
                  cx: 37.5                           # On 12.5% f width
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
                    animations:
                      - state: 'on'
                        icon: 'mdi:fan'
                        styles:
                          icon:
                            animation: spin 3s linear infinite
                            fill: var(--primary-background-color)
                      - state: 'off'
                        icon: 'mdi:fan'
                        styles:
                          icon:
                            fill: var(--theme-sys-color-secondary)
                    styles:
                      icon:
                        fill: var(--primary-background-color)
                        opacity: 0.9
                        pointer-events: none        # Disable user interaction

              # ================================================================
              - toolset: switch
                position:
                  cx: 37.5                           # On 1/3 of card width
                  cy: 85
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
                    entity_index: 0
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
                        pointer-events: none
                      thumb:
                        --thumb-stroke: 'var(--primary-background-color)'
                        pointer-events: none

              # ================================================================
              - toolset: column-name
                position:
                  cx: 110
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
                    entity_index: 1
                    show:
                      uom: none
                    styles:
                      state:
                        text-anchor: start
                        font-size: 26em
                        font-weight: 500
                        opacity: 0.7
        ```

##:sak-sak-logo: Usage
For use / re-use, use decluttering card etc.

<!-- Image references -->

[Swiss Army Knife Functional Card Switch Sensor D06 Dark Off]: ../assets/screenshots/sak-functional-card-12-half-width-switch-sensor-theme-d06-dark-off.png
[Swiss Army Knife Functional Card Switch Sensor D06 Dark On]: ../assets/screenshots/sak-functional-card-12-half-width-switch-sensor-theme-d06-dark-on.png
[Swiss Army Knife Functional Card Switch Sensor D06 Light On]: ../assets/screenshots/sak-functional-card-12-half-width-switch-sensor-theme-d06-light-on.png
[Swiss Army Knife Functional Card Switch Sensor D06 Light Off]: ../assets/screenshots/sak-functional-card-12-half-width-switch-sensor-theme-d06-light-off.png

[Swiss Army Knife Functional Card Switch Sensor2 D06 Dark Off]: ../assets/screenshots/sak-functional-card-12-half-width-switch-sensor2-theme-d06-dark-off.png
[Swiss Army Knife Functional Card Switch Sensor2 D06 Dark On]: ../assets/screenshots/sak-functional-card-12-half-width-switch-sensor2-theme-d06-dark-on.png
[Swiss Army Knife Functional Card Switch Sensor2 D06 Light On]: ../assets/screenshots/sak-functional-card-12-half-width-switch-sensor2-theme-d06-light-on.png
[Swiss Army Knife Functional Card Switch Sensor2 D06 Light Off]: ../assets/screenshots/sak-functional-card-12-half-width-switch-sensor2-theme-d06-light-off.png

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[ham3-url]: https://material3-themes-manual.amoebelabs.com/
[ham3-c12-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-c12-magenta/