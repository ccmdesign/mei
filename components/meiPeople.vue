<template>
  <div class="mei-people-section" :compact="compact">
    <!-- I had to add this element here, to avoid a conflict with .mei-texture-bg -->
    <stack-l space="var(--s3)">
      <tab-bar id="people-tabs" :options="tabs" @tab-click="selectTab" />

      <section v-for="tab in tabs" :key="tab" :id="tab.value" :class="{'hidden': tab.value !== tabSelected}">
        <div class="grid">
          <mei-person-card v-for="i in peopleData[tab.value]" :data="i" :key="i.name" excerpt="false" />
        </div>
      </section>
    </stack-l>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  compact: {
    type: Boolean,
    default: false
  }
});

const { compact } = toRefs(props);

const tabs = [
  { label: 'Leadership & Staff', value: 'staff', url: '/people#staff' },
  { label: 'Faculty', value: 'faculty', url: '/people#faculty' },
  { label: 'Senior Fellows', value: 'senior-fellows', url: '/people#senior-fellows' },
  { label: 'Fellows', value: 'fellows', url: '/people#fellows' },
  { label: 'Research Fellows', value: 'research-fellows', url: '/people#research-fellows' }
]

// FIXME: O campo belfer_role é um array. O "queryContent" não suporta consultas
// de valores dentro do array. Como garantir que a pesquisa vá retornar os valores esperados?
// Atualmente só considera os items com um único valor correspondendo ao papel(role) pesquisado.
// exemplo: lewis-m-branscomb.json
const _getPeople = async (role) => {
  const query = {'category': role};

  return await queryContent('person').where(query).find();
}

const peopleData = {
  'staff': await _getPeople('Staff'),
  'faculty': await _getPeople('Faculty'),
  'senior-fellows': await _getPeople('Senior Fellow'),
  'fellows': await _getPeople('Fellow'),
  'research-fellows': await _getPeople('Research Fellow'), // FIXME: Qual o "role" aqui?
};

const tabSelected = ref('staff');
const selectTab = (tab) => {
  tabSelected.value = tab;
}
</script>

<style lang="scss" scoped>
.mei-people-section[compact="true"] .grid {
  --itemWidth: 180px;
  grid-gap: var(--s2);
}

.mei-people-section[compact="false"] .grid {
  --itemWidth: 385px;
  grid-gap: var(--s1);
}

.compact-person-card {
  background-color: transparent;
}

.hidden {
  display: none;
}
</style>
