<template>
  <base-section color="transparent">
    <center-l size="wide">
      <stack-l space="var(--s2)">
        <h2 class="color:primary">{{eventData.heading}}</h2>
        
        <tab-bar :options="tabOptions" v-if="!hideTabBar" />

        <reel-l
          v-if="showHighlights"
          itemWidth="100%"
          scrollbar
          overflowY="var(--s2)"
        >
            <mei-card-wide />
            <mei-card-wide />
            <mei-card-wide />
        </reel-l>

        <div class="grid">
          <mei-event-card v-for="i in eventData.list"
            :heading="i.heading"
            :url="i.url"
            :figType="i.figType"
          />
        </div>
        <div v-if="!hideViewMore" class="text-align:center">
          <nuxt-link to="/events/" class="button" data-color="primary" data-visual="primary">View all MEI events</nuxt-link>
        </div>
      </stack-l>
    </center-l>
  </base-section>
</template>

<script setup>
import { toRefs } from 'vue'
import meiEventCard from '@/components/meiEventCard.vue';
import tabBar from '@/components/tabBar.vue';

const tabOptions = [
  {
    'label': 'Upcoming Events',
    'value': 'upcoming',
    'defaultOption': 'true'
  },
  {
    'label': 'Past Events',
    'value': 'past'
  }
]



const props = defineProps({
  
  heading: {
    type: String,
    default: 'Section Heading'
  },
  showHighlights: {
    type: Boolean,
    default: false
  },
  hideTabBar: {
    type: Boolean,
    default: false
  },
  hideViewMore: {
    type: Boolean,
    default: false
  },
  eventData: {
    type: Object,
    default: {}
  }
  // const eventData = {
  //   heading: 'Upcoming Events',
  //   list: [
  //     {
  //       heading: 'Vision or Mirage: Saudi Arabia at the Crossroads',
  //       url: 'https://www.youtube.com/embed/_Us_QodyTio',
  //       figType: 'video'
  //     },
  //     {
  //       heading: "Networked Refugees: Palestinian Reciprocity and Remittances in the Digital Age",
  //       url: "https://images.unsplash.com/photo-1666331872781-fd781dc61896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80"
  //     }
  //   ]
  // }
});
const { hideTabBar } = toRefs(props)
</script>

<style lang="scss" scoped>
.grid { 
  grid-gap: var(--s3); 
  --itemWidth: 350px;
}
</style>
