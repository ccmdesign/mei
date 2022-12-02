<template>
  <div>
    <base-card
      class="mei-card-wide"
      horizontal
      :shadow="false"
      actionLabel="More"
      :fullClick="false"
      :htmlExcerpt="summary"
      clamp="4"
    >
      <template #headings>
        <stack-l>
          <h3 class="mei-card-wide__title | color:primary">
            {{ title }}
          </h3>

          <div class="mei-card-wide__tagline">
            <h6 v-if="location.name == 'Online'" >
              {{ formatedDate }}
              <span class="mei-card-wide__tag | margin-left:s-2">Online</span>
            </h6>

            <h6 v-else>
              {{ formatedDate }}<br />
              <a :href="location.directions" class="color-primary">{{ location.name }}</a>
            </h6>
          </div>
        </stack-l>
      </template>

      <template #image>
        <div class="base-card__img">
          <div class="brown">{{contentType}}</div>
          <img :src="image.url" :alt="(image.alt || image.title)">
        </div>
      </template>

      <template #action>
        <div>
          <base-button color="primary" visual="primary" el="a" :href="url" target="_blank">
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
  summary: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
  location:  {
    type: String,
    default: {
      name: '',
      directions: ''
    }
  },
  formatedDate: {
    type: String,
    default: '',
  },
  image:  {
    type: String,
    default: {
      alt: '',
      title: '',
      url: '',
    }
  },
  contentType: {
    type: String,
    default: '',
  },
});

const { summary, title, url, location, formatedDate, image } = toRefs(props)

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

  .base-card__img {
    position: relative;
    
    & .brown {
      position: absolute;
      padding: 0 var(--s-1);
      margin: var(--s0);
      font-family: var(--display-font);
      color: var(--white-color);
      background-color: var(--primary-color);
      border-radius: var(--s-2);
      text-transform: capitalize;
    }
  }
</style>
