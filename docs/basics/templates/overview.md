---
template: overrides/main.html
---

The Swiss Army Knife has support for several sorts of templates to re-use YAML parts or add JavaScript snippets.

##:sak-sak-logo: Templating

There are three types of templating available:

- the built-in YAML anchor & aliases
- SAK templates
- Third party card templates (decluttering card)

They all have different usage.

| Type | re-use in view? | re-use between cards? | type of re-use |
| ---- | --------------- | ------------------ | ---------------|
| YAML built-in | Yes | No | YAML dictionaries and fields |
| SAK templates | Yes | Yes | toolsets, tools, derived_entity, colorstops/list, etc. About any part of the config can be templated |
| Decluttering card | Yes | No | Full card template with variables |

As the decluttering card is a card template, it can use SAK templates.

##:sak-sak-logo: JavaScript snippets

JavaScript snippets can be entered in the YAML configuration to extend the functionality of the card.