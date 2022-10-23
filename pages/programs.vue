<template>
  <article>
    <mei-hero
      background="../assets/images/programs-hero.png"
      title="Programs"
      description="The Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nesciunt nostrum deleniti reprehenderit delectus facere quibusdam aliquam temporibus numquam, dolore error hic dolorem iste nobis voluptates tenetur et consectetur omnis."
    />

    <mei-program-section v-for="i in programData" :content='i'/>
  </article>
</template>

<script setup>

const programData = [
  {
    title: 'Emirates Leadership Initiative',
    description: 'The deadline to apply for the Spring 2023 Kuwait Visiting Research Fellowship has passed. Applications for this position are no longer being accepted at this time.',
    imageUrl: '../assets/images/emirates-logo.png'
  },
  {
    title: 'Kuwait Program',
    description: 'The deadline to apply for the Spring 2023 Kuwait Visiting Research Fellowship has passed. Applications for this position are no longer being accepted at this time.',
    imageUrl: '../assets/images/kwait-logo.png',
    inverted: true, 
    texture: true
  },
  {
    title: 'Tunisia Program',
    description: 'The deadline to apply for the Spring 2023 Kuwait Visiting Research Fellowship has passed. Applications for this position are no longer being accepted at this time.',
    imageUrl: '../assets/images/tunisia-logo.png'
  }
]

</script>

<style lang="scss" scoped>


</style>
