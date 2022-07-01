---
template: main.html
title: "Functional Cards: Sensor Cards"
description: Example of functional card, sensors with value and history.
hide:
  toc
tags:
  - Design
  - Functional Card
---
<!-- GT/GL -->

## Two Cards with 4/1 aspect ratio:

![Swiss Army Knife Functional Card Analogue Sensor D06 Light]
![Swiss Army Knife Functional Card Analogue Sensor D06 Dark]

##:sak-sak-logo: Visualization
These cards are half width cards for sensors. They are nearly identical.

=== "First Card"
    - Contains the 'half circle' design element :smile:
    - An entity icon
    - A minimal version of the segmented arc showing the current state
    - Name and state below it of this switch
=== "Second Card - with history"
    - Same as First Card
    - Additionally, a 24 hour history of the state on the background of the card

##:sak-sak-logo: Interaction
=== "First Card"
    - All tools connected to an entity do show by default the "more-info" dialog once clicked.
=== "Second Card - with history"
    - All tools connected to an entity do show by default the "more-info" dialog once clicked.

##:sak-sak-logo: YAML Definition

=== "First Card"
    ??? example "Half Circle"
        ```yaml linenums="1"
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
                            fill: var(--theme-sys-elevation-surface-neutral4)
        ```

    ??? example "Entity Icon"
        ```yaml linenums="1"
                  - toolset: column-icon
                    position:
                      cx: 25
                      cy: 50
                    tools:
                      # ------------------------------------------------------------
                      - type: icon
                        position:
                          cx: 50
                          cy: 50
                          align: center
                          icon_size: 45
                        entity_index: 0
                        styles:
                          icon:
                            fill: var(--theme-sys-color-secondary)
                            opacity: 0.9
        ```

    ??? example "Segmented Arc along the Half Circle"
        ```yaml linenums="1"
                      - type: 'segarc'
                        id: 0
                        position:
                          cx: 50
                          cy: 50
                          start_angle: 25
                          end_angle: 155
                          width: 4
                          radius: 58
                        entity_index: 0
                        scale:
                          min: 0
                          max: 2
                          width: 6
                          offset: 12
                        show:
                          scale: false
                          style: 'colorlist'
                        segments:
                          colorlist:
                            gap: 1
                            colors:
                              - var(--theme-sys-color-secondary)
                        styles:
                          foreground:
                            fill: darkgrey
                          background:
                            fill: var(--theme-sys-color-secondary)
                            opacity: 0.5
        ```

    ??? example "Name and state"
        ```yaml linenums="1"
                  - toolset: column-name
                    position:
                      cx: 70
                      cy: 50
                    tools:
                      # ------------------------------------------------------------
                      - type: name
                        position:
                          cx: 50
                          cy: 37
                        entity_index: 0
                        styles:
                          name:
                            text-anchor: start
                            font-size: 30em
                            font-weight: 700
                            opacity: 1
                      # ------------------------------------------------------------
                      - type: state
                        position:
                          cx: 50
                          cy: 70
                        entity_index: 0
                        styles:
                          state:
                            text-anchor: start
                            font-size: 26em
                            font-weight: 500
                            opacity: 0.7
        ``` 

    ??? Info "Full definition of card"
        ```yaml linenums="1"
        - type: 'custom:swiss-army-knife-card'
          entities:
            - entity: sensor.dsmr_reading_electricity_currently_delivered
              name: 'Power Usage Total'
          # Define aspect ratio
          aspectratio: 4/1                          # Card is 400x100 grid

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
                    styles:
                      circle:
                        stroke: none
                        fill: var(--theme-sys-elevation-surface-neutral4)

                  # ------------------------------------------------------------ 
                  - type: 'segarc'
                    id: 0
                    position:
                      cx: 50
                      cy: 50
                      start_angle: 25
                      end_angle: 155
                      width: 4
                      radius: 58
                    entity_index: 0
                    scale:
                      min: 0
                      max: 2
                      width: 6
                      offset: 12
                    show:
                      scale: false
                      style: 'colorlist'
                    segments:
                      colorlist:
                        gap: 1
                        colors:
                          - var(--theme-sys-color-secondary)
                    styles:
                      foreground:
                        fill: darkgrey
                      background:
                        fill: var(--theme-sys-color-secondary)
                        opacity: 0.5

              # ================================================================
              - toolset: column-icon
                position:
                  cx: 25
                  cy: 50
                tools:
                  # ------------------------------------------------------------
                  - type: icon
                    position:
                      cx: 50
                      cy: 50
                      align: center
                      icon_size: 45
                    entity_index: 0
                    styles:
                      icon:
                        fill: var(--theme-sys-color-secondary)
                        opacity: 0.9
                    
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
                      cy: 37
                    entity_index: 0
                    styles:
                      name:
                        text-anchor: start
                        font-size: 30em
                        font-weight: 700
                        opacity: 1
                  # ------------------------------------------------------------
                  - type: state
                    position:
                      cx: 50
                      cy: 70
                    entity_index: 0
                    styles:
                      state:
                        text-anchor: start
                        font-size: 26em
                        font-weight: 500
                        opacity: 0.7
        ```


=== "Second Card - with history"
    ??? example "Half Circle"
        ```yaml linenums="1"
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
                            fill: var(--theme-sys-elevation-surface-neutral4)
        ```

    ??? example "Entity Icon"
        ```yaml linenums="1"
                  - toolset: column-icon
                    position:
                      cx: 25
                      cy: 50
                    tools:
                      # ------------------------------------------------------------
                      - type: icon
                        position:
                          cx: 50
                          cy: 50
                          align: center
                          icon_size: 45
                        entity_index: 0
                        styles:
                          icon:
                            fill: var(--theme-sys-color-secondary)
                            opacity: 0.9
        ```

    ??? example "Segmented Arc along the Half Circle"
        ```yaml linenums="1"
                      - type: 'segarc'
                        id: 0
                        position:
                          cx: 50
                          cy: 50
                          start_angle: 25
                          end_angle: 155
                          width: 4
                          radius: 58
                        entity_index: 0
                        scale:
                          min: 0
                          max: 2
                          width: 6
                          offset: 12
                        show:
                          scale: false
                          style: 'colorlist'
                        segments:
                          colorlist:
                            gap: 1
                            colors:
                              - var(--theme-sys-color-secondary)
                        styles:
                          foreground:
                            fill: darkgrey
                          background:
                            fill: var(--theme-sys-color-secondary)
                            opacity: 0.5
        ```
    ??? example "24 hour history on the background"
        ```yaml linenums="1"
                  - toolset: column-bar
                    position:
                      cx: 235                     # 400-70/2 + 70=235
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
                          width: 330              # 400-70=330
                          height: 100
                          margin: 1
                        hours: 24
                        barhours: 1
                        show:
                          style: 'minmaxgradient'
                        minmaxgradient:
                          fill: true
                          colors:
                            min: var(--theme-sys-palette-secondary85)
                            max: var(--theme-sys-palette-secondary65)
                        styles:
                          bar:
                            stroke-linecap: square
                            opacity: 0.25
        ```

    ??? example "Name and state"
        ```yaml linenums="1"
                  - toolset: column-name
                    position:
                      cx: 70
                      cy: 50
                    tools:
                      # ------------------------------------------------------------
                      - type: name
                        position:
                          cx: 50
                          cy: 37
                        entity_index: 0
                        styles:
                          name:
                            text-anchor: start
                            font-size: 30em
                            font-weight: 700
                            opacity: 1
                      # ------------------------------------------------------------
                      - type: state
                        position:
                          cx: 50
                          cy: 70
                        entity_index: 0
                        styles:
                          state:
                            text-anchor: start
                            font-size: 26em
                            font-weight: 500
                            opacity: 0.7
        ``` 

    ??? Info "Full definition of card"
        ```yaml linenums="1"
        - type: 'custom:swiss-army-knife-card'
          entities:
            - entity: sensor.dsmr_reading_electricity_currently_delivered
              name: 'Power Usage Total'
          # Define aspect ratio
          aspectratio: 4/1                          # Card is 400x100 grid

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
                    styles:
                      circle:
                        stroke: none
                        fill: var(--theme-sys-elevation-surface-neutral4)

                  # ------------------------------------------------------------ 
                  - type: 'segarc'
                    id: 0
                    position:
                      cx: 50
                      cy: 50
                      start_angle: 25
                      end_angle: 155
                      width: 4
                      radius: 58
                    entity_index: 0
                    scale:
                      min: 0
                      max: 2
                      width: 6
                      offset: 12
                    show:
                      scale: false
                      style: 'colorlist'
                    segments:
                      colorlist:
                        gap: 1
                        colors:
                          - var(--theme-sys-color-secondary)
                    styles:
                      foreground:
                        fill: darkgrey
                      background:
                        fill: var(--theme-sys-color-secondary)
                        opacity: 0.5

              # ================================================================
              - toolset: column-icon
                position:
                  cx: 25
                  cy: 50
                tools:
                  # ------------------------------------------------------------
                  - type: icon
                    position:
                      cx: 50
                      cy: 50
                      align: center
                      icon_size: 45
                    entity_index: 0
                    styles:
                      icon:
                        fill: var(--theme-sys-color-secondary)
                        opacity: 0.9
                    

              # ================================================================
              - toolset: column-bar
                position:
                  cx: 235                     # 400-70/2 + 70=235
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
                      width: 330              # 400-70=330
                      height: 100
                      margin: 1
                    hours: 24
                    barhours: 1
                    show:
                      style: 'minmaxgradient'
                    minmaxgradient:
                      fill: true
                      colors:
                        min: var(--theme-sys-palette-secondary85)
                        max: var(--theme-sys-palette-secondary65)
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
                      cy: 37
                    entity_index: 0
                    styles:
                      name:
                        text-anchor: start
                        font-size: 30em
                        font-weight: 700
                  # ------------------------------------------------------------
                  - type: state
                    position:
                      cx: 50
                      cy: 70
                    entity_index: 0
                    styles:
                      state:
                        text-anchor: start
                        font-size: 26em
                        font-weight: 500
                        opacity: 0.7

        ```

##:sak-sak-logo: Usage
For use / re-use, use decluttering card etc.

<!-- Image references -->

[Swiss Army Knife Functional Card Analogue Sensor D06 Dark]: ../assets/screenshots/sak-functional-card-12-half-width-analogue-sensor-theme-d06-dark.png
[Swiss Army Knife Functional Card Analogue Sensor D06 Light]: ../assets/screenshots/sak-functional-card-12-half-width-analogue-sensor-theme-d06-light.png

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[ham3-url]: https://material3-themes-manual.amoebelabs.com/
[ham3-c12-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-c12-magenta/