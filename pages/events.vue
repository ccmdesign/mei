<template>
  <article>
    <mei-hero
      background="../assets/images/news-and-events-hero.png"
      title="News and Events"
      description="The Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nesciunt nostrum deleniti reprehenderit delectus facere quibusdam aliquam temporibus numquam, dolore error hic dolorem iste nobis voluptates tenetur et consectetur omnis."
    />

    <mei-events :data="upcomingEvents" heading="Upcoming Events" hideTabBar showHighlights hideViewMore/>
    
    <div class="mei-texture-bg">
      <mei-events :data="pastEvents" heading="Past Events" hideTabBar />
    </div>
  </article>
</template>

<script setup>
const { data: upcomingEvents } = await useAsyncData('events', () => {
    const query = {type: {$in: ["Book", "Report", "Paper"]}};
    const fields = ['type', 'title', 'summary']

    return queryContent("event").limit(3).find();
  }
);

const { data: pastEvents } = await useAsyncData('events', () => {
    const query = {type: {$in: ["Book", "Report", "Paper"]}};
    const fields = ['type', 'title', 'summary']

    return queryContent("event").find();
  }
);
</script>
