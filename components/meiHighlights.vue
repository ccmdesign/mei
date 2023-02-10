<template>
  <base-section>
    <center-l size="wide">
      <stack-l space="var(--s1)">
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
            :key="i.heading"
            :heading='i.title'
            :imageUrl="i.image.url"
            :url="i.url"
            clamp=3
          >

            <h2 class="base-card__title"><a :href="i.url" target="_blank" class="base-card__title-link">{{i.title}}</a></h2>
            <div v-html="i.summary" class="summary" />
            
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
const data = await queryContent('highlight').where({'content_type': {$in: ['event']}}).find();

for (const item of data) {
  if (item.changed) {
    item.changed = new Date(item.changed);
  }
}

const highlightsData = reactive(data.sort((a, b) => {
  if (a.changed < b.changed) return -1;
  if (a.changed > b.changed) return 1;

  return 0
}));

</script>

<style lang="scss" scoped>
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
