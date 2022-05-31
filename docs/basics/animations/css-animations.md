---
template: main.html
title: CSS Animations
description: The Swiss Army Knife has a number of built-in CSS animations. You can use these, or extend the set by defining your own.
tags:
  - Animations
  - CSS
---

[css-animations support]: https://github.com/amoebelabs/swiss-army-knife/releases/
# CSS Animations
[:octicons-tag-24: 1.0.0][css-animations support] ·
:octicons-package-dependents-24: Output

##:sak-sak-logo: Basic usage

```yaml
  styles:
    rect:
      animation:bounce 5s infinite
```

##:sak-sak-logo: Built-in animations

SAK has a number of built-in animations. They are defined in `sak-css-definitions.yaml` as part of `sak_templates.yaml`.

Their name and what they do are shown in the following table

| SAK Built-in.. | ..CSS.. | ..Animations |
| :-----: | :-----: | :-----: |
| bounce<br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:bounce 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect> </svg> | flash <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:flash 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect> </svg> | headShake <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:headShake 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect> </svg>
| heartBeat <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:heartBeat 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect></svg> | jello <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:jello 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect> </svg> | pulse <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:pulse 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect></svg>
| rubberBand <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:rubberBand 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect></svg> | shake <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:shake 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect></svg> | swing <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:swing 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect></svg>
| tada <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:tada 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect></svg> | wobble <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:wobble 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect></svg> | zoomOut <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:zoomOut 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" overflow="visible" fill="var(--md-primary-fg-color--100)"> </rect></svg>
| spin <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:spin 5s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect></svg> | blinkingText <br><svg viewBox="0 0 200 100" width="100px"> <rect x="50" y="25" width="100" height="50" style="animation:blinkingText 1s infinite;transform-origin:100px 50px;" stroke-width="2" stroke="var(--md-primary-fg-color)" fill="var(--md-primary-fg-color--100)"> </rect></svg> | The END |

   
!!! Tip "Use animations sparingly"
    You don't want your Home Assistant dashboard look like a website from the 90ties :smile: 
    
!!! Info "And yes, yes, yes, you can add you own CSS animations..."
    Put them in `user-css-definitions.yaml`. That's the one you may change!