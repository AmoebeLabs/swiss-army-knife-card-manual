---
template: main.html
title: "Functional Cards: Binary Sensor with Alert"
description: Example of functional card, binary sensor with Alert.
hide:
  toc
tags:
  - Design
  - Functional Card
---
<!-- GT/GL -->

![Swiss Army Knife Functional Card Binary Sensor Alert D06 Light Off]
![Swiss Army Knife Functional Card Binary Sensor Alert D06 Light On]
![Swiss Army Knife Functional Card Binary Sensor Alert D06 Dark Off]
![Swiss Army Knife Functional Card Binary Sensor Alert D06 Dark On]

##:sak-sak-logo: Visualization
These two cards are slightly different, but both show you a binary sensor with an alert. Both assume battery powered devices, as they need a battery state.

=== "First Card - Fire"

    - Badge is background of card
    - Animated, state dependent Icon as the alert
    - Entity name with Secondary Info below it
    - Animated, state dependent battery state in the upper right corner

=== "Second Card - Livingroom"

    - Badge is background of card
    - Entity Icon
    - Animated, state dependent separate icon is used as an alert. This icon is only displayed if binary sensor has the state `on`.
    - Entity name
    - Animated, state dependent slightly stretched battery state in the upper right corner of the card

##:sak-sak-logo: Interaction
- All tools connected to an entity do show by default the "more-info" dialog once clicked.

##:sak-sak-logo: YAML Definition

=== "First Card - Fire"
    ??? example "Animated, state dependent Card Background"
        ```yaml linenums="1"
                      - toolset: badge-background
                        position:
                          cx: 150                           # Center at middle of card
                          cy: 50                            # Center at middle of card
                        tools:
                          - type: badge
                            position:
                              cx: 50
                              cy: 50
                              height: 100                   # Badge covers the full..
                              width: 300                    # ...size of the card
                              ratio: 25
                              radius: 5
                              divider: 20
                            entity_index: 0                 # Uses entity 0
                            animations:
                              - state: 'on'                 # Animate for state ON
                                styles:
                                  left:
                                    fill: var(--theme-sys-color-primary)
                              - state: 'off'                # Animate for state OFF
                                styles:
                                  left:
                                    fill: var(--theme-sys-elevation-surface-neutral4)
                            styles:
                              left:
                                fill: grey
                              right:
                                fill: none                 # Show background of card
        ```

    ??? example "Animated, state dependent Icon as the alert"
        ```yaml linenums="1"
                      - toolset: column-icon
                        position:
                          cx: 37.5
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
                                icon: 'mdi:fire-alert'
                                styles:
                                  icon:
                                    fill: var(--brand-google-red)
                                    opacity: 1
                              - state: 'off'
                                icon: 'mdi:fire'
                                styles:
                                  icon:
                                    fill: var(--theme-sys-color-secondary)
                                    opacity: 0.9
                            styles:
                              icon:
                                fill: var(--primary-background-color)
                                opacity: 0.9
        ```

    ??? example "Entity Name and Secondary Info"
        ```yaml linenums="1"
                      - toolset: column-name
                        position:
                          cx: 187.5               # Left part = 75, so 75+(300-75)/2
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
                                font-size: 30em
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
                                font-size: 16em
                                font-weight: 500
                                opacity: 0.7
        ```

    ??? example "Animated, state dependent Battery State in the upper right corner of the card"
        ```yaml linenums="1"
                  - toolset: battery-icon
                    position:
                      cx: 280
                      cy: 15
                      rotate: 90
                    tools:
                      # ------------------------------------------------------------
                      - type: icon
                        position:
                          cx: 50
                          cy: 50
                          align: center
                          icon_size: 30
                        entity_index: 2
                        animations:
                          - state: '20'             # Battery almost dead!
                            operator: <=
                            styles:
                              icon:
                                animation: blinkingText 2s ease-in-out both infinite
                                fill: var(--brand-google-red)
                          - state: '30'             # Battery warning!
                            operator: <=
                            styles:
                              icon:
                                fill: var(--brand-google-yellow)
                        styles:
                          icon:
                            fill: var(--theme-sys-color-tertiary)
                            opacity: 0.5
        ```

    ??? Info "Full definition of card"
        ```yaml linenums="1"
        - type: 'custom:swiss-army-knife-card'
          entities:
            - entity: binary_sensor.livingroom_movement_occupancy
              name: 'Fire 2nd'
            - entity: binary_sensor.livingroom_movement_occupancy
              secondary_info: last_changed
              format: relative
            - entity: sensor.studym_iaq_battery
              decimals: 0
          # Define aspect ratio
          aspectratio: 3/1                          # Card is 300x100 grid

          layout:
            styles:
              card:
                # border-radius: 25em
            toolsets:
              # ================================================================
              - toolset: badge-background
                position:
                  cx: 150                           # Center at middle of card
                  cy: 50                            # Center at middle of card
                tools:
                  - type: badge
                    position:
                      cx: 50
                      cy: 50
                      height: 100                   # Badge covers the full..
                      width: 300                    # ...size of the card
                      ratio: 25
                      radius: 5
                      divider: 20
                    entity_index: 0                 # Uses entity 0
                    animations:
                      - state: 'on'                 # Animate for state ON
                        styles:
                          left:
                            fill: var(--theme-sys-color-primary)
                      - state: 'off'                # Animate for state OFF
                        styles:
                          left:
                            fill: var(--theme-sys-elevation-surface-neutral4)
                    styles:
                      left:
                        fill: grey
                      right:
                        fill: none                 # Show background of card

              # ================================================================
              - toolset: column-icon
                position:
                  cx: 37.5
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
                        icon: 'mdi:fire-alert'
                        styles:
                          icon:
                            fill: var(--brand-google-red)
                            opacity: 1
                      - state: 'off'
                        icon: 'mdi:fire'
                        styles:
                          icon:
                            fill: var(--theme-sys-color-secondary)
                            opacity: 0.9
                    styles:
                      icon:
                        fill: var(--primary-background-color)
                        opacity: 0.9

              # ================================================================
              - toolset: battery-icon
                position:
                  cx: 280
                  cy: 15
                  rotate: 90
                tools:
                  # ------------------------------------------------------------
                  - type: icon
                    position:
                      cx: 50
                      cy: 50
                      align: center
                      icon_size: 30
                    entity_index: 2
                    animations:
                      - state: '20'             # Battery almost dead!
                        operator: <=
                        styles:
                          icon:
                            animation: blinkingText 2s ease-in-out both infinite
                            fill: var(--brand-google-red)
                      - state: '30'             # Battery warning!
                        operator: <=
                        styles:
                          icon:
                            fill: var(--brand-google-yellow)
                    styles:
                      icon:
                        fill: var(--theme-sys-color-tertiary)
                        opacity: 0.5
                        
              # ================================================================
              - toolset: column-name
                position:
                  cx: 100               # Left part = 75, so 75+(300-75)/2
                  cy: 50
                tools:
                  # ------------------------------------------------------------
                  - type: name
                    position:
                      cx: 50
                      cy: 40
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
                    entity_index: 1
                    show:
                      uom: none
                    styles:
                      state:
                        text-anchor: start
                        font-size: 16em
                        font-weight: 500
                        opacity: 0.7
                    

        ```
=== "Second Card - Livingroom"
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
                          divider: 20
                        entity_index: 0
                        animations:
                          - state: 'on'
                            styles:
                              left:
                                fill: var(--theme-sys-color-primary)
                          - state: 'off'
                            styles:
                              left:
                                fill: var(--theme-sys-elevation-surface-neutral4)
                        styles:
                          left:
                            fill: grey
                          right:
                            fill: none
        ```

    ??? example "Entity Icon"
        ```yaml linenums="1"
                      - toolset: column-icon
                        position:
                          cx: 37.5
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
                                styles:
                                  icon:
                                    fill: var(--primary-background-color)
                              - state: 'off'
                                styles:
                                  icon:
                                    fill: var(--theme-sys-color-secondary)
                            styles:
                              icon:
                                fill: var(--primary-background-color)
                                opacity: 0.9
        ```

    ??? example "Alert Icon with Circle behind it"
        ```yaml linenums="1"
                      - toolset: alert-icon
                        position:
                          cx: 75
                          cy: 18
                        tools:
                          # ------------------------------------------------------------
                          - type: circle
                            position:
                              cx: 50
                              cy: 50
                              radius: 13
                            entity_index: 0                 # Use state from 0
                            animations:
                              - state: 'on'                 # If ON
                                styles:
                                  circle:
                                    fill: var(--primary-background-color)
                              - state: 'off'                # If OFF
                                styles:
                                  circle:
                                    display: none           # Hide icon

                          # ------------------------------------------------------------
                          - type: icon
                            position:
                              cx: 50
                              cy: 50
                              align: center
                              icon_size: 25
                            entity_index: 0                 # Use state from 0
                            icon: mdi:alert-circle          # Use alert circle icon
                            animations:
                              - state: 'on'                 # If ON
                                styles:
                                  icon:
                                    fill: var(--brand-google-red, red) # Set icon to red color
                              - state: 'off'                # If OFF
                                styles:
                                  icon:
                                    display: none           # Hide icon
                            styles:
                              icon:
                                fill: grey                  # Default grey color                     
        ```

    ??? example "Entity Name"
        ```yaml linenums="1"
                      - toolset: column-name
                        position:
                          cx: 187.5               # Left part = 75, so 75+(300-75)/2
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
                                font-size: 30em
                                font-weight: 700
                                opacity: 1
        ```

    ??? example "Animated, state dependent Battery State in the upper right corner of the card"

        ```yaml linenums="1" hl_lines="5"
                  - toolset: battery-icon
                    position:
                      cx: 270
                      cy: 15
                      scale_y: 1.5                      # Make battery taller
                      rotate: 90
                    tools:
                      # ------------------------------------------------------------
                      - type: icon
                        position:
                          cx: 50
                          cy: 50
                          align: center
                          icon_size: 30
                        entity_index: 2
                        animations:
                          - state: '20'             # Battery almost dead!
                            operator: <=
                            styles:
                              icon:
                                animation: blinkingText 2s ease-in-out both infinite
                                fill: var(--brand-google-red)
                          - state: '30'             # Battery warning!
                            operator: <=
                            styles:
                              icon:
                                fill: var(--brand-google-yellow)
                        styles:
                          icon:
                            fill: var(--theme-sys-color-tertiary)
                            opacity: 0.5
        ```

    ??? Info "Full definition of card"
        ```yaml linenums="1"
        - type: 'custom:swiss-army-knife-card'
          entities:
            - entity: binary_sensor.livingroom_movement_occupancy
              name: 'Livingroom'
            - entity: binary_sensor.livingroom_movement_occupancy
              secondary_info: last_changed
              format: relative
            - entity: sensor.studym_iaq_battery
              decimals: 0
          # Define aspect ratio
          aspectratio: 3/1                          # Card is 300x100 grid

          layout:
            styles:
              card:
                # border-radius: 25em
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
                      divider: 20
                    entity_index: 0
                    animations:
                      - state: 'on'
                        styles:
                          left:
                            fill: var(--theme-sys-color-primary)
                      - state: 'off'
                        styles:
                          left:
                            fill: var(--theme-sys-elevation-surface-neutral4)
                    styles:
                      left:
                        fill: grey
                      right:
                        fill: none
              # ================================================================
              - toolset: column-icon
                position:
                  cx: 37.5
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
                        styles:
                          icon:
                            fill: var(--primary-background-color)
                      - state: 'off'
                        styles:
                          icon:
                            fill: var(--theme-sys-color-secondary)
                    styles:
                      icon:
                        fill: var(--primary-background-color)
                        opacity: 0.9
                    
              # ================================================================
              - toolset: alert-icon
                position:
                  cx: 75
                  cy: 18
                tools:
                  # ------------------------------------------------------------
                  - type: circle
                    position:
                      cx: 50
                      cy: 50
                      radius: 13
                    entity_index: 0                 # Use state from 0
                    animations:
                      - state: 'on'                 # If ON
                        styles:
                          circle:
                            fill: var(--primary-background-color)
                      - state: 'off'                # If OFF
                        styles:
                          circle:
                            display: none           # Hide icon

                  # ------------------------------------------------------------
                  - type: icon
                    position:
                      cx: 50
                      cy: 50
                      align: center
                      icon_size: 25
                    entity_index: 0                 # Use state from 0
                    icon: mdi:alert-circle          # Use alert circle icon
                    animations:
                      - state: 'on'                 # If ON
                        styles:
                          icon:
                            fill: var(--brand-google-red, red) # Set icon to red color
                      - state: 'off'                # If OFF
                        styles:
                          icon:
                            display: none           # Hide icon
                    styles:
                      icon:
                        fill: grey                  # Default grey color

              # ================================================================
              - toolset: column-name
                position:
                  cx: 100
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
                        text-anchor: start
                        font-size: 30em
                        font-weight: 700
                        opacity: 1

              # ================================================================
              - toolset: battery-icon
                position:
                  cx: 270
                  cy: 15
                  scale_y: 1.5                      # Make battery taller
                  rotate: 90
                tools:
                  # ------------------------------------------------------------
                  - type: icon
                    position:
                      cx: 50
                      cy: 50
                      align: center
                      icon_size: 30
                    entity_index: 2
                    animations:
                      - state: '20'             # Battery almost dead!
                        operator: <=
                        styles:
                          icon:
                            animation: blinkingText 2s ease-in-out both infinite
                            fill: var(--brand-google-red)
                      - state: '30'             # Battery warning!
                        operator: <=
                        styles:
                          icon:
                            fill: var(--brand-google-yellow)
                    styles:
                      icon:
                        fill: var(--theme-sys-color-tertiary)
                        opacity: 0.5
        ```

##:sak-sak-logo: Usage
For use / re-use, use decluttering card etc.

<!-- Image references -->

[Swiss Army Knife Functional Card Binary Sensor Alert D06 Dark Off]: ../assets/screenshots/sak-functional-card-12-third-width-binary-sensor-alert-theme-d06-dark-off.png
[Swiss Army Knife Functional Card Binary Sensor Alert D06 Dark On]: ../assets/screenshots/sak-functional-card-12-third-width-binary-sensor-alert-theme-d06-dark-on.png
[Swiss Army Knife Functional Card Binary Sensor Alert D06 Light On]: ../assets/screenshots/sak-functional-card-12-third-width-binary-sensor-alert-theme-d06-light-on.png
[Swiss Army Knife Functional Card Binary Sensor Alert D06 Light Off]: ../assets/screenshots/sak-functional-card-12-third-width-binary-sensor-alert-theme-d06-light-off.png


<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->

[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[ham3-url]: https://material3-themes-manual.amoebelabs.com/
[ham3-c12-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-c12-magenta/