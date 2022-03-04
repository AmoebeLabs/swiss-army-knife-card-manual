---
template: main.html
---

![AmoebeLabs Swiss Army Knife Custom Card Example 10]

##:sak-sak-logo: Visualization
Indoor environment sensors, occupancy, airvisual, and some light switchable square cards with status, icon, history, segmented arc, and card animations.

!!! Info "Cards 1, 2 and 3 use a similar design whith small variations in the state bar (top of card), thickness of segemented arc and history bars."

##:sak-sak-logo: Data sources
- First row: Aqara temperature, humidity and pressure sensor using zigbee2mqtt, ie the [MQTT integration](https://www.home-assistant.io/integrations/mqtt/)
- Second row: Aqara Occupancy sensor using zigbee2mqtt, ie the [MQTT integration](https://www.home-assistant.io/integrations/mqtt/)
- Second row: [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/)
- Third row: Ikea Tradfri Zigbee Lights, again using zigbee2mqtt, ie the [MQTT integration](https://www.home-assistant.io/integrations/mqtt/)

##:sak-sak-logo: How to make it work in your own installation
Other than the Air Visual integration, the other generic ones are temperature, humidity, and pressure sensors, occupancy switches, and light switches, so you can replace them with your own entities.

###Required Home Assistant integrations
The only integration you need are the `Airvisual` entities, so you need this integration:

- [Airvisual integration](https://www.home-assistant.io/integrations/airvisual/)

###Required entitiy id changes

For the first row, replace the sensor entities with your own entities. As long as the entities do not use an attribute for the value, the history tool will work. 

The `Airvisual` entities should be the same for every installation, so no changes are needed on that part. If you don't have a `presence` sensor, replace it with an on/off sensor and the card should at least work!

Replace the light entities with your light entities that have a `brightness` attribute.

##:sak-sak-logo: Configuration

#### Lovelace view

| file | location | included from |
| ---- | -------- | ------------- |
| `view-sake10.yml` | `/lovelace/views` | `sak-examples-dashboard.yaml`|

#### Decluttering templates
None.

#### SAK templates
None.

##:sak-sak-logo: Interactions
- All tools support by default the "more-info" dialog once clicked.

##:sak-sak-logo: Remarks

**The AQI Card (second row, second card)**

You see two lines below the "46 AQI" state: a scale and the actual value. This is the `segmented arc` which is configured in such a way that it resembles a straight line. So this is not a new tool you're seeing :smile:

The `segarc` config uses an elliptical display and a small arc to resemble a line.

```yaml linenums="1" hl_lines="6-10"
- type: 'segarc'
  id: 0
  position:
    cx: 65
    cy: 35
    radius_x: 120         # Wide ellipse
    radius_y: 1           # ...with almost no height
    start_angle: 190      # Show only 20 degrees of the
    end_angle: 170        # ..ellipse to look like a straight line
    width: 2
  entity_index: 0
  scale:
    min: 0
    max: 300
    width: 2
    offset: 3
```

<!-- Image references -->

[AmoebeLabs Swiss Army Knife Custom Card Example 10]: ../assets/screenshots/sak-example-10.png