<template>
  <div>
    <person-card
      class="mei-person-card"
      :fullClick="false"
      :url="data.url"
      :htmlExcerpt="data.biography"
      hideAction
      :imageUrl="data.avatar.url"
      clamp=3
    >
      <template #headings>
        <h2 class="mei-person-card__title">
          <a class="color-primary" :href="data.url" target="_blank">
            {{ data.name }}
          </a>
        </h2>
        <hr class="divider" />
        <div class="mei-contact-card-section">
          <h4 class="mei-person-card__tagline">{{( data.display_titles[0] || data.category )}}</h4>
          <a v-if="data.email" class="mei-person-card__title-email icon" :href="`mailto:${data.email}`">email</a>
        </div>
      </template>
    </person-card>
  </div>
</template>

<script setup>
  import { toRefs } from "vue";

  const props = defineProps({
    data: {
      type: Object,
      default: {
        name: "Person Name",
        url: "/person-name",
        email: "example@email.com",
        job: "Job Title", // FIXME: ( data.display_titles[0] || data.category )
      },
    },
  });

  const { data } = toRefs(props);
</script>

<style lang="scss" scoped>
  .mei-person-card {
    --card-headings-alignment: left;
    --card-vertical-space: var(--s1);
    background-color: transparent;
    font-size: 1.2rem;
    text-align: center;
  }
  .mei-person-card__title {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
  }
  .mei-person-card__tagline {
    font-weight: bold;
  }

  .mei-person-card :deep(p:first-of-type) {
    margin-top: 0;
  }

  .mei-person-card__title :deep(a) {
    text-decoration: none;
    font-size: 2rem;
  }

  .mei-person-card__title-email {
    margin-left: var(--s0);
    vertical-align: middle;
    font-size: 2rem;
  }

  .mei-contact-card-section {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    & a {
      text-decoration: none;
    }
  }

  .divider {
    border: none;
    height: 2px;
    background-color: hsla(var(--base-hsl), .5);
  }
  
</style>
