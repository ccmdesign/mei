<template>
  <article>
    <mei-hero
      background="../assets/images/news-and-events-hero.png"
      title="News and Events"
      description="The Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
      nesciunt nostrum deleniti reprehenderit delectus facere quibusdam
      aliquam temporibus numquam, dolore error hic dolorem iste nobis
      voluptates tenetur et consectetur omnis."
    >
    </mei-hero>

    <mei-events :eventData="upcomingEvents" hideTabBar showHighlights hideViewMore/>
    <mei-events :eventData="pastEvents" hideTabBar />

  </article>
</template>

<script setup>
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

<style lang="scss" scoped>

</style>
