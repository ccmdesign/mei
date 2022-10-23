<template>
  <article>
    <mei-hero
      background="../assets/images/publications-hero.png"
      title="Opportunities"
      description="The Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
      nesciunt nostrum deleniti reprehenderit delectus facere quibusdam
      aliquam temporibus numquam, dolore error hic dolorem iste nobis
      voluptates tenetur et consectetur omnis."
    />
    
    <base-section color="transparent">
      <center-l size="wide">
        <stack-l>
          <tab-bar :options="tabs" />
          <mei-opportunity-group/>
          <mei-opportunity-group inverted/>
          <mei-opportunity-group/>
          
        </stack-l>
      </center-l>
    </base-section>
    
  </article>
</template>

<script setup>
import tabBar from '@/components/tabBar.vue';
const tabs = [
  { label: 'Students', value: 'students', defaultOption: 'true'},
  { label: 'Faculty', value: 'faculty'},
  { label: 'Outside Scholars', value: 'outside-scholars'}
]
</script>

<style lang="scss" scoped>

</style>
