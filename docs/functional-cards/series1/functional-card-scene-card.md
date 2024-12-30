---
template: main.html
title: "Functional Cards: Call Scene/Script Card"
description: "Example of functional card, Call Scene/Script Card"
hideno:
  toc
tags:
  - Design
  - Functional Card
  - Scene/Script Card
---
<!-- GT/GL -->

![Swiss Army Knife Functional Card Scene D06 Light](../../assets/screenshots/sak-functional-card-12-scene-theme-d06-light.png){width="200"}
<br>![Swiss Army Knife Functional Card Scene D06 Dark](../../assets/screenshots/sak-functional-card-12-scene-theme-d06-dark.png){width="200"}

This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]

!!! info "Its a card, but it just demonstrates how to use the `scene` user action on a tool"

| Description| Aspect Ratio| Target Size |
|-|-|-|
| A card that shows an icon and text, and has a `scene` user action.| 3/1 | Grid with 3 columns |

| SAK Tool| Used for |
|-|-|
| Icon | Some fixed Icon|
| Text | Scene text|
| RectEx | A rectangle covering the whole card to act as a button to handle the activate scene action|

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Card | This card activates the scene for you|

##:sak-sak-logo: Usage
[:octicons-tag-24: 1.0.0-rc.3][github-releases]

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
  layout:
    template:
      name: sak_layout_fce_scene
      variables:
        - sak_layout_scene_icon: mdi:script
        - sak_layout_scene_text: 'Scene'
        - sak_layout_scene_id: 'scene.unknown'
        - sak_layout_scene_transition: 2.5
```

| Data | Default| Required | Description |
|-|-|-|-|
| sak_layout_scene_icon | mdi:script | :material-close: | The used icon on the card |
| sak_layout_scene_text | | :material-check: | The text displayed on the card |
| sak_layout_scene_id | | :material-check: | The entity id of the scene that should be called |
| sak_layout_scene_transition | 2.5 | :material-close: | The scene transition time in seconds |

##:sak-sak-logo: YAML Template Definition
[:octicons-tag-24: 1.0.0-rc.3][github-releases]
??? Info "Full definition of layout template"
    ```yaml linenums="1"
    sak_layout_fce_scene:
      template:
        type: layout
        defaults: 
          - sak_layout_scene_icon: mdi:script
          - sak_layout_scene_text: 'Scene'
          - sak_layout_scene_id: 'scene.unknown'
          - sak_layout_scene_transition: 2.5
      layout:
        styles:
          card:
            border-radius: 25em
            background: var(--theme-sys-color-secondary-container)
        aspectratio: 3/1
        toolsets:
          # ================================================================
          - toolset: column-icon
            position:
              cx: 50
              cy: 50
            tools:
              # ------------------------------------------------------------
              - type: icon
                position:
                  cx: 50
                  cy: 50
                  align: center
                  icon_size: 50
                icon: '[[sak_layout_scene_icon]]'
                styles:
                  icon:
                    fill: var(--secondary-text-color)
                    opacity: 0.9
                
          # ================================================================
          - toolset: button-text
            position:
              cx: 175
              cy: 50
            tools:
              # ------------------------------------------------------------
              - type: text
                position:
                  cx: 50
                  cy: 50
                text: '[[sak_layout_scene_text]]'
                styles:
                  text:
                    text-anchor: middle
                    font-size: 30em
                    font-weight: 700
                    opacity: 1

          # ================================================================
          - toolset: button-cover
            position:
              cx: 150
              cy: 50
            tools:
              # ------------------------------------------------------------
              - type: rectex
                position:
                  cx: 50
                  cy: 50
                  height: 100
                  width: 300
                user_actions:
                  tap_action:
                    haptic: light
                    actions:
                      - action: navigate
                        service: scene.turn_on
                        service_data:
                          entity_id: '[[sak_layout_scene_id]]'
                          transition: '[[sak_layout_scene_transition]]'
                styles:
                  rectex:
                    fill: rgba(0,0,0,0)
    ```
<!-- Image references -->

<!--- Internal References... --->
[Swiss Army Knife Tutorial 02]: ../tutorials/10-step-tutorial-02-intro.md

<!--- External References... --->
[ham3-d06-url]: https://material3-themes-manual.amoebelabs.com/examples/material3-example-theme-d06-tealblue/
[github-releases]: https://github.com/amoebelabs/swiss-army-knife-card/releases/
