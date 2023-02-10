document.addEventListener("DOMContentLoaded", function() {
    window.setTimeout(function() {    
        const imgs = document.images;
        let len = imgs.length;
        let counter = 0;
        console.log('on iframeResize');

        [].forEach.call( imgs, function( img ) {
            if(img.complete)
            incrementCounter();
            else
            img.addEventListener( 'load', incrementCounter, false );
        } );

        function incrementCounter() {
            counter++;
            if ( counter === len ) {
                const body = document.body;
                const html = document.documentElement;
                let height = 0;
                height = Math.max( body.scrollHeight, body.offsetHeight, html.offsetHeight );
                window.parent.postMessage((height+50)+'px', '*');
            }
        }
    }, 500);
});