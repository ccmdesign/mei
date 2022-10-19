<template>
  <base-section>
    <center-l size="wide">
      <stack-l space="var(--s2)">
        <h2 class="color:primary">Events</h2>
        
        <tab-bar :options="tabOptions" />

        <div class="grid">
          <mei-event-card 
            heading="Vision or Mirage: Saudi Arabia at the Crossroads"
            videoUrl="https://www.youtube.com/embed/_Us_QodyTio"
          />
          <mei-event-card 
            heading="Networked Refugees: Palestinian Reciprocity and Remittances in the Digital Age"
            videoUrl="https://www.youtube.com/embed/NSdMgyYfufw"
          >
          </mei-event-card>
        </div>
        <div class="text-align:center">
          <nuxt-link to="/events/" class="button" data-color="primary" data-visual="primary">View all MEI events</nuxt-link>
        </div>
      </stack-l>
    </center-l>
  </base-section>
</template>

<script setup>
import meiEventCard from '@/components/meiEventCard.vue';
import tabBar from '@/components/tabBar.vue';

const tabOptions = [
  {
    'label': 'Upcoming Events',
    'value': 'upcoming'
  },
  {
    'label': 'Past Events',
    'value': 'past'
  }
]
</script>

<style lang="scss" scoped>
.grid { grid-gap: var(--s2); }
</style>
