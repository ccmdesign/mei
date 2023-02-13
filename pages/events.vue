<template>
  <article>
    <mei-hero
      background="../assets/images/news-and-events-hero.png"
      title="News and Events"
      description="We are dedicated to advancing public policy in the Middle East by convening the world's foremost academics and policy experts, developing the next generation of leaders, and promoting community engagement on campus and in the region."
    />

    <mei-events :data="[upcomingEvents]" hideTabBar hideViewMore />
      
    <div class="mei-texture-bg">
      <mei-events :data="[pastEvents]" hideTabBar />
    </div>

    <mei-publications heading="News" :list="news" :options="typeOptions" />
  </article>
</template>

<script setup>
const UPCOMING_MAX_EVENTS = 4; // FIXME: Máximo de eventos futuros sendo mostrados na tela.
const PAST_MAX_EVENTS = 4; // FIXME: Máximo de eventos passados sendo mostrados na tela.

const today = new Date();
// const data = await queryContent('highlight').where({content_type: 'event'}).find();

// for (const item of data) {
//   if (item.changed) {
//     item.changed = new Date(item.changed);
//   }
// }

// const highlight = data.filter(item => (new Date(item.start_date) >= today))
//   .sort((a, b) => {
//     if (a.changed < b.changed) return -1;
//     if (a.changed > b.changed) return 1;

//     return 0
//   });

const events = await queryContent("event").find();

const upcomingEvents = {
  heading: 'Upcoming Events',
  list: reactive([]),
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
