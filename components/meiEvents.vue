<template>
  <base-section color="transparent">
    <center-l size="wide">
      <stack-l space="var(--s2)">
        <!-- HEADING da seção inteira -->
        <h2 class="color:primary">{{heading}}</h2> 

        <!-- FIXME: O que é essa tab? -->
        <tab-bar :options="tabOptions" v-if="!hideTabBar" @tab-click="selectTab" />

        <mei-card-wide v-if="showHighlights" :data="data[0]" />

        <div v-for="tab in tabOptions" :key="tab.value" class="grid" :class="{'hidden': tabSelected !== tab.value}">
          <mei-event-card v-for="i in data[tab.value].list"
            :key="i.title"
            :figType="i.figType"
            :data="i"
          />
        </div>

        <div v-if="!hideViewMore" class="text-align:center">
          <!-- FIXME: Colocar link da página do Belfer -->
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
    default: {
      upcoming: {
        type: Object,
        default: {
          list: {
            type: Array
          },
          heading: {
            type: String,
            default: 'Upcoming Events'
          }
        }
      },
      past: {
        type: Object,
        default: {
          list: {
            type: Array
          },
          heading: {
            type: String,
            default: 'Past Events'
          }
        }
      }
    }
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
