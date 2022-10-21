<template>
  <base-section>
    <center-l size="wide">
      <stack-l space="var(--s1)">
        <h2 class="color:primary">Highlights</h2>
        <mei-card-wide />
        <div class="grid">
          <base-card v-for="i in highlightsData" class="highlight-secondary"
            :heading='i.heading'
            :imageUrl="i.image"
            clamp="3"
          />
        </div>
      </stack-l>
    </center-l>
  </base-section>
</template>

<script setup>
import meiCardWide from '@/components/meiCardWide.vue';

const highlightsData = [
  {
    heading: 'Arab Constitutionalism: The Coming Revolution',
    date: 'Tue., Apr. 19, 2022',
    time: '1:30pm - 2:45pm',
    tag: 'Online',
    image: 'https://images.unsplash.com/photo-1561882192-c606a6e15e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea assumenda culpa dolore, vitae amet laudantium animi! Quaerat ullam in delectus assumenda modi, asperiores voluptatem eaque nulla ab deserunt mollitia.'
  },
  {
    heading: 'Arab Constitutionalism: The Coming Revolution',
    date: 'Tue., Apr. 19, 2022',
    time: '1:30pm - 2:45pm',
    tag: 'Online',
    image: 'https://images.unsplash.com/photo-1561882192-c606a6e15e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea assumenda culpa dolore, vitae amet laudantium animi! Quaerat ullam in delectus assumenda modi, asperiores voluptatem eaque nulla ab deserunt mollitia.'
  },
  {
    heading: 'Arab Constitutionalism: The Coming Revolution',
    date: 'Tue., Apr. 19, 2022',
    time: '1:30pm - 2:45pm',
    tag: 'Online',
    image: 'https://images.unsplash.com/photo-1561882192-c606a6e15e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea assumenda culpa dolore, vitae amet laudantium animi! Quaerat ullam in delectus assumenda modi, asperiores voluptatem eaque nulla ab deserunt mollitia.'
  },
  {
    heading: 'Arab Constitutionalism: The Coming Revolution',
    date: 'Tue., Apr. 19, 2022',
    time: '1:30pm - 2:45pm',
    tag: 'Online',
    image: 'https://images.unsplash.com/photo-1561882192-c606a6e15e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80',
    excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea assumenda culpa dolore, vitae amet laudantium animi! Quaerat ullam in delectus assumenda modi, asperiores voluptatem eaque nulla ab deserunt mollitia.'
  }
]

</script>

<style lang="scss" scoped>
.highlight-grid { 
  display: flex; 
  gap: var(--s1);
  --space: var(--s0);
}

.highlight-secondary :deep(.base-card__title) {
  font-size: 1.2rem;
  color: var(--primary-color);
}

</style>
