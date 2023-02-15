document.addEventListener("DOMContentLoaded", () => {
  function getHeight() {
    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.offsetHeight
    );
  
    return !isNaN(height) ? height : 0;
  };

  function sendHeightMessageAfterImageLoad() {
    const imgs = document.images;
    let len = imgs.length;
    let counter = 0;

    [].forEach.call(imgs, (img) => {
      if (img.complete) incrementCounter();
      else img.addEventListener("load", incrementCounter, false);
    });

    function incrementCounter() {
      counter++;
      if (counter === len) {
        window.parent.postMessage(getHeight() + "px", "*");
      }
    }
  }

  const tabs = document.querySelectorAll('#people-tabs label input');

  if (tabs) {
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        window.parent.postMessage(getHeight() + "px", "*");
      });
    });
  }

  window.parent.postMessage(getHeight() + "px", "*");

  window.setTimeout(sendHeightMessageAfterImageLoad, 500);
});
