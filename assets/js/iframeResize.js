function resizeHeight() {
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
        clearTimeout(timeoutID);
      }
    }
  }

  const timeoutID = window.setTimeout(sendHeightMessageAfterImageLoad, 500);
}

document.addEventListener("DOMContentLoaded", () => {
  resizeHeight();

  // Only on People page
  if (window.location.href.includes('/people')) {
    const tabs = document.querySelectorAll('#people-tabs label input');
    
    if (tabs) {
      tabs.forEach(tab => {
        tab.addEventListener("click", resizeHeight);
      });
    }
  }

  // Only on Events and Publications page
  if (window.location.href.includes('/events') || window.location.href.includes('/publications')) {
    const select = document.querySelector('.mei-select select');
    
    if (select) {
      select.addEventListener("change", resizeHeight);
    }
  }
});