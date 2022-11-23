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

    <mei-events :data="[upcomingEvents, pastEvents]" showHighlights moreUrl="/events/" />

    <mei-people-highlight class="mei-texture-bg" :options="peopleData" />
    
    <mei-opportunities-highlight />

    <mei-programs-highlight />

    <mei-publications-highlight />
  </article>  
</template>

<script setup>
const UPCOMING_MAX_EVENTS = 3; // FIXME: Máximo de eventos futuros sendo mostrados na tela.
const PAST_MAX_EVENTS = 4; // FIXME: Máximo de eventos passados sendo mostrados na tela.

const events = await queryContent("event").find();
const today = new Date();

const upcomingEvents = {
  heading: 'Upcoming Events',
  list: reactive([]),
  highlights: reactive([])
};

const pastEvents = {
  heading: 'Past Events',
  list: reactive([])
};

let pos = 0;

// Toda a lógica abaixo pressupõe que os eventos virão ordenados do content
// pela data de início (start_date) do mais recente para o mais antigo.
//
do {
  if (events.length <= pos) break; // Se chegar no fim da lista de eventos.
  const event = events[pos];
  const eventDate = new Date(event.start_date);

  if (eventDate >= today) {
    if (!!upcomingEvents.highlights) {
      upcomingEvents.highlights = event; // FIXME: O primeiro evento seria sempre o em destaque.

    } else if (upcomingEvents.list.length < UPCOMING_MAX_EVENTS) {
      upcomingEvents.list.push(event);
    }

  } else {
    pastEvents.list = events.slice(pos, PAST_MAX_EVENTS);
  }

  pos += 1;

} while (pastEvents.list.length < PAST_MAX_EVENTS);


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
