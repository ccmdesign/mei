<template>
    <a class="production-link" ref="productionlink" href="#" target="_top">Replace parent url(Should be hidden)</a>
  <slot />
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from "vue-router"
const route = useRoute();
const productionlink = ref(null);
// URL de produção.
// Caution: Não pode ter a barra no final.
// FIXME: Pegar essa URL de uma variável e bloquear para s ó funcionar em produção. 
const baseLink = 'http://127.0.0.1:8887'; 

watch(route, (to) => {
  productionlink.value.href = baseLink + to.fullPath;
  productionlink.value.click();
})

document.addEventListener("DOMContentLoaded", function() {
    window.setTimeout(function() {    
        const imgs = document.images;
        let len = imgs.length;
        let counter = 0;

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

</script>

<style lang="scss">
  .production-link {
    display: none;
  }
</style>