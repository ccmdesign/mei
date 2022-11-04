<template>
  <base-section color="transparent">
    <center-l size="wide">
      <stack-l space="var(--s2)">
        <h2 class="color:primary">{{heading}}</h2>

        <!-- FIXME: O que é essa tab? -->
        <tab-bar :options="tabOptions" v-if="!hideTabBar" />

        <mei-card-wide v-if="showHighlights" :data="data[0]" />

        <div class="grid">
          <mei-event-card v-for="i in data.slice(1)"
            :key="i.title"
            :figType="i.figType"
            :data="i"
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
  data: {
    type: Array,
    default: []
  },
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
});
const { hideTabBar, data, heading } = toRefs(props)

</script>

<style lang="scss" scoped>
.grid { 
  grid-gap: var(--s3); 
  --itemWidth: 350px;
}
</style>
