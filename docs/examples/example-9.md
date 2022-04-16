---
template: main.html
description: This visualization shows some high-contrast examples of the Swiss Army Knife custom card. A lot of black and white with contrasting colors to show states!
---

#Example 9: High Contrast

![AmoebeLabs Swiss Army Knife Custom Card Example 9 - Hight Contrast]

##:sak-sak-logo: Visualization

This visualization shows some high-contrast examples. A lot of black and white with contrasting colors to show states!

It uses indoor environment, occupancy, airvisual AQI data, and some square light cards with status, icon, history, segmented arc and map animations.

##:sak-sak-logo: Used Home Assistant Integrations
- First row: Aqara temperature, humidity and pressure Zigbee sensors
- Second row: Aqara Occupancy Zigbee sensor
- Second row: [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/)
- Second row: Ikea Tradfri Zigbee Lights
- Third row: Same as second row, but with different layout.

!!! Success "I use [zigbee2mqtt][zigbee2mqtt-url] for the Zigbee sensors and lights. Zigbee2mqtt can be used either as docker container or [Home Assistant Add-on][zigbee2mqtt-addon-url] combined with the [MQTT integration](https://www.home-assistant.io/integrations/mqtt/)"

##:sak-sak-logo: How to make it work in your own installation
Except for the Air Visual integration, the others are generic temperature, humidity and pressure sensors, occupancy switch and light switches, so you can replace them with your own entities.

###Required Home Assistant integrations
The only integration you need are the `Airvisual` entities, so you need this integration:

- [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/)

###Required entitiy id changes

For the first row, replace the sensor entities with you own. As long as the entities don't use an attribute for the value, the history tool will work.

The `Airvisual` entities should be the same for any installation, so no changes required on that part.

If you don't have any `occupancy` sensor, replace it with any on/off sensor and the card should at least work!

The lights can be replaced with any entity that has a `brightness` attribute.

##:sak-sak-logo: View and Card Configuration

#### Lovelace view
| file | location | included from |
| ---- | -------- | ------------- |
| `view-sake9.yml` | `/lovelace/views` | `sak-examples-dashboard.yaml`|

#### Decluttering templates
None.

#### SAK templates
None.

##:sak-sak-logo: Interactions
- All tools support by default the "more-info" dialog once clicked.

##:sak-sak-logo: Remarks
None.

<!-- Image references -->

[AmoebeLabs Swiss Army Knife Custom Card Example 9 - Hight Contrast]: ../assets/screenshots/sak-example-9.png "Swiss Army Knife Example 9 - Hight Contrast"

<!-- External references -->
[zigbee2mqtt-url]: https://www.zigbee2mqtt.io/
[zigbee2mqtt-addon-url]: https://github.com/zigbee2mqtt/hassio-zigbee2mqtt