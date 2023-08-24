# WebRTC Player Lib

WebRTC Player library is a wrapper over [Media Server independent WebRTC player](https://github.com/Eyevinn/webrtc-player) that allows for direct usage within a web browser.

## Getting Started

### Add library to HTML
```html
<script defer="defer" src="webrtc-player-lib-0.12.0.min.js"></script>
```

### Usage
```javascript
const video = document.querySelector('video');
const player = new WebRTCPlayer({
  video: video,
  type: 'whep',
  statsTypeFilter: '^candidate-*|^inbound-rtp'
});
player.load(new URL('https://127.0.0.1:8443/live/whep'));
```

### Full example
```html
<!DOCTYPE html>
<html>
  <head>
    <script defer="defer" src="webrtc-player-lib-0.12.0.min.js"></script>
  </head>
  <body>
    <script type="text/javascript">
      document.addEventListener("DOMContentLoaded", 
      const video = document.querySelector('video');
      const player = new WebRTCPlayer({
        video: video,
        type: 'whep',
        statsTypeFilter: '^candidate-*|^inbound-rtp'
      });
      player.load(new URL('https://127.0.0.1:8443/live/whep'));
      });
    </script>
  </body>
</html>
```

## Related documentation
- [WebRTC in Softvelum products](https://softvelum.com/webrtc/)
- [WebRTC setup in Nimble Streamer](https://blog.wmspanel.com/2022/05/webrtc-publish-setup-nimble-streamer.html)
- Video: [WebRTC ingest setup in Nimble Streamer](https://www.youtube.com/watch?v=o7DnQuLLerM)
- [Opus audio support in SLDP](https://blog.wmspanel.com/2022/07/opus-sldp.html)
- [Play audio-only SLDP with Opus on iPhone](https://blog.wmspanel.com/2022/09/audio-sldp-opus-webrtc-iphone.html)