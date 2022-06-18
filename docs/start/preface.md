---
template: main.html
title: Getting Started Preface
description: Some background on the creation of the Swiss Army Knife custom card...
tags:
  - Preface
  - Background
---
<!-- GT/GL -->

#Preface
Welcome to the preface of the versatile Swiss Army Knife custom card for Home Assistant!

##:sak-sak-logo: Introduction

I am a longtime Home Assistant user. At the time, YAML was about the only way to configure Home Assistant. About every two weeks, you were confronted with the famous list of "breaking changes" that led you to change your configuration and explain to the wife that it was okay for the lights to come on during the day and not at night: it only takes me a few hours to fix it. No worries :smile: :kiss:

I am visually oriented. And with the introduction of Lovelace and the creation of countless custom cards, many choices were made available to visualize the sensor data. And thanks to the vibrant community, there was a built-in or custom-card for about everything you wanted.

##:sak-sak-logo: Happy, but I want more!
Despite all those choices, I adapted these cards in many cases to get the visualization I wanted. And by doing that I learned step-by-step the inner workings of a custom card and the basis for these cards: the web-component Lit.

During the adaption of another custom card, the question "What if I would have the possibility to design my own visualization?" came up more and more. In that case, I could design completely different cards than currently available.
<br>But: I'm not a real programmer, I learn by looking at how other people solve problems, and by understanding that, I can create my own code to solve my own problems. So, how feasible is it to create this kind of card?

##:sak-sak-logo: And then shit happened...

The kind of shit that can't be fixed easily: my little sister got diagnosed with cancer. The first MRI scans were good though: 100% chance of survival and she got her operation. But then things turned for the worse: metastatic cancer. She died 6 months later in 2021, almost in full isolation due to the covid pandemic.

At the time of that fatal message, I needed something positive to balance all the negative things and decided to take the challenge and start building this card: The versatile multi-tool custom card aka the [Swiss Army Knife custom card][what-is-it-for-whom] was born!

##:sak-sak-logo: The dilemma: release or not?
I stopped working on this custom card after my sister died: I had other things to do, and its purpose had suddenly "disappeared" somehow.

In November 2021 I asked myself "What to do now?". The card is unfinished, no one but me has used it, has no documentation, and given its size, that could be quite a big undertaking. In addition, users will find bugs that need fixing. And I have to do other things too.

But what if I get help?

I posted a teaser of the card on the [Dutch Tweakers forum][tweakers-sak-topic-url]: and one of them suggested a closed beta. And so it was! About 40 Home Assistant users wanted to become beta testers. That is doable for me! It got me to start creating the documentation you are reading right now!

Back in 2021, I had the idea to release the custom card (as RC or BETA) around March/April 2022, but handling my sister's estate appeared to be more complex than I anticipated, so the public RC release was delayed until the end of June 2022. Nearly 2 years after I started building this card!

I used Material for MkDocs to create this documentation: a great piece of software with a good navigation system, even better formatting solutions, and on top of that customization to better suit my needs.

!!! Info "The documentation uses the "Learn by Example" paradigm"
    It's a method I really like. Instead of long, very long tables of information, concrete examples are shown that are easy to understand and use in practice. The examples also show the context and relationship between options, something most tables don't have or are difficult to describe.
    
    The [examples][examples] are real examples used in my own Home Assistant environment. They use (of course) my entity declarations, which you have to replace with your own sensors to make the visualization work. It is because of that reason I use the AirVisual and Met.no weather integration a lot: these ones are very easy to adapt to your own installation.
    
##:sak-sak-logo: Some statistics
Last but not least: some statistics.

- As of June 2022 about **1.500** hours of work are put into this card, the [12 examples][examples], the [Material 3 themes][material3-themes-manual-url] and both manuals. That is with a 40 hour workweek about 9 months of work!
- The size of the card itself, including comments is about **7.000** lines of JavaScript. I hope, somewhere in the future, I can convert this to TypeScript.
- I made about **50** sketches and designs in ProCreate on my iPad for visualizations. Just to try out functionality, or to create new functionality.
- In total, the created Lovelace Views, SAK templates and Decluttering templates cover about **11.000** lines of YAML. File sizes vary between **170** lines for a view with perfect re-use, templates, etc. up to so-called copy/paste views containing many cards and resulting in a size of **3.500** lines of YAML.
- About 12 example views are created to be used as an example or inspiration for other users than me. These examples are included in the documentation (See [Examples]) and in GitHub.

<!-- Internal References -->

[examples]: ../examples/introduction.md
[what-is-it-for-whom]: what-is-this-card-and-for-whom-is-it.md

<!-- External References -->

[tweakers-sak-topic-url]: https://gathering.tweakers.net/forum/list_messages/2099646
[material3-themes-manual-url]: https://material3-themes-manual.amoebelabs.com/examples/introduction/


