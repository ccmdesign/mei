<template>
  <base-section v-if="data && data.length > 0" color="transparent">
    <center-l size="wide">
      <stack-l space="var(--s2)">
        <h2 class="color:primary padding-bottom:s2">Publications & Commentary</h2>
        <mei-card-wide-publication v-for="i in highlights"
        :key="i.title"
        :summary="i.summary"
        :title="i.title"
        :url="i.url"
        :image="i.image"
        :displayDate="false"
        :type="i.type"
        />

        <div class="text-align:center padding-top:s2">
          <base-button color="primary" visual="primary" el="a" href="https://mei-hksbelfer.pantheonsite.io/mei/publications" target="_top">View All Publications</base-button>
        </div>
      </stack-l>
    </center-l>
  </base-section>
</template>

<script setup>
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

const query = {type: {$in: publicationsTypes}, content_type: 'publication'};
const data = await queryContent('highlight').where(query).find();

for (const item of data) {
  if (item.changed) {
    item.changed = new Date(item.changed);
  }
}

const highlights = reactive(data.sort((a, b) => {
  if (a.changed < b.changed) return -1;
  if (a.changed > b.changed) return 1;

  return 0
}));
// Only show two first

</script>