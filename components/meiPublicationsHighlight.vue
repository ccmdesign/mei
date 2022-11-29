<template>
    <base-section color="transparent">
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
              <base-button color="primary" visual="primary" el="a" href="/publications">View All Publications</base-button>
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

// FIXME: Pegar os highlights e limitar em dois.
const highlights = await queryContent("publication").where({type: {$in: publicationsTypes}}).limit(2).find();
</script>

