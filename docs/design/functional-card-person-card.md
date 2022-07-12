---
template: main.html
title: "Functional Cards: Person Card"
description: "Example of functional card, Person Card"
hideno:
  toc
tags:
  - Design
  - Functional Card
  - Person Card
---
<!-- GT/GL -->
##:sak-sak-logo: Visualization

![Swiss Army Knife Functional Card Person D06 Light Home]( ../assets/screenshots/sak-functional-card-12-person-theme-d06-light-home.png){width="300"}
![Swiss Army Knife Functional Card Person D06 Light Not Home]( ../assets/screenshots/sak-functional-card-12-person-theme-d06-light-not_home.png){width="300"}
<br>![Swiss Army Knife Functional Card Person D06 Dark Home]( ../assets/screenshots/sak-functional-card-12-person-theme-d06-dark-home.png){width="300"}
![Swiss Army Knife Functional Card Person D06 Dark Not Home]( ../assets/screenshots/sak-functional-card-12-person-theme-d06-dark-not_home.png){width="300"}

This card uses the [Material 3 theme D06, TealBlue][ham3-d06-url]

!!! info "This card shows you some possibilities to apply JavaScript to the animations section"
    The card itself is not very fancy, but the [use of JavaScript][Swiss Army Knife Javascript Snippets] to fetch the zone's Icon, and to do some color changes is a nice example of the possibilities that JavaScript adds to the tool. It are just a few lines, but very powerful!
    
    It also takes care of fetching the icon of additional zones (ie not the home zone).
    
| Description| Aspect Ratio| Target Size |
|-|-|-|
| A card that shows in which zone a person is, or if in no known zone as away / not home.| 4/1 | Grid with 2 columns |

| SAK Tool| Used for |
|-|-|
| Icon | Background Icon (only in first screenshot) :smile: |
| Circle | The half circle, as the left part of the circle is cutoff by the card |
| Icon | Entity Icon. Animated, state dependent|
| Icon | Zone Icon, ie where is the person according to the zone configuration. Animated, state dependent|
| Name | Name of Entity|
| State | State of entity|

##:sak-sak-logo: Interaction

| Part | Description|
|-|-|
| Card | All tools connected to an entity do show by default the "more-info" dialog once clicked |

##:sak-sak-logo: Usage
[:octicons-tag-24: 1.0.0-rc.3][github-releases]

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: person.marco
      name: 'Person'
      icon: mdi:face-man
  layout:
    template:
      name: sak_layout_fce_person
      variables:
        - sak_layout_fce_person_zone_entities:
            - zone.the_gym
            - zone.marco_work
            - zone.marco_parents
            - zone.zoo
```

##:sak-sak-logo: YAML Template Definition
[:octicons-tag-24: 1.0.0-rc.3][github-releases]
??? Info "Full definition of layout template"
    ```yaml linenums="1"
    sak_layout_fce_person:
      template:
        type: layout
        defaults: 
          - dummy: 0
      layout:
        aspectratio: 4/1
        toolsets:
          # ================================================================
            # Extra background icon. Just for fun and filling some space
          - toolset: background-icon
            position:
              cx: 350
              cy: 50
            tools:
              # ------------------------------------------------------------
              - type: icon
                position:
                  cx: 50
                  cy: 50
                  align: center
                  icon_size: 100
                icon: mdi:map-marker-radius-outline
                styles:
                  icon:
                    fill: var(--theme-sys-elevation-surface-neutral2)

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
                    stroke: var(--theme-sys-color-secondary)
                    stroke-width: 3em
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
                animations:
                    # Return current state, so always a match!
                  - state: '[[[ return state; ]]]'
                    styles:
                      icon:
                        # Set fill depending on being at home!
                        fill: >
                          [[[ if (['home', 'not_home'].includes(state)) return 'var(--theme-sys-color-primary)';
                              return 'var(--theme-sys-color-tertiary)';
                          ]]]
                styles:
                  icon:
                    fill: var(--theme-sys-color-secondary)
                    opacity: 0.9
                
          # ================================================================
          - toolset: zone-icon
            position:
              cx: 40
              cy: 18
            tools:
              # ------------------------------------------------------------
              - type: circle
                position:
                  cx: 50
                  cy: 50
                  radius: 14
                entity_index: 0
                animations:
                    # Return current state, so always a match!
                  - state: '[[[ return state; ]]]'
                    styles:
                      circle:
                        # Set fill depending on being at home or some unwanted state!
                        fill: >
                          [[[ if (state == 'home') return 'var(--theme-sys-color-primary)';
                              if (state == 'not_home') return 'var(--brand-google-red)';
                              if (['unavailable', 'unknown'].includes(state)) return 'black';
                              return 'var(--theme-sys-color-tertiary)';
                          ]]]
                styles:
                  circle:
                    fill: var(--brand-google-red)
                    stroke: var(--primary-background-color)
                    stroke-width: 2em

              # ------------------------------------------------------------
              - type: icon
                position:
                  cx: 50
                  cy: 50
                  align: center
                  icon_size: 18
                entity_index: 0
                variables:
                  zone_ids: '[[sak_layout_fce_person_zone_entities]]'
                animations:
                    # Return current state, so always a match!
                  - state: '[[[ return state; ]]]'
                    # Fetch icon of zone. If no match on zone, the state 'not_home' is given.
                    # Check that state, and return the 'not home' icon in that case!
                    icon: >
                      [[[ if (state == 'not_home') return 'mdi:home-off-outline';
                          if (state == 'home') return states['zone.home'].attributes.icon;
                          // For not home, we get the friendly name as input.
                          // Must find that one to retrieve the zone's id...
                          
                          for (var i=0; i<config.variables.zone_ids.length; i++) {
                            var zone = states[config.variables.zone_ids[i]];
                            if (zone && zone.attributes.friendly_name == state) {
                              return states[zone.entity_id].attributes.icon;
                            }
                          }
                          return 'mdi:map-marker-question';
                      ]]]
                    styles:
                      icon:
                        fill: var(--primary-background-color)
                styles:
                  icon:
                    fill: var(--primary-background-color)

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
