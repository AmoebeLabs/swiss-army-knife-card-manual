---
template: main.html
description: Tools and entities have a strong relation in most cases. You can specify zero, 1 or more than one entity for a tool and use that for animations.
tags:
  - Tools
  - Entities
  
---
<!-- GT/GL -->

Tools and Entities have a strong relationship in most cases. The state of an entity determines what a tool displays, how it is displayed (styling) and how it interacts with the user.

Up to :octicons-tag-24: 2.4.1, a tool could be connected to zero (none) or one (1) entity.
As of :octicons-tag-24: 2.4.1, a tool can be connected to a list of entities.

##:sak-sak-logo: Standalone/Unconnected Tools 
A tool that is not connected to an entity, that is it has no `entity_index: x` field is used solely for display purposes. This can be anyting, but circles, rectangles and lines are mostly used for that.

**Example:**
```yaml linenums="1"
- type: 'circle'            # tooltype is 'circle'
  position:                 # Position on (100x100) canvas
    cx: 50                  # cx=50 is center position
    cy: 50                  # cy=50 is center position
    radius: 25              # radius of circle. Width/height is 50
```

##:sak-sak-logo: Single entity/Connected Tools
This is the most used combination: a tool is connected to a single entity to display its state and/or to have user interaction to for instance switch the entity on/off.
<br>The tool has an `entity_index: x` definition.

**Example:**
```yaml linenums="1" hl_lines="6"
- type: 'circle'            # tooltype is 'circle'
  position:                 # Position on (100x100) canvas
    cx: 50                  # cx=50 is center position
    cy: 50                  # cy=50 is center position
    radius: 25              # radius of circle. Width/height is 50
  entity_index: 0           # connect to state of entity 0
```

##:sak-sak-logo: Multi-entity Tools 
:octicons-tag-24: 2.4.1
In this case, the tool has an `entity_indexes` list definition instead of the `entity_index: x` definition:

```yaml linenums="1" hl_lines="1"
  entity_indexes:
    - entity_index: 1     # Main / default entity index for this tool
    - entity_index: 0     # Additional entity #1
    - entity_index: 2     # Additional entity #2
```

These multiple indexes can be used in the animations section to control the state/styling of the tool using other entities.

For instance, you want the tool to be hidden depending on the state of another entity:
```yaml title="Hide/Display tool" linenums="1" hl_lines="6-8 25-26 33-34"
- type: 'circle'            # tooltype is 'circle'
  position:                 # Position on (100x100) canvas
    cx: 50                  # cx=50 is center position
    cy: 50                  # cy=50 is center position
    radius: 25              # radius of circle. Width/height is 50
    entity_indexes:
      - entity_index: 1     # Default entity
      - entity_index: 0     # On/Off switch will show/hide this tool
    animations:
      - state: '50'
        operator: '>='
        reuse: true
        styles:
          track:
            opacity: 0.3
            transition: opacity 1s ease
      - state: '50'
        operator: '<'
        reuse: true
        styles:
          track:
            opacity: 1
            transition: opacity 1s ease

      - state: 'on'         # Show this tools state
        entity_index: 0     # If entity 0 is switched on
        reuse: true
        styles:
          circle:
            stroke: red
          tool:
            display: initial
      - state: 'off'        # Hide this tools state
        entity_index: 0     # if entity 0 is switched off
        reuse: true
        styles:
          tool:
            display: none
```

<!--- Image references --->
[Swiss Army Knife Example 7 - Servers]: ../assets/screenshots/sak-example-7.png "Swiss Army Knife example 7 - Servers"


<!--- Internal references --->

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
[swiss-army-knife-sak-templates]: ../templates/sak-templates/
[swiss-army-knife-coordinate-system]: ../coordinate-system/

[example 7]: ../examples/example-7.md

<!--- External references --->

