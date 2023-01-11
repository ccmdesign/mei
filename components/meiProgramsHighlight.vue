<template>
  <div class="mei-programs | mei-texture-bg">
    <base-section class="mei-programs" color="transparent">
      <center-l size="wide">
        <stack-l>
          <h2 class="color:primary">Programs</h2>
          <div class="grid">
            <div v-for="program of data" :key="program.title">
              <h4 class="mei-programs__heading | color:primary">{{program.title}}</h4>
              <mei-program-card 
                heading=""
                :title="program.title"
                :excerpt="program.summary"
                :imageUrl="_getImage(program.title)"
                :url="program.url"
              />
            </div>
          </div>
        </stack-l>
      </center-l>
    </base-section>
  </div>
</template>

<script setup>
const data = await queryContent('program').sort({title: 1}).find();

// FIXME: For now, the images are hardcoded.
const images = {
  'Emirates Leadership Initiative': {
    url: '../assets/images/emirates-logo.svg',
    alt: 'Emirates Leadership Initiative',
    name: '',
  },
  'Kuwait Program': {
    url: '../assets/images/kwait-logo.png',
    alt: 'Kuwait Program',
    name: '',
  },
  'Tunisia Program': {
    url: '../assets/images/tunisia-logo.png',
    alt: 'Tunisia Program',
    name: '',
  },
}

const _getImage = (key) => {
  if (Object.keys(images).includes(key)) return images[key].url;

  return '';
}
</script>

<style lang="scss" scoped>
.grid { 
  --itemWidth: 500px;
  grid-gap: var(--s1);
}

@media (min-width: 40em) {
  .grid { grid-gap: var(--s2); }
}

.mei-programs__heading {
  font-weight: 700;
}
</style>
