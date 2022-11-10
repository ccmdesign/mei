<template>
  <article>
    <mei-hero
      background="../assets/images/publications-hero.png"
      title="Publications"
      description="The Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
      nesciunt nostrum deleniti reprehenderit delectus facere quibusdam
      aliquam temporibus numquam, dolore error hic dolorem iste nobis
      voluptates tenetur et consectetur omnis."
    />

    <base-section>
      <center-l size="wide">
        <stack-l space="var(--s0)">
          <sorting-header :itemsCount="12" :sortByOptions="sortByOptions" :typeOptions="typeOptions" />
          <hr />
          <stack-l v-for="i in data" :key="i.title" space="var(--s2)">
            <mei-card-wide :data="i" />
            <hr />
          </stack-l>
          <div class="text-align:center">
            <base-button color="primary" visual="primary">
              View more updates
            </base-button>
          </div>
        </stack-l>
      </center-l>
    </base-section>
  </article>
</template>

<script setup>

const { data } = await useAsyncData('publications', () => {
    const query = {type: {$in: ["Book", "Report", "Paper"]}};
    const fields = ['type', 'title', 'summary', 'url'];

    return queryContent("publication").where(query).only(fields).limit(3).find();
  }
);

const typeOptions = [
  {
    label: 'Reports & Papers',
    value: 'reports-and-papers'
  },
  {
    label: 'Articles (media)',
    value: 'articles-media'
  },
  {
    label: 'Books',
    value: 'books'
  }
]

const sortByOptions = [
  {
    label: 'Date',
    value: 'date'
  },
  {
    label: 'Reports & Papers',
    value: 'reports-and-papers'
  },
  {
    label: 'Articles (media)',
    value: 'articles-media'
  },
  {
    label: 'Books',
    value: 'books'
  }
]
</script>

