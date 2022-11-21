<template>
  <div class="mei-people-section"> <!-- I had to add this element here, to avoid a conflict with .mei-texture-bg -->
    <base-section size="m" color="transparent">
      <center-l size="wide">
        <stack-l space="var(--s3)">
          <h2 class="color:primary">Our People</h2>

          <tab-bar :options="tabOptions" @tab-click="selectTab" />

          <div v-for="tab in tabOptions" :key="tab.value" class="grid" :class="{'hidden': tab.value !== tabSelected}">
            <person-card v-for="i in peopleData[tab.value]"
            class="compact-person-card"
            :key="i.name"
            :heading="i.name"
            :tagline="i.official_titles.join(',')" 
            :imageUrl="i.avatar.url"
            excerpt=""
            >
              <template #action>
                <!-- ToDo: update with new baseButton -->
                <a href="/" class="button" color="primary" visual="primary">View Profile</a>
              </template>
            </person-card>
          </div>
          <div class="text-align:center margin-top:s3" >
            <!-- ToDo: update with new baseButton -->
            <a href="/people/" class="button" data-color="primary" data-visual="primary">View All</a>
          </div>
        </stack-l>
      </center-l>
    </base-section>
  </div>
</template>

<script setup>
// FIXME: Get Highlighted people.
const _getPeople = async (role) => {
  const query = {'belfer_role': [role]};
  
  // FIXME: Limitar a quantidade de highlighted para 4.
  return await queryContent('person').where(query).limit(4).find();
}
const tabSelected = ref('staff');

const tabOptions = [
  { label: 'Staff', value: 'staff', defaultOption: 'true'},
  { label: 'Faculty', value: 'faculty'},
  { label: 'Senior Fellows', value: 'senior-fellows'},
  { label: 'Fellows', value: 'fellows'},
  { label: 'Research Fellows', value: 'research-fellows'}
];

const peopleData = {
  staff: await _getPeople('Staff'),
  faculty: await _getPeople('Faculty'),
  'senior-fellows': await _getPeople('Senior Fellow'),
  fellows: await _getPeople('Fellow'),
  'research-fellows': await _getPeople('Research Fellow'), // FIXME: Qual o "role" aqui?
};

const selectTab = (tab) => {
  tabSelected.value = tab;
}
</script>

<style lang="scss" scoped>
.mei-people-section .grid {
  --itemWidth: 180px; 
  grid-gap: var(--s2);
}

.compact-person-card { 
  background-color: transparent; 
  --card-vertical-space: var(--s1);
}

.compact-person-card :deep(h2) { 
  color: var(--primary-color); 
  font-size: 1.15em;
}
.compact-person-card :deep(h4) { --space: var(--s-2); }

.hidden {
  display: none;
}
</style>
