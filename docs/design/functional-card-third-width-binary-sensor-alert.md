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

These cards are meant to be used 3 in a row.

![Swiss Army Knife Functional Card Binary Sensor Alert D06 Light Off]
![Swiss Army Knife Functional Card Binary Sensor Alert D06 Light On]
![Swiss Army Knife Functional Card Binary Sensor Alert D06 Dark Off]
![Swiss Army Knife Functional Card Binary Sensor Alert D06 Dark On]

##:sak-sak-logo: Description
These two cards are slightly different, but both show you a binary sensor with an alert. Both assume battery powered devices, as they need a battery state.

####First Card:

- Badge is background of card
- Icon is the alert
- Entity name
- Entity state below it
- Battery state in the upper right corner


####Second Card:

- Badge is background of card
- A separate icon is used as an alert. This icon is only displayed if binary sensor has the state `on`.
- Entity name
- Slightly stretched battery state in the upper right corner

##:sak-sak-logo: YAML Definition First Card

### Card Background
The Badge tool is used for the background.

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

### Entity Icon on Left part of Badge

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

### Entity Name and Entity State
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

### Battery state of Entity in upper-right of Badge
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
              name: 'Fire 1st'
            - entity: binary_sensor.livingroom_movement_occupancy
              secondary_info: last_changed
              format: relative
            - entity: sensor.livingroom_movement_battery
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
                    styles:
                      icon:
                        fill: var(--theme-sys-color-tertiary)
                        opacity: 0.5
                        
              # ================================================================
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

##:sak-sak-logo: YAML Definition Second Card

### Card Background
The Badge tool is used for the background.

??? Success "Toolset definition is the same as the first card"
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

### Entity Icon on Left part of Badge

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

### Alert Icon and Circle
The Alert Icon with background circle.

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

### Entity Name
Just the name. No state below it.
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

### Battery state of Entity in upper-right of Badge
And the slightly stretched battery state. This shows the scale functionality of toolsets!

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
            - entity: sensor.livingroom_movement_battery
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