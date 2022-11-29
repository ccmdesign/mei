<template>
  <stack-l v-for="group in groups" class="mei-links-group | margin-top:s2" :key="group.title">
    <h4 class="color:primary | mei-links-group__title">{{group.title}}</h4>
    <div class="color:primary" v-html="group.excerpt"></div>
    <stack-l class="mei-links-group__list" v-for="link of group.links" :key="link.label">
      <li>
        {{link.label}}
        <base-button class="pill margin-left:auto" color="primary" icon-before="arrow_forward" :disabled="link.disabled" el="a" :href="link.url" target="_blank"></base-button>
      </li>
      <hr>
    </stack-l>
  </stack-l>
</template>

<script setup>
const props = defineProps({
  groups: {
    type: Array,
    default: {
      title: '',
      excerpt: '',
      links: [
        {
          label: '',
          url: '#',
        },
      ]
    }
  }
});

const { groups } = toRefs(props)
</script>

<style scoped lang="scss">
.pill {
  border-radius: 16px; 
  color: var(--primary-color);
}

.mei-links-group__title {
  font-weight: 700;
}

.mei-links-group__list li {
  display: flex;
  align-items: space-between;
  font-weight: bold;
}

</style>