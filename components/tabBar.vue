<!-- This is a DS Candidate -->

<template>
  <section class="tab-bar" :id="id">
    <label :for="i.value" v-for="i in options" class="tab-bar__item">
      <input :id="i.value" type="radio" :name="id" :value="i.value" :checked="i.defaultOption">
      <a v-if="i.url" :href="i.url" class="tab-bar__button button" data-visual="unstyled" data-color="primary">{{i.label}}</a>
      <span v-else class="tab-bar__button button" data-visual="unstyled" data-color="primary">{{i.label}}</span>
    </label>
    
  </section>
</template>

<script setup>
import { toRefs } from 'vue'
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();

const props = defineProps({
  options: {
    type: Array,
    default: [
      { label: 'Label Example', value: 'value-example-1', defaultOption: 'true'},
      { label: 'Label Example', value: 'value-example-2'},
      { label: 'Label Example', value: 'value-example-3'}
    ]
  },
});

const { options } = toRefs(props)
</script>

<style lang="scss" scoped>

.tab-bar {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid hsla(var(--base-hsl), .2);
}

.tab-bar__button { 
  --button-border-radius: 0;
  --button-padding-inline: var(--s1);   
  --button-font-weight: 400;
}

.tab-bar__item input[type="radio"] {
  display: none;
}

input:checked + .tab-bar__button  { 
  --button-font-weight: 700;
  position: relative;
}

input:checked + .tab-bar__button:after  {
  content: "";
  width: calc(100% + 4px);
  height: 3px;
  background-color: currentColor;
  position: absolute;
  left: -2px;
  bottom: -4px;
}
</style>
