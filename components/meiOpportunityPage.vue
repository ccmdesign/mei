<template>
  <article>
    <mei-hero
      background="../assets/images/opportunities-hero.jpg"
      title="Opportunities"
      description="The Middle East Initiative at Harvard Kennedy School is dedicated to advancing public policy in the Middle East by convening the world's foremost academics and policy experts, developing the next generation of leaders, and promoting community engagement on campus and in the region."
    />
    
    <base-section class="opportunities" color="transparent">
      <mei-opportunity-group id="students" :content="opportunity" :ellipsisClass="ellipsisClass"/>
    </base-section>
    
  </article>
</template>

<script setup>
  const props = defineProps({
    opportunity: Object,
    ellipsisClass: String
  })
</script>


<style lang="scss" scoped>
.opportunities {
  --base-section-padding: var(--s2);
  overflow: visible;
}
</style>
