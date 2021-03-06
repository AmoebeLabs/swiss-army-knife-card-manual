---
template: main.html
title: "Tutorial 2: Two circles with icon, state and name"
description: In this 10 step tutorial, you learn how to make a tall card with two circles, and on top of that an icon, state and name of an entity.
hide:
  toc
tags:
  - Tutorials
  - 10 Steps or less
---

                       
#Tutorial \#1, Part 2

In this tutorial, you will learn to make the following tall 1 by 2 card:![10-step-tutorial-01-part2-step9]

By doing this, you learn something about toolset placement: We place tools on a different position on the card without changing the position of the tools itself, but just by moving the position of the overall toolset!

![sak-card-toolset-tool-placement]

##:sak-sak-logo: Prerequisites


##:sak-sak-logo: Step 1: Create the yml view file
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
- Create `view-tutorial-basic-series01-part2.yml` in the `lovelace/views/sak-tutorial-views/` folder.
- Add it to the `sak-tutorials-dashboard.yaml` in your root folder.
</div>

<div class="grid-item" markdown>
</div>
</div>

##:sak-sak-logo: Step 2: define the view basics
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1"
title: TUT-01-P2
path: tut-01-p2
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

      
##:sak-sak-logo: Step 3: Copy the previous tutorial result

<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="9-56"
title: TUT-01-P2
path: tut-01-p2
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
![10-step-tutorial-01-part2-step3]
</div>
</div>

##:sak-sak-logo: Step 4: Change card aspect ratio to 1/2
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="10"
title: TUT-01-P2
path: tut-01-p2
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          aspectratio: 1/2
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
![10-step-tutorial-01-part2-step4]
</div>
</div>

##:sak-sak-logo: Step 5: Rename toolset to first
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="16"
title: TUT-01-P2
path: tut-01-p2
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          aspectratio: 1/2
          entities: 
            - entity: sensor.humidity
              name: Study
          layout:
            toolsets:
              - toolset: first
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
![10-step-tutorial-01-part2-step5]
</div>
</div>

##:sak-sak-logo: Step 6: Add second entity definition
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="14-15"
title: TUT-01-P2
path: tut-01-p2
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          aspectratio: 1/2
          entities: 
            - entity: sensor.humidity
              name: Study
            - entity: sensor.temperature
              name: Study
          layout:
            toolsets:
              - toolset: first
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
![10-step-tutorial-01-part2-step6]
</div>
</div>

##:sak-sak-logo: Step 7: Duplicate toolset and name it second
Duplicate first toolset to create the identical second one. You won't see any difference on the card, as the two toolsets are exactly positioned on top of each other and display the exact same entity data.

<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="59-99"
title: TUT-01-P2
path: tut-01-p2
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          aspectratio: 1/2
          entities: 
            - entity: sensor.humidity
              name: Study
            - entity: sensor.temperature
              name: Study
          layout:
            toolsets:
              - toolset: first
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
              - toolset: second
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
![10-step-tutorial-01-part2-step7]
</div>

</div>

##:sak-sak-logo: Step 8: connect second toolset to entity index 1
Connect second toolset to entity index 1. You will now see the two toolsets displayed over each other.

<div class="grid-container-2" markdown>
<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="14-15 78 83 91"
title: TUT-01-P2
path: tut-01-p2
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          aspectratio: 1/2
          entities: 
            - entity: sensor.humidity
              name: Study
            - entity: sensor.temperature
              name: Study
          layout:
            toolsets:
              - toolset: first
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
              - toolset: second
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
                    entity_index: 1
                  - type: state
                    position:
                      cx: 50
                      cy: 70
                    entity_index: 1
                    styles:
                      state:
                        font-size: 15em
                  - type: name
                    position:
                      cx: 50
                      cy: 50
                    entity_index: 1
                    styles:
                      name:
                        font-size: 15em
                        font-weight: 900
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-01-part2-step8]
</div>
</div>

##:sak-sak-logo: Step 9: Position the second toolset
Finally, position the second toolset below the first toolset. The center position is (50,150).

<div class="grid-container-2" markdown>
<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="61-62"
title: TUT-01-P2
path: tut-01-p2
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          aspectratio: 1/2
          entities: 
            - entity: sensor.humidity
              name: Study
            - entity: sensor.temperature
              name: Study
          layout:
            toolsets:
              - toolset: first
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
              - toolset: second
                position:
                  cx: 50
                  cy: 150
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
                    entity_index: 1
                  - type: state
                    position:
                      cx: 50
                      cy: 70
                    entity_index: 1
                    styles:
                      state:
                        font-size: 15em
                  - type: name
                    position:
                      cx: 50
                      cy: 50
                    entity_index: 1
                    styles:
                      name:
                        font-size: 15em
                        font-weight: 900
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-01-part2-step9]
</div>

</div>
##:sak-sak-logo: Done!

<!-- Image references -->

[10-step-tutorial-01-part2-step3]: ../assets/screenshots/10-step-tutorial-01-part1-step10.png
[10-step-tutorial-01-part2-step4]: ../assets/screenshots/10-step-tutorial-01-part2-step7.png
[10-step-tutorial-01-part2-step5]: ../assets/screenshots/10-step-tutorial-01-part2-step7.png
[10-step-tutorial-01-part2-step6]: ../assets/screenshots/10-step-tutorial-01-part2-step7.png
[10-step-tutorial-01-part2-step7]: ../assets/screenshots/10-step-tutorial-01-part2-step7.png
[10-step-tutorial-01-part2-step8]: ../assets/screenshots/10-step-tutorial-01-part2-step8.png
[10-step-tutorial-01-part2-step9]: ../assets/screenshots/10-step-tutorial-01-part2-step9.png


[sak-card-toolset-tool-placement]: ../assets/screenshots/sak-card-toolset-tool-placement-bluegrey.png