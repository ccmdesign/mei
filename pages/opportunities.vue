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
        <tab-bar :options="tabs" scroll />
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
    excerpt: 'Learn more about the various degrees offered through HKS and how to apply from the <a href="https://www.hks.harvard.edu/admissions-aid/masters-program-admissions" target="_blank">Office of Admissions</a>.<br/>There are ample fellowship opportunities for prospective students from the Middle East.',
    groups: [
      {
        heading: 'J-term course',
        excerpt: 'Classroom-in-the-Field <strong>Leadership and Social Transformation in the Arab World</strong>',
        links: [
          {
            title: 'Current Syllabus',
            url: '#',// Disabled button
            disabled: true,
          },
          {
            title: 'Photos from past course',
            url: '#',
            disabled: true
          },
        ]
      },
      {
        heading: 'Other Student Opportunities',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod possimus repudiandae aliquid error. Illo id error saepe quis, mollitia in sapiente sit neque aspernatur porro vel, facilis enim pariatur.',
        links: [
          {
            title: 'More Information',
            url: '#',
            disabled: true
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
            title: 'More Information',
            url: '#',
            disabled: true
          },
          {
            title: 'Faculty Research Grants',
            url: '#',
            disabled: true
          },
        ]
      },
      {
        heading: 'Kuwait Grants',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod possimus repudiandae aliquid error. Illo id error saepe quis, mollitia in sapiente sit neque aspernatur porro vel, facilis enim pariatur.',
        links: [
          {
            title: 'Faculty Research Grants',
            url: '#',
            disabled: true
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
      // {
      //   heading: 'Emirates Leadership Initiative Research Fellowship',
      //   excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod possimus repudiandae aliquid error. Illo id error saepe quis, mollitia in sapiente sit neque aspernatur porro vel, facilis enim pariatur.',
      //   links: [
      //     {
      //       title: 'Current Grants',
      //       url: '#'
      //     },
      //     {
      //       title: 'How to apply',
      //       url: '#'
      //     },
      //   ]
      // },
      {
        heading: 'Kuwait Grants',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod possimus repudiandae aliquid error. Illo id error saepe quis, mollitia in sapiente sit neque aspernatur porro vel, facilis enim pariatur.',
        links: [
          {
            title: 'Visiting Scholars Program',
            url: '#',
            disabled: true
          },
          {
            title: 'Visiting Research Fellowship',
            url: '#',
            disabled: true
          },
        ]
      }
    ]
  },
]
</script>

<style lang="scss" scoped>

</style>
