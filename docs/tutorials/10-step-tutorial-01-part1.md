---
template: main.html
title: "Tutorial #1, Part 1"
description: In this 10 step tutorial, you learn how to make a square card with a circle, and on top of that an icon, state and name of an entity.
hide:
  toc
tags:
  - Tutorials
  - 10 Steps or less
---

#Tutorial \#1, Part 1

In this part, you will learn to make the following square card:![10-step-tutorial-01-part1-step-10]

##:sak-sak-logo: Step 1: Create the yml view file
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
- Create `view-tutorial-basic-series01-part1.yml` in the `lovelace/views/sak-tutorial-views/` folder.
- Add it to the `sak-tutorials-dashboard.yaml` in your root folder.
</div>

<div class="grid-item" markdown>
</div>
</div>

##:sak-sak-logo: Step 2: define the view basics
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1"
title: TUT-01-P1
path: tut-01-p1
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
```
</div>

<div class="grid-item" markdown>
</div>
</div>

      
##:sak-sak-logo: Step 3: Define a square card with 1 entity

You should replace the `sensor.humidity` with a sensor of your own.

<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="9-13"
title: TUT-01-P1
path: tut-01-p1
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          aspectratio: 1/1
          entities: 
            - entity: sensor.humidity
              name: Study
```
</div>

<div class="grid-item" markdown>
</div>
</div>

##:sak-sak-logo: Step 4: Add the layout and toolsets part
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="14-20"
title: TUT-01-P1
path: tut-01-p1
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          aspectratio: 1/1
          entities: 
            - entity: sensor.humidity
              name: Study
          layout:
            toolsets:
              - toolset: just-a-name
                position:
                  cx: 50
                  cy: 50
                tools:
```
</div>

<div class="grid-item" markdown>
</div>
</div>

##:sak-sak-logo: Step 5: Add a circle tool
Add a [Circle tool][circle-tool] centered on the card with a radius of 45.

<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="21-25"
title: TUT-01-P1
path: tut-01-p1
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          aspectratio: 1/1
          entities: 
            - entity: sensor.humidity
              name: Study
          layout:
            toolsets:
              - toolset: just-a-name
                position:
                  cx: 50
                  cy: 50
                tools:
                  - type: circle
                    position:
                      cx: 50
                      cy: 50
                      radius: 45
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-01-part1-step5]
</div>
</div>

##:sak-sak-logo: Step 6: Make the circle a bit reddish
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="26-32"
title: TUT-01-P1
path: tut-01-p1
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          aspectratio: 1/1
          entities: 
            - entity: sensor.humidity
              name: Study
          layout:
            toolsets:
              - toolset: just-a-name
                position:
                  cx: 50
                  cy: 50
                tools:
                  - type: circle
                    position:
                      cx: 50
                      cy: 50
                      radius: 45
                    styles:
                      circle:
                        stroke-width: 2em
                        stroke: red
                        stroke-opacity: 0.5
                        fill: bisque
                        fill-opacity: 0.5
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-01-part1-step6]
</div>
</div>

##:sak-sak-logo: Step 7: Add an icon
Add an [Entity Icon tool][entity-icon-tool] horizontally centered and vertically above the center and give it a size of 25 (25% of the 100x100 grid) and center it on that position.
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="33-39"
title: TUT-01-P1
path: tut-01-p1
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          aspectratio: 1/1
          entities: 
            - entity: sensor.humidity
              name: Study
          layout:
            toolsets:
              - toolset: just-a-name
                position:
                  cx: 50
                  cy: 50
                tools:
                  - type: circle
                    position:
                      cx: 50
                      cy: 50
                      radius: 45
                    styles:
                      circle:
                        stroke-width: 2em
                        stroke: red
                        stroke-opacity: 0.5
                        fill: bisque
                        fill-opacity: 0.5
                  - type: icon
                    position:
                      cx: 50
                      cy: 25
                      align: center
                      icon_size: 25
                    entity_index: 0
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-01-part1-step7]
</div>

</div>

##:sak-sak-logo: Step 8: Add the state
Add an [Entity State tool][entity-state-tool] horizontally centered and vertically below the center and give it a font size of 15em (15% of the 100x100 grid).

!!! Note "An entity state tool _MUST_ have a font-size!"

<div class="grid-container-2" markdown>
<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="40-47"
title: TUT-01-P1
path: tut-01-p1
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          aspectratio: 1/1
          entities: 
            - entity: sensor.humidity
              name: Study
          layout:
            toolsets:
              - toolset: just-a-name
                position:
                  cx: 50
                  cy: 50
                tools:
                  - type: circle
                    position:
                      cx: 50
                      cy: 50
                      radius: 45
                    styles:
                      circle:
                        stroke-width: 2em
                        stroke: red
                        stroke-opacity: 0.5
                        fill: bisque
                        fill-opacity: 0.5
                  - type: icon
                    position:
                      cx: 50
                      cy: 25
                      align: center
                      icon_size: 25
                    entity_index: 0
                  - type: state
                    position:
                      cx: 50
                      cy: 70
                    entity_index: 0
                    styles:
                      state:
                        font-size: 15em
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-01-part1-step8]
</div>

</div>

##:sak-sak-logo: Step 9: Add the name
Add an [Entity Name tool][entity-name-tool] horizontally and vertically centered.

<div class="grid-container-2" markdown>
<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="48-52"
title: TUT-01-P1
path: tut-01-p1
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          aspectratio: 1/1
          entities: 
            - entity: sensor.humidity
              name: Study
          layout:
            toolsets:
              - toolset: just-a-name
                position:
                  cx: 50
                  cy: 50
                tools:
                  - type: circle
                    position:
                      cx: 50
                      cy: 50
                      radius: 45
                    styles:
                      circle:
                        stroke-width: 2em
                        stroke: red
                        stroke-opacity: 0.5
                        fill: bisque
                        fill-opacity: 0.5
                  - type: icon
                    position:
                      cx: 50
                      cy: 25
                      align: center
                      icon_size: 25
                    entity_index: 0
                  - type: state
                    position:
                      cx: 50
                      cy: 70
                    entity_index: 0
                    styles:
                      state:
                        font-size: 15em
                  - type: name
                    position:
                      cx: 50
                      cy: 50
                    entity_index: 0
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-01-part1-step9]
</div>
</div>

##:sak-sak-logo: Step 10: Format the name
<div class="grid-container-2" markdown>
<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="53-56"
title: TUT-01-P1
path: tut-01-p1
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          aspectratio: 1/1
          entities: 
            - entity: sensor.humidity
              name: Study
          layout:
            toolsets:
              - toolset: just-a-name
                position:
                  cx: 50
                  cy: 50
                tools:
                  - type: circle
                    position:
                      cx: 50
                      cy: 50
                      radius: 45
                    styles:
                      circle:
                        stroke-width: 2em
                        stroke: red
                        stroke-opacity: 0.5
                        fill: bisque
                        fill-opacity: 0.5
                  - type: icon
                    position:
                      cx: 50
                      cy: 25
                      align: center
                      icon_size: 25
                    entity_index: 0
                  - type: state
                    position:
                      cx: 50
                      cy: 70
                    entity_index: 0
                    styles:
                      state:
                        font-size: 15em
                  - type: name
                    position:
                      cx: 50
                      cy: 50
                    entity_index: 0
                    styles:
                      name:
                        font-size: 15em
                        font-weight: 900
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-01-part1-step10]
</div>

</div>

##:sak-sak-logo: Done!

<!-- Image references -->

[10-step-tutorial-01-part1-step5]: ../assets/screenshots/10-step-tutorial-01-part1-step5.png
[10-step-tutorial-01-part1-step6]: ../assets/screenshots/10-step-tutorial-01-part1-step6.png
[10-step-tutorial-01-part1-step7]: ../assets/screenshots/10-step-tutorial-01-part1-step7.png
[10-step-tutorial-01-part1-step8]: ../assets/screenshots/10-step-tutorial-01-part1-step8.png
[10-step-tutorial-01-part1-step9]: ../assets/screenshots/10-step-tutorial-01-part1-step9.png
[10-step-tutorial-01-part1-step10]: ../assets/screenshots/10-step-tutorial-01-part1-step10.png

<!-- Internal references -->

[entity-icon-tool]: ../tools/entity-icon-tool.md
[circle-tool]: ../tools/circle-tool.md
[entity-name-tool]: ../tools/entity-name-tool.md
[entity-state-tool]: ../tools/entity-state-tool.md
