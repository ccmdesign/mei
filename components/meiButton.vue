<template>
  <a :href="url" class="button" :title="label" :target="target == '' ? null : target">{{label}}</a>
</template>

<script setup>
import { toRefs } from 'vue'
const props = defineProps({
  url: {
    type: String,
    default: "#"
  },
  label: {
    type: String,
    default: "More"
  },
  color: {
    type: String,
    default: "white"
  },
  target: {
    type: String,
    default: ""
  },
});
const { url, label, target } = toRefs(props)
</script>

<style lang="scss" scoped>
.button {
  color: var(--white-color) !important; // FIXME
}
</style>