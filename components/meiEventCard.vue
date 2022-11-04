<template>
  <base-card class="mei-event-card"
    :shadow="false"
    actionLabel="More"
    :fullClick="false"
    :excerpt="data.summary"
    clamp="4"
  >

    <template #headings>
      <stack-l>
        <h3 class="mei-card-wide__title | color:primary">
          {{ data.title }}
        </h3>
        <div class="mei-card-wide__tagline">
          <h6 v-if="data.location.name == 'Online'" >
            {{ formatDate(data) }}
            <span class="mei-card-wide__tag | margin-left:s-2">Online</span>
            <!-- FIXME: Location -->
          </h6>

          <h6 v-else>
            {{ formatDate(data) }}
            <a :href="data.location.directions" class="color-primary">{{ data.location.name }}</a>
          </h6>
        </div>
      </stack-l>
    </template>

    <template #image>
      <figure class="frame">
        <iframe v-if="figType == 'video'" width="560" height="315" :src="url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <img :src="url" alt="">
      </figure>
    </template>

    <template #action>
      <div>
        <base-button color="primary" el="a" :href="data.url" target="_blank">
        More
      </base-button>
      </div>
    </template>
  </base-card>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  figType: { // Ideally this prop would be a computed property
    type: String,
    default: 'image'
  },
  data: {
    type: Object,
    default: {
      url: '',
      title: 'Title',
      location: {
        name: '',
        directions: ''
      },
      summary: ''
    }
  }
});


const { url, data } = toRefs(props)

const formatDate = (event) => {
  const getDate = () => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return start.toLocaleDateString("en-US", options)
  }
  const getTime = () => {
    const options = {hour: 'numeric', minute: 'numeric' };

    return `${start.toLocaleTimeString('en-US', options)} - ${end.toLocaleTimeString('en-US', options)}`
  }
  const start = new Date(event.start_date);
  const end = new Date(event.end_date)

  return `${getDate()} | ${getTime()}`
}

</script>

<style lang="scss" scoped>
.mei-event-card {
  --card-border: 0;
  --card-border-radius: 0;
  --card-frame-d: 16; 
  --card-frame-n: 9;
  --card-padding: 0;
}

.mei-event-card :deep(.base-card__title) { line-height: 1.5; }
.mei-event-card :deep(.base-card__title-link) { color: var(--primary-color); }

</style>
