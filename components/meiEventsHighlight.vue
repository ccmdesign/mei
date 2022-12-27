<template>
  <base-section size="m" color="transparent">
    <center-l size="wide">
      <h2 class="color:primary">Events</h2>
    </center-l>
    <mei-events :data="[upcomingEvents, pastEvents]" :showHighlights="(upcomingEvents.highlights.length > 0)"/>
  </base-section>
</template>

<script setup>
const UPCOMING_MAX_EVENTS = 3; // FIXME: Máximo de eventos futuros sendo mostrados na tela.
const PAST_MAX_EVENTS = 4; // FIXME: Máximo de eventos passados sendo mostrados na tela.

const events = await queryContent("event").find();
console.log(events)
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

</script>
