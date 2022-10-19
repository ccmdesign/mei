<template>
  <article>
    <mei-hero 
      background="../assets/images/home-bg.png"
      title="Middle East Initiative"
      description="The Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
    nesciunt nostrum deleniti reprehenderit delectus facere quibusdam
    aliquam temporibus numquam, dolore error hic dolorem iste nobis
    voluptates tenetur et consectetur omnis."
    />
    <mei-highlights />
    <mei-opportunities />
    <mei-programs />
    <mei-people compact />
    <mei-events />
  </article>  
</template>

<script setup>
import meiHero from '@/components/meiHero.vue';
import meiHighlights from '@/components/meiHighlights.vue';
import meiOpportunities from '@/components/meiOpportunities.vue';
import meiPrograms from '@/components/meiPrograms.vue';
import meiPeople from '@/components/meiPeople.vue';
import meiEvents from '@/components/meiEvents.vue';

</script>

<style scoped>
.cover { --height: 30;}

.people-index { 
  --itemWidth: 100px; 
}
</style>
