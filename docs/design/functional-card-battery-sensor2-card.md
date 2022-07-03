---
template: main.html
title: "Functional Cards: Battery Sensor Card"
description: "Example of functional card, Battery Sensor card"
hide:
  toc
tags:
  - Design
  - Functional Card
  - Battery Level Card
---
<!-- GT/GL -->
##:sak-sak-logo: Visualization

![Swiss Army Knife Functional Card Battery Sensor2 D06 Light]( ../assets/screenshots/sak-functional-card-12-battery-sensor2-theme-d06-light.png){width="600"}
<br>![Swiss Army Knife Functional Card Battery Sensor2 D06 Dark]( ../assets/screenshots/sak-functional-card-12-battery-sensor2-theme-d06-dark.png){width="600"}

This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]

!!! Warning "This card is nothing more than a Sensor Card \#2 with an adjusted colorstop!"
    If the Sensor Card would be a template, the colorstop would be a variable.
    
    Also, one step further: one could add animations (colors) for the Icon itself or the background.

!!! info "The second card has name and state reversed, so now the state (38%) is more prominent than the name of the entity"

| Description| Aspectratio| Target Size |
|-|-|-|
| An example battery sensor level card with segmented arc and history| 4/1 | Grid with 2 columns |

| SAK Tool| Used for |
|-|-|
| Circle | The half circle, as the left part of the circle is cutoff by the card.|
| Icon | Entity Icon.
| SegArc | Segmented Arc with `colorstops-battery-level-template.yaml' colorstop template using 3 Google brand colors (green, yellow, red) |
| Name | Name of Entity|
| State | Value of entity|
| Bar | Shows the 24 hour history in the background|

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Card | All tools connected to an entity do show by default the "more-info" dialog once clicked |

##:sak-sak-logo: Usage
If the below YAML example definition is encapsulated into a decluttering_template, its usage would be:

```yaml linenums="1"
- type: custom:decluttering-card
  template: sak_card_battery-sensor2
  variables:
    - entity: sensor.ipad_battery_level
    - entity_name: 'iPad Battery'
```

In the future, SAK will support card templates, and usage would be (I hope) something like:


```yaml linenums="1"
- type: custom:swiss-army-knife-card
  template: sak_card_battery-sensor2
  entities:
    - entity: sensor.ipad_battery_level
      name: 'iPad Battery'
```

##:sak-sak-logo: YAML Example Definition

??? Info "Full definition of second card (iPad Battery)"
    ```yaml linenums="1"
        - type: 'custom:swiss-army-knife-card'
          entities:
            - entity: sensor.ipad_battery_level
              name: 'iPad Battery'
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
                      width: 6
                      radius: 59
                    entity_index: 0
                    scale:
                      min: 0
                      max: 100
                      width: 6
                      offset: 12
                    show:
                      scale: false
                      style: 'colorstops'
                      lastcolor: true
                    segments:
                      colorstops:
                        template:
                          name: colorstops_battery_level
                          variables:
                            - thegap: 2
                    styles:
                      foreground:
                        fill: darkgrey
                      background:
                        fill: var(--theme-sys-elevation-surface-neutral4)

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
                    styles:
                      icon:
                        fill: var(--theme-sys-color-secondary)
                        opacity: 0.9
                    

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
                      cy: 70
                    entity_index: 0
                    styles:
                      name:
                        text-anchor: start
                        font-size: 26em
                        font-weight: 500
                        opacity: 0.7
                  # ------------------------------------------------------------
                  - type: state
                    position:
                      cx: 50
                      cy: 37
                    entity_index: 0
                    styles:
                      state:
                        text-anchor: start
                        font-size: 30em
                        font-weight: 700
    ```

<!-- Image references -->

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
