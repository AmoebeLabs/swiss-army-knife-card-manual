---
template: main.html
---
<!-- GT/GL -->

State operators enable you to style a tool in a much more advanced way than is possible with colorstops.
State operators can do more equations, and also use nonnumerical states.

So it is more complex than the colorstop but also has a lot more functionality.
<br>State operators are defined in the `animations` section of the tool.

##:sak-sak-logo: Basic usage

Basic usage uses the implicit state operator "==", ie tests if state is equal to some value.
The below example is from a circle connected to a light entity.
```yaml linenums="1" hl_lines="8 12"
  - type: circle
    position:
      cx: 50
      cy: 30
      radius: 22
    entity_index: 0
    animations:
      - state: 'on'               # State equals on?
        styles:
          circle:
            fill: orange          # Fill circle background with orange
      - state: 'off'              # State equals off?
        styles:
          circle:
            fill: grey            # Fill circle background with grey
```
!!! Info "States are evaluated from top to bottom"
    And once a match is found, the evaluation stops.
    
##:sak-sak-logo: More advanced usage

??? Info "This is a direct 'translation' of the `colorstops` example"

    ```yaml linenums="1"
    - type: 'custom:swiss-army-knife-card'
      entities:
        - entity: sensor.u_s_air_quality_index
          name: 'Air quality'
          area: 'Tha Moon'
    ```

    ```yaml linenums="1" hl_lines="8 9"
    - type: 'circle'
      position:
        cx: 50
        cy: 50
        radius: 17.5
      entity_index: 0             # First entity is index 0
      show:                       
        style: 'colorstops'       # Format using colorstops
      colorstops:                 # MUST be equal to show style!
        fill: true                # Use the fill property (or stroke)
        colors:
          0: '#A8E05F'            # Good (0..50) - Green
          51: '#FDD74B'           # Moderate (51..100) - Yellow
          101: '#FE9B57'          # Unhealthy for sensitive groups - Orange
          151: '#FE6A69'          # Unhealthy (101..150) - Red
          201: '#A97ABC'          # Very Unhealthy (201..300) - Purple
          301: '#A87383'          # Hazardous (300 and up) - Brown
      styles:
        circle:
          transition: fill 0.5s   # Take 0.5s to change color
    ```

```yaml linenums="1"
- type: 'custom:swiss-army-knife-card'
  entities:
    - entity: sensor.u_s_air_quality_index
      name: 'Air quality'
      area: 'Tha Moon'
```
```yaml linenums="1" hl_lines="7 8 13 18 23 28 33"
- type: 'circle'
  position:
    cx: 50
    cy: 50
    radius: 17.5
  entity_index: 0
  animations:
    - state: '50'             # Good (0..50) - Green
      operator: <=
      styles:
        circle:
          fill: '#A8E05F'
    - state: '100'            # Moderate (51..100) - Yellow
      operator: <=
      styles:
        circle:
          fill: '#FDD74B'
    - state: '150'            # Unhealthy for sensitive groups - Orange
      operator: <=
      styles:
        circle:
          fill: '#FE9B57'
    - state: '200'            # Unhealthy (101..150) - Red
      operator: <=
      styles:
        circle:
          fill: '#FE6A69'
    - state: '300'            # Very Unhealthy (201..300) - Purple
      operator: <=
      styles:
        circle:
          fill: '#A97ABC'
    - state: '9999'           # Hazardous (300 and up) - Brown
      operator: <=
      styles:
        circle:
          fill: '#A87383'
```      

##:sak-sak-logo: JavaScript template usage
Advanced usage example using JavaScript to determine the state.

This example is from the views that use the weather type and display an **animated** external SVG to display the current weather type.

As you can see the current state is returned, ie always a match. The `usersvg` tool then returns the current image which is also a JavaScript template that checks the state of the `sun.sun` and adds either "day" or "night" to the state to distinguish between day (sun) and night (moon) weather types.

```yaml linenums="1" hl_lines="17 18"    
- type: 'usersvg'
  id: 2
  entity_index: 5
  position:
    cx: 50
    cy: 50
    height: 13
    width: 13
  style: 'images'
  images:
    - clear-night-night: /local/images/weather/clear-night.svg
    - cloudy-day: /local/images/weather/cloudy-day.svg
    # < removed a lot of image lines for brevity>
    - windy-variant-day: /local/images/weather/windy-variant.svg
    - windy-variant-night: /local/images/weather/windy-variant.svg
  animations:
    - state: '[[[ return (state); ]]]'
      image: >
        [[[
          if (states["sun.sun"].state == 'below_horizon') return (state + '-night');
          return (state + '-day');
        ]]]
```

##:sak-sak-logo: Supported operators

| Operator  | Example         | Description            |
| :-------: | :-------------- | :-------------------- |
| `<`       | 55              | Current state is less than `value` |
| `<=`      | 20              | Current state is less than or equal to `value` |
| `==`      | 70 or off       | Current state is equal to `value`. This is the default behaviour |
| `>=`      | 20              | Current state is greater than or equal to `value` |
| `>`       | 20              | Current state is greater than `value` |
| `!=`      | on              | Current state is not equal to `value` |
| `[[[ ]]]` | JS Template     | Template is evaluated.

!!! Warning "All values MUST be enclosed within single quotes, ie numbers should also be used as strings: '50' "
