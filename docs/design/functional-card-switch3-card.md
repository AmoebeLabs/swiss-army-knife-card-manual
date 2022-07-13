---
template: main.html
title: "Functional Cards: Switch #3"
description: "Example of functional card, switch #3"
hideno:
  toc
tags:
  - Design
  - Functional Card
  - Switch Card
---
<!-- GT/GL -->
##:sak-sak-logo: Visualization

![Swiss Army Knife Functional Card Switch Sensor3 D06 Light Off](../assets/screenshots/sak-functional-card-12-switch3-theme-d06-light-off.png){width="200"}
![Swiss Army Knife Functional Card Switch Sensor3 D06 Light On](../assets/screenshots/sak-functional-card-12-switch3-theme-d06-light-on.png){width="200"}
<br>![Swiss Army Knife Functional Card Switch Sensor3 D06 Dark Off](../assets/screenshots/sak-functional-card-12-switch3-theme-d06-dark-off.png){width="200"}
![Swiss Army Knife Functional Card Switch Sensor3 D06 Dark On](../assets/screenshots/sak-functional-card-12-switch3-theme-d06-dark-on.png){width="200"}

This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]

| Description| Aspect Ratio| Target Size |
|-|-|-|
| A simple switch card with the "switch" on the left side of the card | 3/1 | Grid with 3 columns |

| SAK Tool| Used for |
|-|-|
| Badge | Background of card. Left part is animated, state dependent|
| Icon | Entity Icon. Animated, state dependent|
| Switch | To indicate that this part is the switch. Animated, state dependent|
| Name | Name of Entity|
| State | Secondary Info of Entity|

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Left part of badge | The whole left part functions as a button to toggle the switch |
| Right part of badge | All tools connected to an entity do show by default the "more-info" dialog once clicked |

##:sak-sak-logo: Usage
[:octicons-tag-24: 1.0.0-rc.3][github-releases]

!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: light.livingroom_light_duo_right_light
      name: 'Switch #3'
      icon: mdi:fan
    - entity: light.livingroom_light_duo_right_light
      secondary_info: last_changed
      format: relative
  layout:
    template:
      name: sak_layout_fce_switch3
      variables:
        - sak_layout_switch_icon_spin: true
```

| Data | Default| Required | Description |
|-|-|-|-|
| entities |  | :material-check: | The two entities on the card |
| sak_layout_switch_icon_spin | false | :material-close: | True to have the icon spin indefinitely |
| sak_layout_switch_service | switch.toggle | :material-close: | You can alter the service, if that is needed... |

##:sak-sak-logo: YAML Template Definition
[:octicons-tag-24: 1.0.0-rc.3][github-releases]
??? Info "Full definition of card"
    ```yaml linenums="1"
    sak_layout_fce_switch3:
      template:
        type: layout
        defaults: 
          - sak_layout_switch_icon_spin: false
          - sak_layout_switch_service: switch.toggle
      layout:
        aspectratio: 3/1
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
                # Define template variable for this icon tool, so it can be
                # processed by a piece of JavaScript ;-)
                # The template engine will replace the variable!
                variables:
                  sak_layout_switch_icon_spin : '[[sak_layout_switch_icon_spin]]'
                animations:
                  - state: 'on'
                    styles:
                      icon:
                        # Use template variable as the source to spin or not.
                        # the config JavaScript parameter is this tools config...
                        animation: >
                          [[[ if (config.variables.sak_layout_switch_icon_spin) return "spin 3s linear infinite";
                              return "";
                          ]]]
                        fill: var(--primary-background-color)
                  - state: 'off'
                    styles:
                      icon:
                        fill: var(--theme-sys-color-secondary)
                styles:
                  icon:
                    fill: var(--primary-background-color)
                    opacity: 0.9
                    pointer-events: none        # Disable user interaction
                    # transition: fill 1s ease

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
                        service: '[[sak_layout_switch_service]]'
                styles:
                  track:
                    --switch-checked-track-color: var(--primary-background-color)
                    --switch-unchecked-track-color: var(--theme-sys-color-secondary)
                    --switch-checked-button-color: var(--primary-color)
                    --switch-unchecked-button-color: var(--primary-background-color)
                    pointer-events: none
                  thumb:
                    --thumb-stroke: 'var(--primary-background-color)'
                    pointer-events: none

          # ================================================================
          - toolset: column-name
            position:
              cx: 100                   # Left part = 75, so 75+(300-75)/2
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
[github-releases]: https://github.com/amoebelabs/swiss-army-knife-card/releases/
