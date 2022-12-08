<template>
  <article>
    <mei-hero
      background="../assets/images/programs-hero.png"
      title="Programs"
      description="The Middle East Initiative at Harvard Kennedy School is dedicated to advancing public policy in the Middle East by convening the world's foremost academics and policy experts, developing the next generation of leaders, and promoting community engagement on campus and in the region."
    />

    <mei-program-section v-for="(program, i) in data" :key="program.title"
      :title="program.title"
      :description="program.summary"
      :url="program.url"
      :inverted="(i % 2 != 0)"
      :texture="(i % 2 != 0)"
      :image="images[program.title]"
    />
  </article>
</template>

<script setup>
const data = await queryContent('program').find();

// FIXME: For now, the images are hardcoded.
const images = {
  'Emirates Leadership Initiative': {
    url: '../assets/images/emirates-logo.png',
    alt: 'Emirates Leadership Initiative',
    name: '',
  },
  'Kuwait Program': {
    url: '../assets/images/kwait-logo.png',
    alt: 'Kuwait Program',
    name: '',
  },
  'Tunisia Program': {
    url: '../assets/images/tunisia-logo.png',
    alt: 'Tunisia Program',
    name: '',
  },
}
</script>
