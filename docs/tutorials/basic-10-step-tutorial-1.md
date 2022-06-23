---
template: main.html
title: "Tutorial 1: Circle with icon, state and name"
description: In this 10 step tutorial, you learn how to make a square card with a circle, and on top of that an icon, state and name of an entity.
tags:
  - Tutorials
  - 10 Steps
---

                       
#Tutorial 1: Circle with icon, state and name

In this tutorial, we are going to make the following square card:![basic-10-step-tutorial-1-step-10]

##:sak-sak-logo: Step 1: Create the yml view file
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
- Create `view-tut-b01.yml`
- Add it to the `sak-examples-view.yaml`
</div>

<div class="grid-item" markdown>
</div>
</div>

##:sak-sak-logo: Step 2: define the view basics
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1"
title: TUT-B01
path: tut-b01
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
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="9-13"
title: TUT-B01
path: tut-b01
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
title: TUT-B01
path: tut-b01
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
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="21-25"
title: TUT-B01
path: tut-b01
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
![basic-10-step-tutorial-1-step-5]
</div>
</div>

##:sak-sak-logo: Step 6: Make the circle a bit reddish
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="26-32"
title: TUT-B01
path: tut-b01
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
![basic-10-step-tutorial-1-step-6]
</div>
</div>

##:sak-sak-logo: Step 7: Add an icon
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="33-39"
title: TUT-B01
path: tut-b01
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
![basic-10-step-tutorial-1-step-7]
</div>

</div>

##:sak-sak-logo: Step 8: Add the state
<div class="grid-container-2" markdown>
<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="40-47"
title: TUT-B01
path: tut-b01
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
![basic-10-step-tutorial-1-step-8]
</div>

</div>

##:sak-sak-logo: Step 9: Add the name
<div class="grid-container-2" markdown>
<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="48-52"
title: TUT-B01
path: tut-b01
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
![basic-10-step-tutorial-1-step-9]
</div>
</div>

##:sak-sak-logo: Step 10: Format the name
<div class="grid-container-2" markdown>
<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="53-56"
title: TUT-B01
path: tut-b01
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
![basic-10-step-tutorial-1-step-10]
</div>

</div>


<!-- Image references -->

[basic-10-step-tutorial-1-step-5]: ../assets/screenshots/basic-10-step-tutorial-1-step-5.png
[basic-10-step-tutorial-1-step-6]: ../assets/screenshots/basic-10-step-tutorial-1-step-6.png
[basic-10-step-tutorial-1-step-7]: ../assets/screenshots/basic-10-step-tutorial-1-step-7.png
[basic-10-step-tutorial-1-step-8]: ../assets/screenshots/basic-10-step-tutorial-1-step-8.png
[basic-10-step-tutorial-1-step-9]: ../assets/screenshots/basic-10-step-tutorial-1-step-9.png
[basic-10-step-tutorial-1-step-10]: ../assets/screenshots/basic-10-step-tutorial-1-step-10.png
