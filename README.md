# hexspace

ideas for a mediaspace/online collaboration environment

Chris Greenhalgh, The University of Nottingham, 2020

## approach

- client-server
- browser client
- webrtc for p2p audio
- spatial model of interaction, esp. proximity and adapaters (e.g. meeting table, virtual lecturn, workspace/office, ...)
- kendon f-formations, proxemics
- gibson(?) 'with'
- vue & vuex for client?
- websockets
- hexagonal
- topology, manifold, flexible/stretchable
- mediaspaces, portholes, slow video, "blinds"
- click to travel
- physical spaces & devices vs person ??
- audio spatialisation (pan, volume, microsoft?)
- ego-centric or north up?

## data model

key types
- Hex / Cell / Node
- Link / Arc / Edge
- Client / Person?
- Awareness / relation / session?
- Adapter / third party object / tool
- Medium / channel

Hex:
- id
- i, j - hex position, i north, j east-north-east
- state? - null, empty,  occupied, locked?, ??
- clients - [] (usually 0/1?)
- adapters - []

Client:
- client id
- name
- initials
- icon? - image

Relation:
- client a id
- client b id
- atob request, per medium: (medium (audio, video), duplex/atob/btoa/none, priority?)
- atob response (medium, duplex/atob/btoa/none, comment?)
- btoa request
- btoa response
- atob audio (active, type (normal, muffled?), volume, ...?)
- btoa audio ...
- atob video (framerate, resolution, ...?)
- btoa video ...


## protocol

messages (client <=> server)
- => join request
- <= join response
- <= state
- <= update (state)
- => action
- <= connection (update/state) (or part of state??)
- =><= rtc offer (local/remote description, SDP)
- =><= rtc answer (local/remote description, SDP)
- =><= rtc negotiation needed
- =><= rtc refuse?
- =><= ice candidate
- =><= rtc connection state
- =><= video frame?
- =><= audio volume?

