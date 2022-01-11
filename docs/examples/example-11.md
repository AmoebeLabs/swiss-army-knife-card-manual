---
template: overrides/main.html
---

[![SAK Example]][SAK Example]

  [SAK Example]: ../assets/screenshots/sak-example-11.png

##:sak-sak-logo: Visualization
This visualization shows colorful boiler and electricity cards using possibly very "Dutch / European" integrations.

The second card shows the data from my 3 phase smart meter. My 4 kWp solar system is disconnected, so you see no returned electricity.

**Boiler**

It shows a thermostat with some extra data (heat/hot water active) and the boilers setpoints and actual measured temperatures.

The thermostat card uses two overlayed segmented arcs:
- One (with scale) for the actual room temperature measured by the thermostat
- One (no scale, superimposed on previous segarc) for the setpoint.

You can see the setpoint in the screenshot: the room temperature is 19.3 degrees celcius and the setpoint is 19.5 degrees celcius. The latter one is a smaller segarc.

**Electricity**

The electricity card shows my 230V/3x25A smart meter data where the upper segmented arc shows the delivered (from grid) electricity, and the lower part the returned (to the grid) electricity from for instance a solar system.

In my case my 4 kWp solar systems converter deliveres up to 3680 W (230V / 16A) and is connected to a single phase (L3).

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

The OpenTherm Integration uses a name for the thermostat, in my case this  is `calenta`. If you also use the OpenTherm Integration, replace `calenta` with your own installation name. In other cases you should be able to adapt entities for your own thermostat/boiler config.

If you are using the DSMR Reader integration, no changes are necessary for the electricity part.

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
- The slider for the thermostat will set the temperature using the `climate.set_temperature` service for my `climate.calenta` boiler entity in 0.5 degree Celcius steps and a range between 17..23 degrees Celcius.
- All tools support by default the "more-info" dialog once clicked.
