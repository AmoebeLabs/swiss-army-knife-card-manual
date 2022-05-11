---
template: main.html
title: Examples Introduction
description: These 12 examples show some examples of the Swiss Army Knife custom card possibilities. The examples are from my own installation, using real sensors.
---
<!-- GT/GL -->

#Introducing 12 examples
I have placed twelve examples in their own SAK Example view for easy reference.
In most cases, the examples show more than one map or more than one visualization.

Some use SAK templates, some use Decluttering templates, some use both and some don't: they contain the entire configuration in the view itself.

!!! Info "All examples except 11 and 12 use their own theme defined in the view-sake*.yaml. Themes are on Github."
    Aside from the box shading for the cards, themes also define some of the color schemes used by the cards.
    
    Other themes may display black colors where theme colors are used.

!!! Info "Example 11 and 12 use a Home Assistant Material 3 theme"
    Example 12 is used as the example view to create the [Material 3 themes](https://ha-m3-themes.docs.amoebelabs.com/).

##:sak-sak-logo: Real world examples from my own installation
All samples are actual screenshots of my iPhone, which are then added to an iPhone mockup in Affinity Designer, exported, and processed into an Instagram-compatible 1080x1080 pixel crop.

Many examples use the [Met.no](https://www.home-assistant.io/integrations/met/) weather and [Airvisual](https://www.home-assistant.io/integrations/airvisual/) integrations. Each example also describes what you need to change in order for the examples to work in your installation. The above integrations are necessary in most cases to make things work.

| An overview of all the examples | |
| ------------ | ---------------- |
| **[Example 1 - Airvisual and Weather forecast][Example 1]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 1 - AirVisual and Weather forecast]][Example 1]  | **[Example 2 - Lights][Example 2]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 2 - Lights]][Example 2] |
| **[Example 3 - Sensors][Example 3]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 3 - Sensors]][Example 3]   | **[Example 4 - More sensors][Example 4]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 4 - More sensors]][Example 4] |
| **[Example 5 - Car dashboard alike][Example 5]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 5 - Car dashboard alike]][Example 5]   | **[Example 6 - Weather on SVG background][Example 6]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 6 - Weather on SVG background]][Example 6] |
| **[Example 7 - Servers][Example 7]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 7 - Servers]][Example 7]   | **[Example 8 - Homekit alike][Example 8]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 8 - Homekit alike]][Example 8] |
| **[Example 9 - High Contrast][Example 9]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 9 - Hight Contrast]][Example 9]   | **[Example 10 - Colorful mix][Example 10]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 10 - Colorful mix]][Example 10] |
| **[Example 11 - Boiler and Electricity][Example 11]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 11 - Boiler and electricity]][Example 11] | **[Example 12 - Wide cards][Example 12]:** [![AmoebeLabs Swiss Army Knife Custom Card Example 12 - Wide cards]][Example 12] |


| And some gifs to show the animations| |
| ---------------- | ---------------- |
| **[Example 2]:** ![sak-example-2gif] | **[Example 6]:** ![sak-example-6gif] |
| **[Example 8]:** ![sak-example-8gif] | **[Example 8]:** ![sak-example-8gif] |

    
##:sak-sak-logo: Platforms tested
I have tested SAK - and thus the examples - on the following platforms:

- Safari (mobile and desktop view) on iOS/iPadOS 14 & 15, iPhone & iPad
- Google Chrome > 90.x on Windows 10, on my 10 year old Desktop :smile: 

By testing Chrome, I assume I validated all the Chromium-based browsers (Chrome, Edge, Opera, Vivaldi, Brave, Blisk, etc). That should also cover Android devices using Chromium-based browsers which I could not test as I don't have any Android devices.
A quick view on a friend's Samsung showed no problems, but that is no 100% guarantee of course.

Due to the browser differences and long-standing bugs in Safari, some parts of SAK have different rendering paths for Safari and Chromium.

One notable difference between the two is the SVG filter implementation of Safari. It works but takes a small performance hit compared to Chromium, which has a better and faster filter implementation. Safari users will therefore see a difference between a _switch_ to a view with filters (like a Neumorphic design) and a Flat design: the latter is faster with the initial loading of the view.

<!--- References to pictures... --->

[AmoebeLabs Swiss Army Knife Custom Card Example 1 - AirVisual and Weather forecast]: ../assets/screenshots/sak-example-1b.png "Swiss Army Knife Example 1 - AirVisual and Weather forecast"
[AmoebeLabs Swiss Army Knife Custom Card Example 2 - Lights]: ../assets/screenshots/sak-example-2.png "Swiss Army Knife Example 2 - Lights"
[AmoebeLabs Swiss Army Knife Custom Card Example 3 - Sensors]: ../assets/screenshots/sak-example-3.png "Swiss Army Knife Example 3 - Sensors"
[AmoebeLabs Swiss Army Knife Custom Card Example 4 - More sensors]: ../assets/screenshots/sak-example-4.png "Swiss Army Knife Example 4 - More sensors"
[AmoebeLabs Swiss Army Knife Custom Card Example 5 - Car dashboard alike]: ../assets/screenshots/sak-example-5.png "Swiss Army Knife Example 5 - Car dashboard alike"
[AmoebeLabs Swiss Army Knife Custom Card Example 6 - Weather on SVG background]: ../assets/screenshots/sak-example-6.png "Swiss Army Knife Example 6 - Weather on SVG background"
[AmoebeLabs Swiss Army Knife Custom Card Example 7 - Servers]: ../assets/screenshots/sak-example-7.png "Swiss Army Knife Example 7 - Servers"
[AmoebeLabs Swiss Army Knife Custom Card Example 8 - Homekit alike]: ../assets/screenshots/sak-example-8.png "Swiss Army Knife Example 8 - Homekit alike"
[AmoebeLabs Swiss Army Knife Custom Card Example 9 - Hight Contrast]: ../assets/screenshots/sak-example-9.png "Swiss Army Knife Example 9 - Hight Contrast"
[AmoebeLabs Swiss Army Knife Custom Card Example 10 - Colorful mix]: ../assets/screenshots/sak-example-10.png "Swiss Army Knife Example 10 - Colorful mix"
[AmoebeLabs Swiss Army Knife Custom Card Example 11 - Boiler and electricity]: ../assets/screenshots/sak-example-11-m3-c11-light.png "Swiss Army Knife Example 11 - Boiler and electricity, light theme"
[AmoebeLabs Swiss Army Knife Custom Card Example 12 - Wide cards]: ../assets/screenshots/sak-example-12-m3-d06-light.png "Swiss Army Knife Example 12 - Wide cards, light theme"

[sak-example-2gif]: ../assets/screenshots/sak-example-2.gif
[sak-example-6gif]: ../assets/screenshots/sak-example-6.gif
[sak-example-8gif]: ../assets/screenshots/sak-example-8.gif

<!--- References to internal links... --->

[Example 1]: ../examples/example-1.md
[Example 2]: ../examples/example-2.md
[Example 3]: ../examples/example-3.md
[Example 4]: ../examples/example-4.md
[Example 5]: ../examples/example-5.md
[Example 6]: ../examples/example-6.md
[Example 7]: ../examples/example-7.md
[Example 8]: ../examples/example-8.md
[Example 9]: ../examples/example-9.md
[Example 10]: ../examples/example-10.md
[Example 11]: ../examples/example-11.md
[Example 12]: ../examples/example-12.md

<!--- References to external links... --->

