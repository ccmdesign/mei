<template>
  <base-section class="mei-programs">
    <center-l size="wide">
      <stack-l>
        <h2>Programs</h2>
        <div class="grid">
          <mei-program-card 
            heading=""
            excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In suscipit iste soluta nam, quo non corporis inventore similique? Enim dolorum ut nisi optio eveniet quas ipsa incidunt distinctio reprehenderit officiis."
            imageUrl="../assets/images/emirates-logo.png"
            customSlug="/program-emirates/"
          />
          <mei-program-card 
            customClass="kwait-card"  
            heading=""
            excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In suscipit iste soluta nam, quo non corporis inventore similique? Enim dolorum ut nisi optio eveniet quas ipsa incidunt distinctio reprehenderit officiis."
            imageUrl="../assets/images/kwait-logo.png"
            customSlug="/program-kwait/"
          />
        </div>
      </stack-l>
    </center-l>
  </base-section>
</template>

<script setup>
import meiProgramCard from '@/components/meiProgramCard.vue';
</script>

<style lang="scss" scoped>

.grid { grid-gap: var(--s1) }

@media (min-width: 40em) {
  .grid { grid-gap: var(--s4) }
}

.kwait-card { --card-image-fit: none; }
</style>
