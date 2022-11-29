<template>
  <article>
    <mei-hero 
      background="../assets/images/home-bg.png"
      title="Middle East Initiative"
      description="The Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
    nesciunt nostrum deleniti reprehenderit delectus facere quibusdam
    aliquam temporibus numquam, dolore error hic dolorem iste nobis
    voluptates tenetur et consectetur omnis."
    />
    <mei-highlights />

    <mei-about-highlight class="mei-texture-bg"/>

    <mei-events-highlight />

    <mei-people-highlight class="mei-texture-bg" />
    
    <mei-opportunities-highlight />

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
