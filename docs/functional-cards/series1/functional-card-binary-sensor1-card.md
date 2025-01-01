---
template: main.html
title: "Functional Cards: Binary Sensor Card"
description: Example of functional card, Binary Sensor
hideno:
  toc
tags:
  - Design
  - Functional Card
  - Binary Card
---
<!-- GT/GL -->

<div class="grid cards" markdown>

-   :sak-sak-logo:{ .lg .middle } __State *"Off"*__

    ---
    ![Swiss Army Knife Functional Card Binary Sensor1 D06 Light Off](../../assets/screenshots/sak-functional-card-12-binary-sensor1-theme-d06-light-off.png#only-light){width="300"}
    <br>![Swiss Army Knife Functional Card Binary Sensor1 D06 Dark Off](../../assets/screenshots/sak-functional-card-12-binary-sensor1-theme-d06-dark-off.png#only-dark){width="300"}

-   :sak-sak-logo:{ .lg .middle } __State *"On"*__

    ---  

    ![Swiss Army Knife Functional Card Binary Sensor1 D06 Light On](../../assets/screenshots/sak-functional-card-12-binary-sensor1-theme-d06-light-on.png#only-light){width="600"}
    <br>![Swiss Army Knife Functional Card Binary Sensor1 D06 Dark On](../../assets/screenshots/sak-functional-card-12-binary-sensor1-theme-d06-dark-on.png#only-dark){width="300"}
</div>
This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]

| Description| Aspect Ratio| Target Size |
|-|-|-|
| A card that shows the state of a binary sensor| 4/1 | Grid with 2 columns |

| SAK Tool| Used for |
|-|-|
| Circle | The half circle, as the left part of the circle is cutoff by the card. Animated, state dependent|
| Icon | Entity Icon. Animated, state dependent. Can spin if configured |
| Name | Name of Entity|
| State | Value of Entity |

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Card | All tools connected to an entity do show by default the "more-info" dialog once clicked |

##:sak-sak-logo: Usage
[:octicons-tag-24: 1.0.0-rc.3][github-releases]

!!! warning "Replace example entities with your entities!"

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: light.livingroom_light_duo_right_light
      name: 'Pump Pool'
      icon: mdi:pump
  layout:
    template:
      name: sak_layout_fce_binary

########################################################################

- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: light.livingroom_light_duo_right_light
      name: 'Pump Pool'
      icon: mdi:pump
  layout:
    template:
      name: sak_layout_fce_binary
      variables:
        - sak_layout_binary_icon_spin: true
```

| Data | Default| Required | Description |
|-|-|-|-|
| entities |  | :material-check: | The single entity on the card |
| sak_layout_binary_icon_spin | false | :material-close: | Spin the icon or not in state 'on' |

##:sak-sak-logo: YAML Template Definition
[:octicons-tag-24: 1.0.0-rc.3][github-releases]
??? Info "Full definition of layout template"
    ```yaml linenums="1"
    sak_layout_fce_binary:
      template:
        type: layout
        defaults: 
          - sak_layout_binary_icon_spin: false
      layout:
        aspectratio: 4/1
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
                      circle:
                        fill: var(--theme-sys-elevation-surface-neutral4)
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
                # Define template variable for this icon tool, so it can be
                # processed by a piece of JavaScript ;-)
                # The template engine will replace the variable!
                variables:
                  sak_layout_binary_icon_spin : '[[sak_layout_binary_icon_spin]]'
                animations:
                  - state: 'on'
                    styles:
                      icon:
                        # Use template variable as the source to spin or not.
                        # the config JavaScript parameter is this tools config...
                        animation: >
                          [[[ if (tool_config.variables.sak_layout_binary_icon_spin) return "spin 3s linear infinite";
                              return "";
                          ]]]
                        fill: var(--primary-background-color)
                  - state: 'off'
                    styles:
                      icon:
                        fill: var(--theme-sys-color-secondary)
                styles:
                  icon:
                    opacity: 0.9
                
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

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[github-releases]: https://github.com/amoebelabs/swiss-army-knife-card/releases/
