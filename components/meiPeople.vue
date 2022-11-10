<template>
  <div class="mei-people-section" :compact="compact">
    <!-- I had to add this element here, to avoid a conflict with .mei-texture-bg -->
    <base-section size="m" color="transparent">
      <center-l size="wide">
        <stack-l space="var(--s3)">
          <tab-bar :options="tabs" />

          <section v-for="tab in tabs" :key="tab" :id="tab.value">
            <div class="grid">
              <mei-person-card v-for="i in peopleData[tab.value]" :data="i" :key="i.name" excerpt="false" />
            </div>
          </section>
        </stack-l>
      </center-l>
    </base-section>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { toRefs } from 'vue';

const props = defineProps({
  compact: {
    type: String,
    default: "false"
  }
});

const { compact } = toRefs(props);

const route = useRoute();

const tabs = [
  { label: 'Program Staff', value: 'staff', url: '#staff', defaultOption: 'true' },
  { label: 'Faculty', value: 'faculty', url: '#faculty' },
  { label: 'Senior Fellows', value: 'senior-fellows', url: '#senior-fellows' },
  { label: 'Fellows', value: 'fellows', url: '#fellows' },
  { label: 'Research Fellows', value: 'research-fellows', url: '#research-fellows' }
]

// FIXME: O campo belfer_role é um array. O "queryContent" não suporta consultas
// de valores dentro do array. Como garantir que a pesquisa vá retornar os valores esperados?
// Atualmente só considera os items com um único valor correspondendo ao papel(role) pesquisado.
// exemplo: lewis-m-branscomb.json
const _getPeople = async (role) => {
  const query = {'belfer_role': [role]};

  return await queryContent('person').where(query).find();
}

const peopleData = {
  staff: await _getPeople('Staff'),
  faculty: await _getPeople('Faculty'),
  'senior-fellows': await _getPeople('Senior Fellow'),
  fellows: await _getPeople('Fellow'),
  'research-fellows': await _getPeople('Research Fellow'), // FIXME: Qual o "role" aqui?
};
</script>

<style lang="scss" scoped>
.mei-people-section[compact="true"] .grid {
  --itemWidth: 180px;
  grid-gap: var(--s2);
}

.mei-people-section[compact="false"] .grid {
  --itemWidth: 320px;
  grid-gap: var(--s3);
}

.compact-person-card {
  background-color: transparent;
}
</style>
