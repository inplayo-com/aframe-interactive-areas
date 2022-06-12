


# A-Frame Interactive Areas

**Interactive areas** - A-Frame scene zones that are sensitive to the appearance of the user on them. When a user enters an area, an event occurs for the area component and all its subcomponents. Interface is made as representation of A-Frame components linking ability, on declarative level.

## Core dependencies
Interactive areas functional made with:
* [aframe-aabb-collider-component.js](https://unpkg.com/aframe-aabb-collider-component@3.2.0/dist/aframe-aabb-collider-component.min.js)
* [aframe-proxy-event-component.js](https://github.com/supermedium/superframe/tree/master/components/proxy-event/)
* [aframe-event-set-component.js](https://github.com/supermedium/superframe/tree/master/components/event-set/)

## Algorithm description

### Entering Area

1. [aabb-collider-component](https://unpkg.com/aframe-aabb-collider-component@3.2.0/dist/aframe-aabb-collider-component.min.js) tracking intersection between [camera](https://aframe.io/docs/1.3.0/components/camera.html). While intersection is found, aabb-collider sending event **hitstart** to area parent element
2. parent area element [proxy-event-component](https://github.com/supermedium/superframe/tree/master/components/proxy-event/) recieve **hitstart** event and broadcast **areaEnter** event to all nested components
3. Children of parent area element receiving **areaEnter** event and processing actions using [event-set-component](https://github.com/supermedium/superframe/tree/master/components/event-set/)

### Leaving Area

1. [aabb-collider-component](https://unpkg.com/aframe-aabb-collider-component@3.2.0/dist/aframe-aabb-collider-component.min.js) tracking intersection between [camera](https://aframe.io/docs/1.3.0/components/camera.html). While intersection is gone, aabb-collider sending event **hitend** to area parent element
2. parent area element [proxy-event-component](https://github.com/supermedium/superframe/tree/master/components/proxy-event/) recieve **hitend** event and broadcast **areaLeave** event to all nested components
3. Children of parent area element receiving **areaLeave** event and processing actions using [event-set-component](https://github.com/supermedium/superframe/tree/master/components/event-set/)

## Example

This is demo part using mixins, **#area** node is area container, same as area. **#area_child** is nested element, inside **#area**

```html
 <a-mixin id="area"
    aabb-collider="objects: [camera];"
    proxy-event__areaEnter="event: hitstart; to: CHILDREN; as: areaEnter;"
    proxy-event__areaLeave="event: hitend; to: CHILDREN; as: areaLeave;">
</a-mixin>

<a-mixin id="area_child"
    event-set__areaEnter="_event: areaEnter; text.color:yellow;"
    event-set__areaLeave="_event: areaLeave; text.color: white;">
</a-mixin>
```

### Demo

#### Webpage

[https://demo.inplayo.com/aframe/interactive-areas/](https://demo.inplayo.com/aframe/interactive-areas/)

#### Video

[![Demo Video](https://img.youtube.com/vi/fj2G9h6pHuM/0.jpg)](https://youtu.be/fj2G9h6pHuM "Demo Video")


### Demo using
* A-Frame 1.3.0
* Oculus Quest 2
* Google Chrome Version 102.0.5005.61 (Mobile + Desktop)
## Badges

[<img alt="Deployed with FTP Deploy Action" src="https://img.shields.io/badge/Deployed With-FTP DEPLOY ACTION-%3CCOLOR%3E?style=for-the-badge&color=0077b6">](https://github.com/SamKirkland/FTP-Deploy-Action)
