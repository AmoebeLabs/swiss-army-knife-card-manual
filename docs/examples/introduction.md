---
template: main.html
title: Examples Introduction
---
<!-- GT/GL -->

I have placed several examples in their own SAK Example view for easy reference.
In most cases, the twelve examples show more than one map or more than one visualization.

Some use SAK templates, some use Decluttering templates, some use both and some don't: they contain the entire configuration in the view itself.

!!! Info "All samples use their own theme defined in the view-sake*.yaml. Themes are included in Github."
    Aside from the box shading for the cards, themes also define some of the color schemes used by the cards.
    
    Other themes may display black colors where theme colors are used.
    
##:sak-sak-logo: Platforms tested
I have tested SAK - and thus the examples - on the following platforms:

- Safari (mobile and desktop view) on iOS/iPadOS 14 & 15, iPhone & iPad
- Google Chrome > 90.x on Windows 10, on my 10 year old Desktop :smile: 

By testing Chrome, I assume I validated all the Chromium-based browsers (Chrome, Edge, Opera, Vivaldi, Brave, Blisk, etc). That should also cover Android devices using Chromium-based browsers which I could not test as I don't have any Android devices.
A quick view on a friend's Samsung showed no problems, but that is no 100% guarantee of course.

Due to the browser differences and long-standing bugs in Safari, some parts of SAK have different rendering paths for Safari and Chromium.

One notable difference between the two is the SVG filter implementation of Safari. It works but takes a small performance hit compared to Chromium, which has a better and faster filter implementation. Safari users will therefore see a difference between a _switch_ to a view with filters (like a Neumorphic design) and a Flat design: the latter is faster with the initial loading of the view.

##:sak-sak-logo: Real world examples from my own installation
All samples are actual screenshots of my iPhone, which are then added to an iPhone mockup in Affinity Designer, exported, and processed into an Instagram-compatible 1080x1080 pixel crop.

Many examples use the `Met.no` weather and `Airvisual` integrations. Each example also describes what you need to change in order for the examples to work in your installation. The above integrations are necessary in most cases to make things work.

| An overview of all the examples | |
| ------------ | ---------------- |
| **[Example 1 - Airvisual and Weather forecast][Example 1]:** [![sak-example-1b]][Example 1]  | **[Example 2 - Lights][Example 2]:** [![sak-example-2]][Example 2] |
| **[Example 3 - Sensors][Example 3]:** [![sak-example-3]][Example 3]   | **[Example 4 - More sensors][Example 4]:** [![sak-example-4]][Example 4] |
| **[Example 5 - Car dashboard alike][Example 5]:** [![sak-example-5]][Example 5]   | **[Example 6 - Weather on SVG background][Example 6]:** [![sak-example-6]][Example 6] |
| **[Example 7 - Servers][Example 7]:** [![sak-example-7]][Example 7]   | **[Example 8 - Homekit alike][Example 8]:** [![sak-example-8]][Example 8] |
| **[Example 9 - High Contrast][Example 9]:** [![sak-example-9]][Example 9]   | **[Example 10 - Colorful mix][Example 10]:** [![sak-example-10]][Example 10] |
| **[Example 11 - Boiler and Electricity][Example 11]:** [![sak-example-11]][Example 11] | **[Example 12 - Wide cards][Example 12]:** [![sak-example-12]][Example 12] |


| And some gifs to show the animations| |
| ---------------- | ---------------- |
| **[Example 2]:** ![sak-example-2gif] | **[Example 6]:** ![sak-example-6gif] |
| **[Example 8]:** ![sak-example-8gif] | **[Example 8]:** ![sak-example-8gif] |

<!--- References to pictures... --->

[sak-example-1b]: ../assets/screenshots/sak-example-1b.png
[sak-example-2]: ../assets/screenshots/sak-example-2.png
[sak-example-3]: ../assets/screenshots/sak-example-3.png
[sak-example-4]: ../assets/screenshots/sak-example-4.png
[sak-example-5]: ../assets/screenshots/sak-example-5.png
[sak-example-6]: ../assets/screenshots/sak-example-6.png
[sak-example-7]: ../assets/screenshots/sak-example-7.png
[sak-example-8]: ../assets/screenshots/sak-example-8.png
[sak-example-9]: ../assets/screenshots/sak-example-9.png
[sak-example-10]: ../assets/screenshots/sak-example-10.png
[sak-example-11]: ../assets/screenshots/sak-example-11-m3-c11-light.png
[sak-example-12]: ../assets/screenshots/sak-example-12-m3-d06-light.png

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

