<template>
  <base-section color="transparent">
  <center-l size="wide">
    <stack-l space="var(--s2)">
      <tab-bar v-if="!hideTabBar" :options="tabOptions" @tab-click="selectTab" />
      <template v-for="eventData in data" :key="eventData.heading">
        <h2 class="color:primary" v-if="hideTabBar">{{eventData.heading}}</h2>      
   
        <!-- <mei-card-wide v-if="showHighlights && eventData.highlights"
          :class="{'hidden': !hideTabBar && (tabSelected !== eventData.heading)}"
          :summary="eventData.highlights.summary"
          :title="eventData.highlights.title"
          :url="eventData.highlights.url"
          :location="eventData.highlights.location"
          :formatedDate="eventData.highlights.formatedDate"
          :image="eventData.highlights.image"
          :contentType="eventData.highlights.content_type" 
        /> -->

        <div class="grid" v-if="(eventData.list.length > 0)" :class="{'hidden': !hideTabBar && (tabSelected !== eventData.heading)}">
          <mei-event-card v-for="i in eventData.list"
            :key="i.title"
            :title="i.title"
            :htmlExcerpt="i.summary"
            :url="i.url"
            :tagline="i.formatedDate"
            :tag="i.location.name === 'Online' ? 'Online' : ''"
            :image="!!i.image.url"
            :imageUrl="i.image.url"
            :imageDescription="i.image.alt || i.image.name"
            :embedCode="i.embed_code"
            :location="i.location"
            :figType="i.embed_code ? 'video' : 'image'" 
          />
        </div>
        <h4 v-else class="center | color:secondary" :class="{'hidden': !hideTabBar && (tabSelected !== eventData.heading)}">There are no upcoming events at the moment.</h4>
      </template>

      <div v-if="!hideViewMore" class="text-align:center">
        <nuxt-link :to="moreUrl" class="button" data-color="primary" data-visual="primary">View all MEI events</nuxt-link>
      </div>
    </stack-l>
  </center-l>
  </base-section>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    default: [{
      list: [],
      highlights: [],
      heading: 'Events'
    }]
  },
  tabOptions: {
    type: Array,
    default: [
      {
        'label': 'Upcoming Events',
        'value': 'Upcoming Events',
        'defaultOption': 'true'
      },
      {
        'label': 'Past Events',
        'value': 'Past Events'
      }
    ]
  },
  moreUrl: {
    type: String,
    default: 'https://www.belfercenter.org/project/middle-east-initiative/event',
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
});
const { data, tabOptions } = toRefs(props)

const tabSelected = ref('Upcoming Events');  // FIXME: Make this dinamic.

const selectTab = (tab) => {
  tabSelected.value = tab;
}
</script>

<style lang="scss" scoped>
.grid { 
  grid-gap: var(--s3); 
  --itemWidth: 350px;
}

.hidden {
  display: none;
}
</style>
