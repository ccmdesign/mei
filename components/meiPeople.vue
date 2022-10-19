<template>
  <base-section size="s">
    <center-l size="wide">
      <stack-l>
        <div class="grid">
          <mei-person-card v-for="i in peopleData"
            :personData="i"
          />
        </div>
      </stack-l>
    </center-l>
    

  </base-section>
</template>

<script setup>

import meiPersonCard from '@/components/meiPersonCard.vue';

// ToDo: Não consegui fazer esses dados entrarem na prop
const peopleData = [
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
</script>

<style lang="scss" scoped>
.grid { 
  --itemWidth: 320px; 
  grid-gap: var(--s3);
}


</style>
