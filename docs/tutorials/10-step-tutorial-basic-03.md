---
template: main.html
title: "Tutorial 3: Convert Tutorial 1 toolset to a template"
description: In this 10 step tutorial, you learn how to make toolset template based on the 2nd tutorial.
hide:
  toc
tags:
  - Tutorials
  - 10 Steps or less
---

                       
#Tutorial 3: Create toolset template from previous tutorial

In this tutorial, we are going to create a Swiss Army Knife toolset template from the toolset created in Tutorial 1.

By doing this, we learn something about how to create a toolset template and define variables.

##:sak-sak-logo: Prerequisites


##:sak-sak-logo: Step 1: Create the yaml template file
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
- Create `toolset-tutorial-basic-03-template.yaml` in the `lovelace/sak_templates/templates/toolsets/` folder.
- The template is automatically included once you force a refresh of Lovelace.
</div>

<div class="grid-item" markdown>
</div>
</div>

##:sak-sak-logo: Step 2: define the template basics
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1"
toolset_tutorial_basic_03:
  template:
    type: toolset
```
</div>

<div class="grid-item" markdown>
</div>
</div>

      
##:sak-sak-logo: Step 3: Add defaults for the variables we can pass to the template

<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="4-7"
toolset_tutorial_basic_03:
  template:
    type: toolset
    defaults: 
      - var_entity_index: 0
      - var_toolset_position_cx: 50
      - var_toolset_position_cy: 50
  toolset:
```
</div>

<div class="grid-item" markdown>
</div>
</div>

##:sak-sak-logo: Step 4: Remember tutorial 1?
This is the `yml` file we created earlier!

<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="16-56"
title: TUT-BA-01
path: tut-ba-01
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
![10-step-tutorial-basic-03-step-4]
</div>
</div>

##:sak-sak-logo: Step 5: Copy toolset part to template and take care of indentation
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="9-49"
toolset_tutorial_basic_03:
  template:
    type: toolset
    defaults: 
      - var_entity_index: 0
      - var_toolset_position_cx: 50
      - var_toolset_position_cy: 50
  toolset:
    toolset: just-a-name
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
</div>
</div>

##:sak-sak-logo: Step 6: rename toolset name
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="9"
toolset_tutorial_basic_03:
  template:
    type: toolset
    defaults: 
      - var_entity_index: 0
      - var_toolset_position_cx: 50
      - var_toolset_position_cy: 50
  toolset:
    toolset: tutorial-basic-03
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
</div>
</div>

##:sak-sak-logo: Step 7: Use variables for the toolset position
<div class="grid-container-2" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="11-12"
toolset_tutorial_basic_03:
  template:
    type: toolset
    defaults: 
      - var_entity_index: 0
      - var_toolset_position_cx: 50
      - var_toolset_position_cy: 50
  toolset:
    toolset: tutorial-basic-03
    position:
      cx: '[[var_toolset_position_cx]]'
      cy: '[[var_toolset_position_cy]]'
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
</div>

</div>

##:sak-sak-logo: Step 8: use variable for the entity
<div class="grid-container-2" markdown>
<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="32 37 45"
toolset_tutorial_basic_03:
  template:
    type: toolset
    defaults: 
      - var_entity_index: 0
      - var_toolset_position_cx: 50
      - var_toolset_position_cy: 50
  toolset:
    toolset: tutorial-basic-03
    position:
      cx: '[[var_toolset_position_cx]]'
      cy: '[[var_toolset_position_cy]]'
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
        entity_index: '[[var_entity_index]]'
      - type: state
        position:
          cx: 50
          cy: 70
        entity_index: '[[var_entity_index]]'
        styles:
          state:
            font-size: 15em
      - type: name
        position:
          cx: 50
          cy: 50
        entity_index: '[[var_entity_index]]'
        styles:
          name:
            font-size: 15em
            font-weight: 900
```
</div>

<div class="grid-item" markdown>
</div>
</div>

##:sak-sak-logo: Done!

<!-- Image references -->

[10-step-tutorial-basic-03-step-4]: ../assets/screenshots/10-step-tutorial-basic-01-step-10.png
