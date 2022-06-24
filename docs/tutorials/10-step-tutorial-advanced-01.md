---
template: main.html
title: "Tutorial 4: Use template from Tutorial 3"
description: In this 10 step tutorial, you learn how to make toolset template based on the 2nd tutorial.
tags:
  - Tutorials
  - 10 Steps or less
---

                       
#Tutorial 1: Advanced, example 12

In this tutorial, we are going to make the following wide card:
![10-step-tutorial-advanced-01-step-10]

##:sak-sak-logo: Prerequisites

##:sak-sak-logo: Step 1: Create the yml view file
<div class="grid-container-1" markdown>

<div class="grid-item" markdown>
- Create `view-tutorial-advanced-01.yml` in the `lovelace/views/sak-tutorial-views/` folder.
- Add it to the `sak-tutorials-dashboard.yaml` in your root folder.
</div>

<div class="grid-item" markdown>
</div>
</div>

##:sak-sak-logo: Step 2: define the view basics, card, entities and layout structure
<div class="grid-container-1" markdown>

<div class="grid-item" markdown>
```yaml linenums="1"
title: TUT-AD-01
path: tut-ad-01
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          entities:
            # CPU
            - entity: sensor.processor_use
              decimals: 0
              name: 'Hestia'
            # Memory
            - entity: sensor.memory_use_percent
              icon: mdi:memory
              decimals: 0
            # Disk
            - entity: sensor.disk_use_percent
              decimals: 0
              icon: mdi:harddisk
            # System Load
            - entity: sensor.load_1m
              decimals: 2
              unit: '1m'
            # Last changed
            - entity: sensor.processor_use
              secondary_info: last_changed
              format: relative

          # Define aspect ratio
          aspectratio: 6/1
```
</div>

<div class="grid-item" markdown>
</div>
</div>

      
##:sak-sak-logo: Step 3: Header, first column

<div class="grid-container-1" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="17-51"
title: TUT-AD-01
path: tut-ad-01
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          entities:
            # Removed for brevity!

          # Define aspect ratio
          aspectratio: 6/1
          layout:
            toolsets:
              # ======================================================
              - toolset: half-circle
                position:
                  cx: 0
                  cy: 50
                tools:
                  # --------------------------------------------------
                  - type: circle
                    position:
                      cx: 50
                      cy: 50
                      radius: 50
                    styles:
                      circle:
                        stroke: none
                        fill: var(--theme-sys-palette-primary30)

              # ======================================================
              - toolset: colomn-icon
                position:
                  cx: 30
                  cy: 50
                tools:
                  # --------------------------------------------------
                  - type: icon
                    position:
                      cx: 50
                      cy: 50
                      align: center
                      icon_size: 30
                    icon: mdi:server-network
                    styles:
                      icon:
                        fill: var(--primary-background-color)
                        opacity: 0.9
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-advanced-01-step-3]
</div>
</div>

##:sak-sak-logo: Step 4: Header, second column
<div class="grid-container-1" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="25-56"
title: TUT-AD-01
path: tut-ad-01
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          entities:
            # Removed for brevity!

          # Define aspect ratio
          aspectratio: 6/1
          layout:
            toolsets:
              # ======================================================
              - toolset: half-circle
                # Removed for brevity!

              # ======================================================
              - toolset: colomn-icon
                # Removed for brevity!

              # ======================================================
              - toolset: colomn-name
                position:
                  cx: 120
                  cy: 50
                tools:
                  # --------------------------------------------------
                  - type: name
                    position:
                      cx: 50
                      cy: 50
                    entity_index: 0
                    styles:
                      name:
                        text-anchor: middle
                        font-size: 25em
                        font-weight: 700
                        opacity: 1

                  # --------------------------------------------------
                  - type: state
                    position:
                      cx: 50
                      cy: 80
                    entity_index: 4
                    show:
                      uom: none
                    styles:
                      state:
                        text-anchor: middle
                        font-size: 14em
                        font-weight: 500

```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-advanced-01-step-4]
</div>
</div>

##:sak-sak-logo: Step 5: Header, third column
<div class="grid-container-1" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="29-45"
title: TUT-AD-01
path: tut-ad-01
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          entities:
            # Removed for brevity!

          # Define aspect ratio
          aspectratio: 6/1
          layout:
            toolsets:
              # ======================================================
              - toolset: half-circle
                # Removed for brevity!

              # ======================================================
              - toolset: colomn-icon
                # Removed for brevity!

              # ======================================================
              - toolset: colomn-name
                # Removed for brevity!

              # ======================================================
              - toolset: line1
                position:
                  cx: 200
                  cy: 50
                tools:
                  # --------------------------------------------------
                  - type: line
                    position:
                      cx: 50
                      cy: 50
                      orientation: vertical
                      length: 50
                    styles:
                      line:
                        fill: var(--primary-text-color)
                        opacity: 0.5

```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-advanced-01-step-5]
</div>
</div>


##:sak-sak-logo: Step 6: Add segmented arc as part of the segarc, icon, state toolset
<div class="grid-container-1" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="40-72"
title: TUT-AD-01
path: tut-ad-01
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          entities:
            # Removed for brevity!

          # Define aspect ratio
          aspectratio: 6/1
          layout:
            toolsets:
              # ======================================================
              - toolset: half-circle
                # Removed for brevity!

              # ======================================================
              - toolset: colomn-icon
                # Removed for brevity!

              # ======================================================
              - toolset: colomn-name
                # Removed for brevity!

              # ======================================================
              - toolset: line1
                # Removed for brevity!


              # ======================================================
              - toolset: colomn-cpu
                position:
                  cx: 260
                  cy: 50
                tools:
                # -------------------------------------------------- 
                - type: 'segarc'
                  id: 0
                  position:
                    cx: 50
                    cy: 50
                    start_angle: 0
                    end_angle: 360
                    width: 6
                    radius: 40
                  entity_index: 0
                  scale:
                    min: 0
                    max: 100
                    width: 6
                    offset: 12
                  show:
                    scale: false
                    style: 'colorlist'
                  segments:
                    colorlist:
                      gap: 1
                      colors:
                        - var(--theme-sys-palette-primary50)
                        - var(--theme-sys-palette-primary45)
                        - var(--theme-sys-palette-primary40)
                        - var(--theme-sys-palette-primary35)
                  styles:
                    foreground:
                      fill: darkgrey
                    background:
                      fill: var(--theme-sys-elevation-surface-neutral4)
                      opacity: 1
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-advanced-01-step-6]
</div>
</div>

##:sak-sak-logo: Step 7: Add icon as part of the segarc, icon, state toolset
<div class="grid-container-1" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="73-80"
title: TUT-AD-01
path: tut-ad-01
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          entities:
            # Removed for brevity!

          # Define aspect ratio
          aspectratio: 6/1
          layout:
            toolsets:
              # ======================================================
              - toolset: half-circle
                # Removed for brevity!

              # ======================================================
              - toolset: colomn-icon
                # Removed for brevity!

              # ======================================================
              - toolset: colomn-name
                # Removed for brevity!

              # ======================================================
              - toolset: line1
                # Removed for brevity!


              # ======================================================
              - toolset: colomn-cpu
                position:
                  cx: 260
                  cy: 50
                tools:
                # -------------------------------------------------- 
                - type: 'segarc'
                  id: 0
                  position:
                    cx: 50
                    cy: 50
                    start_angle: 0
                    end_angle: 360
                    width: 6
                    radius: 40
                  entity_index: 0
                  scale:
                    min: 0
                    max: 100
                    width: 6
                    offset: 12
                  show:
                    scale: false
                    style: 'colorlist'
                  segments:
                    colorlist:
                      gap: 1
                      colors:
                        - var(--theme-sys-palette-primary50)
                        - var(--theme-sys-palette-primary45)
                        - var(--theme-sys-palette-primary40)
                        - var(--theme-sys-palette-primary35)
                  styles:
                    foreground:
                      fill: darkgrey
                    background:
                      fill: var(--theme-sys-elevation-surface-neutral4)
                      opacity: 1
                # --------------------------------------------------
                - type: icon
                  position:
                    cx: 50
                    cy: 30
                    align: center
                    icon_size: 25
                  entity_index: 0
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-advanced-01-step-7]
</div>
</div>

##:sak-sak-logo: Step 8: Add state as part of the segarc, icon, state toolset
<div class="grid-container-1" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="81-97"
title: TUT-AD-01
path: tut-ad-01
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          entities:
            # Removed for brevity!

          # Define aspect ratio
          aspectratio: 6/1
          layout:
            toolsets:
              # ======================================================
              - toolset: half-circle
                # Removed for brevity!

              # ======================================================
              - toolset: colomn-icon
                # Removed for brevity!

              # ======================================================
              - toolset: colomn-name
                # Removed for brevity!

              # ======================================================
              - toolset: line1
                # Removed for brevity!


              # ======================================================
              - toolset: colomn-cpu
                position:
                  cx: 260
                  cy: 50
                tools:
                # -------------------------------------------------- 
                - type: 'segarc'
                  id: 0
                  position:
                    cx: 50
                    cy: 50
                    start_angle: 0
                    end_angle: 360
                    width: 6
                    radius: 40
                  entity_index: 0
                  scale:
                    min: 0
                    max: 100
                    width: 6
                    offset: 12
                  show:
                    scale: false
                    style: 'colorlist'
                  segments:
                    colorlist:
                      gap: 1
                      colors:
                        - var(--theme-sys-palette-primary50)
                        - var(--theme-sys-palette-primary45)
                        - var(--theme-sys-palette-primary40)
                        - var(--theme-sys-palette-primary35)
                  styles:
                    foreground:
                      fill: darkgrey
                    background:
                      fill: var(--theme-sys-elevation-surface-neutral4)
                      opacity: 1
                # --------------------------------------------------
                - type: icon
                  position:
                    cx: 50
                    cy: 30
                    align: center
                    icon_size: 25
                  entity_index: 0
                # --------------------------------------------------
                - type: state
                  position:
                    cx: 50
                    cy: 55
                  entity_index: 0
                  show:
                    uom: bottom
                  styles:
                    state:
                      text-anchor: middle
                      font-size: 20em
                      font-weight: 700
                      fill: var(--primary-text-color)
                    uom:
                      fill: var(--primary-text-color)
                      font-weight: 700
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-advanced-01-step-8]
</div>
</div>

##:sak-sak-logo: Step 9: create template
<div class="grid-container-1" markdown>

<div class="grid-item" markdown>
```yaml linenums="1"
toolset_tutorial_advanced_01:
  template:
    type: toolset
    defaults: 
      - entity: 0
      - cx: 50
      - cy: 50
  toolset:
    toolset: tutorial-advanced-01
    position:
        cx: '[[cx]]'
        cy: '[[cy]]'
    tools:
      # --------------------------------------------------
      - type: icon
        position:
          cx: 50
          cy: 30
          align: center
          icon_size: 25
        entity_index: '[[entity]]'

      # --------------------------------------------------
      - type: state
        position:
          cx: 50
          cy: 55
        entity_index: '[[entity]]'
        show:
          uom: bottom
        styles:
          state:
            text-anchor: middle
            font-size: 20em
            font-weight: 700
            fill: var(--primary-text-color)
          uom:
            fill: var(--primary-text-color)
            font-weight: 700

      # -------------------------------------------------- 
      - type: 'segarc'
        id: 0
        position:
          cx: 50
          cy: 50
          start_angle: 0
          end_angle: 360
          width: 6
          radius: 40
        entity_index: '[[entity]]'
        scale:
          min: 0
          max: 100
          width: 6
          offset: 12
        show:
          scale: false
          style: 'colorlist'
        segments:
          colorlist:
            gap: 1
            colors:
              - var(--theme-sys-palette-primary50)
              - var(--theme-sys-palette-primary45)
              - var(--theme-sys-palette-primary40)
              - var(--theme-sys-palette-primary35)
        styles:
          foreground:
            fill: darkgrey
          background:
            fill: var(--theme-sys-elevation-surface-neutral4)
            opacity: 1

```
</div>

<div class="grid-item" markdown>
</div>
</div>



##:sak-sak-logo: Step 10: Use template x 4
<div class="grid-container-1" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="127-161"
title: TUT-AD-01
path: tut-ad-01
panel: false
cards:
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: 'custom:swiss-army-knife-card'
          entities:
            # CPU
            - entity: sensor.processor_use
              decimals: 0
              name: 'Hestia'
            # Memory
            - entity: sensor.memory_use_percent
              icon: mdi:memory
              decimals: 0
            # Disk
            - entity: sensor.disk_use_percent
              decimals: 0
              icon: mdi:harddisk
            # System Load
            - entity: sensor.load_1m
              decimals: 2
              unit: '1m'
            # Last changed
            - entity: sensor.processor_use
              secondary_info: last_changed
              format: relative

          # Define aspect ratio
          aspectratio: 6/1

          layout:
            styles:
              card:
              toolsets:
              
            toolsets:
              # ======================================================
              - toolset: line1
                position:
                  cx: 200
                  cy: 50
                tools:
                  # --------------------------------------------------
                  - type: line
                    position:
                      cx: 50
                      cy: 50
                      orientation: vertical
                      length: 50
                    styles:
                      line:
                        fill: var(--primary-text-color)
                        opacity: 0.5

              # ======================================================
              - toolset: color1
                position:
                  cx: 0
                  cy: 50
                tools:
                  # --------------------------------------------------
                  - type: circle
                    position:
                      cx: 50
                      cy: 50
                      radius: 50
                    styles:
                      circle:
                        stroke: none
                        fill: var(--theme-sys-palette-primary30)

              # ======================================================
              - toolset: colomn-icon
                position:
                  cx: 30
                  cy: 50
                tools:
                  # --------------------------------------------------
                  - type: icon
                    position:
                      cx: 50
                      cy: 50
                      align: center
                      icon_size: 30
                    icon: mdi:server-network
                    styles:
                      icon:
                        fill: var(--primary-background-color)
                        opacity: 0.9
                    
              - toolset: colomn-name
                position:
                  cx: 120
                  cy: 50
                tools:
                  # --------------------------------------------------
                  - type: name
                    position:
                      cx: 50
                      cy: 50
                    entity_index: 0
                    styles:
                      name:
                        text-anchor: middle
                        font-size: 25em
                        font-weight: 700
                        opacity: 1

                  # --------------------------------------------------
                  - type: state
                    position:
                      cx: 50
                      cy: 80
                    entity_index: 4
                    show:
                      uom: none
                    styles:
                      state:
                        text-anchor: middle
                        font-size: 14em
                        font-weight: 500

              # ======================================================
              - toolset: colomn-cpu
                template:
                  name: toolset_tutorial_advanced_01
                  variables:
                    - entity: 0
                    - cx: 260
                    - cy: 50

              # ======================================================
              - toolset: colomn-memory
                template:
                  name: toolset_tutorial_advanced_01
                  variables:
                    - entity: 1
                    - cx: 355
                    - cy: 50

              # ======================================================
              - toolset: colomn-disk
                template:
                  name: toolset_tutorial_advanced_01
                  variables:
                    - entity: 2
                    - cx: 450
                    - cy: 50

              # ======================================================
              - toolset: colomn-load
                template:
                  name: toolset_tutorial_advanced_01
                  variables:
                    - entity: 3
                    - cx: 545
                    - cy: 50
```
</div>

<div class="grid-item" markdown>
![10-step-tutorial-advanced-01-step-10]
</div>
</div>

##:sak-sak-logo: Done!

<!-- Image references -->

[10-step-tutorial-advanced-01-step-3]: ../assets/screenshots/10-step-tutorial-advanced-01-step-3.png
[10-step-tutorial-advanced-01-step-4]: ../assets/screenshots/10-step-tutorial-advanced-01-step-4.png
[10-step-tutorial-advanced-01-step-5]: ../assets/screenshots/10-step-tutorial-advanced-01-step-5.png
[10-step-tutorial-advanced-01-step-6]: ../assets/screenshots/10-step-tutorial-advanced-01-step-6.png
[10-step-tutorial-advanced-01-step-7]: ../assets/screenshots/10-step-tutorial-advanced-01-step-7.png
[10-step-tutorial-advanced-01-step-8]: ../assets/screenshots/10-step-tutorial-advanced-01-step-8.png
[10-step-tutorial-advanced-01-step-10]: ../assets/screenshots/10-step-tutorial-advanced-01-step-10.png

[sak-card-toolset-tool-placement]: ../assets/screenshots/sak-card-toolset-tool-placement-bluegrey.png

<!-- Internal references -->
[10-step-tutorial-advanced-03]: ../tutorials/10-step-tutorial-advanced-03.md