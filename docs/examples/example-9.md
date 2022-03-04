---
template: main.html
---

![AmoebeLabs Swiss Army Knife Custom Card Example 9]

##:sak-sak-logo: Visualization

This visualization shows some high-contrast examples. Not the prettiest design, but that has to do with high contrast.

It uses indoor environment, occupancy, airvisual AQI data, and some square light cards with status, icon, history, segmented arc and map animations.

##:sak-sak-logo: Data sources
- First row: Aqara temperature, humidity and pressure sensor using zigbee2mqtt, ie the [MQTT integration](https://www.home-assistant.io/integrations/mqtt/)
- Second row: Aqara Occupancy sensor using zigbee2mqtt, ie the [MQTT integration](https://www.home-assistant.io/integrations/mqtt/)
- Second row: [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/)
- Second row: Ikea Tradfri Zigbee Light, again using zigbee2mqtt, ie the [MQTT integration](https://www.home-assistant.io/integrations/mqtt/)
- Third row: Same as second row, but with different layout.

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

##:sak-sak-logo: Configuration

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
For some reason, the AQI value doesn't update always on initial display of the view. No idea why yet...

<!-- Image references -->

[AmoebeLabs Swiss Army Knife Custom Card Example 9]: ../assets/screenshots/sak-example-9.png