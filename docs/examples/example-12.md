---
template: overrides/main.html
---

[![SAK Example]][SAK Example]

  [SAK Example]: ../assets/screenshots/sak-example-12.png

##:sak-sak-logo: Visualization
This visualization shows some multi entity wide cards instead of the abundant square cards.  
All cards have an aspect ratio of 6/1.

The information density is pretty high, but still readable on my iPhone.

**First card**

The first one shows air quality data from AirVisual in a three 'columns' layout: The air quality icon and description in the first 'column', the state with a segmented arc in the second 'column', and finally the history over the last 24 hours in the last 'column'.

**Other cards**

The rest of the cards have all the same format showing data from my Aqara Zigbee environment sensors. Next to the sensor values (temperature, humidity and pressure) data about the battery and linkquality are also displayed.

!!! Note "If you remove the battery and linkquality, there is space for an extra icon/state/segmented arc"

This card could also be useful for server monitoring showing CPU, Memory, Disk usage and some other data.

##:sak-sak-logo: Data sources
- First card: [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/)
- Other cards: Aqara Zigbee sensors with temperature, humidity and pressure data using zigbee2mqtt, ie the [MQTT integration](https://www.home-assistant.io/integrations/mqtt/)

##:sak-sak-logo: How to make it work in your own installation

###Required Home Assistant integrations
You only need the AirVisual integration. The other environment sensors can be replaced with a sensor from your own installation.

- [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/)

###Required entitiy id changes

**First card**

The `Airvisual` entities should be the same for any installation, so no changes required on that part.

**Other cards**

You can replace the existing `temperature`, `humidity`, `pressure`, `battery` and `linkquality` entities with a version of your own sensor entities. 

##:sak-sak-logo: Configuration

#### Lovelace view

| file | location | included from |
| ---- | -------- | ------------- |
| `view-sake12.yml` | `/lovelace/views` | `sak-examples-dashboard.yaml`|

#### Decluttering templates
TBD.

#### SAK templates
TBD.

| name | file |
| ---- | -------- |
| `tbd` | `tbd.yaml` |

##:sak-sak-logo: Interactions
- All tools support by default the "more-info" dialog once clicked.
