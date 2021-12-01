One way to style the color of a tool is using colorstops where the state of the entity is used to choose a color for the tool. Both the `fill` and `stroke` attributes can be painted.

##:sak-sak-logo: Basic usage

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

##:sak-sak-logo: Ramblings
There is a possibility that this definition will change to be able to have different colors for fill and stroke for instance.

Currently, just a thought though :smile:

```yaml linenums="1" hl_lines="11-28"
- type: 'circle'
  position:
    cx: 50
    cy: 50
    radius: 17.5
  entity_index: 0             # First entity is index 0
  show:                       
    style: 'colorstops'       # Format using colorstops
  colorstops:                 # MUST be equal to show style!
    colors:
      - value: 0
        fill: '#A8E05F'       # Good (0..50) - Green
        stroke: '#A8E0FF'
      - value: 51
        fill: '#FDD74B'       # Moderate (51..100) - Yellow
        stroke: '#FDD7FF'
      - value: 101
        fill: '#FE9B57'       # Unhealthy for sensitive groups - Orange
        stroke: '#FE9BFF'
      - value: 151
        fill: '#FE6A69'       # Unhealthy (101..150) - Red
        stroke: '#FE6AFF'
      - value: 201
        fill: '#A97ABC'       # Very Unhealthy (201..300) - Purple
        stroke: '#A97AFF'
      - value: 301
        fill: '#A87383'       # Hazardous (300 and up) - Brown
        stroke: '#A873FF'
  styles:
    circle:
      transition: fill 0.5s   # Take 0.5s to change color
```