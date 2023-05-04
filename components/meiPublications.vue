<template>
  <base-section color="transparent" class="mei-publications">
    <center-l size="wide">
      <stack-l space="var(--s0)">
        <h2 v-if="heading" class="color:primary">{{heading}}</h2>

        <sorting-header :itemsCount="list[selectedValue]?.length" :typeOptions="options" v-model="selectedValue" />

        <hr />
        <stack-l v-for="i in list[selectedValue]" :key="i.title" space="var(--s2)">
          <mei-card-wide-publication 
          :summary="i.summary"
          :title="i.title"
          :url="i.url"
          :image="i.image"
          :date="i.publication_display_date"
          />
          <hr />
        </stack-l>
      </stack-l>
    </center-l>
  </base-section>
</template>

<script setup>
const props = defineProps({
  heading: {
    type: String
  },
  list: {
    type: Object
  },
  options: {
    type: Array
  }
});

const { heading, list, options } = toRefs(props);

const selectedValue = ref(options.value[0]?.value);

</script>

<style lang="scss" scoped>
.mei-publications {
  --base-section-padding: var(--s2);
}
</style>