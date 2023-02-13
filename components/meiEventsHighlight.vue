<template>
  <base-section size="m" color="transparent">
    <center-l size="wide">
      <h2 class="color:primary">Events</h2>
    </center-l>
    <mei-events :data="[upcomingEvents, pastEvents]" />
  </base-section>
</template>

<script setup>
const UPCOMING_MAX_EVENTS = 4; // FIXME: Máximo de eventos futuros sendo mostrados na tela.
const PAST_MAX_EVENTS = 4; // FIXME: Máximo de eventos passados sendo mostrados na tela.

const events = await queryContent("event").find();
const today = new Date();

const upcomingEvents = {
  heading: 'Upcoming Events',
  list: reactive([]),
};

const pastEvents = {
  heading: 'Past Events',
  list: reactive([])
};

let pos = 0;

do {
  if (pos == events.length) break; // Quando chega no último evento.

  const event = events[pos];
  const eventDate = new Date(event.start_date);

  if (eventDate >= today) {
    upcomingEvents.list.splice(0, 0, event);

  } else {
    pastEvents.list.push(event);
  }

  pos++

} while (pastEvents.list.length < PAST_MAX_EVENTS)

</script>
