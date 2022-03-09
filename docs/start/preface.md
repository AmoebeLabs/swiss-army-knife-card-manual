---
template: main.html
title: Getting Started Preface
---
<!-- GT/GL -->

#Getting started

##:sak-sak-logo: Introduction

I am a longtime Home Assistant user. At the time, YAML was about the only way to configure Home Assistant. About every two weeks, you were confronted with the famous list of "breaking changes" that led you to change your configuration and explain to the wife that it was okay for the lights to come on during the day and not at night: it only takes me a few hours to fix it. No worries :smile: :kiss:

I am visually oriented. And with the introduction of Lovelace and the creation of countless custom cards, many choices were made available to visualize the sensor data. And thanks to the vibrant community, there was a built-in or custom-card for about everything you wanted.

##:sak-sak-logo: Happy, but I want more!
Despite all those choices, I adapted these cards in many cases to get the visualization I wanted. And by doing that I learned step-by-step the inner workings of a custom card and the basis for these cards: the web-component Lit.

During the adaption of another custom card, the question "What if I would have the possibility to design my own visualization?" came up more and more. In that case, I could design completely different cards than currently available.
<br>But: I'm not a real programmer, I learn by looking at how other people solve problems, and by understanding that, I can create my own code to solve my own problems. So, how feasible is it to create my own card?

##:sak-sak-logo: And then shit happened...

The kind of shit that can't be fixed easily: my little sister got diagnosed with cancer. The first MRI scans were good though: 100% chance of survival and she got her operation. But then things turned for the worse: metastatic cancer. She died 6 months later in 2021, almost in full isolation due to the covid pandemic.

At the time of that fatal message, I needed something positive to balance all the negative things and decided to take the challenge and start building my own card: The Swiss Army Knife with all its tools was born!

##:sak-sak-logo: The dilemma: release or not?
I stopped working on this map after my sister died: I had other things to do, and its purpose had suddenly "disappeared" somehow.

In November 2021 I asked myself "What to do now?". The card is unfinished, no one but me has used it, has no documentation, and given its size, that could be quite a big undertaking. In addition, users will find bugs that need fixing. And I have to do other things too.

But what if I get help?

I posted a teaser of the map on the Dutch Tweakers forum: and one of them suggested a closed beta. And so it was! About 30 Home Assistant users wanted to become beta testers. That is doable for me! It got me to start creating the documentation you are reading right now!

I used Material for MkDocs to create this documentation: a great piece of software with a good navigation system, even better formatting solutions, and on top of that customization to better suit my needs.

!!! Info "The documentation uses the "Learn by Example" paradigm"
    It's a method I really like. Instead of long, very long tables of information, concrete examples are shown that are easy to understand and use in practice. The examples also show the context and relationship between options, something most tables don't have or are difficult to describe.
    
    The examples are real examples used in my own Home Assistant environment. They use (of course) my entity declarations, which you have to replace with your own sensors to make the visualization work. It is because of that reason I use the AirVisual and Met.no weather integration a lot: these ones are very easy to adapt to your own installation.
    
##:sak-sak-logo: Some statistics
Last but not least: some statistics.

- As of December 2021 about **1.000** hours of work are put into this card. That is with a 40 hour week about 6 months of work!
- The size of the card itself, including comments is about **8.000** lines of JavaScript. I hope, somewhere in the future, I can convert this to TypeScript.
- I made about **50** sketches and designs in ProCreate on my iPad for visualizations. Just to try out functionality, or to create new functionality.
- In total, the created Lovelace Views, SAK templates and Decluttering templates cover about **11.000** lines of YAML. File sizes vary between **170** lines for a view with perfect re-use, templates, etc. up to so-called copy/paste views containing many cards and resulting in a size of **3.500** lines of YAML.
- About 12 example views are created to be used as an example or inspiration for other users than me. These examples are included in the documentation (See [Examples]) and in GitHub.

  [examples]: ../examples/introduction.md
  
!!! Note "As this card is not yet publicly released, nothing is available on GitHub yet!"