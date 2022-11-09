<template>
  <div>
    <base-card
      class="mei-card"
      hideAction=true
    >
      <template #headings>
        <stack-l>
          <h3 class="base-color-change">
            Vision or Mirage: Saudi Arabia at the Crossroads
          </h3>
          <div class="mei-card-tagline">
            <h6>Tue., Apr. 19, 2022 | Duration: 1h30</h6>
          </div>
        </stack-l>
      </template>
    </base-card>
  </div>
</template>

<style lang="scss" scoped>
  .mei-card {
    --card-bg-hsl: transparent;
    --card-hover-border: none;
    --card-border: none;
    --card-hover-shadow: none;
  }

  .mei-card-tagline {
    --display-font: var(--body-font);
    --font-weight: 400;

    display: flex;
    flex-direction: row;
    align-items: center;

    h6 {
      color: inherit;
    }
  }
</style>
