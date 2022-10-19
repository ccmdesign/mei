<template>
  <div>
    <person-card
      class="mei-people-wide | mei-texture-bg"
      horizontal
      highlight
      :shadow="false"
      actionLabel="More"
      :fullClick="false"
      heading="Tarek Masoud"
      tagline="Faculty Director"
      excerpt="Tarek Masoud is the Ford Foundation Professor of Democracy and Governance at Harvard University's John F. Kennedy School of Government. He is the co-Editor of the Journal of Democracy of the National Endowment for Democracy and serves as the Faculty Director of the Kennedy School's Middle East Initiative ..."
    >

    <template #action>
      <a class="button" color="primary" visual="primary">More</a>
    </template>

    </person-card>
  </div>
</template>

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
  
</style>
