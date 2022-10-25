<template>
  <div>
    <person-card class="mei-person-card"
      hideAction
      :personName="data.name"
      :jobTitle="data.official_titles.join(' | ')"
      :url="data.url"
    >
    
    </person-card>
  </div>
</template>

<script setup>
  import { toRefs } from 'vue';

  const props = defineProps({
    data: {
      type: Object,
      default: {
        name: 'Person Name',
        url: '/person-name',
        job: 'Job Title' // FIXME: Belfer-role or official_titles? Both are arrays.
      }
    }
  });

  const { data } = toRefs(props)
</script>

<style lang="scss" scoped>

.mei-person-card { 
  --card-headings-alignment: left;
  --card-vertical-space: var(--s1);
  background-color: transparent; 
}
.mei-person-card :deep(.base-card__title) {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
}
.mei-person-card :deep(.base-card__tagline) {
  font-size: 1rem;
  font-weight: bold;
}

.mei-person-card :deep(p:first-of-type) { margin-top: 0; }


@media (min-width: 40rem) {
.mei-person-card :deep(.circle) { margin-left: 0; }
}

</style>
