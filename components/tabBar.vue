<!-- This is a DS Candidate -->

<template>
  <section class="tab-bar">
    <slot>
      <base-button v-for="i in options" visual="secondary" color="base" :value="i.value">{{i.label}}</base-button>
    </slot>
  </section>
</template>

<script setup>
import { toRefs } from 'vue'

// ToDo: Implement tab selection method


const props = defineProps({
  options: {
    type: Array,
    default: [
      { label: 'Label Example', value: 'Value Example'},
      { label: 'Label Example', value: 'Value Example'}
    ]
  },
});
const { options } = toRefs(props)
</script>

<style lang="scss" scoped>
.tab-bar > *:first-of-type  { border-radius: var(--button-border-radius) 0 0 var(--button-border-radius); }

.tab-bar > * + *  { 
  border-radius: 0; 
  margin-left: -2px;
}
.tab-bar > *:last-of-type  { border-radius: 0 var(--button-border-radius) var(--button-border-radius) 0; }
</style>
