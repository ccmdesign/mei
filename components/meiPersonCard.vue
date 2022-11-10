<template>
  <div>
    <person-card
      class="mei-person-card"
      :fullClick="false"
      :url="data.url"
      :htmlExcerpt="data.biography"
      actionLabel="More"
    >
      <template #headings>
        <h2 class="mei-person-card__title">
          <a class="color-primary" :href="data.url" target="_blank">
            {{ data.name }}
          </a>
          <a class="mei-person-card__title-email icon" :href="`mailto:${data.email}`">email</a>
        </h2>

        <h4 class="mei-person-card__tagline">{{ data.belfer_role[0] }}</h4>
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
        job: "Job Title", // FIXME: Belfer-role or official_titles? Both are arrays.
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
  }
  .mei-person-card__title {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
  }
  .mei-person-card__tagline {
    font-size: 1rem;
    font-weight: bold;
  }

  .mei-person-card :deep(p:first-of-type) {
    margin-top: 0;
  }

  @media (min-width: 40rem) {
    .mei-person-card :deep(.circle) {
      margin-left: 0;
    }
  }

  .mei-person-card__title :deep(a) {
    text-decoration: none;
  }

  .mei-person-card__title-email {
    margin-left: var(--s0);
    vertical-align: middle;
  }
</style>
