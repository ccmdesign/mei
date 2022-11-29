<template>
  <div class="mei-opportunity-group" :class="{'mei-opportunity-group--gradient': gradient, 'mei-opportunity-group--pattern': pattern}">
    <!-- <center-l size="wide" class="grid">
      <div class="mei-opportunity-group__image" :class="ellipsisClass">
        <figure class="circle | frame">
          <img :src="content.imageUrl" :alt="content.imageLabel">
        </figure>
      </div>
      <div class="mei-opportunity-group__content">
        <h3 data-style="h2" class="color:primary">{{content.heading}}</h3>
        <div v-html="content.excerpt"></div>
        <stack-l> -->
          <!-- ToDo: Abstract this? --> 
          <stack-l v-for="j in content.groups" class="mei-opportunity | margin-top:s2" :key="j.heading">
            <h4 class="color:primary | mei-opportunity__title">{{j.heading}}</h4>
            <div class="color:primary" v-html="j.excerpt"></div>
            <stack-l class="mei-opportunity__list" v-for="link of j.links" :key="link.title">
              <li>{{link.title }}<base-button class="pill margin-left:auto" color="primary" icon-before="arrow_forward" :disabled="link.disabled" :href="link.url"></base-button></li>
              <hr>
            </stack-l>
          </stack-l>
        <!-- </stack-l>        
      </div>
    </center-l> -->
  </div>
</template>

<script setup>
// ToDo: Implement props
// Inverted
// content
// BG Decoration
//

import { toRefs } from 'vue'

const props = defineProps({
  content: {
    type: Object,
    default: {
      imageUrl: 'https://images.unsplash.com/photo-1546412414-8035e1776c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
      imageLabel: '',
      heading: 'Opportunities for Harvard Students',
      excerpt: 'The deadline to apply for the Spring 2023 Kuwait Visiting Research Fellowship has passed. Applications for this position are no longer being accepted at this time.',
      groups: [
        {
          heading: 'J-term course',
          excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod possimus repudiandae aliquid error. Illo id error saepe quis, mollitia in sapiente sit neque aspernatur porro vel, facilis enim pariatur.',
        },
        {
          heading: 'Other Student Opportunities',
          excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod possimus repudiandae aliquid error. Illo id error saepe quis, mollitia in sapiente sit neque aspernatur porro vel, facilis enim pariatur.',
        }
      ]
    }
  },
  ellipsisClass: {
    type: String,
    default: 'bottom-right'
  },
  gradient: {
    type: Boolean,
    default: false
  },
  pattern: {
    type: Boolean,
    default: false
  }
});

const { content } = toRefs(props)

</script>

<style lang="scss" scoped>

.mei-opportunity-group {
  padding-block: var(--s4);
  position: relative;
  * {
    z-index: 1;
  }
}

  .mei-opportunity-group[inverted] .mei-opportunity-group__content { order: -1; }

  .mei-opportunity-group--gradient {
    background: linear-gradient(180deg, var(--yellow-color-30) 0%, var(--primary-color-30) 350%);
  }

  .mei-opportunity-group--pattern {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: url('../assets/images/honey-comb.png');
      background-repeat: repeat-x;
      z-index: 0;
    }
  }

.circle {
  --d: 1;
  --n: 1;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}

.pill {
  border-radius: 16px; 
  color: var(--primary-color);
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

.grid {
  grid-gap: var(--s3); 
  align-items: flex-start;
}

.mei-opportunity-group__image {
  transform: translateX(-16rem) scale(110%);
  transform-origin: 0 0;
  position: relative;
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

.mei-opportunity-group__image.bottom-right {
  &::before {
    transform: translate(0.5rem, 1.5rem);
  }
}

.mei-opportunity-group__image.top-right {
  &::before {
    transform: translate(1rem, -1rem);
  }
}

.mei-opportunity-group__image.top-left {
  &::before {
    transform: translate(-1rem, -1rem);
  }
}

.mei-opportunity-group[inverted] .mei-opportunity-group__image {
  transform: translateX(16rem) scale(110%);
  transform-origin: 0 0;
}

.mei-opportunity__title {
  font-weight: 700;
}

.mei-opportunity__list li {
  display: flex;
  align-items: space-between;
  font-weight: bold;
}




</style>
