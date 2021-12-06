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

!!! Info "The top card uses the system monitor integration, the bottom card the Glances and RESTful sensor integration"

##:sak-sak-logo: Configuration
- The upper-left shows the DISC usage values as text in a rectangle and in a `segmented arc` for the percentage. The scale is green upto 70% and then changes to yellow, orange (80%) and red (90%).
- In the lower-left, the same for RAM usage.
- The central part shows the CPU usage
- And finally the three system load toolsets (1m, 5m and 15m) nicely wrapped alongside the CPU display.

#### Lovelace view

This example is in the `view-sake7.yaml` file in the `/lovelace/views` folder.

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