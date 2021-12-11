---
template: overrides/main.html
---

If you need a gradient, and are looking for an example, you most likely find a CSS example for a background orso.

SVG has its own gradient definitions in the `<defs>` section of an SVG, so you need to convert the CSS gradient to SVG language.

[css-svg-gradient-converter]: ../assets/screenshots/css3-svg-gradient-converter-2.png

!!! Note "Preliminary: there is no support yet for user defined SVG definitions"

##:sak-sak-logo: CSS3 Gradient --> SVG Image Converter

###Step 1: Convert
This gradient converter does all the work for you. 

URL: https://www.kmhcreative.com/downloads/CSS2SVG.htm

This example uses the light color temperature gradient definition from Home Assistant. I copied that one using the Chrome Inspector :smile:

[![css-svg-gradient-converter]][css-svg-gradient-converter]

###Step 2: Add to SAK template

We need the part between the `<defs></defs>`, ie de definition of the gradient itself and put this in the `user-svg-definitions.yaml` file. Make sure to give it a logical name (the "id" part) for use as the `fill: url(#gradient-id)` property.

!!! Warning "Convert all single quotes to double quotes!"


The result we need would be:
```yaml
  - descr light-color-temperature-gradient
    content: |
      <linearGradient id="light-color-temperature-gradient" x1="1" x2="0">
        <stop stop-color="#ffa000"/>
        <stop offset=".5" stop-color="#fff"/>
        <stop offset="1" stop-color="#a6d1ff"/>
      </linearGradient>

```