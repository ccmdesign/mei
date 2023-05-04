<template>
  <div @click="cardClick">
    <base-card
      class="mei-person-card"
      horizontal
      hideAction
      :imageUrl="data.avatar.url"
      :fullClick="false"
    >
    <div class="mei-person-card__content">
        <div class="padding-left:s0 | padding-right:s0 | padding-top:s0">
          <p class="mei-person-card__name">{{data.name}}</p>
          <p class="mei-person-card__roles">{{data.belfer_role.join('-')}}</p>
          <p class="mei-person-card__title" :title="data.official_titles[0]">{{data.official_titles[0]}}</p>
          <p class="mei-person-card__title" :title="data.official_titles[1]">{{data.official_titles[1]}}</p>
          <p class="mei-person-card__title" :title="data.official_titles[2]">{{data.official_titles[2]}}</p>
        </div>

        <div class="mei-person-card__decoration | margin-bottom:s-2">
          <hr class="divider"/>
          <a class="button pill margin-left:s-2 margin-right:s-2 align-self:center" data-color="primary" icon-before="email" :href="`mailto:${data.email}`" @click.stop></a>
          <a class="button pill margin-left:s-2 margin-right:s-2 align-self:center" data-color="primary" icon-before="arrow_forward" :href="data.url" target="_blank"></a>
        </div>
      </div>
      <template #image>
        <div class="mei-person-card__img">
          <img :src="data.avatar.url" :alt="(data.avatar.alt || data.avatar.title || data.name)">
        </div>
      </template>
    </base-card>
  </div>
</template>

<script setup>
  import { toRefs } from "vue";

  const props = defineProps({
    data: {
      type: Object,
      default: {
        name: "Person Name",
        url: "/person-name",
        email: "example@email.com",
        job: "Job Title",
      },
    },
  });

  const { data } = toRefs(props);

  const cardClick = () => {
    location.href = data.value.url;
  }
</script>

<style lang="scss" scoped>
  .mei-person-card {
    background-color: var(--white-color);
    color: var(--base-color);

    --card-gap: 0;
    --card-padding: 0;

    --card-border: 1px solid hsla(var(--base-hsl), .2);
    --card-hover-border: 1px solid hsla(var(--base-hsl), .2);
    --card-hover-shadow: none;
    --switcher-threshold: 225px !important;
    --card-horizontal-image-max-width: 160px;
    --card-horizontal-image-ratio: 4;
    --card-horizontal-content-ratio: 3;
  }

  .mei-person-card[horizontal="true"] {
    @media screen and (max-width: 35em) {
      flex-direction: column;
    }
  }

  .mei-person-card :deep(.base-card__content) {
    @media screen and (max-width: 35em) {
      width: 100%;
    }
  }

  .mei-person-card[horizontal="true"] .mei-person-card__img {
    // object-fit: cover;
    flex-grow: var(--card-horizontal-image-ratio);
    max-width: var(--card-horizontal-image-max-width);
    flex-basis: calc((var(--card-horizontal-threshold) - 100%) * 999);
  }

  .mei-person-card__img {
    position: relative;

    & img {
      aspect-ratio: 1/1;
      overflow: hidden;
      object-fit: cover;
      flex-basis: 180px;
    }

    & .brown {
      position: absolute;
      bottom: 0;
      margin: var(--s-1);
      text-align: left;
    }
  }

  .mei-person-card__roles {
    font-family: var(--display-font);
    font-weight: bold;
    text-transform: uppercase;    
  }

  .mei-person-card__decoration {
    display: flex;
    align-items: center;
  }

  .mei-person-card__title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 45ch;
  }

  .mei-person-card__name {
    font-family: var(--display-font);
    font-weight: bold;
    color: var(--primary-color);
    font-size: 1rem;
  }

  .mei-person-card__content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    font-size: .75rem;
    & .divider {
      border-color: var(--primary-color);
      border-width: 1px;
    }
    & .pill {
      border-radius: 50%;
      border-width: 1px;
    }

    & .pill:before {
      font-size: 0.85rem;
      padding: var(--s-5);
    }
  }
</style>
