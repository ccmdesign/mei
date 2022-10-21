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
    <mei-events :eventData="upcomingEvents" showHighlights/>
    <mei-programs-highlight class="mei-texture-bg" />
    <mei-opportunities-highlight />
    <mei-people-highlight class="mei-texture-bg" :options="peopleData" />
    <mei-publications-highlight />
  </article>  
</template>

<script setup>
import meiHero from '@/components/meiHero.vue';
import meiHighlights from '@/components/meiHighlights.vue';
import meiAboutHighlight from '@/components/meiAboutHighlight.vue';
import meiOpportunitiesHighlight from '@/components/meiOpportunitiesHighlight.vue';
import meiProgramsHighlight from '@/components/meiProgramsHighlight.vue';
import meiPeopleHighlight from '@/components/meiPeopleHighlight.vue';
import meiEvents from '@/components/meiEvents.vue';

const upcomingEvents = {
  heading: 'Upcoming Events',
  list: [
    {
      heading: 'Vision or Mirage: Saudi Arabia at the Crossroads',
      url: 'https://www.youtube.com/embed/_Us_QodyTio',
      figType: 'video'
    },
    {
      heading: "Networked Refugees: Palestinian Reciprocity and Remittances in the Digital Age",
      url: "https://images.unsplash.com/photo-1666331872781-fd781dc61896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80"
    }
  ]
}

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
const pastEvents = {
  heading: 'Past Events',
  list: [
    {
      heading: 'Vision or Mirage: Saudi Arabia at the Crossroads',
      url: 'https://www.youtube.com/embed/_Us_QodyTio',
      figType: 'video'

    },
    {
      heading: '2Vision or Mirage: Saudi Arabia at the Crossroads',
      url: 'https://www.youtube.com/embed/_Us_QodyTio',
      figType: 'video'
    },
    {
      heading: 'Vision or Mirage: Saudi Arabia at the Crossroads',
      url: 'https://www.youtube.com/embed/_Us_QodyTio',
      figType: 'video'
    },
    {
      heading: "Networked Refugees: Palestinian Reciprocity and Remittances in the Digital Age",
      url: "https://images.unsplash.com/photo-1666331872781-fd781dc61896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80"
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
