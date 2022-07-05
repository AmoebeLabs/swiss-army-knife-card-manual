---
template: main.html
title: "Functional Cards: Input Boolean Card"
description: Example of functional card, Input Boolean card.
hideno:hideno:
  toc
tags:
  - Design
  - Functional Card
  - Input Boolean Card
---
<!-- GT/GL -->
##:sak-sak-logo: Visualization

![Swiss Army Knife Functional Input Boolean1 D06 Light Off](../assets/screenshots/sak-functional-card-12-input-boolean1-theme-d06-light-off.png){width="300"}
![Swiss Army Knife Functional Input Boolean1 D06 Light On](../assets/screenshots/sak-functional-card-12-input-boolean1-theme-d06-light-on.png){width="300"}
<br>![Swiss Army Knife Functional Input Boolean1 D06 Dark Off](../assets/screenshots/sak-functional-card-12-input-boolean1-theme-d06-dark-off.png){width="300"}
![Swiss Army Knife Functional Input Boolean1 D06 Dark On](../assets/screenshots/sak-functional-card-12-input-boolean1-theme-d06-dark-on.png){width="300"}

This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]

| Description| Aspect Ratio| Target Size |
|-|-|-|
| A card that can toggle an input_boolean, just like toggling a switch or a light | 4/1 | Grid with 2 columns |

| SAK Tool| Used for |
|-|-|
| Circle | The half circle, as the left part of the circle is cutoff by the card. Animated, state dependent|
| Icon | Entity Icon. Animated, state dependent|
| Switch | Switch to indicate and control the state. Animated, state dependent|
| Name | Name of Entity|
| State | Value of entity|

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Left Circle | Toggles the on/off state of the power outlet|
| Card | All tools connected to an entity do show by default the "more-info" dialog once clicked |

##:sak-sak-logo: Usage (Not Yet Implemented)
```yaml linenums="1"
- type: custom:decluttering-card
  template: sak_card_input_boolean1
  variables:
    - entity: input_boolean.pump_enabled
    - entity_name: 'Pump Pool Enabled'
```

In the future, SAK will support card templates, and usage would be (I hope) something like:

```yaml linenums="1"
- type: custom:swiss-army-knife-card
  template: sak_card_power_outlet4
  entities:
    - entity: input_boolean.pump_enabled
      name: 'Pump Pool Enabled'
```

##:sak-sak-logo: YAML Example Definition

??? Info "Full definition of card"
    ```yaml linenums="1"
        - type: 'custom:swiss-army-knife-card'
          entities:
            - entity: input_boolean.pump_enabled
              name: 'Pump Pool Enable'
          # Define aspect ratio
          aspectratio: 4/1                          # Card is 300x100 grid

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
                    entity_index: 0
                    animations:
                      - state: 'on'
                        styles:
                          circle:
                            fill: var(--theme-sys-color-primary)
                      - state: 'off'
                        styles:
                          circle:                     # Use as filled tonal button (m3)
                            fill: var(--theme-sys-color-secondary-container)
                    user_actions:
                      tap_action:
                        haptic: light
                        actions:
                          - action: call-service
                            service: input_boolean.toggle
                    styles:
                      circle:
                        stroke: none
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
                        opacity: 0.9
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
                    entity_index: 0
                    user_actions:
                      tap_action:
                        haptic: light
                        actions:
                          - action: call-service
                            service: input_boolean.toggle
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
                    entity_index: 0
                    show:
                      uom: none
                    styles:
                      state:
                        text-anchor: start
                        font-size: 26em
                        font-weight: 500
                        opacity: 0.7

    ```
<!-- Image references -->

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md
[Swiss Army Knife Functional Card Sensor2]: functional-card-sensor2-card.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
