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

                       
#Tutorial 1: Advanced, example 12

In this tutorial, we are going to make the following wide card:
![10-step-tutorial-advanced-01-step-10]

Such a card is part of [Example 12][example 12].

But as opposed to the example, we will create a toolset template for the 4 segmented arcs with icon and state displayed. So the result of the tutorial is in fact better than the original! And much shorter due to the use of templates.

##:sak-sak-logo: Prerequisites
This tutorial requires:

- An active Material 3 theme
 
##:sak-sak-logo: Step 1: Create the yml view file
<div class="grid-container-1" markdown>

<div class="grid-item" markdown>
- Create `view-tutorial-advanced-01.yml` in the `lovelace/views/sak-tutorial-views/` folder.
- Add it to the `sak-tutorials-dashboard.yaml` in your root folder.
</div>

<div class="grid-item" markdown>
</div>
</div>

##:sak-sak-logo: Step 2: Define the view basics, card, entities and layout
We are going to use 5 entities from the System Monitor integration.

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

The header is divided into three colomns: the half circle with the icon, then the name and the state, and in the last header column the vertical line.

Define the first column of the header:

- half a circle, which is in fact a full circle but clipped by the card due to our positioning the circles center at the card's edge.
- a fixed icon

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
              # ================================================================
              - toolset: half-circle
                position:
                  cx: 0
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
                        fill: var(--theme-sys-palette-primary30)

              # ================================================================
              - toolset: colomn-icon
                position:
                  cx: 30
                  cy: 50
                tools:
                  # ------------------------------------------------------------
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
              # ================================================================
              - toolset: half-circle
                # Removed for brevity!

              # ================================================================
              - toolset: colomn-icon
                # Removed for brevity!

              # ================================================================
              - toolset: colomn-name
                position:
                  cx: 120
                  cy: 50
                tools:
                  # ------------------------------------------------------------
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

                  # ------------------------------------------------------------
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
              # ================================================================
              - toolset: half-circle
                # Removed for brevity!

              # ================================================================
              - toolset: colomn-icon
                # Removed for brevity!

              # ================================================================
              - toolset: colomn-name
                # Removed for brevity!

              # ================================================================
              - toolset: line1
                position:
                  cx: 200
                  cy: 50
                tools:
                  # ------------------------------------------------------------
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
We design the toolset with a [segmented arc tool][swiss-army-knife-advanced-tool-segarc], [icon tool][swiss-army-knife-ha-tool-icon] and [state tool][swiss-army-knife-ha-tool-state] in this card before converting it to a toolset template.

The `segarc` consists of 4 segments, each having a slightly different primary Material 3 theme color.

<div class="grid-container-1" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="39-71"
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
              # ================================================================
              - toolset: half-circle
                # Removed for brevity!

              # ================================================================
              - toolset: colomn-icon
                # Removed for brevity!

              # ================================================================
              - toolset: colomn-name
                # Removed for brevity!

              # ================================================================
              - toolset: line1
                # Removed for brevity!

              # ================================================================
              - toolset: colomn-cpu
                position:
                  cx: 260
                  cy: 50
                tools:
                # -------------------------------------------------------------- 
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
```yaml linenums="1" hl_lines="72-79"
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
              # ================================================================
              - toolset: half-circle
                # Removed for brevity!

              # ================================================================
              - toolset: colomn-icon
                # Removed for brevity!

              # ================================================================
              - toolset: colomn-name
                # Removed for brevity!

              # ================================================================
              - toolset: line1
                # Removed for brevity!

              # ================================================================
              - toolset: colomn-cpu
                position:
                  cx: 260
                  cy: 50
                tools:
                # --------------------------------------------------------------
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
                # --------------------------------------------------------------
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
And the last part of the toolset: the `state`. The `uom` is shown below the `state` value.

<div class="grid-container-1" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="80-96"
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
              # ================================================================
              - toolset: half-circle
                # Removed for brevity!

              # ================================================================
              - toolset: colomn-icon
                # Removed for brevity!

              # ================================================================
              - toolset: colomn-name
                # Removed for brevity!

              # ================================================================
              - toolset: line1
                # Removed for brevity!

              # ================================================================
              - toolset: colomn-cpu
                position:
                  cx: 260
                  cy: 50
                tools:
                # --------------------------------------------------------------
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
                # --------------------------------------------------------------
                - type: icon
                  position:
                    cx: 50
                    cy: 30
                    align: center
                    icon_size: 25
                  entity_index: 0
                # --------------------------------------------------------------
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

##:sak-sak-logo: Step 9: Create template for segarc/icon/state toolset
<div class="grid-container-1" markdown>

<div class="grid-item" markdown>
```yaml linenums="1"
toolset_tutorial_advanced_01:
  template:
    type: toolset
    defaults: 
      - var_entity_index: 0
      - var_toolset_position_cx: 50
      - var_toolset_position_cy: 50
      - var_segarc_scale_min: 0
      - var_segarc_scale_max: 100
  toolset:
    toolset: tutorial-advanced-01
    position:
        cx: '[[var_toolset_position_cx]]'
        cy: '[[var_toolset_position_cy]]'
    tools:
      # ------------------------------------------------------------------------
      - type: icon
        position:
          cx: 50
          cy: 30
          align: center
          icon_size: 25
        entity_index: '[[var_entity_index]]'

      # ------------------------------------------------------------------------
      - type: state
        position:
          cx: 50
          cy: 55
        entity_index: '[[var_entity_index]]'
        show:
          uom: bottom                               # Show UOM below state value
        styles:
          state:
            text-anchor: middle
            font-size: 20em
            font-weight: 700
            fill: var(--primary-text-color)
          uom:
            fill: var(--primary-text-color)
            font-weight: 700

      # ------------------------------------------------------------------------
      - type: 'segarc'
        id: 0
        position:
          cx: 50
          cy: 50
          start_angle: 0                            # Arc clockwise from
          end_angle: 360                            # 0 to 360 degrees
          width: 6
          radius: 40                                # Radius on 100x100 grid
        entity_index: '[[var_entity_index]]'
        scale:
          min: '[[var_segarc_scale_min]]'
          max: '[[var_segarc_scale_max]]'
          width: 6
          offset: 12
        show:
          scale: false                              # Disable scale of segarc
          style: 'colorlist'
        segments:
          colorlist:
            gap: 1                                  # Gap between segments
            colors:
              - var(--theme-sys-palette-primary50)  # Use 4 system palette
              - var(--theme-sys-palette-primary45)  # colors that adhere
              - var(--theme-sys-palette-primary40)  # to light and dark
              - var(--theme-sys-palette-primary35)  # theme modes!
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



##:sak-sak-logo: Step 10: Finalize card by using 4 of the templates
Use the in the previous step created tools template to finalize the card. Use the templates to show the CPU, Memory, Disk and load values.

<div class="grid-container-1" markdown>

<div class="grid-item" markdown>
```yaml linenums="1" hl_lines="123-153"
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
          aspectratio: 6/1                          # Card is 600x100 grid

          layout:
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
                        fill: var(--theme-sys-palette-primary30)

              # ================================================================
              - toolset: colomn-icon
                position:
                  cx: 30
                  cy: 50
                tools:
                  # ------------------------------------------------------------
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
                    
              # ================================================================
              - toolset: colomn-name
                position:
                  cx: 120
                  cy: 50
                tools:
                  # ------------------------------------------------------------
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
                  # ------------------------------------------------------------
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

              # ================================================================
              - toolset: line1
                position:
                  cx: 200                           # On 1/3 of card width
                  cy: 50
                tools:
                  # ------------------------------------------------------------
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

              # ================================================================
              - toolset: colomn-cpu
                template:
                  name: toolset_tutorial_advanced_01
                  variables:
                    - var_toolset_position_cx: 260

              # ================================================================
              - toolset: colomn-memory
                template:
                  name: toolset_tutorial_advanced_01
                  variables:
                    - var_entity_index: 1
                    - var_toolset_position_cx: 355

              # ================================================================
              - toolset: colomn-disk
                template:
                  name: toolset_tutorial_advanced_01
                  variables:
                    - var_entity_index: 2
                    - var_toolset_position_cx: 450

              # ================================================================
              - toolset: colomn-load
                template:
                  name: toolset_tutorial_advanced_01
                  variables:
                    - var_entity_index: 3
                    - var_toolset_position_cx: 545
                    - var_segarc_scale_max: 2

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

[example 12]: ../examples/example-12.md