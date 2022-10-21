<template>
  <div class="mei-people-section"> <!-- I had to add this element here, to avoid a conflict with .mei-texture-bg -->
    <base-section size="m" color="transparent">
      <center-l size="wide">
        <stack-l space="var(--s3)">
          <h2 class="color:primary">Our People</h2>
          <tab-bar :options="peopleData.tabs" />
          <div class="grid">
            <mei-person-card v-if="compact == 'false'" v-for="i in peopleData.list"
              heading="Person Name"
              excerpt="false"
            />

            <person-card v-else v-for="i in peopleData.list"
              class="compact-person-card"
              heading="Person Name"
              excerpt=""
            >

              <template #action>
                <!-- ToDo: update with new baseButton -->
                <a href="/" class="button" color="primary" visual="primary">View Profile</a>
              </template>

            </person-card>
          </div>
          
          <div class="text-align:center margin-top:s3" >
            <!-- ToDo: update with new baseButton -->
            <a href="/people/" class="button" data-color="primary" data-visual="primary">View All</a>
          </div>
        </stack-l>
      </center-l>
    </base-section>
  </div>
</template>

<script setup>

import meiPersonCard from '@/components/meiPersonCard.vue';
import tabBar from '@/components/tabBar.vue';

import { toRefs } from 'vue'

const props = defineProps({
  compact: {
    type: String,
    default: "false"
  }
});

const compact = toRefs(props);

// ToDo: Não consegui fazer esses dados entrarem na prop
const peopleData = {
  tabs: [
    { label: 'Leadership', value: 'leadership', defaultOption: 'true'},
    { label: 'Staff', value: 'staff'},
    { label: 'Fellows', value: 'fellows'}
  ],
  list: [
    {
    name: "People Data This is the name",
    title: "This is the title",
    bio: "This is the bio"
  },
  {
    name: "People Data This is the name",
    title: "This is the title",
    bio: "This is the bio"
  },
  {
    name: "People Data This is the name",
    title: "This is the title",
    bio: "This is the bio"
  },
  {
    name: "People Data This is the name",
    title: "This is the title",
    bio: "This is the bio"
  },
  {
    name: "People Data This is the name",
    title: "This is the title",
    bio: "This is the bio"
  },
  {
    name: "People Data This is the name",
    title: "This is the title",
    bio: "This is the bio"
  }
]
}
</script>

<style lang="scss" scoped>


.mei-people-section[compact="true"] .grid {
  --itemWidth: 180px; 
  grid-gap: var(--s2);
}

.mei-people-section[compact="false"] .grid {
  --itemWidth: 320px; 
  grid-gap: var(--s3);
}

.compact-person-card {
  background-color: transparent;
}



</style>
