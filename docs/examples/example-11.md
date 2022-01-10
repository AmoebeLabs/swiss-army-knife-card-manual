---
template: overrides/main.html
---

[![SAK Example]][SAK Example]

  [SAK Example]: ../assets/screenshots/sak-example-11.png

##:sak-sak-logo: Visualization
This visualization shows colorful boiler and electricity cards using possibly very "Dutch / European" integrations.

It shows a thermostat with some extra data (heat/hot water active) and the boilers setpoints and actual data.
The second card shows the data from my 3 phase smart meter. My 4 kWp solar system is disconnected, so you see no returned electricity.

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

You should be able to adapt entities for your own thermostat/boiler config.

If you are using the DSMR Reader integration, no changes are necessary for the electricity part.

##:sak-sak-logo: Configuration

#### Lovelace view
This example is in the `view-sak11.yml` file in the `/lovelace/views` folder.


#### Decluttering templates
None.

#### SAK templates
None.

##:sak-sak-logo: Interactions
- The slider for the thermostat will set the temperature using the `Calenta.set_temperature` service (Calenta is the name of my thermostat) in 0.5 degree Celcius steps and a range between 17..23.
- All tools support by default the "more-info" dialog once clicked.
