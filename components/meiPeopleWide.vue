<template>
  <div>
    <person-card
      class="mei-people-wide | mei-texture-bg"
      horizontal
      highlight
      :shadow="false"
      actionLabel="More"
      :fullClick="false"
      :heading="data.name"
      :tagline="data.belfer_role"
      :excerpt="data.biography"
    >
      <template #headings>
        <h2 class="base-card__title">
          <a :href="data.url" target="_blank" class="base-card__title-link">
            {{ data.name }}
          </a>
        </h2>
        <!-- FIXME: Colocar ícone para o email. -->
        <a :href="`mailto:${data.email}`">{{data.email}}</a>

        <h4 class="base-card__tagline">{{ data.belfer_role }}</h4>

        <p>Biography</p>
      </template>

      <template #action>
        <!-- FIXME: Essa template não está sendo renderizada. -->
        <base-button
          el="a"
          :href="data.url"
          color="primary"
          visual="primary"
          >
          More
          </base-button
        >
      </template>
    </person-card>
  </div>
</template>

<script setup>
  // import { toRefs } from 'vue';

  /*--- Highlight. ----*/
  // FIXME: Pegar somente uma (ou a mais recente) pessoa em destaque.

  const data = await queryContent("person")
    .where({ belfer_role: ["Staff"] })
    .findOne();

  // FIXME: O campo de email está vindo em maiúsculo. Tratar na obtenção dos dados.
  // FIXME: O campo de biografia vem como HTML. Tratar!
  // FIXME: Trazer a foto.

  // FIXME: A "tagline" no exemplo aparece como "Faculty Director". Esse não é um papel no
  // campo "belfer_role". De onde ele vem?
  // Corrigir o tagline para o valor correto.

  // const props = defineProps({
  //   data: {
  //     type: Object,
  //     default: {
  //       name: "Tarek Masoud",
  //       tagline: "Faculty Director", // FIXME: Ver acima!
  //       biography: "Tarek Masoud is the Ford Foundation Professor of Democracy and Governance at Harvard University's John F. Kennedy School of Government. He is the co-Editor of the Journal of Democracy of the National Endowment for Democracy and serves as the Faculty Director of the Kennedy School's Middle East Initiative ...",
  //       url: '',
  //       email: 'example@email.com',
  //     }
  //   }
  // });

  // const { data } = toRefs(props);
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
    padding: var(
      --card-image-padding
    ); // ToDo: Include this config in the person card?
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
