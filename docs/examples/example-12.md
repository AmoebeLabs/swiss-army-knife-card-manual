---
template: overrides/main.html
---

[![SAK Example Light]][SAK Example Light]
_Light example using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_

<br>[![SAK Example Dark]][SAK Example Dark]
_Dark example using [HA Material 3 theme d06 (Teal blue)][ham3-d06-url]_

##:sak-sak-logo: Visualization
This visualization shows some multi entity wide cards instead of the abundant square cards.  
All cards have an aspect ratio of 6/1.

The information density is pretty high, but still readable on my iPhone.

**First card**

The first one shows air quality data from AirVisual in a three 'columns' layout: The air quality icon and description in the first 'column', the state with a segmented arc in the second 'column', and finally the history over the last 24 hours in the last 'column'.

**Environment cards**

The environment cards have all the same format showing data from my Aqara Zigbee environment sensors. Next to the sensor values (temperature, humidity and pressure) data about the battery and linkquality are also displayed.

**Server cards**

These show the logical stuff like cpu, memory, disk and system load information.

##:sak-sak-logo: Data sources
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

###Required Home Assistant integrations
**First card**

You only need the AirVisual integration.

- [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/)

 **Environment cards**
 
The environment sensors can be replaced with a sensor from your own installation.

**Server cards**

The visualization is build on the system monitor, glances and rest sensors, so you need these integrations:

####For the `Hestia` server card:

- [The System Monitor integration](https://www.home-assistant.io/integrations/systemmonitor/)

####And for the `Poseidon`server card:
- [The Glances integration](https://www.home-assistant.io/integrations/glances/)
- [The RESTful sensor integration](https://www.home-assistant.io/integrations/sensor.rest/) to get extra sensors from Glances, as the default Glances integration does not give you all the 'load' sensors.

###Required entitiy id changes

**First card**

The `Airvisual` entities should be the same for any installation, so no changes required on that part.

**Environment cards**

You can replace the existing `temperature`, `humidity`, `pressure`, `battery` and `linkquality` entities with a version of your own sensor entities. 

**Server cards**

The `System Monitor` entities should be the same for any installation, so no changes required on that part.

The `Glances` integration creates environment dependent entities: the server name is usually added to the integration, and thus entity id's.
My integration is called `Glances-Poseidon` and thus the entities for instance `sensor.glances_poseidon_cpu_load`. You have to change the entities to your own entity id's.

!!! Info "If you have only 1 server, remove the second server..."


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

<!--- References to pictures... --->

[SAK Example]: ../assets/screenshots/sak-example-12.png
[SAK Example Light]: ../assets/screenshots/sak-example-12-m3-d06-light.png
[SAK Example Dark]: ../assets/screenshots/sak-example-12-m3-d06-dark.png


<!--- External References... --->

[ham3-d06-url]: https://ha-m3-themes.docs.amoebelabs.com/examples/example-d6/