document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener('message', event => {
      if (event.origin.startsWith('https://mei-website.netlify.app') || event.origin.startsWith('https://mei-hksbelfer.pantheonsite.io/') ) {
        const message = event.data;

        if (message.hasOwnProperty('height')) {
          document.getElementById('mei-iframe').style.height = message.height;
        }
      }
  });
});

// Send Visual Viewport height to iframe for menu placement on mobile screens.
const iframe = document.getElementById('mei-iframe');
let vvHeight = window.visualViewport.height - iframe.getBoundingClientRect().top;

iframe.addEventListener("load", () => {
  iframe.contentWindow.postMessage({'vvheight': vvHeight,'routehash': window.location.hash}, '*');
})

window.addEventListener("scroll", () => {
  vvHeight = window.visualViewport.height - iframe.getBoundingClientRect().top;

  iframe.contentWindow.postMessage({'vvheight': vvHeight}, '*');
})

window.addEventListener("hashchange", () => {
  iframe.contentWindow.postMessage({'routehash': window.location.hash}, '*');
})