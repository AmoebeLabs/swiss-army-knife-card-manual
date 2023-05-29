---
template: main.html
description: The Swiss Army Knife custom card has built-in support for Theming, color swatches and color palettes. This support is aimed to re-use colors with support for light and dark modes.
tags:
  - Localization
  - Formatting
---
<!-- GT/GL -->
# Overview of Localization and Entity Display Formatters
:octicons-tag-24: 2.5.1 · :octicons-tools-24: Experimental

Version 2.5.1 adds extended and up-to-date support for localization and formatters.

##:sak-sak-logo: Localization
With version 2.5.1, localization is re-instated and updated with the current Home Assistant localization tags and features, meaning translation support for:

- Platforms (integrations, such as AirVisual)
- Device Classes (motion, power, energy, humidity, etc.)
- Domains (sensors, binary_sensors, etc.)

On top of that, if the translation can't be found using these default translation tags, a specific manual `locale_tag` can be defined for a state.

###:sak-sak-logo: Example locale_tag usage
The `met` integration contains the numerical wind direction in degrees. This is translated using a derived entity in 16 named wind directions. The translation for these wind directions is not present in the `met` component translations, but _is_ in the Home Assistant UI in the form of 'ui.card.weather.cardinal_direction.<wind name direction\>'

The Swiss Army Knife adds the state to this `locale_tag` and calls the translation engine of Home Assistant to translate the string for display.

```yaml linenums="1" title="From (updated) view-sake1.yml" hl_lines="8"
      - type: state
        id: 3
        position:
          cx: 78
          cy: 20
        entity_index: 46
        locale_tag: 'ui.card.weather.cardinal_direction.'
        text:
          before: '/ '
        derived_entity:
          state: |
            [[[
              const DIRECTION = ["n", "nne", "ne", "ene", "e", "ese", "se",
              "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw", ];
              const dir = Math.floor((state / 22.5) + .5);
              return DIRECTION[(dir % 16)];
            ]]]
```

##:sak-sak-logo: Formatters
Formatters are an addition to the localization functions to translate a state to a specific - localized - format. Most formatters are about date, datetime and time formats.

### Example usage

```yaml linenums="1" title="From (updated) view-sake1.yml" hl_lines="8"
  - type: 'custom:swiss-army-knife-card'
    entities:
      # - entity: sensor.next_sunrise
      - entity: sun.sun
        attribute: next_rising
        unit: 'uur'
        icon: mdi:weather-sunset-up
        format: time-24h
```

###:sak-sak-logo: General formatters
| Formatter | Type | Example |
| - | - | - |
| relative | timestamp | Displays the timestamp (`last_changed` for instance) as a relative time in the `secondary_info` part of the entity: '10 seconds ago' |
| brightness <br>brightness_pct | 0..255 | brightness 0..100|
| duration | seconds | Formats the state as a duration in seconds |

###:sak-sak-logo: DateTime formatters
| Formatter | Type | Example |
| - | - | - |
| datetime | timestamp | August 9, 2021, 8:23 AM \|\| August 9, 2023, 8:23 |
| datetime_month-short | timestamp | Aug 9, 2021, 8:23 AM |
| datetime-short | timestamp | Aug 9, 8:23 AM |
| datetime_with-seconds | timestamp | August 9, 2021, 8:23:15 AM |
| datetime-numeric | timestamp | 9/8/2021, 8:23 AM |

###:sak-sak-logo: Date formatters
| Formatter | Type | Example |
| - | - | - |
| date | timestamp | January 16, 2021 |
| date_month | timestamp | January |
| date_month_year | timestamp | January 2021 |
| date-short | timestamp | Jan 16 |
| date-numeric | timestamp | 01/16/2021 \|\| 16/01/2021 |
| date_weekday | timestamp | Saturday |
| date_weekday-short | timestamp | Sat  |
| date_weekday_day | timestamp | Saturday, January 16 |

###:sak-sak-logo: Time formatters

| Formatter | Type | Example |
| - | - | - |
| time | timestamp | 9:15 PM \|\| 21:15 |
| time-24h | timestamp | 21:15 |
| time_weekday | timestamp | Tuesday 7:00 PM \|\| Tuesday 19:00 |
| time_with-seconds | timestamp | 9:15:24 PM \|\| 21:15:24 |


##:sak-sak-logo: Difference between Converters and Formatters

As of :octicons-tag-24: 2.5.1, there is a distinct difference between processing a state (the value coming from Home Assistant) and displaying a state using locale, formats and decimals.

| What | Description |
| - | - |
| Converter | Converting an incoming state to a different state, just as you would do with a `derived_entity`. <br>The converted state is also the state `animations` and `colorstops` are using |
| Formatter | Formatting the current state for display on the screen (using localization and specified entity format) |
