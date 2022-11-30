<template>
  <base-section color="transparent">
    <center-l size="wide">
      <stack-l space="var(--s2)">
        <tab-bar v-if="!hideTabBar" :options="tabOptions" @tab-click="selectTab" />

        <template v-for="eventData in data" :key="eventData.heading">
          <h2 class="color:primary" v-if="hideTabBar">{{eventData.heading}}</h2>         

          <mei-card-wide v-if="showHighlights && eventData.highlights?.length > 0" :data="eventData.highlights" :class="{'hidden': !hideTabBar && (tabSelected !== eventData.heading)}"/>

          <div class="grid" :class="{'hidden': !hideTabBar && (tabSelected !== eventData.heading)}">
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
      type: Object,
      default: {
        list: {
          type: Array
        },
        highlights: {
          type: Object
        },
        heading: {
          type: String,
          default: 'Events'
        }
      }
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
    default: ''
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

const tabSelected = ref('');

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
