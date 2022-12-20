<template>
  <div @click="cardClick">
    <base-card
      class="mei-person-card"
      horizontal
      :url="data.url"
      hideAction
      :imageUrl="data.avatar.url"
    >
      <div class="mei-person-card__content">
        <div class="padding-left:s0 | padding-right:s0 | padding-top:s1 | padding-bottom:s0">
          <p v-for="title of data.official_titles" :key="title" class="margin-bottom:s-1 ">{{title}}</p>
        </div>

        <div style="display: flex;" class="margin-bottom:s-2">
          <hr class="divider"/>
          <base-button class="pill margin-left:s-2 margin-right:s-2" color="white" icon-before="arrow_forward" el="a" :href="data.url"></base-button>
        </div>
      </div>

      <template #image>
        <div class="mei-person-card__img">
          <div class="layer"></div>
          <div class="brown">
            <p class="mei-person-card__name">{{data.name}}</p>
            <p class="mei-person-card__roles">{{data.belfer_role.join('-')}}</p>
          </div>
          
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
    background-color: var(--primary-color);
    color: var(--white-color);

    --card-gap: 0;
    --card-padding: 0;

    --card-border: none;
    --card-hover-border: none;
    --card-hover-shadow: none;
    --switcher-threshold: 225px !important;
    --card-horizontal-image-max-width: 120px;
    --card-horizontal-image-ratio: 4;
    --card-horizontal-content-ratio: 3;
  }

  .mei-person-card[horizontal="true"] .mei-person-card__img {
    // object-fit: cover;
    flex-grow: var(--card-horizontal-image-ratio);
    max-width: var(--card-horizontal-image-max-width);
    flex-basis: calc((var(--card-horizontal-threshold) - 100%) * 999);
  }

  .mei-person-card__img {
    position: relative;

    & .brown {
      position: absolute;
      bottom: 0;
      margin: var(--s-1);
      text-align: left;
    }

    & .layer {
      width: 100%;
      height: 100%;
      position: absolute;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.76) 0%, rgba(157, 157, 157, 0) 100%);
    }
  }

  .mei-person-card__roles {
    font-family: var(--display-font);
    font-size: 6px; // FIXME: ?
    font-weight: bold;
    text-transform: uppercase;
  }

  .mei-person-card__name {
    font-family: var(--display-font);
    font-weight: bold;
  }

  .mei-person-card__content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    & p {
      font-size: 11px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    & .divider {
      border-color: var(--white-color);
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
