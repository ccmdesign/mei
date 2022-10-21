<template>
  <div class="mei-people-section"> <!-- I had to add this element here, to avoid a conflict with .mei-texture-bg -->
    <base-section size="m" color="transparent">
      <center-l size="wide">
        <stack-l space="var(--s3)">
          <h2 class="color:primary">Our People</h2>
          <tab-bar :options="peopleData.tabs" />
          <div class="grid">
            <person-card v-for="i in peopleData.list"
              class="compact-person-card"
              :heading="i.name"
              :tagline="i.title"
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

const peopleData = {
  tabs: [
    { label: 'Staff', value: 'staff', defaultOption: 'true'},
    { label: 'Faculty Affiliates', value: 'faculty-affiliates'},
    { label: 'Senior Fellows', value: 'senior-fellows'},
    { label: 'Fellows', value: 'fellows'}
  ],
  list: [
    {
    name: "People Data This is the name",
    title: "This is the title",
    bio: "This is the bio"
  },
  {
    name: "People Data This is the name",
    title: "This is the title",
    bio: "This is the bio"
  },
  {
    name: "People Data This is the name",
    title: "This is the title",
    bio: "This is the bio"
  },
  {
    name: "People Data This is the name",
    title: "This is the title",
    bio: "This is the bio"
  }
]
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


</style>
