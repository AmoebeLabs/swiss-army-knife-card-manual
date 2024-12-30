---
template: main.html
title: "Functional Cards: Light Card"
description: "Example of functional card, Light Card"
hideno:
  toc
tags:
  - Design
  - Functional Card
  - Light Card
---
<!-- GT/GL -->

![Swiss Army Knife Functional Card Light D06 Light Off](../../assets/screenshots/sak-functional-card-12-light-theme-d06-light-off.png){width="300"}
![Swiss Army Knife Functional Card Light D06 Light On](../../assets/screenshots/sak-functional-card-12-light-theme-d06-light-on.png){width="300"}
<br>![Swiss Army Knife Functional Card Light D06 Dark Off](../../assets/screenshots/sak-functional-card-12-light-theme-d06-dark-off.png){width="300"}
![Swiss Army Knife Functional Card Light D06 Dark On](../../assets/screenshots/sak-functional-card-12-light-theme-d06-dark-on.png){width="300"}

This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]

!!! info "This light card and the light card with slider are kept almost identical"
    This means you can mix lights with and without brightness slider, as their size is the same.
    
| Description| Aspect Ratio| Target Size |
|-|-|-|
| A card that can control a light| 4/1 | Grid with 2 columns |

| SAK Tool| Used for |
|-|-|
| Circle | The half circle, as the left part of the circle is cutoff by the card. Animated, state dependent|
| Icon | Entity Icon. Animated, state dependent|
| Switch | The Switch to toggle the light|
| Name | Name of Entity|
| State | Value of Entity|

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Left part | Toggles the light once tapped|
| Other parts | All tools connected to an entity do show by default the "more-info" dialog once clicked |

##:sak-sak-logo: Usage
[:octicons-tag-24: 1.0.0-rc.3][github-releases]

!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: light.1st_floor_hall_light
      name: 'Light'
      icon: mdi:dome-light
  layout:
    template:
      name: sak_layout_fce_light
```

| Data | Default| Required | Description |
|-|-|-|-|
| entities |  | :material-check: | The single entity on the card |
| sak_layout_light_toggle_service | true | :material-close: | The actual service to call to toggle the light. If you have a switch to control the light, the `light.toggle` service won't work and you have to replace this with `switch.toggle` |

##:sak-sak-logo: YAML Template Definition
[:octicons-tag-24: 1.0.0-rc.3][github-releases]
??? Info "Full definition of layout template"
    ```yaml linenums="1"
    sak_layout_fce_light:
      template:
        type: layout
        defaults: 
          - sak_layout_light_toggle_service: light.toggle
      layout:
        aspectratio: 3/1
        toolsets:
          # ================================================================
          - toolset: column-icon
            position:
              cx: 0
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
                        fill: var(--theme-sys-color-secondary-container)
                user_actions:
                  tap_action:
                    haptic: light
                    actions:
                      - action: call-service
                        service: light.toggle
                styles:
                  circle:
                    fill: var(--theme-sys-color-secondary-container)
                    stroke: var(--theme-sys-color-secondary)
                    stroke-width: 0em

              # ------------------------------------------------------------
              - type: icon
                position:
                  cx: 75
                  cy: 50
                  align: center
                  icon_size: 30
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
                entity_index: 0
                user_actions:
                  tap_action:
                    haptic: light
                    actions:
                      - action: call-service
                        service: '[[sak_layout_light_toggle_service]]'
                styles:
                  track:
                    --switch-checked-track-color: var(--primary-background-color)
                    --switch-unchecked-track-color: var(--theme-sys-color-secondary)
                    # --switch-checked-button-color: 
                  thumb:
                    --thumb-stroke: 'var(--primary-background-color)'
                    
          # ================================================================
          - toolset: column-name
            position:
              cx: 70
              cy: 50
            tools:
              # ------------------------------------------------------------
              - type: name
                position:
                  cx: 50
                  cy: 30
                entity_index: 0
                styles:
                  name:
                    text-anchor: start
                    font-size: 25em
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
                    font-size: 20em
                    font-weight: 500
                    opacity: 0.7
    ```
<!-- Image references -->

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[github-releases]: https://github.com/amoebelabs/swiss-army-knife-card/releases/
