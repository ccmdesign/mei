<template>
  <article>
    <mei-hero />
    <mei-highlights />
    <mei-opportunities />
    <mei-people />
    <mei-events />
  </article>  
</template>

<script>
import meiHero from '@/components/meiHero.vue';
import meiHighlights from '@/components/meiHighlights.vue';
import meiOpportunities from '@/components/meiOpportunities.vue';
import meiPeople from '@/components/meiPeople.vue';
import meiEvents from '@/components/meiEvents.vue';

export default {
  components: {
    meiHero,
    meiHighlights,
    meiOpportunities,
    meiPeople,
    meiEvents
  },
};
</script>

<style scoped>
.cover { --height: 30;}
</style>
