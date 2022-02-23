---
template: overrides/main.html
---
<!-- GT/GL -->

Each tool can be styled using SVG attributes and in most cases CSS attribute styles.
<br>These styles are defined in the styles section.

Within that styles section, the tool or toolpart must be selected. For single part tools, the selector is the same as the type of the tool. For multi-part tools, each part has its own styling sub-section.

##:sak-sak-logo: Basic usage

*Single part tool, a Circle:*

```yaml linenums="1" hl_lines="6 7"
- type: 'circle'
  position:
    cx: 50
    cy: 50
    radius: 25
  styles:
    circle:
      stroke: red
      fill: red
```

*Multi-part tool, an Entity State composed of a 'value' and 'uom':*

```yaml linenums="1" hl_lines="5 6 8"
- type: 'state'
  position:
    cx: 50
    cy: 50
  styles:
    value:              # Value part selector
      font-size: 10em
    uom:                # Unit of measurement part selector
      opacity: .6
```

##:sak-sak-logo: Overriding CSS Class styles

The following configuration results in a circle with a red stroke and blue fill. The stroke comes from the Class definition. The fill from the class definition is overridden by the style configuration.

```yaml linenums="1" hl_lines="6 9"
- type: 'circle'
  position:
    cx: 50
    cy: 50
    radius: 25
  classes:
    circle:
      my-red-circle: true
  styles:
    circle:
      fill: blue
```


