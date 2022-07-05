---
template: main.html
title: "Functional Cards: Power Outlet Card #4"
description: "Example of functional card, power outlet card #4"
hideno:
  toc
tags:
  - Design
  - Functional Card
  - Power Outlet Card
---
<!-- GT/GL -->
##:sak-sak-logo: Visualization

[Swiss Army Knife Functional Card Power Outlet2 D06 Light Off]: ../assets/screenshots/sak-functional-card-12-half-width-power-outlet2-theme-d06-light-off.png

![Swiss Army Knife Functional Card Power Outlet4 D06 Light Off]( ../assets/screenshots/sak-functional-card-12-power-outlet4-theme-d06-light-off.png){width="300"}
![Swiss Army Knife Functional Card Power Outlet4 D06 Light On]( ../assets/screenshots/sak-functional-card-12-power-outlet4-theme-d06-light-on.png){width="300"}
<br>![Swiss Army Knife Functional Card Power Outlet4 D06 Dark Off]( ../assets/screenshots/sak-functional-card-12-power-outlet4-theme-d06-dark-off.png){width="300"}
![Swiss Army Knife Functional Card Power Outlet4 D06 Dark On]( ../assets/screenshots/sak-functional-card-12-power-outlet4-theme-d06-dark-on.png){width="300"}

This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]

| Description| Aspect Ratio| Target Size |
|-|-|-|
| A card that controls the on/off state of a power outlet, but also displays the power value. <br>Both using a segmented arc and as state.<br>The 24 hour history is shown in the background| 4/1 | Grid with 2 columns |

| SAK Tool| Used for |
|-|-|
| Circle | The half circle, as the left part of the circle is cutoff by the card. Animated, state dependent|
| Icon | Entity Icon. Animated, state dependent|
| Switch | Switch to indicate and control the state. Animated, state dependent|
| SegArc | Minimalistic implementation of segmented arc showing the sensors state with a single color|
| Name | Name of Entity|
| State | Value of entity|
| Bar | Shows the 24 hour history in the background|

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Left Circle | Toggles the on/off state of the power outlet|
| Card | All tools connected to an entity do show by default the "more-info" dialog once clicked |

##:sak-sak-logo: Usage (Not Yet Implemented)
If the below YAML example definition is encapsulated into a decluttering_template, its usage would be:

```yaml linenums="1"
- type: custom:decluttering-card
  template: sak_card_power_outlet4
  variables:
    - entity: sensor.dsmr_reading_electricity_currently_delivered
    - entity_name: 'Power Usage Total'
```

In the future, SAK will support card templates, and usage would be (I hope) something like:


```yaml linenums="1"
- type: custom:swiss-army-knife-card
  template: sak_card_power_outlet4
  entities:
    - entity: sensor.dsmr_reading_electricity_currently_delivered
      name: 'Power Usage Total'
```

##:sak-sak-logo: YAML Example Definition

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

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/

