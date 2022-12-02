<template>
  <article>
    <mei-hero
      background="../assets/images/programs-hero.png"
      title="Programs"
      description="The Middle East Initiative at Harvard Kennedy School is dedicated to advancing public policy in the Middle East by convening the world's foremost academics and policy experts, developing the next generation of leaders, and promoting community engagement on campus and in the region."
    />

    <mei-program-section v-for="i in programData" :content='i' :key="i.title"/>
  </article>
</template>

<script setup>

const programData = [
  {
    title: 'Emirates Leadership Initiative',
    description: 'The deadline to apply for the Spring 2023 Kuwait Visiting Research Fellowship has passed. Applications for this position are no longer being accepted at this time.',
    imageUrl: '../assets/images/emirates-logo.png',
    url: '/programs/emirates-leadership-initiative'
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
