<template>
  <div class="mei-programs | mei-texture-bg">
    <base-section class="mei-programs" color="transparent">
      <center-l size="wide">
        <stack-l>
          <h2 class="color:primary">Special Initiatives</h2>
          <div class="grid">
            <div v-for="program of content" :key="program.title">
              <h4 class="mei-programs__heading | color:primary">{{program.title}}</h4>
              <mei-program-card 
                heading=""
                :excerpt="program.excerpt"
                :imageUrl="program.imageUrl"
                :url="program.url"
                :customClass="program.class"
              />
            </div>
          </div>
        </stack-l>
      </center-l>
    </base-section>
  </div>
</template>

<script setup>
const content = [{
    title: 'Emirated Leadership',
    excerpt: 'The program provides the critical opportunities needed for emerging leaders from the United Arab Emirates and the Middle East to confront the region’s public policy issues in question through a multi-pronged approach.',
    imageUrl: '../assets/images/emirates-logo.png',
    url: '/program-emirates'
  },
  {
    title: 'Kwait Program',
    class: "kwait-card",
    excerpt: "The Kuwait Program serves current and emerging leaders and decision-makers in Kuwait, the Gulf Cooperation Council, and the wider Arab world through opportunities for cooperation on critical issues of importance to Kuwait and the region.",
    imageUrl: "../assets/images/kwait-logo.png",
    url: "/program-kwait/",
  },
  {
    title: 'Tunisia Program',
    class: "tunisia-card",
    excerpt: "", // FIXME: Need content
    imageUrl: "../assets/images/tunisia-logo.png",
    url: "/program-tunisia/",
  }
]
</script>

<style lang="scss" scoped>
.grid { grid-gap: var(--s1) }

@media (min-width: 40em) {
  .grid { grid-gap: var(--s2) }
}


.mei-programs__heading {
  font-weight: 700;
}
</style>
