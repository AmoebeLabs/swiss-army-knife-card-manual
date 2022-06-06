---
template: main.html
title: JavaScript Template Snippets
description: The Swiss Army Knife has support for JavaScript function templates as part of the YAML configuration. So you can re-use JavaScript snippets.
tags:
  - Templates
  - Built-in
  - JavaScript
---
<!-- GT/GL -->

##:sak-sak-logo: Basics
The Swiss Army Knife has support for JavaScript **function** templates as part of the YAML configuration.


###:sak-sak-logo: Format
The format used is:

- between single quotes, `'[[[ return <> ]]]'` if used on a single line
- and without quotes in a multi-line definition starting with the YAML qualifier '>'

As SAK uses the advised method of first class functions to evaluate JavaScript code snippets (See: [Use functions instead of eval()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)), the JavaScript snippet needs a `return` to pass the result.

The JavaScript snippet can use the following variables passed to the function:

| Argument | Description |
| -------- | ----------- |
| `state`  | The state *value* of the entity |
| `states` | The states list to access about any entity defined in HA |
| `entity` | The full entity definition |
| `user`   | The active user |
| `hass`   | The full hass object |
| `config` | The Tool configuration as defined in the YAML view |

###:sak-sak-logo: Support

Support is currently limited to two places:

- The `derived_entity` field to replace the tool state with a derived state
- The `animations` section.

##:sak-sak-logo: Derived Entity Example

One of the places where JavaScript templates are supported is to create what is called a "derived entity".
This one is derived from the received state on the tool and replaces the original tool state.

Below shows a card with a light and brightness entity/attribute.

The slider tool uses entity 1 (brightness) which is translated from a number to a percentage.

```yaml title="view-sake2.yml" linenums="1" hl_lines="13 29 31 40"
- type: 'custom:swiss-army-knife-card'

  entities: 
    - entity: light.livingroom_light_duo_left_light
      name: Duo Links
      area: Woonkamer
      icon: mdi:floor-lamp-dual

    - entity: light.livingroom_light_duo_left_light
      name: Duo Links
      area: Woonkamer
      icon: mdi:floor-lamp-dual
      attribute: brightness
      unit_of_measurement: "%"

  layout:
    toolsets:

      - toolset: slider
        position:
          cx: 50
          cy: 50
        tools:
          - type: slider
            # Using the brightness of the light as entity
            entity_index: 1

            # Convert incoming brightness 0..255 to 0..100%
            derived_entity:
              input : '[[[ return state ]]]'
              state: >
                [[[
                  if (typeof(entity) === 'undefined') return;
                  if (typeof(state) === 'undefined') return;
                  
                  var bri = Math.round(state / 2.55);
                  return (bri ? bri : '0');
                ]]]
              # Set unit to %.
              unit: >
                [[[
                  if (typeof(state) === 'undefined') return undefined;
                  return '%';
                ]]]
```

##:sak-sak-logo: Animations section Example

```yaml title="view-sake1.yml" linenums="1" hl_lines="8 10 13"
style: 'images'
images:
  - clear-night-night: /local/images/weather/clear-night.svg
  - cloudy-day: /local/images/weather/cloudy-day.svg
  - cloudy-night: /local/images/weather/cloudy-night.svg
  # Etcetera
  
animations:
    # Animation always matches the current state!
  - state: '[[[ return (state); ]]]'
    # Check the current sun state to determine image
    # to select from the images list. Add '-night' or '-day' to state name.
    image: >
      [[[
        if (states["sun.sun"].state == 'below_horizon') return (state + '-night');
        return (state + '-day');
      ]]]
```

