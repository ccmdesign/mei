<template>
  <div>
    <person-card class="mei-person-card"
      hideAction
      heading="Person Name"
      tagline="Person Job Title"
      excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores culpa atque et a blanditiis nostrum reprehenderit necessitatibus delectus voluptate iste provident, non tempora consectetur! Ut quam error fuga odit temporibus!"
    >
    
    </person-card>
  </div>
</template>

<script setup>
// import { toRefs } from 'vue'

// const props = defineProps({
//   personData: {
//     type: Object,
//     default: {
//       name: "This is the name",
//       title: "This is the title",
//       bio: "This is the bio"
//     }
//   }
// });

// const personData = toRefs(props)

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
