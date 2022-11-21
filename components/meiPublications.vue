<template>
  <center-l size="wide">
    <stack-l space="var(--s0)">
      <h2 v-if="heading" class="color:primary">{{heading}}</h2>

      <sorting-header :itemsCount="list[selectedValue]?.length" :typeOptions="options" v-model="selectedValue" />

      <hr />
      <stack-l v-for="i in list[selectedValue]" :key="i.title" space="var(--s2)">
        <mei-card-wide-publication :data="i" />
        <hr />
      </stack-l>

      <div class="text-align:center">
        <base-button color="primary" visual="primary">
          View more updates
        </base-button>
      </div>
    </stack-l>
  </center-l>
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
const selectedValue = ref(options[0]?.value);

</script>