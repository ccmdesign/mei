<template>
  <base-section class="mei-highlights">
    <center-l size="wide">
      <stack-l space="var(--s2)" class="margin-bottom:s2">
        <h2 class="color:primary">Highlights</h2>
        <mei-card-wide v-if="highlightsData[0] && highlightsData[0].content_type == 'event'"
          :summary="highlightsData[0].summary"
          :title="highlightsData[0].title"
          :url="highlightsData[0].url"
          :location="highlightsData[0].location"
          :formatedDate="highlightsData[0].formatedDate"
          :image="highlightsData[0].image"
          :contentType="highlightsData[0].content_type" 
        />

        <mei-card-wide-publication v-if="highlightsData[0] && highlightsData[0].content_type == 'publication'" :data="highlightsData[0]"/>

        <div class="grid">
          <base-card v-for="i in highlightsData.slice(1)" class="highlight-secondary"
            :fullClick="true"
            :key="i.heading"
            :heading='i.title'
            :htmlExcerpt='i.summary'
            :imageUrl="i.image.url"
            :url="i.url"
            excerpt=""
            clamp=3
          > 
            <template #action>
              <a class="highlight-secondary__action" :href="i.url" target="_blank">
              Read More
              </a>
            </template>
          </base-card>
        </div>
      </stack-l> 
    </center-l>
  </base-section>
</template>

<script setup>
const MAX_HIGHLIGHTS = 5 // Máximo de items destacados.

const data = await queryContent('highlight').where({'content_type': {$in: ['event', 'publication']}}).find();

for (const item of data) {
  if (item.changed) {
    item.changed = new Date(item.changed);
  }
}

const highlightsData = reactive(data.sort((a, b) => {
  if (a.changed < b.changed) return -1;
  if (a.changed > b.changed) return 1;

  return 0
}).slice(0, MAX_HIGHLIGHTS));
</script>

<style lang="scss" scoped>
.mei-highlights {
  --base-section-padding: var(--s2);
}

.highlight-grid { 
  display: flex; 
  gap: var(--s1);
  --space: var(--s0);
}

.highlight-secondary :deep(.base-card__title) {
  font-size: 1.2rem;
  color: var(--primary-color);
  a {
    text-decoration: none !important;
  }
}

.highlight-secondary {
  --card-bg-hsl: transparent;
  --card-hover-border: none;
  --card-border: none;
  --card-hover-shadow: none;
  --card-padding: 0;
}

.highlight-secondary__action {
  text-decoration: underline;
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: bold;
}

.summary {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
