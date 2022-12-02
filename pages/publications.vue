<template>
  <article>
    <mei-hero
      background="../assets/images/publications-hero.png"
      title="Publications"
      description="The Middle East Initiative at Harvard Kennedy School is dedicated to advancing public policy in the Middle East by convening the world's foremost academics and policy experts, developing the next generation of leaders, and promoting community engagement on campus and in the region."
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

