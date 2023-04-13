<!-- This is a DS Candidate -->

<template>
  <section class="tab-bar" :id="id" :sticky="sticky">
    <label :for="i.value" v-for="i,pos in options" :key="i.value" class="tab-bar__item">
      <input :id="i.value" type="radio" :name="id" :value="i.value" @click="$emit('tabClick', i.value)" :checked="!sticky && pos == 0">
      <a v-if="sticky" class="tab-bar__button button" data-visual="unstyled" data-color="primary" :data-value="i.value" @click="() => scroll(i.value)">{{i.label}}</a>
      <span v-else class="tab-bar__button button" data-visual="unstyled" data-color="primary" >{{i.label}}</span>
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
      { label: 'Label Example', value: 'value-example-1', defaultOption: 'true' },
      { label: 'Label Example', value: 'value-example-2' },
      { label: 'Label Example', value: 'value-example-3' }
    ]
  },
  sticky: {
    type: Boolean,
    default: false
  }
});

const { options, sticky } = toRefs(props);

defineEmits(['tabClick']);

const scroll = (id) => {
  if (process.env.NODE_ENV === 'development') {
    const element = document.getElementById(id.slice(1));
    const rect = element.getBoundingClientRect();

    window.scrollBy(0, rect.top);
  }
}
</script>

<style lang="scss" scoped>
.tab-bar {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid hsla(var(--base-hsl), .2);
  flex-wrap: wrap;
}

.tab-bar[sticky="true"] {
  position: sticky;
  top: 0;
  background-color: hsla(var(--white-hsl), 0.8);
  z-index: 120;
}

.tab-bar__button {
  --button-border-radius: 0;
  --button-padding-inline: var(--s1);
  --button-font-weight: 400;
}

.tab-bar__item input[type="radio"] {
  display: none;
}

input:checked+.tab-bar__button {
  --button-font-weight: 700;
  position: relative;
}

input:checked+.tab-bar__button:after {
  content: "";
  width: calc(100% + 4px);
  height: 3px;
  background-color: currentColor;
  position: absolute;
  left: -2px;
  bottom: -4px;
}
</style>
