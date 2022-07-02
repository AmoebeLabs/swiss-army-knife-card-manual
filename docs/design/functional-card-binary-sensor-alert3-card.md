---
template: main.html
title: "Functional Cards: Binary Sensor with Alert Card"
description: Example of functional card, Binary Sensor with Alert
hide:
  toc
tags:
  - Design
  - Functional Card
  - Binary Card with Alert
---
<!-- GT/GL -->

![Swiss Army Knife Functional Card Binary Sensor With Alert3 D06 Light Off](../assets/screenshots/sak-functional-card-12-binary-sensor-alert3-theme-d06-light-off.png){width="200"}
![Swiss Army Knife Functional Card Binary Sensor With Alert3 D06 Light On](../assets/screenshots/sak-functional-card-12-binary-sensor-alert3-theme-d06-light-on.png){width="200"}
<br>![Swiss Army Knife Functional Card Binary Sensor With Alert3 D06 Dark Off](../assets/screenshots/sak-functional-card-12-binary-sensor-alert3-theme-d06-dark-off.png){width="200"}
![Swiss Army Knife Functional Card Binary Sensor With Alert3 D06 Dark On](../assets/screenshots/sak-functional-card-12-binary-sensor-alert3-theme-d06-dark-on.png){width="200"}

This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]

| Description| Aspectratio| Target Size |
|-|-|-|
| A card that shows the state of a binary sensor, including an icon as an alert. <br>Nice for doors, windows and occupancy alerts.| 3/1 | Grid with 3 columns |

| SAK Tool| Used for |
|-|-|
| Badge | Background of card. Left part is animated, state dependent|
| Icon | Entity Icon. Animated, state dependent. Red if active|
| Name | Name of Entity|
| State | Secondary Info of Entity|
| Icon | Normal battery Icon in the upper left corner of the card. Animated, state dependent. Becomes yellow or blinking red if battery almost dead|

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Card | All tools connected to an entity do show by default the "more-info" dialog once clicked |

##:sak-sak-logo: Usage
If the below YAML example definition is encapsulated into a decluttering_template, its usage would be:

```yaml linenums="1"
- type: custom:decluttering-card
  template: sak_card_binary_sensor_alert3
  variables:
    - ...
```

In the future, SAK will support card templates, and usage would be (I hope) something like:


```yaml linenums="1"
- type: custom:swiss-army-knife-card
  template: sak_card_binary_sensor_alert3
  entities:
    - entity: binary_sensor.livingroom_movement_occupancy
      name: 'Fire 2nd'
    - entity: binary_sensor.livingroom_movement_occupancy
      secondary_info: last_changed
      format: relative
    - entity: sensor.livingroom_movement_battery
      decimals: 0
```

##:sak-sak-logo: YAML Example Definition

??? Info "Full definition of card"
    ```yaml linenums="1"
        - type: 'custom:swiss-army-knife-card'
          entities:
            - entity: binary_sensor.livingroom_movement_occupancy
              name: 'Fire 2nd'
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
<!-- Image references -->

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
