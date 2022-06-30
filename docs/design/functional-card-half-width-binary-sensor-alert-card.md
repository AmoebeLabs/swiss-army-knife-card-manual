---
template: main.html
title: "Functional Cards: Binary Sensor with Alert Card"
description: Example of functional card, switch sensor.
hide:
  toc
tags:
  - Design
  - Functional Card
---
<!-- GT/GL -->

These cards are meant to be used 2 in a row. So the below example has 1 filler cards to complement the single card in this horizontal row.

## Two Cards with 3/1 aspect ratio:

![Swiss Army Knife Functional Card Binary Sensor With Alert D06 Light Off]
![Swiss Army Knife Functional Card Binary Sensor With Alert D06 Light On]
![Swiss Army Knife Functional Card Binary Sensor With Alert D06 Dark Off]
![Swiss Army Knife Functional Card Binary Sensor With Alert D06 Dark On]

## Card with 4/1 aspect ratio:
![Swiss Army Knife Functional Card Binary Sensor With Alert2 D06 Light Off]
![Swiss Army Knife Functional Card Binary Sensor With Alert2 D06 Light On]
![Swiss Army Knife Functional Card Binary Sensor With Alert2 D06 Dark Off]
![Swiss Army Knife Functional Card Binary Sensor With Alert2 D06 Dark On]

##:sak-sak-logo: Description
These two cards are slightly different, but both show you a binary sensor with an alert. Both assume battery powered devices, as they need a battery state.

=== "First 3/1 Card"
    - First Half:
        - Contains the 'half circle' design element :smile:
        - An icon that shows the entity
        - The Alert on the half circle
        - Name and state below it of this switch
    - Second Half:
        - The battery state
        - The link state
=== "Second 3/1 Card"
    - First Half:
        - Contains the 'half circle' design element :smile:
        - An icon that shows the entity
        - The Alert above the name
        - Name and state below it of this switch
    - Second Half:
        - The battery state
        - The link state
=== "4/1 Card"
    - Contains the 'half circle' design element :smile:
    - An icon that shows the entity
    - A separate icon is used as an alert. This icon is only displayed if binary sensor has the state `on`.
    - Slightly stretched battery state in the upper right corner

##:sak-sak-logo: YAML Definition

=== "First 3/1 Card"
    ### Half Circle

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
                            # animation: flash 2s ease-in-out 5
                      - state: 'off'
                        styles:
                          circle:
                            fill: var(--theme-sys-elevation-surface-neutral4)
                    styles:
                      circle:
                        stroke: none
                        # transition: fill 1s ease
    ```

    ### Entity Icon 

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
                    entity_index: 0
                    animations:
                      - state: 'on'
                        styles:
                          icon:
                            # animation: spin 3s linear infinite
                            fill: var(--primary-background-color)
                      - state: 'off'
                        styles:
                          icon:
                            fill: var(--theme-sys-color-secondary)
                            opacity: 0.9
                    styles:
                      icon:
                        fill: var(--primary-background-color)
                        opacity: 0.9
                        # transition: fill 1s ease
    ```
    ### Alert Icon 
    ```yaml linenums="1"
              - toolset: alert-icon
                position:
                  cx: 40
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

    ### Name and state
    Display entity name and below it the entity state.
    Both are positioned in the middle of the right part of the badge tool.
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

    ### Vertical line as separator
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
    
    ### Battery state
    Battery icon, segmented arc and current state.
    ```yaml linenums="1"
              - toolset: column-battery
                position:
                  cx: 250
                  cy: 50
                tools:
                  # ------------------------------------------------------------
                  - type: icon
                    position:
                      cx: 30
                      cy: 30
                      align: right
                      icon_size: 25
                    entity_index: 2
                    styles:
                      icon:
                        fill: var(--theme-sys-color-tertiary)
                        opacity: 0.8
                  # ------------------------------------------------------------
                  - type: state
                    position:
                      cx: 70
                      cy: 30
                    entity_index: 2
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
                    entity_index: 2
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

    ### Link state
    Link icon, segmented arc and current state.
    ```yaml linenums="1"
              - toolset: column-linkquality
                position:
                  cx: 250
                  cy: 50
                tools:
                  # ------------------------------------------------------------
                  - type: icon
                    position:
                      cx: 30
                      cy: 70
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
                      cy: 70
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
                      cy: 70
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
    ```


    ??? Info "Full definition of card"
        ```yaml linenums="1"
        - type: 'custom:swiss-army-knife-card'
          entities:
            - entity: binary_sensor.livingroom_movement_occupancy
              name: 'Movement'
            - entity: binary_sensor.livingroom_movement_occupancy
              secondary_info: last_changed
              format: relative
            - entity: sensor.livingroom_movement_battery
              decimals: 0
            - entity: sensor.livingroom_movement_linkquality
              decimals: 0
          # Define aspect ratio
          aspectratio: 3/1                          # Card is 300x100 grid

          layout:
            styles:
              card:
                # border-radius: 20px
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
                            # animation: flash 2s ease-in-out 5
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
                    entity_index: 0
                    animations:
                      - state: 'on'
                        styles:
                          icon:
                            # animation: spin 3s linear infinite
                            fill: var(--primary-background-color)
                      - state: 'off'
                        styles:
                          icon:
                            fill: var(--theme-sys-color-secondary)
                            opacity: 0.9
                    styles:
                      icon:
                        fill: var(--primary-background-color)
                        opacity: 0.9
                        # transition: fill 1s ease

              # ================================================================
              - toolset: alert-icon
                position:
                  cx: 40
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
              - toolset: column-battery
                position:
                  cx: 250
                  cy: 50
                tools:
                  # ------------------------------------------------------------
                  - type: icon
                    position:
                      cx: 30
                      cy: 30
                      align: right
                      icon_size: 25
                    entity_index: 2
                    styles:
                      icon:
                        fill: var(--theme-sys-color-tertiary)
                        opacity: 0.8
                  # ------------------------------------------------------------
                  - type: state
                    position:
                      cx: 70
                      cy: 30
                    entity_index: 2
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
                    entity_index: 2
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
                  cx: 250
                  cy: 50
                tools:
                  # ------------------------------------------------------------
                  - type: icon
                    position:
                      cx: 30
                      cy: 70
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
                      cy: 70
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
                      cy: 70
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

        ```


=== "Second 3/1 Card"
    ### Half Circle

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
                            # animation: flash 2s ease-in-out 5
                      - state: 'off'
                        styles:
                          circle:
                            fill: var(--theme-sys-elevation-surface-neutral4)
                    styles:
                      circle:
                        stroke: none
                        # transition: fill 1s ease

    ```

    ### Entity Icon 

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
                    entity_index: 0
                    animations:
                      - state: 'on'
                        icon: 'mdi:fire-alert'
                        styles:
                          icon:
                            # animation: spin 3s linear infinite
                            fill: var(--primary-background-color)
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
                        # transition: fill 1s ease
    ```
    ### Alert Icon 
    ```yaml linenums="1"
              - toolset: alert-icon
                position:
                  cx: 120
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
    ```

    ### Name and state
    Display entity name and below it the entity state.
    Both are positioned in the middle of the right part of the badge tool.
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

    ### Vertical line as separator
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
    
    ### Battery state
    Battery icon, segmented arc and current state.
    ```yaml linenums="1"
              - toolset: column-battery
                position:
                  cx: 250
                  cy: 50
                tools:
                  # ------------------------------------------------------------
                  - type: icon
                    position:
                      cx: 30
                      cy: 30
                      align: right
                      icon_size: 25
                    entity_index: 2
                    styles:
                      icon:
                        fill: var(--theme-sys-color-tertiary)
                        opacity: 0.8

                  # ------------------------------------------------------------
                  - type: state
                    position:
                      cx: 70
                      cy: 30
                    entity_index: 2
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
                    entity_index: 2
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

    ### Link state
    Link icon, segmented arc and current state.
    ```yaml linenums="1"
              - toolset: column-linkquality
                position:
                  cx: 250
                  cy: 50
                tools:
                  # ------------------------------------------------------------
                  - type: icon
                    position:
                      cx: 30
                      cy: 70
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
                      cy: 70
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
                      cy: 70
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
    ```

    ??? Info "Full definition of card"
        ```yaml linenums="1"
        - type: 'custom:swiss-army-knife-card'
          entities:
            - entity: binary_sensor.livingroom_movement_occupancy
              name: 'Fire 1st'
            - entity: binary_sensor.livingroom_movement_occupancy
              secondary_info: last_changed
              format: relative
            - entity: sensor.livingroom_movement_battery
              decimals: 0
            - entity: sensor.livingroom_movement_linkquality
              decimals: 0
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
                            # animation: flash 2s ease-in-out 5
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
                    entity_index: 0
                    animations:
                      - state: 'on'
                        icon: 'mdi:fire-alert'
                        styles:
                          icon:
                            # animation: spin 3s linear infinite
                            fill: var(--primary-background-color)
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
                        # transition: fill 1s ease
                    
              # ================================================================
              - toolset: alert-icon
                position:
                  cx: 120
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
              - toolset: column-battery
                position:
                  cx: 250
                  cy: 50
                tools:
                  # ------------------------------------------------------------
                  - type: icon
                    position:
                      cx: 30
                      cy: 30
                      align: right
                      icon_size: 25
                    entity_index: 2
                    styles:
                      icon:
                        fill: var(--theme-sys-color-tertiary)
                        opacity: 0.8

                  # ------------------------------------------------------------
                  - type: state
                    position:
                      cx: 70
                      cy: 30
                    entity_index: 2
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
                    entity_index: 2
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
                  cx: 250
                  cy: 50
                tools:
                  # ------------------------------------------------------------
                  - type: icon
                    position:
                      cx: 30
                      cy: 70
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
                      cy: 70
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
                      cy: 70
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

        ```

=== "4/1 Card"
    ### Half Circle

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
                            fill: var(--theme-sys-color-secondary-container)
                      - state: 'off'
                        styles:
                          circle:
                            fill: var(--theme-sys-elevation-surface-neutral2)
                    styles:
                      circle:
                        stroke: none
    ```
    ### Entity Icon 

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
                      icon_size: 45
                    entity_index: 0
                    animations:
                      - state: 'on'
                        styles:
                          icon:
                            fill: var(--theme-sys-color-secondary)
                      - state: 'off'
                        styles:
                          icon:
                            fill: var(--theme-sys-elevation-surface-neutral10)
                    styles:
                      icon:
                        opacity: 0.9
    ```
    ### Alert Icon 
    ```yaml linenums="1"
                  - toolset: alert-icon
                position:
                  cx: 40
                  cy: 18
                tools:
                  # ------------------------------------------------------------
                  - type: circle
                    position:
                      cx: 50
                      cy: 50
                      radius: 15
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
                      icon_size: 28
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

    ### Name and state
    Display entity name and below it the entity state.
    Both are positioned in the middle of the right part of the badge tool.
    ```yaml linenums="1"
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
    ### Battery state
    Battery icon, segmented arc and current state.
    ```yaml linenums="1"
              - toolset: battery-icon
                position:
                  cx: 370
                  cy: 15
                  scale_y: 1.5                      # Make battery taller
                  rotate: 90
                tools:
                  # ------------------------------------------------------------
                  - type: icon
                    position:
                      cx: 50
                      cy: 50
                      align: end
                      icon_size: 30
                    entity_index: 2
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
              name: 'Livingroom #2'
            - entity: binary_sensor.livingroom_movement_occupancy
              secondary_info: last_changed
              format: relative
            - entity: sensor.livingroom_movement_battery
              decimals: 0
          # Define aspect ratio
          aspectratio: 4/1                          # Card is 300x100 grid

          layout:
            styles:
              card:
                # border-radius: 25em
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
                            fill: var(--theme-sys-color-secondary-container)
                      - state: 'off'
                        styles:
                          circle:
                            fill: var(--theme-sys-elevation-surface-neutral2)
                    styles:
                      circle:
                        stroke: none
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
                    animations:
                      - state: 'on'
                        styles:
                          icon:
                            fill: var(--theme-sys-color-secondary)
                      - state: 'off'
                        styles:
                          icon:
                            fill: var(--theme-sys-elevation-surface-neutral10)
                    styles:
                      icon:
                        opacity: 0.9
                    
              # ================================================================
              - toolset: alert-icon
                position:
                  cx: 40
                  cy: 18
                tools:
                  # ------------------------------------------------------------
                  - type: circle
                    position:
                      cx: 50
                      cy: 50
                      radius: 15
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
                      icon_size: 28
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
                    entity_index: 1
                    show:
                      uom: none
                    styles:
                      state:
                        text-anchor: start
                        font-size: 26em
                        font-weight: 500
                        opacity: 0.7

              # ================================================================
              - toolset: battery-icon
                position:
                  cx: 370
                  cy: 15
                  scale_y: 1.5                      # Make battery taller
                  rotate: 90
                tools:
                  # ------------------------------------------------------------
                  - type: icon
                    position:
                      cx: 50
                      cy: 50
                      align: end
                      icon_size: 30
                    entity_index: 2
                    styles:
                      icon:
                        fill: var(--theme-sys-color-tertiary)
                        opacity: 0.5

        ```

##:sak-sak-logo: Usage
For use / re-use, use decluttering card etc.

<!-- Image references -->

[Swiss Army Knife Functional Card Binary Sensor With Alert D06 Dark Off]: ../assets/screenshots/sak-functional-card-12-half-width-binary-sensor-alert-theme-d06-dark-off.png
[Swiss Army Knife Functional Card Binary Sensor With Alert D06 Dark On]: ../assets/screenshots/sak-functional-card-12-half-width-binary-sensor-alert-theme-d06-dark-on.png
[Swiss Army Knife Functional Card Binary Sensor With Alert D06 Light On]: ../assets/screenshots/sak-functional-card-12-half-width-binary-sensor-alert-theme-d06-light-on.png
[Swiss Army Knife Functional Card Binary Sensor With Alert D06 Light Off]: ../assets/screenshots/sak-functional-card-12-half-width-binary-sensor-alert-theme-d06-light-off.png

[Swiss Army Knife Functional Card Binary Sensor With Alert2 D06 Dark Off]: ../assets/screenshots/sak-functional-card-12-half-width-binary-sensor-alert2-theme-d06-dark-off.png
[Swiss Army Knife Functional Card Binary Sensor With Alert2 D06 Dark On]: ../assets/screenshots/sak-functional-card-12-half-width-binary-sensor-alert2-theme-d06-dark-on.png
[Swiss Army Knife Functional Card Binary Sensor With Alert2 D06 Light On]: ../assets/screenshots/sak-functional-card-12-half-width-binary-sensor-alert2-theme-d06-light-on.png
[Swiss Army Knife Functional Card Binary Sensor With Alert2 D06 Light Off]: ../assets/screenshots/sak-functional-card-12-half-width-binary-sensor-alert2-theme-d06-light-off.png

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[ham3-url]: https://material3-themes-manual.amoebelabs.com/
[ham3-c12-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-c12-magenta/