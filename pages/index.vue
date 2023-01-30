<template>
  <article> 
    <mei-hero 
      background="../assets/images/home-bg.png"
      title="Middle East Initiative"
      description="The Middle East Initiative at Harvard Kennedy School is dedicated to advancing public policy in the Middle East by convening the world's foremost academics and policy experts, developing the next generation of leaders, and promoting community engagement on campus and in the region."
    />
    <mei-highlights />

    <mei-about-highlight class="mei-texture-bg"/>

    <mei-events-highlight />

    <mei-people-highlight class="mei-texture-bg" />
    <!-- FIXME: Remover o componente -->
    <!-- <mei-opportunities-highlight /> -->

    <mei-programs-highlight />

    <mei-publications-highlight />
  </article>  
</template>

<style scoped>
.cover { --height: 30;}

.people-index { 
  --itemWidth: 100px; 
}
</style>
