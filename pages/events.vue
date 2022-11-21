<template>
  <article>
    <mei-hero
      background="../assets/images/news-and-events-hero.png"
      title="News and Events"
      description="The Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nesciunt nostrum deleniti reprehenderit delectus facere quibusdam aliquam temporibus numquam, dolore error hic dolorem iste nobis voluptates tenetur et consectetur omnis."
    />

    <mei-events :data="upcomingEvents.slice(UPCOMING_MAX_EVENTS)" heading="Upcoming Events" hideTabBar showHighlights hideViewMore />
    
    <div class="mei-texture-bg">
      <mei-events :data="pastEvents" heading="Past Events" hideTabBar />
    </div>

    <mei-news-list :list="news" :options="typeOptions" />
  </article>
</template>

<script setup>
const UPCOMING_MAX_EVENTS = 3; // FIXME: Máximo de eventos futuros sendo mostrados na tela.
const PAST_MAX_EVENTS = 4; // FIXME: Máximo de eventos passados sendo mostrados na tela.

const events = await queryContent("event").find();
const today = new Date();
let upcomingEvents = reactive([]);
let pastEvents = reactive([]);

let pos = 0;

// Toda a lógica abaixo pressupõe que os eventos virão ordenados do content
// pela data de início (start_date) do mais recente para o mais antigo.
//
do {
  if (events.length <= pos) break; // Se chegar no fim da lista de eventos.

  const event = events[pos];
  const eventDate = new Date(event.start_date);

  if (eventDate >= today) {
    upcomingEvents.push(event);

  } else {
    pastEvents = events.slice(pos, PAST_MAX_EVENTS);
  }

  pos += 1;

} while (pastEvents.length < PAST_MAX_EVENTS);


// News.
const _getNews = async (value) => (await queryContent("publication").where({type: value}).find());
const news = {};
const typeOptions = [];

const newsTypes = [
  // Presentations & Speeches.
  'Presentation',
  'Speech',
  // Blogs.
  'Blog',
  'Blog Post',
  // Policy Briefs.
  'Policy Brief',
  'Testimony',
  // Analysis & Opinions.
  'Analysis & Opinions',
  // News & Announcement.
  'Press Release',
  'Announcement',
  'News',
  // Newsletter.
  'Newsletter',
  'Newsletter Article'
];

for (let t of newsTypes) {
  news[t] = await _getNews(t);

  typeOptions.push({
    label: t,
    value: t,
  });
}
</script>
