<template>
  <div class="mei-about-highlight | mei-texture-bg">
    <base-section color="transparent">
      <center-l size="wide">
        <div class="grid">
          <div class="mei-about-highlight__image | bottom-right">
            <figure class="circle | frame">
              <img src="https://images.unsplash.com/photo-1546412414-8035e1776c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="">
            </figure>
          </div>
          <div class="mei-about-highlight__content">
              <h3 data-style="h2" class="color:primary">What is MEI</h3>
              <p>The Middle East Initiative (MEI) is dedicated to advancing public policy in the Middle East by convening the world's foremost academics and policy experts, developing the next generation of leaders, and promoting community engagement on campus and in the region. Tarek Masoud, Ford Foundation Professor of Democracy and Governance at Harvard Kennedy School, is MEI's Faculty Director.</p>
              <div>
                <base-button color="primary" visual="primary" el="a" href="/about">More</base-button>
              </div>
          </div>
        </div>
      </center-l>
    </base-section>
  </div>
</template>

<style lang="scss" scoped>
.circle {
  --d: 1;
  --n: 1;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}

// ToDo: Implement this decoration line
// .circle:after {
//   border-radius: 50%;
//   width: 100%;
//   height: 100%;
//   content: "";
//   border: 2px solid var(--primary-color);
//   position: absolute;
//   transform: translate(1rem, 1rem);
// }

.grid { grid-gap: var(--s3); }

.mei-about-highlight__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mei-about-highlight__image {
  position: relative;
  width: calc(100% - (var(--s3) * 2));
  margin: 0 auto;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid var(--primary-color);
    border-radius: 50%;
  }
}

.mei-about-highlight__image.bottom-right {
  &::before {
    transform: translate(0.5rem, 1.5rem);
  }
}

.mei-about-highlight__image.top-right {
  &::before {
    transform: translate(1rem, -1rem);
  }
}

.mei-about-highlight__image.top-left {
  &::before {
    transform: translate(-1rem, -1rem);
  }
}
</style>
