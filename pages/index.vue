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

    <mei-people-highlight class="mei-texture-bg" :options="peopleData" />
    
    <mei-opportunities-highlight />

    <mei-programs-highlight />

    <mei-publications-highlight />
  </article>  
</template>

<script setup>
// not working because mei-people-highlight props are not set up
const peopleData = {
  tabs: [
    { label: 'Staff', value: 'staff', defaultOption: 'true'},
    { label: 'Faculty Affiliates', value: 'faculty-affiliates'},
    { label: 'Senior Fellows', value: 'senior-fellows'},
    { label: 'Fellows', value: 'fellows'}
  ],
  list: [
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
}
</script>

<style scoped>
.cover { --height: 30;}

.people-index { 
  --itemWidth: 100px; 
}
</style>
