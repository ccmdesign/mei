<template>
  <div class="sorting-header">
    <span>{{ itemsCount }} items</span>
    <mei-select :options="typeOptions" />
    <div>
      Sort by
      <mei-select :options="sortByOptions" />
    </div>
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
  sortByOptions: {
    type: Array,
    default: [
      {
        label: 'Date',
        value: 'date'
      },
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
  }
})

const { sortByOptions, typeOptions, itemsCount } = toRefs(props)
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
