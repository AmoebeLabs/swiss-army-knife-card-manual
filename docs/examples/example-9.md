---
template: main.html
title: "Example 9: High Contrast cards"
description: This visualization shows some high-contrast examples of the Swiss Army Knife custom card. A lot of black and white with contrasting colors to show states!
tags:
  - Examples
---

#Example 9: High Contrast

![AmoebeLabs Swiss Army Knife Custom Card Example 9 - Hight Contrast]

And a short GIF to give you an idea of the [CSS animations][css-animations]:

Actions:

- I moved :smile:
- I switched the "Duo Rechts" light to on.
- I changed the brightness using the slider of the bottom card. In this configuration, updating while dragging the slider is disabled, so you only see the other card changing the brightness if the slider of the bottom card is released!
- And finally, I switched the "Duo Rechts" light to off.

![AmoebeLabs Swiss Army Knife Custom Card Example 9 - Hight Contrast Movie]

##:sak-sak-logo: Visualization

This visualization shows some high-contrast examples. A lot of black and white with contrasting colors to show states!

It uses indoor environment, occupancy, airvisual AQI data, and some square light cards with status, icon, history, segmented arc and map animations.

##:sak-sak-logo: Interactions
- All tools support by default the "more-info" dialog once clicked.
- The lights can be switched on/off by clicking/tapping the rectangle area where the icon is positioned.
- Both lights only have a `tap_action` defined, so the sliders only update the brightness once released.

##:sak-sak-logo: Used Home Assistant Integrations
- First row: Aqara temperature, humidity and pressure Zigbee sensors
- Second row: Aqara Occupancy Zigbee sensor
- Second row: [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/)
- Second row: Ikea Tradfri Zigbee Lights
- Third row: Same as second row, but with different layout.

!!! Success "I use [zigbee2mqtt][zigbee2mqtt-url] for the Zigbee sensors and lights. Zigbee2mqtt can be used either as docker container or [Home Assistant Add-on][zigbee2mqtt-addon-url] combined with the [MQTT integration](https://www.home-assistant.io/integrations/mqtt/)"

##:sak-sak-logo: How to make it work in your own installation
Except for the Air Visual integration, the others are generic temperature, humidity and pressure sensors, occupancy switch and light switches, so you can replace them with your own entities.

####Environment sensors (First row)

:material-checkbox-multiple-marked-outline: _Required Home Assistant Entity Changes_<br>
Replace the sensor entities with your own entities. As long as the entities do not use an attribute for the value, the history tool will work. 

####Movement/occupancy sensor (Second + Third row)

:material-checkbox-multiple-marked-outline: _Required Home Assistant Entity Changes_<br>
Replace the occupancy entity with your own entity. If you don't have a `presence` sensor, replace it with an on/off sensor and the card should at least work!

####AirVisual (Second + Third row)

:material-checkbox-multiple-marked-outline: _Required Home Assistant Integrations_<br>
The only integration you need are the `Airvisual` entities, so you need the [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/)

:material-checkbox-multiple-marked-outline: _Required Home Assistant Entity Changes_<br>
The `Airvisual` entities should be the same for every installation, so no changes are needed on that part. 

####Lights (Second + Third row)

:material-checkbox-multiple-marked-outline: _Required Home Assistant Entity Changes_<br>
Replace the light entities with your light entities that have a `brightness` attribute.

##:sak-sak-logo: View and Card Configuration

#### Lovelace view
| file | location | included from |
| ---- | -------- | ------------- |
| `view-sake9.yml` | `/lovelace/views` | `sak-examples-dashboard.yaml`|

#### Decluttering templates
None.

#### SAK templates
None.

##:sak-sak-logo: Remarks
None.

<!-- Image references -->

[AmoebeLabs Swiss Army Knife Custom Card Example 9 - Hight Contrast]: ../assets/screenshots/sak-example-9.png "Swiss Army Knife Example 9 - Hight Contrast"
[AmoebeLabs Swiss Army Knife Custom Card Example 9 - Hight Contrast Movie]: ../assets/screenshots/swiss-army-knife-example-9b-800x800.gif "Swiss Army Knife Example 9 - Hight Contrast Movie"

<!-- Internal references -->
[css-animations]: ../basics/animations/css-animations.md

<!-- External references -->
[zigbee2mqtt-url]: https://www.zigbee2mqtt.io/
[zigbee2mqtt-addon-url]: https://github.com/zigbee2mqtt/hassio-zigbee2mqtt