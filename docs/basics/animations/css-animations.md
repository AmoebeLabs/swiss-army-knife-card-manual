---
template: overrides/main.html
---

[css-animations support]: https://github.com/amoebelabs/swiss-army-knife/releases/tag/1.0.0
# CSS Animations
[:octicons-tag-24: 1.0.0][css-animations support] ·
:octicons-package-dependents-24: Output ·
:octicons-beaker-24: Experimental

##:sak-sak-logo: Basic usage

```yaml
  styles:
    rect:
      animation:bounce 5s infinite
```

##:sak-sak-logo: Built-in animations

SAK has a number of built-in animations. They are defined in the `sak-css-definitions.yaml` file as part of the `sak_templates.yaml` file.

Their name and what they do, you can see in the following table

| SAK Built-in.. | ..CSS.. | ..Animations |
| :-----: | :-----: | :-----: |
| bounce<br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:bounce 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect> </svg> | flash <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:flash 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect> </svg> | headShake <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:headShake 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect> </svg>
| heartBeat <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:heartBeat 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect></svg> | jello <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:jello 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect> </svg> | pulse <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:pulse 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect></svg>
| rubberBand <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:rubberBand 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect></svg> | shake <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:shake 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect></svg> | swing <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:swing 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect></svg>
| tada <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:tada 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect></svg> | wobble <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:wobble 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect></svg> | zoomOut <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:zoomOut 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" overflow="visible" fill="var(--md-primary-fg-color--100)"> </rect></svg>
| spin <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:spin 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect></svg> | blinkingText <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:blinkingText 1s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect></svg> | The END |

!!! Warning "They seem to work, but still experimental?"
    Yes. The animations itself work, but depending on the location of the tool, you might get unexpected results. Some animations expect/require the animation center to be in the center of the tool, which is not always the case. This means that a `spin` might NOT rotate around the point you expect.
    
    I hope to fix this in the future by calculating the real center and correct this using the css `transform-origin` property.
    
!!! Tip "Use animations sparingly"
    You don't want your Home Assistant dashboard look like a website from the 90ies :smile: 