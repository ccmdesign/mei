<template>
  <div>
    <person-card class="mei-people-wide | mei-texture-bg" horizontal clamp=5 :shadow="false" actionLabel="More"
      :fullClick="false" :heading="name" :htmlExcerpt="biography" :imageUrl="imageUrl">
      <template #headings>
        <h2 class="mei-people-wide__title">
          <a class="color-primary" :href="url" target="_blank">
            {{ name }}
          </a>
          <a class="mei-people-wide__title-email icon" :href="`mailto:${email}`">email</a>
        </h2>

        <h4 class="mei-people-wide__tagline">{{ role }}</h4>

        <p>Biography</p>
      </template>

      <template #action>
        <base-button el="a" color="primary" visual="primary" :href="url">
          More
        </base-button>
      </template>
    </person-card>
  </div>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
    default: ''
  },
  role: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  biography: {
    type: String,
    default: ''
  },
  imageUrl: {
    type: String,
    default: ''
  }
});

const { url, role, email, name, biography, imageUrl } = toRefs(props);
</script>


<style lang="scss" scoped>
.mei-people-wide {
  --card-padding: var(--s2);
  --card-image-padding: var(--s2);
  --card-hover-border: none;
  --card-border: none;
  --card-border-radius: none;
  --card-hover-shadow: none;
  --card-gap: var(--s2);
  --card-vertical-space: var(--s0);
  --card-headings-alignment: left;
  --card-action-hsl: var(--primary-hsl);
}

.mei-people-wide :deep(.circle) {
  padding: var(--card-image-padding); // ToDo: Include this config in the person card?
  margin-left: var(--s2);
  width: 320px;
  height: 320px;
}

.mei-people-wide :deep(h2) {
  color: var(--primary-color);
  font-size: 1.75em;
}

.mei-people-wide :deep(h4) {
  font-size: 1.25em;
  font-weight: bold;
}

.mei-people-wide__title :deep(a) {
  text-decoration: none;
}

.mei-people-wide__title-email {
  margin-left: var(--s0);
  vertical-align: middle;
}
</style>
