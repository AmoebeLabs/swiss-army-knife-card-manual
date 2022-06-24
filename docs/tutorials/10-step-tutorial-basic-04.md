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
                    - var_entity_index: 0
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
                    - var_entity_index: 0
              - toolset: second
                template:
                  name: toolset_tutorial_basic_03
                  variables:
                    - var_entity_index: 1
                    - var_toolset_position_cy: 150
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
