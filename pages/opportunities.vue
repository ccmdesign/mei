<template>
  <article>
    <mei-hero
      background="../assets/images/opportunities-hero.jpg"
      title="Opportunities"
      description="The Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
      nesciunt nostrum deleniti reprehenderit delectus facere quibusdam
      aliquam temporibus numquam, dolore error hic dolorem iste nobis
      voluptates tenetur et consectetur omnis."
    />
    
    <base-section color="transparent">
      <stack-l>
        <tab-bar :options="tabs" />
        <mei-opportunity-group id="students" :content="opportunities[0]" ellipsisClass="bottom-right"/>
        <mei-opportunity-group id="faculty" :content="opportunities[1]" ellipsisClass="top-left" inverted :gradient="true" :pattern="true" />
        <mei-opportunity-group id="outside-scholars" :content="opportunities[2]" ellipsisClass="top-right"/>
      </stack-l>0
    </base-section>
    
  </article>
</template>

<script setup>
import tabBar from '@/components/tabBar.vue';
const tabs = [
  { label: 'Students', value: '#students', url: '#students'},
  { label: 'Faculty', value: '#faculty', url: '#faculty'},
  { label: 'Outside Scholars', value: '#outside-scholars', url: '#outside-scholars'}
]

const opportunities = [
  {
    imageUrl: '../assets/images/opportunities1.jpg',
    imageLabel: 'Opportunities for Harvard Students',
    heading: 'Opportunities for Harvard Students',
    excerpt: 'The deadline to apply for the Spring 2023 Kuwait Visiting Research Fellowship has passed. Applications for this position are no longer being accepted at this time.',
    groups: [
      {
        heading: 'J-term course',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod possimus repudiandae aliquid error. Illo id error saepe quis, mollitia in sapiente sit neque aspernatur porro vel, facilis enim pariatur.',
        links: [
          {
            title: 'Current Syllabus',
            url: '#'
          },
          {
            title: 'Photos from past course',
            url: '#'
          },
        ]
      },
      {
        heading: 'Other Student Opportunities',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod possimus repudiandae aliquid error. Illo id error saepe quis, mollitia in sapiente sit neque aspernatur porro vel, facilis enim pariatur.',
        links: [
          {
            title: 'Current Syllabus',
            url: '#'
          },
          {
            title: 'Photos from past course',
            url: '#'
          },
        ]
      }
    ]
  },
  {
    imageUrl: '../assets/images/opportunities2.jpg',
    imageLabel: 'Research Grants for Harvard Faculty',
    heading: 'Research Grants for Harvard Faculty',
    excerpt: 'The deadline to apply for the Spring 2023 Kuwait Visiting Research Fellowship has passed. Applications for this position are no longer being accepted at this time. ',
    groups: [
      {
        heading: 'Emirates Leadership Initiative Research Fellowship',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod possimus repudiandae aliquid error. Illo id error saepe quis, mollitia in sapiente sit neque aspernatur porro vel, facilis enim pariatur.',
        links: [
          {
            title: 'Current Grants',
            url: '#'
          },
          {
            title: 'How to apply',
            url: '#'
          },
        ]
      },
      {
        heading: 'Kuwait Grants',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod possimus repudiandae aliquid error. Illo id error saepe quis, mollitia in sapiente sit neque aspernatur porro vel, facilis enim pariatur.',
        links: [
          {
            title: 'Current Grants',
            url: '#'
          },
          {
            title: 'How to apply',
            url: '#'
          },
        ]
      }
    ]
  },
  {
    imageUrl: '../assets/images/opportunities3.jpg',
    imageLabel: 'Opportunities for Scholars',
    heading: 'Opportunities for Scholars',
    excerpt: 'The deadline to apply for the Spring 2023 Kuwait Visiting Research Fellowship has passed. Applications for this position are no longer being accepted at this time. ',
    groups: [
      {
        heading: 'Emirates Leadership Initiative Research Fellowship',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod possimus repudiandae aliquid error. Illo id error saepe quis, mollitia in sapiente sit neque aspernatur porro vel, facilis enim pariatur.',
        links: [
          {
            title: 'Current Grants',
            url: '#'
          },
          {
            title: 'How to apply',
            url: '#'
          },
        ]
      },
      {
        heading: 'Kuwait Grants',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod possimus repudiandae aliquid error. Illo id error saepe quis, mollitia in sapiente sit neque aspernatur porro vel, facilis enim pariatur.',
        links: [
          {
            title: 'Current Grants',
            url: '#'
          },
          {
            title: 'How to apply',
            url: '#'
          },
        ]
      }
    ]
  },
]
</script>

<style lang="scss" scoped>

</style>
