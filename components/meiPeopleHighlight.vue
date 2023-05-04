<template>
  <div v-if="hasPeopleHighlighted" class="mei-people-section" > <!-- I had to add this element here, to avoid a conflict with .mei-texture-bg -->
    <base-section size="m" color="transparent" class="mei-people-highlight">
      <center-l size="wide">
        <stack-l space="var(--s3)">
          <h2 class="color:primary">Our People</h2>

          <tab-bar :options="tabOptions" @tab-click="selectTab" />
          
          <div v-for="tab in tabOptions" :key="tab.value" class="grid" :class="{'hidden': tab.value !== tabSelected}">
            <person-card v-for="i in peopleData[tab.value].slice(0,4)"
            class="compact-person-card"
            :key="i.name"
            :heading="i.name"
            :tagline="i.official_titles.join(',')" 
            :imageUrl="i.avatar.url"
            :url="i.url"
            excerpt=""
            >
              <template #action>
                <!-- ToDo: update with new baseButton -->
                <a :href=i.url class="button center" color="primary" visual="primary">View Profile</a>
              </template>
            </person-card>
          </div>
          <div class="text-align:center margin-top:s3" >
            <base-button color="primary" visual="primary" el="a" href="https://mei-hksbelfer.pantheonsite.io/mei/people" target="_top">View All</base-button>
          </div>
        </stack-l>
      </center-l>
    </base-section>
  </div>
</template>

<script setup>
const _getPeople = async (role) => {
  const query = {'content_type': 'person', 'category': role};
  const data = await queryContent('highlight').where(query).find();

  for (const item of data) {
    if (item.changed) {
      item.changed = new Date(item.changed);
    }
  }
  return reactive(data.sort((a, b) => {
    if (a.changed < b.changed) return -1;
    if (a.changed > b.changed) return 1;

    return 0
  }));
}

const staff = await _getPeople('Staff')
const faculty =  await _getPeople('Faculty')
const seniorFellows = await _getPeople('Senior Fellow')
const fellows = await _getPeople('Fellow')
const researchFellows = await _getPeople('Research Fellow')

const peopleData = {
  staff,
  faculty,
  fellows,
  'senior-fellows': seniorFellows,
  'research-fellows': researchFellows,
};

const tabOptions = [];
let firstOption = '';
let hasPeopleHighlighted = false;

if (peopleData.staff.length > 0) {
  tabOptions.push({label: 'Staff', value: 'staff'});
  firstOption = 'staff';
  hasPeopleHighlighted = true;
}
if (peopleData.faculty.length > 0) {
  tabOptions.push({label: 'Faculty', value: 'faculty'});
  if (firstOption === '') firstOption = 'faculty';
  hasPeopleHighlighted = true;
}
if (peopleData['senior-fellows'].length > 0) {
  tabOptions.push({label: 'Senior Fellows', value: 'senior-fellows'});
  if (firstOption === '') firstOption = 'senior-fellows';
  hasPeopleHighlighted = true;
}
if (peopleData.fellows.length > 0) {
  tabOptions.push({label: 'Fellows', value: 'fellows'});
  if (firstOption === '') firstOption = 'fellows';
  hasPeopleHighlighted = true;
}
if (peopleData['research-fellows'].length > 0) {
  tabOptions.push({label: 'Research Fellows', value: 'research-fellows'});
  if (firstOption === '') firstOption = 'research-fellows';
  hasPeopleHighlighted = true;
}

const tabSelected = ref(firstOption);
const selectTab = (tab) => {
  tabSelected.value = tab;
}
</script>

<style lang="scss" scoped>
.mei-people-highlight {
  --base-section-padding: var(--s2);
}

.mei-people-section .grid {
  --itemWidth: 180px; 
  grid-gap: var(--s2);
}

.compact-person-card { 
  background-color: transparent; 
  --card-vertical-space: var(--s1);
}

.compact-person-card :deep(h2) { 
  color: var(--base-hsl); 
  font-size: 1.375em;
}
.compact-person-card :deep(h4) { --space: var(--s-2); }

.compact-person-card :deep(.base-card__content) {
  max-width: 100%;
}

.hidden {
  display: none;
}
</style>
