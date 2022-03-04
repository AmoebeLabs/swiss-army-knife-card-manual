---
template: main.html
---

![AmoebeLabs Swiss Army Knife Custom Card Example 11 Light]
_Light example using [HA Material 3 theme c11 (Purple)][ham3-c11-url]_

<br>![AmoebeLabs Swiss Army Knife Custom Card Example 11 Dark]
_Dark example using [HA Material 3 theme c11 (Purple)][ham3-c11-url]_

##:sak-sak-logo: Visualization
This visualization shows colorful boiler and electricity cards with possibly very "Dutch/European" integrations.

The second card has the data from my 3 phase smart meter. My 4 kWp solar system is disconnected, so you don't see any returned power.

**Boiler**

It shows a thermostat with some extra data (heat/hot water active) and the boilers' setpoints and actual measured temperatures.

The thermostat card uses two overlayed segmented arcs:
- One (with scale) for the actual room temperature measured by the thermostat
- One (white, no scale, superimposed on previous segarc) for the setpoint.

You can see the setpoint in the screenshot: the room temperature is 19.6 degrees celcius and the setpoint is 20.0 degrees celcius. The latter one is a smaller segarc.

**Electricity**

The electricity card shows my 230V/3x25A smart meter data where the upper segmented arc shows the delivered (from the grid) electricity, and the lower part the returned (to the grid) electricity from for instance a solar system.

In my case, my 4 kWp solar systems converter delivers up to 3680 W (230V / 16A) and is connected to a single phase (L3).

##:sak-sak-logo: Data sources
- Boiler: OpenTherm Gateway integration. I'm using both a MQTT based integration and the official [OpenTherm Gateway integration](https://www.home-assistant.io/integrations/opentherm_gw#sensors).
- Electricity: DSMR smart meter readings using the separate DSMR Reader application, ie the [DMSR Reader integration](https://www.home-assistant.io/integrations/dsmr_reader/) which uses MQTT to transfer the data to Home Assistant.

##:sak-sak-logo: How to make it work in your own installation
Both boiler and electricity are quite specific, but give you a nice idea what is possible to control a thermostat for instance.

###Required Home Assistant integrations
You need both integrations, or replace all entities with your own:

- [OpenTherm Gateway integration](https://www.home-assistant.io/integrations/opentherm_gw#sensors)
- [DMSR Reader integration](https://www.home-assistant.io/integrations/dsmr_reader/)

###Required entitiy id changes

**Boiler**

The OpenTherm Integration uses a name for the thermostat, in my case, this is `calenta`. If you also use the OpenTherm Integration, replace `calenta` with your own installation name. In other cases, you should be able to customize entities for your own thermostat/boiler configuration.

The entities for the first card of the boiler:

- The first entity is the current room temperature (`sensor.room_temp_thermostat_calenta`)
- The last is just a random Zigbee sensor showing the current humidity inside (`sensor.studym_iaq_humidity`)
- The other sensors are to control the thermostat (`room_setpoint_thermostat_calenta`) using the slider and the boiler active / flame / hot water requests.

```yaml linenums="1" hl_lines="3 5 8 11 14 18"
- type: 'custom:dev-swiss-army-knife-card'
  entities:
    - entity: sensor.room_temp_thermostat_calenta
      name: Actueel
    - entity: binary_sensor.slave_ch_active_boiler_calenta
      icon: 'mdi:radiator'
      name: Warmtevraag?
    - entity: binary_sensor.slave_dhw_active_boiler_calenta
      icon: 'mdi:shower'
      name: WW vraag?
    - entity: binary_sensor.slave_flame_on_boiler_calenta
      icon: 'mdi:fire'
      name: Brander Aan?
    - entity: sensor.room_setpoint_thermostat_calenta
      icon: 'mdi:thermostat-box'
      name: Gewenst
      decimals: 1
    - entity: sensor.studym_iaq_humidity
      unit: '%'
      decimals: 0
```

The entities for the second card of the boiler:

!!! note "The `slave_flame_on` entity is used to show a white background (using a rectangle) of the boiler is `on`"

```yaml linenums="1" hl_lines="3 6 9 12"
- type: 'custom:dev-swiss-army-knife-card'
  entities:
    - entity: binary_sensor.slave_flame_on_boiler_calenta
      icon: 'mdi:fire'
      name: Brander Aan?
    - entity: sensor.control_setpoint_boiler_calenta
      name: Setpoint
      decimals: 1
    - entity: sensor.ch_water_temp_boiler_calenta
      name: Actual
      decimals: 1
    - entity: sensor.return_water_temp_boiler_calenta
      name: Return
      decimals: 1
```

**Electricity**

If you are using the DSMR Reader integration, no changes are necessary for the electricity part.

The DSMR Reader integration generates generic sensor entities:

```yaml linenums="1" hl_lines="4 8 11 14 17 20 23 26"
- type: 'custom:dev-swiss-army-knife-card'
  entities:
    #Total
    - entity: sensor.dsmr_reading_electricity_currently_delivered
      decimals: 3
      name: 'Total'
      area: 'Tha Moon'
    - entity: sensor.dsmr_reading_electricity_currently_returned
      decimals: 3
    #L1
    - entity:  sensor.dsmr_reading_phase_currently_delivered_l1
      name: 'L1'
      decimals: 3
    - entity:  sensor.dsmr_reading_phase_currently_returned_l1
      decimals: 3
    #L2
    - entity:  sensor.dsmr_reading_phase_currently_delivered_l2
      name: 'L2'
      decimals: 3
    - entity:  sensor.dsmr_reading_phase_currently_returned_l2
      decimals: 3
    #L3
    - entity:  sensor.dsmr_reading_phase_currently_delivered_l3
      name: 'L3'
      decimals: 3
    - entity:  sensor.dsmr_reading_phase_currently_returned_l3
      decimals: 3
```
##:sak-sak-logo: Configuration

#### Lovelace view

| file | location | included from |
| ---- | -------- | ------------- |
| `view-sake11.yml` | `/lovelace/views` | `sak-examples-dashboard.yaml`|

#### Decluttering templates
None.

#### SAK templates
This view uses a template for the electricity card.

| name | file |
| ---- | -------- |
| `toolset_electricity_delivered_returned` | `toolset-electricity-delivered-returned-template.yaml` |

The four parts therefore can use the same definition:
```yaml linenums="1" hl_lines="2 12 23 34"
  # ================================================================
  - toolset: totals
    template:
      name: toolset_electricity_delivered_returned
      variables:
        - entity_delivered: 0
        - entity_returned: 1
        - cx: 30
        - cy: 50

  # ================================================================
  - toolset: L1
    template:
      name: toolset_electricity_delivered_returned
      variables:
        - entity_delivered: 2
        - entity_returned: 3
        - cx: 80
        - cy: 50
        - opacity: 0.7

  # ================================================================
  - toolset: L2
    template:
      name: toolset_electricity_delivered_returned
      variables:
        - entity_delivered: 4
        - entity_returned: 5
        - cx: 125
        - cy: 50
        - opacity: 0.7

  # ================================================================
  - toolset: L3
    template:
      name: toolset_electricity_delivered_returned
      variables:
        - entity_delivered: 6
        - entity_returned: 7
        - cx: 170
        - cy: 50
        - opacity: 0.7
```

##:sak-sak-logo: Interactions
- The slider for the thermostat will set the temperature using the `climate.set_temperature` service for my `climate.calenta` boiler entity in 0.5 degrees Celcius steps and a range between 17..23 degrees Celcius.
- All tools support by default the "more-info" dialog once clicked.

<!-- Image references -->

[AmoebeLabs Swiss Army Knife Custom Card Example 11]: ../assets/screenshots/sak-example-11.png
[AmoebeLabs Swiss Army Knife Custom Card Example 11 Light]: ../assets/screenshots/sak-example-11-m3-c11-light.png
[AmoebeLabs Swiss Army Knife Custom Card Example 11 Dark]: ../assets/screenshots/sak-example-11-m3-c11-dark.png

<!--- External References... --->

[ham3-c11-url]: https://ha-m3-themes.docs.amoebelabs.com/examples/example-c11/