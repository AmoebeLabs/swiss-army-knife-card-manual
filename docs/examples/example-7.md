---
template: overrides/main.html
---

[![SAK Example]][SAK Example]

  [SAK Example]: ../assets/screenshots/sak-example-7.png

##:sak-sak-logo: Visualization
Visualization of the basic data of two servers. My basic NUC (J3455 CPU) running Home Assistant and another bunch of containers and a second server as a frontend for the ugly internet. This one is also running a bunch of docker containers.

!!! Info "Both systems were 'loaded' before the screenshot was taken to show the different colorstops"
    The default load of the NUC is around 3% and the frontend around 11%.
    
##:sak-sak-logo: Data sources
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
      glances_poseidon_load_min5:
        value_template: "{{ state_attr('sensor.glances_poseidon_load', 'min5') }}"
        friendly_name: "Glances-Poseidon Load 5min"
        unit_of_measurement: "5m"
      glances_poseidon_load_min15:
        value_template: "{{ state_attr('sensor.glances_poseidon_load', 'min15') }}"
        friendly_name: "Glances-Poseidon Load 15min"
        unit_of_measurement: "15m"
```

!!! Info "The top card uses the system monitor integration, the bottom card the Glances and RESTful sensor integration"

##:sak-sak-logo: How to make it work in your own installation

###Required Home Assistant integrations
The visualization is build on the system monitor, glances and rest sensors, so you need these integrations:

####For the `Hestia` server card:

- [The System Monitor integration](https://www.home-assistant.io/integrations/systemmonitor/)

####And for the `Poseidon`server card:
- [The Glances integration](https://www.home-assistant.io/integrations/glances/)
- [The RESTful sensor integration](https://www.home-assistant.io/integrations/sensor.rest/) to get extra sensors from Glances, as the default Glances integration does not give you all the 'load' sensors.

###Required sensor id changes

The `System Monitor` entities should be the same for any installation, so no changes required on that part.

The `Glances` integration creates environment dependent entities: the server name is usually added to the integration, and thus entity id's.
My integration is called `Glances-Poseidon` and thus the entities for instance `sensor.glances_poseidon_cpu_load`. You have to change the entities to your own entity id's.

!!! Info "If you have only 1 server, remove the second server..."

##:sak-sak-logo: Configuration
- The upper-left shows the DISC usage values as text in a rectangle and in a `segmented arc` for the percentage. The scale is green upto 70% and then changes to yellow, orange (80%) and red (90%).
- In the lower-left, the same for RAM usage.
- The central part shows the CPU usage
- And finally the three system load toolsets (1m, 5m and 15m) nicely wrapped alongside the CPU display.

#### Lovelace view
| file | location | included from |
| ---- | -------- | ------------- |
| `view-sake7.yml` | `/lovelace/views` | `sak-examples-dashboard.yaml`|

#### Decluttering templates
None.

#### SAK templates
!!! Example "Re-use of toolsets and toolset scaling"
    ```yaml title="From: view-sake7" linenums="1" hl_lines="5 13"
    - toolset: memory
      # Use pre-defined template for this part.
      # Template has variables.
      template:
        name: tools_segarc_icon_state
        variables:
          - entity: 0
          - show_scale: false
      position:
        cx: 72.5
        cy: 74
        # Scale to 80% of toolset template.
        scale: .8
    ```

##:sak-sak-logo: Interactions
- All tools support by default the "more-info" dialog once clicked.

##:sak-sak-logo: Remarks
!!! Success "This view is a nice example of the use of toolset scaling!"