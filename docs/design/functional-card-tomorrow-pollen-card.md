---
template: main.html
title: "Functional Cards: Tomorrow Pollen Card"
description: "Example of functional card, Tomorrow Pollen Card"
hideno:
  toc
tags:
  - Design
  - Functional Card
  - Tomorrow Pollen Card
---
<!-- GT/GL -->
##:sak-sak-logo: Visualization

![Swiss Army Knife Functional Card Tomorrow Pollen D06 Light None None]( ../assets/screenshots/sak-functional-card-12-tomorrow-pollen-theme-d06-light-low_very_low_none.png){width="600"}
<br>![Swiss Army Knife Functional Card Tomorrow Pollen D06 Dark None None]( ../assets/screenshots/sak-functional-card-12-tomorrow-pollen-theme-d06-dark-low_very_low_none.png){width="600"}

![Swiss Army Knife Functional Card Tomorrow Pollen D06 Light Very High Very Low None]( ../assets/screenshots/sak-functional-card-12-tomorrow-pollen-theme-d06-light-very_high_very_low_none.png){width="600"}
<br>![Swiss Army Knife Functional Card Tomorrow Pollen D06 Dark Very High Very Low None]( ../assets/screenshots/sak-functional-card-12-tomorrow-pollen-theme-d06-dark-very_high_very_low_none.png){width="600"}

This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]

!!! info "This card shows you some possibilities to apply JavaScript to the svg image section"
    
| Description| Aspect Ratio| Target Size |
|-|-|-|
| A card that shows the pollen status from Tomorrow. You need to have setup that integration of course.| 4/1 | Grid with 2 columns |

| SAK Tool| Used for |
|-|-|
| UserSvg | Background svg image. Animated, state dependent |
| Circle | The half circle, as the left part of the circle is cutoff by the card. Animated, state dependent |
| Icon | Entity Icon. |
| Name | Name of Entity|
| State | State of entity|

##:sak-sak-logo: Integrations
You need the [tomorrow.io integration](https://www.home-assistant.io/integrations/tomorrowio/):
[![](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start?domain=tomorrowio)

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Card | All tools connected to an entity do show by default the "more-info" dialog once clicked |

##:sak-sak-logo: Usage
[:octicons-tag-24: 1.0.0-rc.3][github-releases]

!!! info "You need the SVG files from Github and put those in the `www/images/tomorrow` folder"
    Images and colors used for this card are adapted versions from Isabella Alströms pollen images

!!! warning "Replace example entities with your entities!"
    
```yaml linenums="1"
- type: grid
  columns: 2
  square: false
  cards:
    #######################################################################

    - type: 'custom:swiss-army-knife-card'
      entities:
        - entity: sensor.tomorrow_io_tree_pollen_index
          name: 'Tree Pollen Index'
      layout:
        template:
          name: sak_layout_fce_tomorrow_pollen
          variables:
            - sak_layout_tomorrow_pollen_image_path: tomorrow/
            - sak_layout_tomorrow_pollen_file_prefix: pollen_tree_
            
    #######################################################################

    - type: 'custom:swiss-army-knife-card'
      entities:
        - entity: sensor.tomorrow_io_grass_pollen_index
          name: 'Grass Pollen Index'
      layout:
        template:
          name: sak_layout_fce_tomorrow_pollen
          variables:
            - sak_layout_tomorrow_pollen_image_path: tomorrow/
            - sak_layout_tomorrow_pollen_file_prefix: pollen_grass_

    #######################################################################

    - type: 'custom:swiss-army-knife-card'
      entities:
        - entity: sensor.tomorrow_io_weed_pollen_index
          name: 'Weed Pollen Index'
      layout:
        template:
          name: sak_layout_fce_tomorrow_pollen
          variables:
            - sak_layout_tomorrow_pollen_image_path: tomorrow/
            - sak_layout_tomorrow_pollen_file_prefix: pollen_weed_
```

| Data | Default| Required | Description |
|-|-|-|-|
| entities |  | :material-check: | The tomorrow tree, grass or weed entity |
| sak_layout_tomorrow_pollen_image_path | tomorrow/ | :material-close: | Folder in /local/images/, including a trailing slash! |
| sak_layout_tomorrow_pollen_file_prefix | |  :material-check: | Depending on the entity, pollen_tree, pollen_grass or pollen_weed |

##:sak-sak-logo: YAML Template Definition
[:octicons-tag-24: 1.0.0-rc.3][github-releases]
??? Info "Full definition of layout template"
    ```yaml
    sak_layout_fce_tomorrow_pollen:
      template:
        type: layout
        defaults: 
          - sak_layout_tomorrow_pollen_image_path: 'tomorrow/'
          - sak_layout_tomorrow_pollen_file_prefix: '' 
      layout:
        aspectratio: 4/1
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
                entity_index: 0
                animations:
                  - state: 'none'
                    styles:
                      circle:
                        fill: '#848484'
                  - state: 'very_low'
                    styles:
                      circle:
                        fill: '#ffe99d'
                  - state: 'low'
                    styles:
                      circle:
                        fill: '#fcc449'
                  - state: 'medium'
                    styles:
                      circle:
                        fill: '#f79f23'
                  - state: 'high'
                    styles:
                      circle:
                        fill: '#ef7f01'
                  - state: 'very_high'
                    styles:
                      circle:
                        fill: '#e73f10'
                styles:
                  circle:
                    stroke: none
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
                animations:
                  - state: 'none'
                    styles:
                      icon:
                        fill: var(--primary-background-color)
                  - state: 'very_low'
                    styles:
                      icon:
                        fill: var(--theme-ref-palette-secondary20)
                  - state: 'low'
                    styles:
                      icon:
                        fill: var(--theme-ref-palette-secondary20)
                  - state: 'medium'
                    styles:
                      icon:
                        fill: var(--primary-background-color)
                  - state: 'high'
                    styles:
                      icon:
                        fill: var(--primary-background-color)
                  - state: 'very_high'
                    styles:
                      icon:
                        fill: var(--primary-background-color)
                styles:
                  icon:
                    opacity: 0.9
                    fill: var(--primary-background-color)
                
          # ================================================================
          - toolset: background-svg
            position:
              cx: 350
              cy: 50
            tools:
              - type: 'usersvg'
                entity_index: 0
                position:
                  cx: 50
                  cy: 50
                  height: 100
                  width: 100
                style: 'images'
                variables:
                  path: '[[sak_layout_tomorrow_pollen_image_path]]'
                  prefix: '[[sak_layout_tomorrow_pollen_file_prefix]]'
                images:
                  - default: >
                      [[[
                        return "/local/images/"+ config.variables.path + config.variables.prefix + state + ".svg";
                      ]]]
                styles:
                  usersvg:
                    opacity: 0.5

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
                show:
                  uom: none
                styles:
                  state:
                    text-anchor: start
                    font-size: 26em
                    font-weight: 500
                    opacity: 0.7
    ```

<!-- Image references -->

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md
[Swiss Army Knife Javascript Snippets]: ../basics/templates/javascript-snippets.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[github-releases]: https://github.com/amoebelabs/swiss-army-knife-card/releases/
