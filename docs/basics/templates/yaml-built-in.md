---
template: overrides/main.html
---

##:sak-sak-logo: Basics
YAML has built-in methods to cut the visual clutter in large YAML files.

It does that by the use of so called `Anchors` and `Aliases`. On top of that YAML provides `Overrides` and `Extensions` to tweak the `Anchor` functionality.

##:sak-sak-logo: YAML Anchors and Alias

Anchors and Aliases are YAML constructions that allow you to reduce repeat syntax and extend existing data nodes. You can place Anchors (&) on an entity to mark a multi-line section. You can then use an Alias (\*) call that anchor later in the document to reference that section.

The Alias essentially acts as a "see above’’ command, which makes the program pause standard traversal, return to the anchor point, then resume standard traversal after the Anchored portion is finished.

### A basic example

```yaml linenums="1" hl_lines="1 5"
- &flag Apple       # The Anchor
- Beachball
- Cartoon
- Duckface
- *flag             # The Alias
```

When this list is read by a YAML parser, the value identified by the anchor (Apple) will be filled at the alias when the YAML is composed. The literal anchor and alias are discarded so they don’t appear in the final result.

```yaml linenums="1" hl_lines="1 5"
- Apple
- Beachball
- Cartoon
- Duckface
- Apple
```

### A more complex example

We can also define a map as an Anchor, and re-use the complete map on another location:

```yaml linenums="1" hl_lines="4-9 14 16"

definitions: 
  steps:
    # The full step map / object is the Anchor
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

When this map/object is read by a YAML parser, the full map/object will be filled.

```yaml linenums="1" hl_lines="4 15-19 21-26"

definitions: 
  steps:
    # The full step map / object is the Anchor
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

You can also tweak the Anchor when called by entering <<: before the Alias. Below this, you can write any desired changes. Mappings are overridden if the new mapping has the same name or is added afterward if different.

```yaml linenums="1"
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
          <<: *build-test
          name: Testing on Master #override
          ongoing: false          #extension
```