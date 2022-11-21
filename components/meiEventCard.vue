<template>
  <base-card class="mei-event-card"
    :shadow="false"
    actionLabel="More"
    :fullClick="false"
    :htmlExcerpt="data.summary"
    :image="!!data.image.url"
    :imageUrl="data.image.url"
    clamp="4"
  >
    <template #headings>
      <stack-l>
        <h3 class="mei-event-card__title | color:primary">
          {{ data.title }}
        </h3>
        <div class="mei-event-card__tagline">
          <h6 v-if="data.location.name == 'Online'" >
            {{ data.formatedDate }}
            <span class="mei-event-card__tag | margin-left:s-2">Online</span>
            <!-- FIXME: Location -->
          </h6>

          <h6 v-else>
            {{ data.formatedDate }}<br />
            <a :href="data.location.directions" class="color-primary">{{ data.location.name }}</a>
          </h6>
        </div>
      </stack-l>
    </template>

    <template #image v-if="data.embed_code">
      <figure class="frame" v-html="data.embed_code"></figure>
    </template>

    <!-- <slot name="image">
      <div v-if="image || imageUrl" class="base-card__img" :class="horizontal ? '' : '| frame'">
        <img v-if="imageUrl" :src=imageUrl :alt=imageDescription>
      </div>
    </slot> -->

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
      summary: '',
      formatedDate: ''
    }
  }
});

const { url, data } = toRefs(props)

</script>

<style lang="scss" scoped>
.mei-event-card {
  --card-border: 0;
  --card-border-radius: 0;
  --card-frame-d: 16; 
  --card-frame-n: 9;
  --card-padding: 0;
  background-color: transparent;
}

.mei-event-card :deep(.base-card__title) { line-height: 1.5; }
.mei-event-card :deep(.base-card__title-link) { color: var(--primary-color); }


.mei-event-card__title {
  font-size: 1.5rem;
}

.mei-event-card__tagline {
  font-family: var(--body-font);
  --font-weight: 400;
  font-size: 80%;
  padding-block: var(--s-2);
}

.mei-event-card__tag {
  border-radius: 3px;
  background-color: var(--tertiary-color); 
  color: var(--white-color);
  padding: var(--s-3) var(--s-2);
  font-size: 90%;
}

</style>
