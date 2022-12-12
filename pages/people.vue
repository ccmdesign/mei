<template>
  <article>
    <mei-hero
      background="../assets/images/people-hero.png"
      title="People"
      description="The Middle East Initiative at Harvard Kennedy School is dedicated to advancing public policy in the Middle East by convening the world's foremost academics and policy experts, developing the next generation of leaders, and promoting community engagement on campus and in the region."
    />

    <base-section size="s" class="margin-top:s3" v-if="!!person">
      <center-l size="wide">
        <mei-people-wide 
        :url="person.url"
        :role="(data.display_titles[0] || data.category)"
        :email="person.email"
        :name="person.name"
        :biography="person.biography"
        :imageUrl="person.avatar.url"
        />
      </center-l>
    </base-section>

    <base-section>
      <center-l size="wide">
        <mei-people compact />
      </center-l>
    </base-section>
  </article>
</template>

<script setup>
const data = await queryContent('highlight')
  .where({content_type: 'person'})
  .find();

let person = undefined;

const _sort = (a, b) => {
  if (a.changed < b.changed) return -1;
  if (a.changed > b.changed) return 1;

  return 0
};

// Get the most recently changed person set as highlight.
if (data.length > 0) {
  person = reactive(data.sort(_sort)[0]);
}
</script>