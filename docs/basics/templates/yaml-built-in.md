---
template: overrides/main.html
---

##:sak-sak-logo: Basics
YAML has built-in methods to cut the visual clutter in large YAML files.

It does that by the use of so called `Anchors` and `Aliases`. On top of that YAML provides `Overrides` and `Extensions` to tweak the `Anchor` functionality.

##:sak-sak-logo: YAML Anchors and Aliases

`Anchors` and `Aliases` are YAML constructions that allow you to reduce repeat syntax and extend existing dictionaries. You can place `Anchors` (`&`) on an entity to mark a multi-line section. You can then use an `Alias` (`*`) and use that `Anchor` later in the YAML document to reference that section.

### Basic example

```yaml title="Source" linenums="1" hl_lines="1 5"
- &flag Apple       # The Anchor
- Beachball
- Cartoon
- Duckface
- *flag             # The Alias
```

When this list is read by the Home Assistant YAML parser, the value identified by the `anchor` (Apple) will be filled at the `alias` when the YAML is composed. The literal `anchor` (`&`) and `alias` (`*`) are discarded so they don’t appear in the final result.

```yaml title="Result" linenums="1" hl_lines="1 5"
- Apple
- Beachball
- Cartoon
- Duckface
- Apple
```

### More complex example

We can also define a dictionary as an `Anchor`, and re-use the complete dictionary on other locations:

```yaml title="Source" linenums="1" hl_lines="4-9 14 16"

definitions: 
  steps:
    # The full step dict is the Anchor
    - step: &build-test
        name: Build and test
        script:
          - mvn package
        artifacts:
          - target/**

pipelines:
  branches:
    develop:
      - step: *build-test   # Re-use 
    master:
      - step: *build-test   # Re-use 
```

When this dictionary is read by the YAML parser, the full dictionary will be filled.

```yaml title="Result" linenums="1" hl_lines="4 15-19 21-26"
definitions: 
  steps:
    # The full step dict is the Anchor
    - step: &build-test
        name: Build and test
        script:
          - mvn package
        artifacts:
          - target/**

pipelines:
  branches:
    develop:
      - step:
          name: Build and test
          script:
            - mvn package
          artifacts:
            - target/**
    master:
      - step:
          name: Build and test
          script:
            - mvn package
          artifacts:
            - target/**
```

##:sak-sak-logo: YAML Overrides and Extensions

You can also tweak the `Anchor` when called by entering `<<:` before the `Alias`. Below this, you can write any desired changes. Field/dicts are overridden if the new field/dict has the same name or is added afterward if different.

```yaml linenums="1" hl_lines="17-19"
definitions: 
  steps:
    - step: &build-test
        name: Build and test
        script:
          - mvn package
        artifacts:
          - target/**

pipelines:
  branches:
    develop:
      - step: *build-test
    master:
      - step: 
          <<: *build-test         # Re-use
          name: Testing on Master # override name field
          ongoing: false          # extension
```