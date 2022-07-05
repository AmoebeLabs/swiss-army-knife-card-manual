---
template: main.html
title: "Functional Cards: AirVisual Sensor #2"
description: "Example of functional card, AirVisual sensor #2."
hideno:
  toc
tags:
  - Design
  - Functional Card
  - AirVisual Card
---
<!-- GT/GL -->
##:sak-sak-logo: Visualization

![Swiss Army Knife Functional AirVisual2 D06 Light](../assets/screenshots/sak-functional-card-12-airvisual2-theme-d06-light.png){width="300"}
<br>![Swiss Army Knife Functional AirVisual2 D06 Dark](../assets/screenshots/sak-functional-card-12-airvisual2-theme-d06-dark.png){width="300"}

This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]

!!! info "This card is (again) based on the [Sensor Card \#2][Swiss Army Knife Functional Card Sensor2]. But instead of an icon it shows an external SVG"

| Description| Aspect Ratio| Target Size |
|-|-|-|
| A card that displays data from AirVisual. <br>Both the current data, as a 24 hour history is shown | 3/1 | Grid with 2 columns |

| SAK Tool| Used for |
|-|-|
| Circle | The half circle, as the left part of the circle is cutoff by the card. Animated, state dependent using the AirVisual colorstop|
| UserSvg | External SVG showing the AQI faces. Animated, state dependent|
| SegArc | Segmented Arc showing the current AQI state using the AirVisual colorstop|
| State | Value of entity|
| Name | Name of Entity|
| Bar | Shows the 24 hour history in the background|

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Card | All tools connected to an entity do show by default the "more-info" dialog once clicked |

##:sak-sak-logo: Usage (Not Yet Implemented)
If the below YAML example definition is encapsulated into a decluttering_template, its usage would be:

```yaml linenums="1"
- type: custom:decluttering-card
  template: sak_card_airvisual2
  variables:
    - entity_quality: sensor.u_s_air_quality_index
    - entity_quality_name: 'Tha Moon'
    - entity_pollution: entity: sensor.u_s_air_pollution_level
```

In the future, SAK will support card templates, and usage would be (I hope) something like:


```yaml linenums="1"
- type: custom:swiss-army-knife-card
  template: sak_card_airvisual2
  entities:
    - entity: sensor.u_s_air_quality_index
      name: 'Tha Moon'
```

##:sak-sak-logo: YAML Example Definition

??? Info "Full definition of card"
    ```yaml linenums="1"
        - type: 'custom:swiss-army-knife-card'
          entities:
            - entity: sensor.u_s_air_quality_index
              name: 'Tha Moon'

          # Define aspect ratio
          aspectratio: 3/1                          # Card is 300x100 grid

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
                    show:
                      style: 'colorstops'
                    colorstops:
                      template:
                        name: colorstops_airvisual
                        variables:
                          - thegap: 2
                    styles:
                      circle:
                        stroke: none
                        fill: var(--theme-sys-elevation-surface-neutral4)

                  - type: 'usersvg'
                    id: 2
                    entity_index: 0
                    position:
                      cx: 50
                      cy: 50
                      height: 100
                      width: 100
                    style: 'images'
                    images:
                      - face1: /local/images/airvisual/ic-face-1.svg
                      - face2: /local/images/airvisual/ic-face-2.svg
                      - face3: /local/images/airvisual/ic-face-3.svg
                      - face4: /local/images/airvisual/ic-face-4.svg
                      - face5: /local/images/airvisual/ic-face-5.svg
                      - face6: /local/images/airvisual/ic-face-6.svg
                    animations:
                      - state: '50'
                        operator: <=
                        image: face1
                      - state: '100'
                        operator: <=
                        image: face2
                      - state: '150'
                        operator: <=
                        image: face3
                      - state: '200'
                        operator: <=
                        image: face4
                      - state: '300'
                        operator: <=
                        image: face5
                      - state: '9999'
                        operator: <=
                        image: face6
                        
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
                      max: 300
                      width: 6
                      offset: 12
                    show:
                      scale: false
                      style: 'colorstops'
                      lastcolor: true
                    segments:
                      colorstops:
                        template:
                          name: colorstops_airvisual
                          variables:
                            - thegap: 2
                    styles:
                      foreground:
                        fill: darkgrey
                      background:
                        fill: var(--theme-sys-elevation-surface-neutral4)

              # ================================================================
              - toolset: column-bar
                position:
                  cx: 185                     # 300-70/2 + 70=185
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
                      width: 230              # 300-70=230
                      height: 100
                      margin: 1
                    hours: 24
                    barhours: 1
                    show:
                      style: 'colorstops'
                    colorstops:
                      template:
                        name: colorstops_airvisual
                        variables:
                          - thefill: true
                    styles:
                      bar:
                        stroke-linecap: square
                        opacity: 0.25

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

??? example "Swiss Army Knife AirVisual colorstop template"
    ```yaml linenums="1" title="colorstops-airvisual-template.yaml"
    colorstops_airvisual:
      template:
        type: colorstops
        defaults:
          - thegap: 1
          - theFill: true
          - theStroke: false
      colorstops:
        gap: '[[thegap]]'
        fill: '[[theFill]]'
        stroke: '[[theStroke]]'
        colors:
          0: '#A8E05F'
          51: '#FDD74B'
          101: '#FE9B57'
          151: '#FE6A69'
          201: '#A97ABC'
          301: '#A87383'
    ```

<!-- Image references -->

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md
[Swiss Army Knife Functional Card Sensor2]: functional-card-sensor2-card.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
