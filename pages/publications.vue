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

    <mei-publications :list="publications" :options="typeOptions" />

  </article>
</template>

<script setup>
// Publications
const _getPublications = async (value) => (await queryContent("publication").where({type: value}).find());
const publications = {};
const typeOptions = [];

const publicationsTypes = [
// Reports & Papers
'Report',
'Paper',
'Report Chapter',
// Articles
'Magazine Article',
'Journal Article',
'Newspaper Article',
// Books
'Book',
'Book Chapter',
];

for (let t of publicationsTypes) {
  publications[t] = await _getPublications(t);

  typeOptions.push({
    label: t,
    value: t,
  });
}

</script>

