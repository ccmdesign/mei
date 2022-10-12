<template>
  <div>
    <base-card
      class="mei-card-wide"
      horizontal
      :shadow="false"
      actionLabel="More"
      :fullClick="false"
    >
      <template #headings>
        <stack-l>
          <h3 class="base-color-change">
            Arab Constitutionalism: The Coming Revolution
          </h3>
          <div class="mei-card-wide-tagline">
            <h6>Tue., Apr. 19, 2022 | 1:30pm - 2:45pm</h6>
            <h6 class="mei-card-wide-tag">Online</h6>
          </div>
        </stack-l>
      </template>

      <template #action>
        <div>
          <mei-button  data-color="primary" data-style="primary">More 1</mei-button>
        </div>
      </template>
    </base-card>
  </div>
</template>

<style lang="scss" scoped>
  .mei-card-wide {
    // --card-horizontal-threshold: 500px;
    --card-hover-border: none;
    --card-border: none;
    --card-hover-shadow: none;
  }

  .mei-card-wide-tagline {
    --display-font: var(--body-font);
    --font-weight: 400;

    display: flex;
    flex-direction: row;
    align-items: center;

    & * + * {
      margin-left: var(--s0);
    }
  }

  .mei-card-wide-tag {
    border-radius: 4px;
    background-color: grey; // FIXME: Use theme color.
    color: var(--white-color);
    padding: var(--s-1);
  }
</style>
