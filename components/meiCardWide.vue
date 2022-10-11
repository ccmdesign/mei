<template>
  <div>
    <wide-card class="mei-card-wide"
      horizontal
      image
      actionLabel="More"
      brow=""
      :heading="heading"
      :tagline="tagline"
      :excerpt="excerpt"
      :url="url"
      :imageUrl="image"
      customClass="teste"
      />
  </div>
</template>

<script setup>
const props = defineProps({
  heading: String,
  tagline: String,
  excerpt: String,
  url: String,
  image: String,
})
</script>

<style lang="scss" scoped>
.mei-card-wide {
  --card-horizontal-threshold: 500px;
}
</style>
