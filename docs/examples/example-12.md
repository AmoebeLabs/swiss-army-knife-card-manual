---
template: main.html
title: "Example 12: Wide cards showing lots of sensors"
description: This visualization shows some multi entity wide cards instead of the abundant square cards. The information density is pretty high, but still readable!
tags:
  - Examples
---
#Example 12: Wide cards showing lots of sensors

!!! Info "This example view requires one of the [Home Assistant Material 3 Themes][ham3-url]"

![AmoebeLabs Swiss Army Knife Custom Card Example 12 Light - Wide cards]
_Light example using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_

<br>![AmoebeLabs Swiss Army Knife Custom Card Example 12 Dark - Wide cards]
_Dark example using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_

##:sak-sak-logo: Visualization
This visualization shows some multi entity wide cards instead of the abundant square cards.  
All cards have an aspect ratio of 6/1.

The information density is pretty high, but still readable on my iPhone.

**First card**

The first one shows air quality data from AirVisual in a three 'columns' layout: The air quality icon and description in the first 'column', the state with a segmented arc in the second 'column', and finally the history over the last 24 hours in the last 'column'.

**Environment cards**

The environmental cards are all the same format and show data from my Aqara Zigbee environmental sensors. In addition to the sensor values ​​(temperature, humidity, and pressure), battery and link quality data is also displayed.

**Server cards**

These show the usual suspects like cpu, memory, disk, and system load information.

##:sak-sak-logo: Used Home Assistant Integrations
- First card: [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/)
- Environment cards: Aqara Zigbee sensors with temperature, humidity and pressure data using zigbee2mqtt, ie the [MQTT integration](https://www.home-assistant.io/integrations/mqtt/)
- Server cards: 
    - [The System Monitor integration](https://www.home-assistant.io/integrations/systemmonitor/)
    - [The Glances integration](https://www.home-assistant.io/integrations/glances/)
    - [The RESTful sensor integration](https://www.home-assistant.io/integrations/sensor.rest/) to get extra sensors from Glances, as the default Glances integration does not give you all the 'load' sensors.

Below the `sensor:` configuration for the System Monitor and extra Glances RESTful sensors:

```yaml title="System Monitor sensors" linenums="1"
# System Monitor
# ==============
# - https://www.home-assistant.io/integrations/systemmonitor/
  - platform: systemmonitor
    resources:
      - type: disk_use_percent
        arg: /
      - type: disk_use
        arg: /
      - type: disk_free
        arg: /
      - type: memory_free
      - type: memory_use
      - type: memory_use_percent    
      - type: load_1m
      - type: load_5m
      - type: load_15m
      - type: processor_use
      - type: last_boot

```
```yaml title="Extra Glances sensors" linenums="1"
# REStful stuff, Glances for instance
# ===================================
# - https://www.home-assistant.io/integrations/rest/
# - https://www.home-assistant.io/integrations/sensor.rest/
#
# Get Load sensors from Glances directly. The integration does not give them...
  - platform: rest
    resource: http://poseidon.srv.home:61208/api/3/load
    scan_interval: 60
    name: glances_poseidon_load
    value_template: "{{ value_json}}"
    json_attributes:
      - min1
      - min5
      - min15
      - cpucore

  - platform: template
    sensors:
      glances_poseidon_load_min1:
        value_template: "{{ state_attr('sensor.glances_poseidon_load', 'min1') }}"
        friendly_name: "Glances-Poseidon Load 1min"
        unit_of_measurement: "1m"
```

!!! Info "The top card uses the system monitor integration, the bottom card the Glances and RESTful sensor integration"


##:sak-sak-logo: How to make it work in your own installation

####In general

:material-checkbox-multiple-marked-outline: _Theme_<br>
This card requires the use of one of the Material 3 Themes for Home Assistant to be displayed as intended :smile:

####Airvisual card

:material-checkbox-multiple-marked-outline: _Required Integrations_<br>
You need the [AirVisual integration](https://www.home-assistant.io/integrations/airvisual/).

:material-checkbox-multiple-marked-outline: _Required Entity Changes_<br>
The `Airvisual` entities should be the same for any installation.

####Environment cards
 
:material-checkbox-multiple-marked-outline: _Required Entity Changes_<br>
Replace my `temperature`, `humidity`, `pressure`, `battery`, and `linkquality` entities with your sensor entities. 

####The Hestia server card

:material-checkbox-multiple-marked-outline: _Required Integrations_<br>
[The System Monitor integration](https://www.home-assistant.io/integrations/systemmonitor/)

:material-checkbox-multiple-marked-outline: _Required Entity Changes_<br>
The `System Monitor` entities should be the same for each installation, so no changes are required for that part. 

####The Poseidon server card
:material-checkbox-multiple-marked-outline: _Required Integrations_<br>
    - [The Glances integration](https://www.home-assistant.io/integrations/glances/)<br>
    - [The RESTful sensor integration](https://www.home-assistant.io/integrations/sensor.rest/) to get extra sensors from Glances, as the default Glances integration does not give you all the 'load' sensors.

:material-checkbox-multiple-marked-outline: _Required Entity Changes_<br>
The `Glances` integration creates environment dependent entities: the server name is usually appended to the integration. My integration is called `Glances-Poseidon` with entity names like `sensor.glances_poseidon_cpu_load`. You must change the entities to your own entity IDs.

!!! Info "If you have only 1 server, remove the second server..."

##:sak-sak-logo: View and Card Configuration

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

<!-- Image references -->

[AmoebeLabs Swiss Army Knife Custom Card Example 12]: ../assets/screenshots/sak-example-12.png
[AmoebeLabs Swiss Army Knife Custom Card Example 12 Light - Wide cards]: ../assets/screenshots/sak-example-12-m3-d06-light.png "Swiss Army Knife Example 12 - Wide cards, light theme"
[AmoebeLabs Swiss Army Knife Custom Card Example 12 Dark - Wide cards]: ../assets/screenshots/sak-example-12-m3-d06-dark.png "Swiss Army Knife Example 12 - Wide cards, dark theme"

<!--- External References... --->

[ham3-d06-url]: https://ha-m3-themes.docs.amoebelabs.com/examples/example-d6/
[ham3-url]: https://ha-m3-themes.docs.amoebelabs.com/