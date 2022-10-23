<template>
  <div class="mei-opportunity-group grid">
    <div class="mei-opportunity-group__image">
      <figure class="circle | frame">
        <img :src="content.imageUrl" :alt="content.imageLabel">
      </figure>
    </div>
    <div class="mei-opportunity-group__content">
      <h3 data-style="h2" class="color:primary">{{content.heading}}</h3>
      <p>{{content.excerpt}}</p>
      <stack-l>
        <!-- ToDo: Abstract this? -->
        <stack-l v-for="j in content.groups" class="mei-opportunity | margin-top:s2">
          <h4 class="color:primary">{{j.heading}}</h4>
          <p>{{j.excerpt}}</p>
          <stack-l class="mei-opportunity__list">
            <li>Current Syllabus <base-button class="pill margin-left:auto" color="primary" icon-before="arrow_forward"></base-button></li>
            <hr>
            <li>Photos from past course <base-button class="pill margin-left:auto" color="primary" icon-before="arrow_forward"></base-button></li>
          </stack-l>
        </stack-l>
      </stack-l>        
    </div>
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
  }
});

const { content } = toRefs(props)

</script>

<style lang="scss" scoped>

.mei-opportunity-group[inverted] .mei-opportunity-group__content { order: -1; }

.circle {
  --d: 1;
  --n: 1;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}

.pill { border-radius: 16px; }

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
.mei-opportunity-group__image > .circle {
  transform: translateX(-16rem) scale(110%);
  transform-origin: 0 0;
}
.mei-opportunity-group[inverted] .mei-opportunity-group__image > .circle {
  transform: translateX(16rem) scale(110%);
  transform-origin: 0 0;
}

.mei-opportunity__list li {
  display: flex;
  align-items: space-between;
  font-weight: bold;
}




</style>
