<template>
  <article>
    <mei-hero
      background="../assets/images/publications-hero.png"
      title="Publications"
    />

    <div class="margin-top:s2 | margin-bottom:s2">
      <mei-publications :list="publications" :options="typeOptions" />
    </div>
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

