---
template: overrides/main.html
---

#Getting started

##:sak-sak-logo: Introduction

I'm a long time user of Home Assistant. In those days YAML was about the only way to configure Home Assistant, and every two weeks you were confronted with the famous list of "breaking changes" which led to changing your configuration and explaining the wife that it was ok that lights went on during daytime and not in the evening: I just needed a few hours to fix it. No worries :smile: :kiss:

I'm visually oriented. And with the introduction of Lovelace and the numerous custom cards as a result, many choices to visualize the sensor data were created: for about everything you wanted, there was a built-in card or custom card thanks to the vibrant community.

##:sak-sak-logo: Happy, but I want more!
Despite all those choices, I adapted these cards in many cases to get the visualization I wanted. And by doing that I learned step-by-step the inner workings of a custom card and the basis for these cards: the web-component Lit.

During the adaption of another custom card, the question "What if I would have the possibility to design my own visualization?" came up more and more. In that case I could design completely different cards than currently available.
<br>But: I'm not a real programmer, I learn by looking how other people solve problems, and by understanding that, I can create my own code to solve my own problems, so how feasible is it to create my own card?

##:sak-sak-logo: And then shit happened...

The kind of shit that can't be fixed easily: my little sister got diagnosed with cancer. The first MRI scans were good though: 100% chance of survival and she got her operation. But then things turned for the worse: metastatic cancer. She died 6 months later in 2021, almost in full isolation due to the covid pandemic.

At the time of that fatal message I needed something positive to balance all the negative things and decided to take the challenge and start building my own card: The Swiss Army Knife with all its tools was born!

##:sak-sak-logo: The dilemma: release or not?
I stopped working on this card after my sister died: I had other things to do, and its purpose was suddenly "gone" somehow.

In November 2021 I asked myself "What to do now?". The card is not finished, no one but me has used it, has no documentation and given the size that might be a pretty big undertaking. Furthermore bugs will be found and need to be fixed. And I need to do other things too...

But what if I got help?

I placed a teaser of the card on the Dutch Tweakers forum: And one of them proposed a closed beta. And so it was! About 10 Home Assistant users wanted to become beta testers. That is doable for me! This made me start producing the documentation you're reading now!

The documentation is made with Material for MkDocs: a great piece of software that has a great navigation system, even greater formatting solutions and on top of that customization to better suit my needs.

!!! Info "The documentation uses the "Learn by Example" paradigm"
    Its a method I really like. Instead of long, very long tables with information, actual examples are shown which are easy to understand and use in practice. The examples also show the context and relation between options, something that most tables don't, or have trouble describing.
    
    The examples are real examples used in my own Home Assistant environment. They use of course my entity declarations, which you have to change to use your own sensors to make the visualization work. It is because of that reason I use the Met.no weather integration a lot: this one is very easy to adapt to your own installation.
    
##:sak-sak-logo: Some statistics
Last but not least: some statistics.

- As of December 2021 about **1.000** hours of work are put into this card. That is with a 40 hour week about 6 months of work!
- The size of the card itself, including comments is about **8.000** lines of JavaScript. I hope, somewhere in the future, I can convert this to TypeScript.
- I made about **50** sketches and designs for visualizations. Just to try out functionality, or to create new functionality.
- In total, the created Lovelace Views, SAK templates and Decluttering templates cover about **11.000** lines of YAML. File sizes vary between **170** lines for a view with perfect re-use, templates, etc. up to so-called copy/paste views containing many cards and resulting in a size of **3.500** lines of YAML.
- About 10 example views are created to be used as an example or inspiration for other users than me. These examples are included in the documentation (See [Examples]) and in GitHub.

  [examples]: ../examples/introduction.md
  
!!! Note "As this card is not yet publicly released, nothing is available on GitHub yet!"