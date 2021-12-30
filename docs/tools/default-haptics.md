##:sak-sak-logo: Haptics
!!! Info "See: https://companion.home-assistant.io/docs/integrations/haptics/ for devices that support haptics"

The tool supports haptic feedback through the entity `tap_action` definition

| Action | Haptic   | Description |
| ------ | -------- | ----------- |
| Click  | `haptic` | Uses the haptic property defined in the tap definition of the card. If not specified, a default of `light` is used |

```yaml linenums="1" hl_lines="10"
entities: 
  - entity: light.livingroom_light_front
    name: Muurlamp
    area: Woonkamer
    icon: mdi:wall-sconce
    tap_action:
      action: call-service
      service: light.toggle
      service_data: { "entity_id" : "light.livingroom_light_front" }
      haptic: light
```

Possible values for haptic feedback:

| Haptic	| Description |
| ------- | ----------- |
| success	| Indicates that a task or action has completed.| 
| warning	| Indicates that a task or action has produced a warning of some kind.| 
| failure	| Indicates that a task or action has failed.| 
| light	| Provides a physical metaphor that complements the visual experience.| 
| medium	| Provides a physical metaphor that complements the visual experience.| 
| heavy	| Provides a physical metaphor that complements the visual experience.| 
| selection	| Indicates that the selection is actively changing.| 