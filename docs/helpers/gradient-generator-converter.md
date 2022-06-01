---
template: main.html
description: Several helpers to create custom CSS Gradients and SVG Converters so you can use them in your own cards.
tags:
  - Helpers
  - Converters
  - Gradient
  - SVG
---

[css-gradient-io]: ../assets/screenshots/css-gradient-io.png
[css-svg-gradient-converter]: ../assets/screenshots/css3-svg-gradient-converter-2.png

##:sak-sak-logo: CSS Gradient Generator
If you're looking for gradients, look no further!

This website can create gradients for you, but also has a large library of example gradients.

URL: https://cssgradient.io/

[![css-gradient-io]][css-gradient-io]

##:sak-sak-logo: CSS3 Gradient --> SVG Image Converter

SVG has its own gradient definitions in the `<defs>` section of an SVG, so you need to convert the CSS gradient to SVG language.

!!! Note "Preliminary: there is no support yet for user defined SVG definitions"

###Step 1: Convert
This gradient converter does all the work for you. 

!!! Warning "Only lineair gradients are supported for conversion"
    No worries: the resulting definition is the same for linear and radial gradients: its just the type of gradient that differs
    
URL: https://www.kmhcreative.com/downloads/CSS2SVG.htm

This example uses the light color temperature gradient definition from Home Assistant. I copied that one using the Chrome Inspector :smile:

[![css-svg-gradient-converter]][css-svg-gradient-converter]

###Step 2: Add to SAK template

We need the part between the `<defs></defs>`, ie de definition of the gradient itself and put this in the `user-svg-definitions.yaml` file. Make sure to give it a logical name (the "id" part) for use as the `fill: url(#gradient-id)` property.

!!! Warning "Convert all single quotes to double quotes!"


The linear gradient result we need would be:
```yaml
  - descr linair-gradient
    content: |
      <linearGradient id="linair-gradient" x1="1" x2="0">
        <stop stop-color="#ffa000"/>
        <stop offset=".5" stop-color="#fff"/>
        <stop offset="1" stop-color="#a6d1ff"/>
      </linearGradient>

```

<svg xmlns="http://www.w3.org/2000/svg" width="300px" height="30px">
  <defs>
      <linearGradient id="linair-gradient" x1="1" x2="0">
        <stop stop-color="#ffa000"/>
        <stop offset=".5" stop-color="#fff"/>
        <stop offset="1" stop-color="#a6d1ff"/>
      </linearGradient>
  </defs>
  <rect width="100%" height="100%" style="fill:url(#linair-gradient);"/>
</svg>

And the radial gradient result we need would be:
```yaml
  - descr radial-gradient
    content: |
      <radialGradient id="radial-gradient" x1="1" x2="0">
        <stop stop-color="#ffa000"/>
        <stop offset=".5" stop-color="#fff"/>
        <stop offset="1" stop-color="#a6d1ff"/>
      </radialGradient>

```

<svg xmlns="http://www.w3.org/2000/svg" width="300px" height="300px">
  <defs>
      <radialGradient id="radial-gradient" x1="1" x2="0">
        <stop stop-color="#ffa000"/>
        <stop offset=".5" stop-color="#fff"/>
        <stop offset="1" stop-color="#a6d1ff"/>
      </radialGradient>
  </defs>
  <circle r="50%" cx="50%" cy="50%" style="fill:url(#radial-gradient);"/>
</svg>