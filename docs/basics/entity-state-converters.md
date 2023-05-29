---
template: main.html
description: The Swiss Army Knife custom card has built-in support for Theming, color swatches and color palettes. This support is aimed to re-use colors with support for light and dark modes.
tags:
  - Entities
  - Converters
---
<!-- GT/GL -->
# Entity State Converters
:octicons-tag-24: 2.5.1 · :octicons-tools-24: Experimental

Version 2.5.1 adds some predefined converters for entities state, attribute or secondary info.

##:sak-sak-logo: State converters
| Converter | Parameter | Description |
| - | - | - |
| 'brightness_pct'| `none` | Converts the 0..255 brightness state to 0..100% brightness percentage. <br>Used by for instance by a (circular) slider to control brightness percentage |
| 'multiply()'| `Number`| Multiplies the entity state with the value defined between ().<br> This must be a single number, ie `multiply(1000) to multiply the state by 1.000 |
| 'divide()'|  `Number` | Divides the entity state with the value defined between (). <br> This must be a single number, ie `divide(100) to divide the state by 100 |

##:sak-sak-logo: Example Usage

### Light brightness slider
When you use a slider to control the brightness of a light, you need the actual brightness percentage, not the value Home Assistant is using for the state of the brightness, which is 0..255.

In this case, before :octicons-tag-24: 2.5.1, a `derived_entity` with some JavaScript was needed. As of :octicons-tag-24: 2.5.1, the predefined converter `brightness_pct` does the job for you!

```yaml linenums="1" hl_lines="8"
  - type: 'custom:swiss-army-knife-card'
    entities:
      - entity: light.livingroom_light_duo_right_light
        name: 'CircSlider Test'
      - entity: light.livingroom_light_duo_right_light
        attribute: brightness
        unit: "%"
        convert: brightness_pct
```

### Convert kW to Watt
```yaml linenums="1" hl_lines="8"
  - type: 'custom:swiss-army-knife-card'
    entities:
      - entity: sensor.dsmr_reading_electricity_currently_delivered
        name: 'Sensor #2-2'
        convert: multiply(1000)
        unit: W
```

### Convert MiB to GiB
When you monitor your server with the default Home Assistant monitor, you get your memory use/free reported in MiB. You can convert this to GiB by dividing it by 1024.
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

##:sak-sak-logo: Difference between Converters and Formatters

As of :octicons-tag-24: 2.5.1, there is a distinct difference between processing a state (the value coming from Home Assistant) and displaying a state using locale, formats and decimals.

| What | Description |
| - | - |
| Converter | Converting an incoming state to a different state, just as you would do with a `derived_entity`. <br>The converted state is also the state `animations` and `colorstops` are using |
| Formatter | Formatting the current state for display on the screen (using localization and specified entity format) |

