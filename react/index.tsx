import { canUseDOM } from 'vtex.render-runtime'

export function handleEvents(e: PixelMessage) {
  switch (e.data.eventName) {
    case 'vtex:pageView': {

    }
    default: {
      return
    }
  }
}

if (canUseDOM) {
  window.addEventListener('message', handleEvents)
}
