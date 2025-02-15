---
template: main.html
title: Overview of Template possibilities
description: The Swiss Army Knife has support for several sorts of templates to re-use YAML parts or add JavaScript snippets.
tags:
  - Templates
  - Built-in
  - JavaScript
  - YAML
---
#Overview of Template possibilities
The Swiss Army Knife has support for several sorts of templates to re-use YAML parts or add JavaScript snippets.

##:sak-sak-logo: Templating

There are three types of templating available:

- the built-in YAML anchor & aliases
- SAK templates
- Third party card templates (decluttering card)

They all have different usage.

| Type | re-use method | what type of re-use |
| ---- | --------------- | ------------------ |
| [YAML built-in][Built-in YAML templates] | re-use within YAML file only using anchors and aliases | YAML dictionaries and fields |
| [SAK templates][Swiss Army Knife templates] | re-use of YAML parts using global templates | toolsets, tools, derived_entity, colorstops/list, etc. About any part of the config can be templated |
| Decluttering card | re-use of card configurations using global card templates | Full card template with variables |

As the decluttering card is a card template, it can use SAK templates.

##:sak-sak-logo: JavaScript snippets

[JavaScript snippets][JavaScript Template Snippets] can be entered in the YAML configuration to extend the functionality of the card.

<!-- Internal References -->

[Built-in YAML templates]: yaml-built-in.md
[Swiss Army Knife templates]: sak-templates.md
[JavaScript Template Snippets]: javascript-snippets.md