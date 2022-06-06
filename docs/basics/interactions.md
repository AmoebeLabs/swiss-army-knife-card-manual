---
template: main.html
title: User Interactions
description: The Swiss Army Knife card supports user interactions. These interactions are NOT card-based but tool-based: in other words, every SAK Tool can be interactive.
tags:
  - Interactions
  - Input
---
<!-- GT/GL -->

The Swiss Army Knife card supports user interactions. These interactions are NOT card-based but tool-based: in other words, every SAK Tool can be interactive.

##:sak-sak-logo: Interacting with SVG objects

There are some things to keep in mind when interacting with SVG objects because their interaction is different from HTML objects. HTML does create a so-called bounding box around the objects to facilitate interaction (mouse or touch) with them. SVG doesn't have that functionality yet: it's part of the unreleased SVG 2.0 specification.

Interaction with an SVG object depends on things like an object's 'fill', its 'visibility', and whether it has been painted or not.

!!! Tip "For an interactive, visual explanation: see [Managing SVG Interaction With The Pointer Events Property](https://www.smashingmagazine.com/2018/05/svg-interaction-pointer-events-property/)"

###What does this mean for SAK Tools?

Generally speaking: there are no problems with SAK tools: you won't notice the difference between SVG and HTML-based objects.

This applies at least to text-based tools like entity names, areas, and states.

For the graphical tools like circles and rectangles for instance it depends on the `fill` color: as long as the object has a fill, user interactions will work as expected. Don't use `fill: none`, unless you don't want interactions with the inner part of the tool.

!!! Tip "Use `fill: rgba(0,0,0,0)` for 'invisible' backgrounds for circles/rectangles that need interaction!"

Icons are an exception: icons are actually SVG images. Since an icon's background has no fill, it would be difficult to use a three-dot menu icon, for example. You'd have to touch the dots to get every interaction noticed!

Therefore, the SAK Icon Tool draws an invisible background behind the `icon` to respond to tap actions. It uses a rectangle without a line, but with a fill color of `fill: rgba(0,0,0,0)`. This makes it visually invisible, but still responds to pointer/touch events.


##:sak-sak-logo: Current - entity based - support

###In General
The current method is through the `tap_action` definition in the `entities` list section of the card. Just like most Home Assistant cards.

```yaml linenums="1" hl_lines="7-12"
- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: light.livingroom_light_cupboard_light
      name: Boekenkast
      area: Woonkamer
      icon: mdi:book-open-outline
      tap_action:
        action: call-service
        service: light.toggle
        service_data:
          entity_id: light.livingroom_light_cupboard_light
        haptic: light
```

**Any** tool connected to this entity (`entity_index: 0` in this case) will perform this action once clicked.

If you want different actions, say a `toggle` for the circle (button), and `more-info` for tapping the perentage state/attribute, you have to be a bit creative and define the **same** entity once more, but with a different `tap_action`:
```yaml linenums="1" hl_lines="7-12 20-22"
- type: 'custom:swiss-army-knife-card'
  entities:
    # Entity to be used for switching light (circle tool)
    - entity: light.livingroom_light_cupboard_light
      name: Boekenkast
      area: Woonkamer
      icon: mdi:book-open-outline
      tap_action:
        action: call-service
        service: light.toggle
        service_data:
          entity_id: light.livingroom_light_cupboard_light
        haptic: light

    # Entity to be used for state, name, area "more-info" popup action
    # Is same as first entity, but with different tap_action!
    - entity: light.livingroom_light_cupboard_light
      name: Boekenkast
      area: Woonkamer
      icon: mdi:book-open-outline
      tap_action:
        action: more-info
        haptic: success

    # Brightness attribute gives "more-info" popup action
    - entity: light.livingroom_light_cupboard_light
      name: Boekenkast
      area: Woonkamer
      icon: mdi:book-open-outline
      attribute: brightness
      unit_of_measurement: "%"
      tap_action:
        action: more-info
        haptic: success
```

###The Slider
The slider is the only tool having its own `slider_action` section. This was needed to support dragging and other settings.
=== "Light example"
    ```yaml linenums="1"
    slider_action:
      update_interval: 200
      service: light.turn_on
      parameter: brightness_pct
    ```
=== "Thermostat example" 
    ```yaml linenums="1"
    slider_action:
      # Set interval to 0 to disable updates while dragging.
      # new temperature setpoint is sent to boiler on release
      # of the slider
      update_interval: 0
      service: climate.set_temperature
      # Override entity_id. Otherwise entity_index is used...
      entity_id: climate.calenta
      parameter: temperature
    ```

##:sak-sak-logo: Future - per tool - support

In the future, each tool will have its own `actions` section, independent of the definition of `entities`. <br>It means that the same entity, but a different tool, can have:

- No interaction at all
- A tap action to for instance toggle a light
- A tap action to get the more-info popup dialog or a custom popup dialog
- A tap action to go to another view, ie an URL
- etc.

=== "Light example"
    Example with a light entity and three tools on a card.
    As actions are defined PER tool, we can define a single entity and use that for every tool, but still have different actions for each tool / entity combination!
    ```yaml linenums="1"
    tools:
      # ------------------------------------------------------------
      - type: circle
        entity_index: 0
        #
        # Circle is used as button to switch light on/off
        #
        user_actions:
          tap_action:
            haptic: light
            actions:
              - action: call-service
                service: light.toggle

      # ------------------------------------------------------------
      - type: slider
        entity_index: 0
        #
        # Slider is used to set brightness percentage
        #
        user_actions:
          drag_action:
            update_interval: 200
            haptic: selection
            actions:
              - action: call-service
                service: light.turn_on
                parameter: brightness_pct
          tap_action:
            haptic: light
            actions:
              - action: call-service
                service: light.turn_on
                parameter: brightness_pct

      # ------------------------------------------------------------
      - type: name
        entity_index: 0
        #
        # Tapping name will show the more-info popup dialog
        #
        user_actions:
          tap_action:
            haptic: medium
            actions:
              - action: more-info
    ```
=== "Thermostat example"
    Example with a thermostat entity setpoint: a slider
    ```yaml linenums="1"
    tools:
      # ------------------------------------------------------------
      - type: slider
        entity_index: 1
        #
        # Slider only specifies tap_action in this case. Dragging
        # does not imply any action.
        #
        user_actions:
          tap_action:
            haptic: light
            actions:
              - action: call-service
                service: climate.set_temperature
                parameter: temperature
                service_data:
                  # Override entity_id. Otherwise entity_index is used...
                  entity_id: climate.calenta
    ```

