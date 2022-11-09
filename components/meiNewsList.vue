<template>
  <stack-l space="var(--s2)">

    <div class="flex">
      <h4 class="base-color-change">{{count}} itens</h4>
      <mei-select />
      <mei-select />
    </div>

    <hr />
    <mei-card-wide />
    <hr />
    <mei-card-wide />
    <hr />
    <mei-card-wide />
    <hr />
  </stack-l>
</template>

<script setup>
const props = defineProps({
  count: {
    default: 0,
    type: String
  }
});
</script>