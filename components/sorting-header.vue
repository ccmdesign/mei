<template>
  <div class="sorting-header">
    <span>{{ itemsCount }} items</span>
    <mei-select :options="typeOptions" 
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-model="modelValue"
    />
  </div>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  itemsCount: {
    type: Number,
    default: 0
  },
  typeOptions: {
    type: Array,
    default: [
      {
        label: 'Reports & Papers',
        value: 'reports-and-papers'
      },
      {
        label: 'Articles (media)',
        value: 'articles-media'
      },
      {
        label: 'Books',
        value: 'books'
      }
    ]
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const { sortByOptions, typeOptions, itemsCount } = toRefs(props)

defineEmits(['update:modelValue'])

</script>

<style lang="scss" scoped>
.sorting-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.sorting-header > * {
  color: var(--primary-color);
  font-weight: bold;
}
</style>
