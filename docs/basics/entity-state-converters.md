---
template: main.html
description: The Swiss Army Knife custom card has built-in support for Theming, color swatches and color palettes. This support is aimed to re-use colors with support for light and dark modes.
tags:
  - Entities
  - Converters
---
<!-- GT/GL -->
# Entity State Converters
:octicons-tag-24: 2.5.1 · :octicons-tools-24: Experimental · :octicons-alert-24: BREAKING CHANGE

Version 2.5.1 adds some predefined converters for entities state, attribute or secondary info.

!!! Warning "Entity State converters replace _SOME_ the previous Formatters!"
    The previous `format` options did also change the state. The new `format` options are only for displaying. <br><br>If you used the `format` option to for instance change to `brightness_pct`, use the `converter` option instead!

    Using `format: relative` for the `secondary_info` field remains unchanged.

!!! Success "The derived entity converters should continue working!"
    They change the state and unit, so should still work. In some cases the built-in converters can replace the `derived_entity` definitions, such as for `brightness/brightness_pct`.

##:sak-sak-logo: State converters
State converters are built-in state conversions. Incoming states are converted before passed on to the tools to be used in animations, colorstops, etc.

Without these predefined converters, you would have to use a `derived_entity` to do the job.

###:sak-sak-logo: Multiply and Divide
| Converter | Parameter | Description |
| - | - | - |
| multiply()| `Number`| Multiplies the entity state with the value defined between ().<br> This must be a single number, ie `multiply(1000) to multiply the state by 1.000 |
| divide()|  `Number` | Divides the entity state with the value defined between (). <br> This must be a single number, ie `divide(100) to divide the state by 100 |

!!! Warning "The parameter must be a single number! You cannot use calculations."

###:sak-sak-logo: Light brightness and colors
:octicons-tag-24: 2.5.1 · :octicons-alert-24: BREAKING CHANGE

!!! Example "For brightness, replace the `format: brightness` command with `convert: brightness_pct`"
    Nothing really 'breaks', as in crashes, but the tool will use the wrong state values, and thus
    behave differently than expected, if you don't do this change.

| Converter | Type | Example |
| - | - | - |
| brightness_pct| `brightness` | Converts the 0..255 brightness state to 0..100% brightness percentage. <br>Used by for instance by a (circular) slider to control brightness percentage |
| rgb_csv | `rgb, hsl, colortemp, xy` | 10,20,30 (meaning a string with comma separated r,g,b values!) |
| rgb_hex | `rgb, hsl, colortemp, xy` | #0a141e (hex color coding!) |

!!! Warning "The rgb converters require the right attribute to be specified for the entity"
    In most cases this will be `hs_color` for RGB lights and `color_temp` for lights with only temperature control.

    You must check the attributes in Home Assistant to be sure. Real rgb lights use `rgb_color` for instance. However, my RGBW Ledstrip uses `xy` mode for RGB and `color_temp` for the W mode.

    In both cases monitoring the `hs_color` attribute works!

##:sak-sak-logo: Example Usage
Below some examples of the use of these converters.

###:sak-sak-logo: Light brightness slider
When you use a slider to control the brightness of a light, you need the actual brightness percentage, not the value Home Assistant is using for the state of the brightness, which is 0..255.

As of :octicons-tag-24: 2.5.1, the predefined converter `brightness_pct` does the job for you!

```yaml linenums="1" hl_lines="7-8"
  - type: 'custom:swiss-army-knife-card'
    entities:
      - entity: light.livingroom_light_duo_right_light
        name: 'CircSlider Test'
      - entity: light.livingroom_light_duo_right_light
        attribute: brightness
        unit: "%"
        convert: brightness_pct
```

Before :octicons-tag-24: 2.5.1, there where two options: the `format: brightness` field or a `derived_entity` with some JavaScript to convert to a brightness percentage.

```yaml title="Using format qualifier to convert" linenums="1" hl_lines="7-8"
  - type: 'custom:swiss-army-knife-card'
    entities:
      - entity: light.livingroom_light_duo_right_light
        name: 'CircSlider Test'
      - entity: light.livingroom_light_duo_right_light
        attribute: brightness
        unit: "%"
        format: brightness
```

```yaml title="Using derived_entity to convert" linenums="1" hl_lines="18-33"
  - type: 'custom:swiss-army-knife-card'
    entities:
      - entity: light.livingroom_light_duo_right_light
        name: 'CircSlider Test'
      - entity: light.livingroom_light_duo_right_light
        attribute: brightness
    layout:
      toolsets:
        # ===============================================================
        - toolset: slidertest3
          position:
            cx: 50
            cy: 50
          tools:
            - type: slider
              entity_index: 1   # Use brightness entity
              derived_entity:
                input : '[[[ return state ]]]'
                state: >
                  [[[
                    if (typeof(entity) === 'undefined') return;
                    if (typeof(state) === 'undefined') return;
                    if (state === 'undefined') return;

                    var bri = Math.round(state / 2.55);
                    return (bri ? bri : '0');
                  ]]]
                unit: >
                  [[[
                    if (typeof(state) === 'undefined') return undefined;
                    return '%';
                  ]]]
```

###:sak-sak-logo: Convert kW to Watt
The DSMR Reader plugin reports power usage in kW. In some cases it is nicer to have this in Watts, so multiply the state's entity by 1000.

!!! Info "Don't forget to adjust units and decimals if you use this converter"

```yaml linenums="1" hl_lines="5-7"
  - type: 'custom:swiss-army-knife-card'
    entities:
      - entity: sensor.dsmr_reading_electricity_currently_delivered
        name: 'Sensor #2-2'
        convert: multiply(1000)
        unit: W
        decimals: 0
```

###:sak-sak-logo: Convert MiB to GiB
When you monitor your server with the default Home Assistant monitor, you get your memory use/free reported in MiB. You can convert this to GiB by dividing it by 1024.

!!! Info "Don't forget to adjust units and decimals if you use this converter"

```yaml linenums="1" hl_lines="10-12 16-18"
  - type: 'custom:swiss-army-knife-card'
    entities:
      # Memory
      - entity: sensor.memory_use_percent
        decimals: 0
        icon: mdi:memory
      - entity: sensor.memory_use
        name: 'Used:'
        icon: mdi:memory
        convert: divide(1024)       # MiB to GiB
        unit: 'GiB'                 # In GiB
        decimals: 2                 # ..with 2 decimals precision
      - entity: sensor.memory_free
        name: 'Free:'
        icon: mdi:memory
        convert: divide(1024)       # MiB to GiB
        unit: 'GiB'                 # In GiB
        decimals: 2                 # ..with 2 decimals precision
```

###:sak-sak-logo: Convert to RGB for color_temp and xy mode lights
Most lights should have the `hs_color` attribute when switched `on`.

!!! Success "This at least works for my Led strip."

```yaml linenums="1" hl_lines="4-5"
  - type: 'custom:swiss-army-knife-card'
    entities:
      - entity: light.livingroom_light_cupboard_light
        attribute: hs_color
        convert: rgb_csv
```

With the following YAML definition of the tool:
```yaml linenums="1" hl_lines="9-14"
  # Circle as test for xy/color_temp and csv mode color conversion
  - type: circle
    position:
      cx: 50
      cy: 50
      radius: 22.5
    entity_index: 0
    animations:
      - state: '[[[ return state; ]]]'
        styles:
          circle:
            fill: >-
              [[[ if (typeof (state) === 'undefined') return 'none';
                  return `rgb(${state})`; ]]]
```

###:sak-sak-logo: Convert to color temperature mode lights
!!! Success "This at least works for my Ikea Tradfri lights."

```yaml linenums="1" hl_lines="4-5"
  - type: 'custom:swiss-army-knife-card'
    entities:
      - entity: light.livingroom_light_duo_right_light
        attribute: color_temp
        convert: rgb_hex
```

With the following YAML definition of the tool:
```yaml linenums="1" hl_lines="9-14"
  # Circle as test for color_temp and hexmode color conversion
  - type: circle
    position:
      cx: 50
      cy: 50
      radius: 22.5
    entity_index: 0
    animations:
      - state: '[[[ return state; ]]]'
        styles:
          circle:
            fill: >-
              [[[ if (typeof (state) === 'undefined') return 'none';
                  return state; ]]]
```
###:sak-sak-logo: Convert for other color modes
I don't have other lights, so can't give you a working example. I know rgb color lights, using the `rgb_color` attribute works, but other modes might, just might not work.


##:sak-sak-logo: Difference between Converters and Formatters

As of :octicons-tag-24: 2.5.1, there is a distinct difference between processing a state (the value coming from Home Assistant) and displaying a state using locale, formats and decimals.

| What | Description |
| - | - |
| Converter | Converting an incoming state to a different state, just as you would do with a `derived_entity`. <br>The converted state is also the state `animations` and `colorstops` are using |
| Formatter | Formatting the current state for display on the screen (using localization and specified entity format) |

