---
template: main.html
title: "Tutorial 4: Use template from Tutorial 3"
description: In this 10 step tutorial, you learn how to make toolset template based on the 2nd tutorial.
hide:
  toc
tags:
  - Tutorials
  - 10 Steps or less
---
#Tutorial \#3, Part 1
                       
In this tutorial, we are going to make the following basic card:
![10-step-tutorial-03-part1-step10]

Such a card is part of [Example 4][example 4], second row of cards.

##:sak-sak-logo: Prerequisites
This tutorial requires:

- The "NM - Gonsboro" theme to be downloaded in the theme folder. It uses some color definitions from that theme.
 
##:sak-sak-logo: Step 1: Create the yml view file
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
- Create `view-tutorial-03-part1.yml` in the `lovelace/views/sak-tutorial-views/` folder.
- Add it to the `sak-tutorials-dashboard.yaml` in your root folder.
</div>

<div class="grid-item" markdown>
</div>
</div>

##:sak-sak-logo: Step 2: Define the view basics, card, entities and layout
We are going to use a lux sensor. But you can use any other sensor, as long as it has history. So a temperature or humidity sensor is also ok.

<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1"
title: TUT-03-P1
path: tut-03-p1
theme: 'NM - Gonsboro'
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          entities:
            # Lux
            - entity: sensor.illuminance
              decimals: 0
              icon: mdi:alarm-light-outline
              name: 'Study'
          aspectratio: 1/1
          layout:

```
</div>

<div class="grid-item" markdown>
</div>
</div>

      
##:sak-sak-logo: Step 3a: Define card background

Actions:

- Add a rectangle covering the card completely as a kind of card background.

<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="26-47"
title: TUT-03-P1
path: tut-03-p1
theme: 'NM - Gonsboro'
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          entities:
            # Lux
            - entity: sensor.illuminance
              decimals: 0
              icon: mdi:alarm-light-outline
              name: 'Study'
          aspectratio: 1/1
          layout:
            toolsets:
              - toolset: lux
                position:
                  cx: 50
                  cy: 50
                  scale: 1
                tools:
                  # Card Background
                  # ---------------------------------------------
                  - type: rectex
                    position:
                      cx: 50
                      cy: 50
                      width: 100
                      height: 100
                    styles:
                      rectex:
                        fill: var(--theme-gradient-color-01)
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-03-part1-step3a]
</div>
</div>

##:sak-sak-logo: Step 3b: Define darker top part

Actions:

- Add a second rectangle covering the top part of the card background.

<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="30-40"
title: TUT-03-P1
path: tut-03-p1
theme: 'NM - Gonsboro'
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          entities:
            # Lux
            - entity: sensor.illuminance
              decimals: 0
              icon: mdi:alarm-light-outline
              name: 'Study'
          aspectratio: 1/1
          layout:
            toolsets:
              - toolset: lux
                position:
                  cx: 50
                  cy: 50
                  scale: 1
                tools:
                  # Card Background
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # Top part
                  # ---------------------------------------------
                  - type: rectex
                    position:
                      cx: 50
                      cy: 20
                      width: 100
                      height: 40
                    styles:
                      rectex:
                        fill: var(--theme-gradient-color-03)
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-03-part1-step3b]
</div>
</div>

##:sak-sak-logo: Step 4: Add extra 'neck' background
Actions:

- Add a third rectangle as a kind of neck

<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="34-44"
title: TUT-03-P1
path: tut-03-p1
theme: 'NM - Gonsboro'
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          entities:
            # Lux
            - entity: sensor.illuminance
              decimals: 0
              icon: mdi:alarm-light-outline
              name: 'Study'
          aspectratio: 1/1
          layout:
            toolsets:
              - toolset: lux
                position:
                  cx: 50
                  cy: 50
                  scale: 1
                tools:
                  # Card Background
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # Top part
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # Neck to connect two parts
                  # ---------------------------------------------
                  - type: rectex
                    position:
                      cx: 50
                      cy: 33
                      width: 80
                      height: 15
                    styles:
                      rectex:
                        fill: var(--theme-gradient-color-01)

```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-03-part1-step4]
</div>
</div>


##:sak-sak-logo: Step 5: Add background for State and Icon

Actions:

- Add another `rectex` tool. This time with `top_radius: 5` to get round corners at the topside of the rectangle.

<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="38-50"
title: TUT-03-P1
path: tut-03-p1
theme: 'NM - Gonsboro'
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          entities:
            # Lux
            - entity: sensor.illuminance
              decimals: 0
              icon: mdi:alarm-light-outline
              name: 'Study'
          aspectratio: 1/1
          layout:
            toolsets:
              - toolset: lux
                position:
                  cx: 50
                  cy: 50
                  scale: 1
                tools:
                  # Card Background
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # Top part
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # Background for Name and Bar
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # State and Icon background
                  # ---------------------------------------------
                  - type: rectex
                    position:
                      cx: 50
                      cy: 18
                      width: 80
                      height: 16
                      radius:
                        top: 5
                    styles:
                      rectex:
                        fill: var(--theme-gradient-color-02)
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-03-part1-step5]
</div>
</div>

##:sak-sak-logo: Step 6: Add state
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="42-55"
title: TUT-03-P1
path: tut-03-p1
theme: 'NM - Gonsboro'
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          entities:
            # Lux
            - entity: sensor.illuminance
              decimals: 0
              icon: mdi:alarm-light-outline
              name: 'Study'
          aspectratio: 1/1
          layout:
            toolsets:
              - toolset: lux
                position:
                  cx: 50
                  cy: 50
                  scale: 1
                tools:
                  # Card Background
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # Top part
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # Background for Name and Bar
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # State and Icon background
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # ---------------------------------------------
                  - type: state
                    position:
                      cx: 35
                      cy: 18
                    entity_index: 0
                    styles:
                      state:
                        font-size: 12em
                        font-weight: 700
                        fill: black
                      uom:
                        fill: black
                        font-weight: 700
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-03-part1-step6]
</div>
</div>

##:sak-sak-logo: Step 7: Add vertical line as separator
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="48-59"
title: TUT-03-P1
path: tut-03-p1
theme: 'NM - Gonsboro'
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          entities:
            # Lux
            - entity: sensor.illuminance
              decimals: 0
              icon: mdi:alarm-light-outline
              name: 'Study'
          aspectratio: 1/1
          layout:
            toolsets:
              - toolset: lux
                position:
                  cx: 50
                  cy: 50
                  scale: 1
                tools:
                  # Card Background
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # Top part
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # Background for Name and Bar
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # State and Icon background
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # ---------------------------------------------
                  - type: state
                    # Removed for brevity
                  # ---------------------------------------------
                  - type: state
                    # Removed for brevity
                  # ---------------------------------------------
                  - type: line
                    position:
                      cx: 60
                      cy: 18
                      length: 10
                      orientation: vertical
                    styles:
                      line:
                        stroke: black
                        stroke-opacity: 0.5
                        stroke-width: 3
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-03-part1-step7]
</div>
</div>

##:sak-sak-logo: Step 8: Add Icon tool
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="48-58"
title: TUT-03-P1
path: tut-03-p1
theme: 'NM - Gonsboro'
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          entities:
            # Lux
            - entity: sensor.illuminance
              decimals: 0
              icon: mdi:alarm-light-outline
              name: 'Study'
          aspectratio: 1/1
          layout:
            toolsets:
              - toolset: lux
                position:
                  cx: 50
                  cy: 50
                  scale: 1
                tools:
                  # Card Background
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # Top part
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # Background for Name and Bar
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # State and Icon background
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # ---------------------------------------------
                  - type: state
                    # Removed for brevity
                  # ---------------------------------------------
                  - type: line
                    # Removed for brevity
                  # ---------------------------------------------
                  - type: icon
                    position:
                      cx: 75
                      cy: 18
                      align: center
                      icon_size: 12
                    entity_index: 0
                    styles:
                      icon:
                        fill: black

```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-03-part1-step8]
</div>
</div>



##:sak-sak-logo: Step 9: Add entity name tool

Actions:

- Add an entity name tool

<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="51-61"
title: TUT-03-P1
path: tut-03-p1
theme: 'NM - Gonsboro'
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          entities:
            # Lux
            - entity: sensor.illuminance
              decimals: 0
              icon: mdi:alarm-light-outline
              name: 'Study'
          aspectratio: 1/1
          layout:
            toolsets:
              - toolset: lux
                position:
                  cx: 50
                  cy: 50
                  scale: 1
                tools:
                  # Card Background
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # Top part
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # Background for Name and Bar
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # State and Icon background
                  # ---------------------------------------------
                  - type: rectex
                    # Removed for brevity
                  # ---------------------------------------------
                  - type: state
                    # Removed for brevity
                  # ---------------------------------------------
                  - type: line
                    # Removed for brevity
                  # ---------------------------------------------
                  - type: icon
                    # Removed for brevity
                  # ---------------------------------------------
                  - type: name
                    position:
                      cx: 50
                      cy: 50
                    entity_index: 0
                    styles:
                      name:
                        font-size: 10em
                        font-weight: 700
                        fill: black
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-03-part1-step9]
</div>
</div>

##:sak-sak-logo: Step 10: Finalize card by adding the history bar

Actions:

- Add the bar tool to show 24 hour history (`hours: 24`) with 12 bars (`barhours: 2`, ie hours/barhours=12)

<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml title="view-tutorial-03-part1.yml" linenums="1" hl_lines="120-136"
title: TUT-03-P1
path: tut-03-p1
theme: 'NM - Gonsboro'
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          entities:
            # Lux
            - entity: sensor.illuminance
              decimals: 0
              icon: mdi:alarm-light-outline
              name: 'Study'
          aspectratio: 1/1
          layout:
            toolsets:
              - toolset: lux
                position:
                  cx: 50
                  cy: 50
                  scale: 1
                tools:
                  # Card Background
                  # ---------------------------------------------
                  - type: rectex
                    position:
                      cx: 50
                      cy: 50
                      width: 100
                      height: 100
                    styles:
                      rectex:
                        fill: var(--theme-gradient-color-01)
                  # Top part
                  # ---------------------------------------------
                  - type: rectex
                    position:
                      cx: 50
                      cy: 20
                      width: 100
                      height: 40
                    styles:
                      rectex:
                        fill: var(--theme-gradient-color-03)
                  # Background for Name and Bar
                  # ---------------------------------------------
                  - type: rectex
                    position:
                      cx: 50
                      cy: 33
                      width: 80
                      height: 15
                    styles:
                      rectex:
                        fill: var(--theme-gradient-color-01)
                  # State and Icon background
                  # ---------------------------------------------
                  - type: rectex
                    position:
                      cx: 50
                      cy: 18
                      width: 80
                      height: 16
                      radius:
                        top: 5
                    styles:
                      rectex:
                        fill: var(--theme-gradient-color-02)
                  # ---------------------------------------------
                  - type: state
                    position:
                      cx: 35
                      cy: 18
                    entity_index: 0
                    styles:
                      state:
                        font-size: 12em
                        font-weight: 700
                        fill: black
                      uom:
                        fill: black
                        font-weight: 700
                  # ---------------------------------------------
                  - type: line
                    position:
                      cx: 60
                      cy: 18
                      length: 10
                      orientation: vertical
                    styles:
                      line:
                        stroke: black
                        stroke-opacity: 0.5
                        stroke-width: 3
                  # ---------------------------------------------
                  - type: icon
                    position:
                      cx: 75
                      cy: 18
                      align: center
                      icon_size: 12
                    entity_index: 0
                    styles:
                      icon:
                        fill: black
                  # ---------------------------------------------
                  - type: name
                    position:
                      cx: 50
                      cy: 50
                    entity_index: 0
                    styles:
                      name:
                        font-size: 10em
                        font-weight: 700
                        fill: black
                  # ---------------------------------------------
                  - type: bar
                    id: 2
                    entity_index: 0
                    position:
                      orientation: vertical
                      cx: 50
                      cy: 80
                      width: 70
                      height: 25
                      margin: 1.5
                    hours: 24
                    barhours: 2
                    styles:
                      bar:
                        stroke: grey
                        stroke-linecap: butt

```
</div>

<div class="grid-item" markdown>
The final result:
![10-step-tutorial-03-part1-step10]
</div>
</div>


##:sak-sak-logo: Done!

<!-- Image references -->

[10-step-tutorial-03-part1-step3a]: ../assets/screenshots/10-step-tutorial-03-part1-step3a.png
[10-step-tutorial-03-part1-step3b]: ../assets/screenshots/10-step-tutorial-03-part1-step3b.png
[10-step-tutorial-03-part1-step4]: ../assets/screenshots/10-step-tutorial-03-part1-step4.png
[10-step-tutorial-03-part1-step5]: ../assets/screenshots/10-step-tutorial-03-part1-step5.png
[10-step-tutorial-03-part1-step6]: ../assets/screenshots/10-step-tutorial-03-part1-step6.png
[10-step-tutorial-03-part1-step7]: ../assets/screenshots/10-step-tutorial-03-part1-step7.png
[10-step-tutorial-03-part1-step8]: ../assets/screenshots/10-step-tutorial-03-part1-step8.png
[10-step-tutorial-03-part1-step9]: ../assets/screenshots/10-step-tutorial-03-part1-step9.png
[10-step-tutorial-03-part1-step10]: ../assets/screenshots/10-step-tutorial-03-part1-step10.png

[sak-card-toolset-tool-placement]: ../assets/screenshots/sak-card-toolset-tool-placement-bluegrey.png

<!-- Internal references -->
[swiss-army-knife-basic-tool-circle]: ../tools/circle-tool.md "Swiss Army Knife - Circle Tool"
[swiss-army-knife-basic-tool-ellipse]: ../tools/ellipse-tool.md "Swiss Army Knife - Ellipse Tool"
[swiss-army-knife-basic-tool-line]: ../tools/line-tool.md "Swiss Army Knife - Line Tool"
[swiss-army-knife-basic-tool-rectangle]: ../tools/rectangle-tool.md "Swiss Army Knife - Rectangle Tool"
[swiss-army-knife-basic-tool-rectex]: ../tools/rectangle-ex-tool.md "Swiss Army Knife - Rectangle Ex Tool"
[swiss-army-knife-basic-tool-regpoly]: ../tools/regular-poly-tool.md "Swiss Army Knife - Regular Poly Tool"
[swiss-army-knife-basic-tool-text]: ../tools/text-tool.md "Swiss Army Knife - Text Tool"
[swiss-army-knife-advanced-tool-horseshoe]: ../tools/horseshoe-tool.md "Swiss Army Knife - Horse shoe Tool"
[swiss-army-knife-advanced-tool-segarc]: ../tools/segarc-tool.md "Swiss Army Knife - Segmented Arc Tool"
[swiss-army-knife-advanced-tool-slider]: ../tools/slider-tool.md "Swiss Army Knife - Slider Tool"
[swiss-army-knife-advanced-tool-switch]: ../tools/switch-tool.md "Swiss Army Knife - Switch Tool"
[swiss-army-knife-advanced-tool-usersvg]: ../tools/usersvg-tool.md "Swiss Army Knife - User SVG Tool"
[swiss-army-knife-ha-tool-area]: ../tools/entity-area-tool.md "Swiss Army Knife - Entity Area Tool"
[swiss-army-knife-ha-tool-icon]: ../tools/entity-icon-tool.md "Swiss Army Knife - Entity Icon Tool"
[swiss-army-knife-ha-tool-name]: ../tools/entity-name-tool.md "Swiss Army Knife - Entity Name Tool"
[swiss-army-knife-ha-tool-state]: ../tools/entity-state-tool.md "Swiss Army Knife - Entity State Tool"
[swiss-army-knife-ha-tool-bar]: ../tools/entity-barchart-tool.md "Swiss Army Knife - Entity History Bar Tool"

[example 4]: ../examples/example-4.md