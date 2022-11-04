<template>
  <div>
    <base-card
      class="mei-card-wide"
      horizontal
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
        <div class="base-card__img">
          <img src="https://images.unsplash.com/photo-1546412414-8035e1776c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="">
        </div>
      </template>

      <template #action>
        <div>
          <base-button color="primary" visual="primary" el="a" :href="data.url" target="_blank">
          More
        </base-button>
        </div>
      </template>
    </base-card>
  </div>
</template>

<script setup>
  import { toRefs } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    default: {
      summary: '',
      title: 'Title',
      url: '',
      location: {
        name: '',
        directions: 's'
      }
    }
  }
});

const { data } = toRefs(props)

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
  .mei-card-wide {
    --card-hover-border: none;
    --card-border: none;
    --card-hover-shadow: none;
    --card-padding: 0;
    --card-gap: var(--s3);
    // ToDo: Replace the switcher with a grid in the card-wide
    --switcher-threshold: 500px !important;
    --card-horizontal-image-ratio: 4;
    --card-horizontal-content-ratio: 3;
  }

  .mei-card-wide[horizontal="true"] .base-card__img {
    object-fit: cover;
    flex-grow: var(--card-horizontal-image-ratio);
    max-width: var(--card-horizontal-image-max-width);
    flex-basis: calc((var(--card-horizontal-threshold) - 100%) * 999);
  }

  .mei-card-wide__title {
    font-size: 1.5rem;
  }

  .mei-card-wide__tagline {
    font-family: var(--body-font);
    --font-weight: 400;
    font-size: 80%;
    padding-block: var(--s-2);
  }

  .mei-card-wide__tag {
    border-radius: 3px;
    background-color: var(--tertiary-color); 
    color: var(--white-color);
    padding: var(--s-3) var(--s-2);
    font-size: 90%;
  }
</style>
