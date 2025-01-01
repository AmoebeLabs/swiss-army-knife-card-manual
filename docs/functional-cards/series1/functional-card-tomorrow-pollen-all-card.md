---
template: main.html
title: "Functional Cards: Tomorrow Pollen All Card"
description: "Example of functional card, Tomorrow Pollen All Card"
hideno:
  toc
tags:
  - Design
  - Functional Card
  - Tomorrow Pollen All Card
---
<!-- GT/GL -->
##:sak-sak-logo: Visualization

![Swiss Army Knife Functional Card Tomorrow Pollen All D06 Light None None](../../assets/screenshots/sak-functional-card-12-tomorrow-pollen-all-theme-d06-light-low_very_low_none.png#only-light){width="600"}
<br>![Swiss Army Knife Functional Card Tomorrow Pollen All D06 Dark None None](../../assets/screenshots/sak-functional-card-12-tomorrow-pollen-all-theme-d06-dark-low_very_low_none.png#only-dark){width="600"}

![Swiss Army Knife Functional Card Tomorrow Pollen All D06 Light Very High Very Low None](../../assets/screenshots/sak-functional-card-12-tomorrow-pollen-all-theme-d06-light-very_high_very_low_none.png#only-light){width="600"}
<br>![Swiss Army Knife Functional Card Tomorrow Pollen All D06 Dark Very High Very Low None](../../assets/screenshots/sak-functional-card-12-tomorrow-pollen-all-theme-d06-dark-very_high_very_low_none.png#only-dark){width="600"}

This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]

| Description| Aspect Ratio| Target Size |
|-|-|-|
| A card that shows the pollen status from Tomorrow. You need to have setup that integration of course.| 6/2 | Grid with 1 column |

| SAK Tool| Used for |
|-|-|
| Ellipse | The half ellipse, as the left part of the circle is cutoff by the card.|
| Icon | Entity Icon. |
| Text | Text "Pollen" |
| Text | Text "Index" |
| Name | Name of Trees Entity |
| UserSvg | Svg image for trees. Animated, state dependent |
| State | State of trees entity|
| Name | Name of Grass Entity |
| UserSvg | Svg image for grass. Animated, state dependent |
| State | State of grass entity|
| Name | Name of Weed Entity |
| UserSvg | Svg image for weed. Animated, state dependent |
| State | State of weed entity|

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
- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: sensor.tomorrow_io_tree_pollen_index
      name: 'Trees'
    - entity: sensor.tomorrow_io_grass_pollen_index
      name: 'Grass'
    - entity: sensor.tomorrow_io_weed_pollen_index
      name: 'Weed'
  layout:
    template:
      name: sak_layout_fce_tomorrow_pollen_all
      variables:
        - sak_layout_tomorrow_pollen_image_path: tomorrow/
```

| Data | Default| Required | Description |
|-|-|-|-|
| entities |  | :material-check: | The three tomorrow pollen entities; tree, grass and weed, **in that order!** |
| sak_layout_tomorrow_pollen_image_path | tomorrow/ | :material-close: | Folder in /local/images/, including a trailing slash! |

##:sak-sak-logo: YAML Template Definition
[:octicons-tag-24: 1.0.0-rc.3][github-releases]
??? Info "Full definition of layout template"
    ```yaml
    sak_layout_fce_tomorrow_pollen_all:
      template:
        type: layout
        defaults: 
          - sak_layout_tomorrow_pollen_image_path: 'tomorrow/'
      layout:
        aspectratio: 6/2
        toolsets:
          # ================================================================
          - toolset: line1
            position:
              cx: 200
              cy: 100
            tools:
              # ------------------------------------------------------------
              - type: line
                position:
                  cx: 50
                  cy: 50
                  orientation: vertical
                  length: 100
                styles:
                  line:
                    fill: var(--primary-text-color)
                    opacity: 0.5

          # ================================================================
          - toolset: half-circle
            position:
              cx: 0                             # Center on cards border 
              cy: 100
            tools:
              # ------------------------------------------------------------
              - type: ellipse
                position:
                  cx: 50
                  cy: 50
                  radiusx: 48
                  radiusy: 96
                styles:
                  ellipse:
                    fill: none
                    stroke: var(--theme-sys-color-secondary)
                    stroke-width: 3em
                    opacity: 0.5

            # ================================================================
          - toolset: column-icon
            position:
              cx: 25
              cy: 100
            tools:
              # ------------------------------------------------------------
              - type: icon
                position:
                  cx: 50
                  cy: 50
                  align: center
                  icon_size: 50
                entity_index: 0
                styles:
                  icon:
                    fill: var(--theme-sys-color-secondary)

          # ================================================================
          - toolset: column-text
            position:
              cx: 125
              cy: 100
            tools:
              # ------------------------------------------------------------
              - type: text
                position:
                  cx: 50
                  cy: 37
                text: 'Pollen'
                styles:
                  text:
                    text-anchor: middle
                    font-size: 30em
                    font-weight: 600
                    opacity: 0.9
              # ------------------------------------------------------------
              - type: text
                position:
                  cx: 50
                  cy: 70
                text: 'Index'
                styles:
                  text:
                    text-anchor: middle
                    font-size: 26em
                    font-weight: 600
                    opacity: 0.9

          # ================================================================
          - toolset: pollen-column-trees
            position:
              cx: 260
              cy: 100
            tools:
              # ------------------------------------------------------------
              - type: name
                position:
                  cx: 50
                  cy: -25
                entity_index: 0
                styles:
                  name:
                    text-anchor: middle
                    font-size: 26em
                    font-weight: 700
                    opacity: 1
              # ------------------------------------------------------------
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
                  prefix: 'pollen_tree_'
                images:
                  - default: >
                      [[[
                        return "/local/images/"+ config.variables.path + config.variables.prefix + state + ".svg";
                      ]]]
              # ------------------------------------------------------------
              - type: state
                position:
                  cx: 50
                  cy: 125
                entity_index: 0
                show:
                  uom: none
                styles:
                  state:
                    text-anchor: middle
                    font-size: 22em
                    font-weight: 500
                    opacity: 0.7

          # ================================================================
          - toolset: pollen-column-grass
            position:
              cx: 395
              cy: 100
            tools:
              # ------------------------------------------------------------
              - type: name
                position:
                  cx: 50
                  cy: -25
                entity_index: 1
                styles:
                  name:
                    text-anchor: middle
                    font-size: 26em
                    font-weight: 700
                    opacity: 1
              # ------------------------------------------------------------
              - type: 'usersvg'
                entity_index: 1
                position:
                  cx: 50
                  cy: 50
                  height: 100
                  width: 100
                style: 'images'
                variables:
                  path: '[[sak_layout_tomorrow_pollen_image_path]]'
                  prefix: 'pollen_grass_'
                images:
                  - default: >
                      [[[
                        return "/local/images/"+ config.variables.path + config.variables.prefix + state + ".svg";
                      ]]]
              # ------------------------------------------------------------
              - type: state
                position:
                  cx: 50
                  cy: 125
                entity_index: 1
                show:
                  uom: none
                styles:
                  state:
                    text-anchor: middle
                    font-size: 22em
                    font-weight: 500
                    opacity: 0.7

          # ================================================================
          - toolset: pollen-column-weed
            position:
              cx: 530
              cy: 100
            tools:
              # ------------------------------------------------------------
              - type: name
                position:
                  cx: 50
                  cy: -25
                entity_index: 2
                styles:
                  name:
                    text-anchor: middle
                    font-size: 26em
                    font-weight: 700
                    opacity: 1
              # ------------------------------------------------------------
              - type: 'usersvg'
                entity_index: 2
                position:
                  cx: 50
                  cy: 50
                  height: 100
                  width: 100
                style: 'images'
                variables:
                  path: '[[sak_layout_tomorrow_pollen_image_path]]'
                  prefix: 'pollen_weed_'
                images:
                  - default: >
                      [[[
                        return "/local/images/"+ config.variables.path + config.variables.prefix + state + ".svg";
                      ]]]
              # ------------------------------------------------------------
              - type: state
                position:
                  cx: 50
                  cy: 125
                entity_index: 2
                show:
                  uom: none
                styles:
                  state:
                    text-anchor: middle
                    font-size: 22em
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
