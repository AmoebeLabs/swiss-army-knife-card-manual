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

These cards are meant to be used 3 in a row. So the below example has two filler cards to complement the single card in this horizontal row.
These cards have no fixed size, so fill up the available space.

![Swiss Army Knife Functional Card Switch Sensor D06 Light Off]
![Swiss Army Knife Functional Card Switch Sensor D06 Light On]
![Swiss Army Knife Functional Card Switch Sensor D06 Dark Off]

##:sak-sak-logo: Description
This card is a minimal card which can switch a binary sensor. Either a switch or a light entity in most cases.

####Card:

- Badge is background of card
- Icon
- Line below as button indicator
- Entity name
- Entity state below it

##:sak-sak-logo: YAML Definition

### Card Background
The Badge tool is used for the background, and this time as interaction area. The left part is used to switch the entity.
Interaction is on whole tool, but right part is disabled using `pointer-events: none`.

```yaml linenums="1"
              - toolset: test
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
                            fill: var(--theme-sys-palette-primary30)
                      - state: 'off'
                        styles:
                          left:
                            fill: var(--theme-sys-elevation-surface-neutral4)
                    styles:
                      left:
                        fill: grey
                      right:
                        fill: none
                        pointer-events: none

```

### Entity Icon and "Switch" on Left part of Badge
On the left I placed the entity icon, and a line as indication that this part is used as a switch to toggle the Fan.

```yaml linenums="1"
              - toolset: colomn-icon
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
                            fill: var(--primary-text-color)
                            opacity: 0.9
                    styles:
                      icon:
                        fill: var(--primary-background-color)
                        opacity: 0.9
                        pointer-events: none

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
                            stroke: var(--primary-background-color)
                            stroke: var(--theme-sys-palette-primary90)
                      - state: 'off'
                        styles:
                          line:
                            stroke: var(--theme-sys-palette-primary30)
                    styles:
                      line:
                        stroke-width: 6em
```
### Name and state

```yaml linenums="1"
              - toolset: colomn-name
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
              - toolset: test
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
                            fill: var(--theme-sys-palette-primary30)
                      - state: 'off'
                        styles:
                          left:
                            fill: var(--theme-sys-elevation-surface-neutral4)
                    styles:
                      left:
                        fill: grey
                      right:
                        fill: none
                        pointer-events: none

              # ================================================================
              - toolset: colomn-icon
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
                            fill: var(--primary-text-color)
                            opacity: 0.9
                    styles:
                      icon:
                        fill: var(--primary-background-color)
                        opacity: 0.9
                        pointer-events: none
                        # transition: fill 1s ease

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
                            stroke: var(--primary-background-color)
                            stroke: var(--theme-sys-palette-primary90)
                      - state: 'off'
                        styles:
                          line:
                            stroke: var(--theme-sys-palette-primary30)
                    styles:
                      line:
                        stroke-width: 6em

                    
              # ================================================================
              - toolset: colomn-name
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
    ```

##:sak-sak-logo: Usage
For use / re-use, use decluttering card etc.

<!-- Image references -->

[Swiss Army Knife Functional Card Switch Sensor D06 Dark Off]: ../assets/screenshots/sak-functional-card-12-third-width-switch-sensor-theme-d06-dark-off.png
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