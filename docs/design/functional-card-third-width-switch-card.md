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

![Swiss Army Knife Functional Card Switch Sensor D06 Light Off]
![Swiss Army Knife Functional Card Switch Sensor D06 Light On]
![Swiss Army Knife Functional Card Switch Sensor D06 Dark Off]
![Swiss Army Knife Functional Card Switch Sensor D06 Dark On]

##:sak-sak-logo: Visualization
This card is a minimal 1/3 width card which can switch a binary sensor. Either a switch or a light entity in most cases.

The left part of the card contains a switch tool to tell the user that that part of the card is the switch!

The switch tool looks much better on the badge tool than on the half circle...

####Card:

- Badge is background of card.
- Left part of badge:
    - Acts as button and has a secondary theme color
    - Contains the entity icon
    - Contains a little switch to indicate that this part of the badge functions as a button
- Right part of badge:
    - Contains the entity name
    - And the Secondary Info below it

##:sak-sak-logo: Interaction

Left part of badge:

- The whole left part functions as a button to toggle the binary sensor entity:
    - Left part has a user action
    - The icon has `pointer-events: none` to pass events to the badge behind it
    - The switch tool has its own user action, as - due to a bug - this one won't accept `pointer-events: none` to pass events to the badge behind it.

Right part of badge:

- All tools connected to an entity do show by default the "more-info" dialog once clicked.

##:sak-sak-logo: YAML Definition

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

??? example "Entity Icon and Switch on Left part of Badge"
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
                                # fill: var(--theme-sys-color-on-secondary-container)
                                fill: var(--theme-sys-color-secondary)
                        styles:
                          icon:
                            fill: var(--primary-background-color)
                            opacity: 0.9
                            pointer-events: none        # Disable user interaction
                            # transition: fill 1s ease

                      # ------------------------------------------------------------
                      - type: line
                        position:
                          cx: 50
                          cy: 85
                          orientation: horizontal
                          length: 25
                        entity_index: 0
                        animations:
                          - state: 'on'
                            styles:
                              line:
                                animation: headShake 1s linear infinite
                                stroke: var(--theme-sys-color-secondary-container)
                          - state: 'off'
                            styles:
                              line:
                                stroke: var(--theme-sys-color-secondary)
                        styles:
                          line:
                            stroke-width: 6em
    ```

??? example "Entity Name and Secondary Info"
    ```yaml linenums="1"
                  - toolset: column-name
                    position:
                      cx: 187.5                 # Left part = 75, so 75+(300-75)/2
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
                            # fill: var(--theme-sys-color-on-secondary-container)
                            fill: var(--theme-sys-color-secondary)
                    styles:
                      icon:
                        fill: var(--primary-background-color)
                        opacity: 0.9
                        pointer-events: none        # Disable user interaction
                        # transition: fill 1s ease

                  # ------------------------------------------------------------
                  - type: line
                    position:
                      cx: 50
                      cy: 85
                      orientation: horizontal
                      length: 25
                    entity_index: 0
                    animations:
                      - state: 'on'
                        styles:
                          line:
                            animation: headShake 1s linear infinite
                            stroke: var(--theme-sys-color-secondary-container)
                      - state: 'off'
                        styles:
                          line:
                            stroke: var(--theme-sys-color-secondary)
                    styles:
                      line:
                        stroke-width: 6em

                    
              # ================================================================
              - toolset: column-name
                position:
                  cx: 187.5                 # Left part = 75, so 75+(300-75)/2
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

##:sak-sak-logo: Usage
For use / re-use, use decluttering card etc.

<!-- Image references -->

[Swiss Army Knife Functional Card Switch Sensor D06 Dark Off]: ../assets/screenshots/sak-functional-card-12-third-width-switch-sensor-theme-d06-dark-off.png
[Swiss Army Knife Functional Card Switch Sensor D06 Dark On]: ../assets/screenshots/sak-functional-card-12-third-width-switch-sensor-theme-d06-dark-on.png
[Swiss Army Knife Functional Card Switch Sensor D06 Light On]: ../assets/screenshots/sak-functional-card-12-third-width-switch-sensor-theme-d06-light-on.png
[Swiss Army Knife Functional Card Switch Sensor D06 Light Off]: ../assets/screenshots/sak-functional-card-12-third-width-switch-sensor-theme-d06-light-off.png


<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->

[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[ham3-url]: https://material3-themes-manual.amoebelabs.com/
[ham3-c12-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-c12-magenta/

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[ham3-url]: https://material3-themes-manual.amoebelabs.com/
[ham3-c12-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-c12-magenta/