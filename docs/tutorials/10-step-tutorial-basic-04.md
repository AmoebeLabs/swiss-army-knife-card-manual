---
template: main.html
title: "Tutorial 4: Use template from Tutorial 3"
description: In this 10 step tutorial, you learn how to make toolset template based on the 2nd tutorial.
tags:
  - Tutorials
  - 10 Steps or less
---

                       
#Tutorial 4: Use template toolset from tutorial 3 to create tutorial 2

In this tutorial, we are going to create a Swiss Army Knife toolset template from the toolset created in [Tutorial 3][10-step-tutorial-basic-03].

By doing this, we learn something about how to _use_ a toolset template and variables.

##:sak-sak-logo: Prerequisites


##:sak-sak-logo: Step 1: Create the yml view file
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
- Create `view-tutorial-basic-04.yml` in the `lovelace/views/sak-tutorial-views/` folder.
- Add it to the `sak-tutorials-dashboard.yaml` in your root folder.
</div>

<div class="grid-item" markdown>
</div>
</div>

##:sak-sak-logo: Step 2: define the view basics
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1"
title: TUT-BA-04
path: tut-ba-04
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

      
##:sak-sak-logo: Step 3: Define card, entities and layout structure

<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="9-17"
title: TUT-BA-04
path: tut-ba-04
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
```
</div>

<div class="grid-item" markdown>
</div>
</div>

##:sak-sak-logo: Step 4: Add first toolset using the template
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="18-22"
title: TUT-BA-04
path: tut-ba-04
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
                template:
                  name: toolset_tutorial_basic_03
                  variables:
                    - entity: 0
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-basic-04-step-4]
</div>
</div>

##:sak-sak-logo: Step 5: Add second toolset using the template
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="23-28"
title: TUT-BA-04
path: tut-ba-04
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
                template:
                  name: toolset_tutorial_basic_03
                  variables:
                    - entity: 0
              - toolset: second
                template:
                  name: toolset_tutorial_basic_03
                  variables:
                    - entity: 1
                    - cy: 150
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-basic-04-step-5]
</div>
</div>

##:sak-sak-logo: Done!

<!-- Image references -->

[10-step-tutorial-basic-04-step-4]: ../assets/screenshots/10-step-tutorial-basic-02-step-7.png
[10-step-tutorial-basic-04-step-5]: ../assets/screenshots/10-step-tutorial-basic-02-step-9.png

[sak-card-toolset-tool-placement]: ../assets/screenshots/sak-card-toolset-tool-placement-bluegrey.png

<!-- Internal references -->
[10-step-tutorial-basic-03]: ../tutorials/10-step-tutorial-basic-03.md