<template>
  <article>
    <mei-hero
      background="../assets/images/opportunities-hero.jpg"
      title="Opportunities"
      description="The Middle East Initiative at Harvard Kennedy School is dedicated to advancing public policy in the Middle East by convening the world's foremost academics and policy experts, developing the next generation of leaders, and promoting community engagement on campus and in the region."
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
    excerpt: 'Learn more about the various degrees offered through HKS and how to apply from the <a href="http://www.hks.harvard.edu/degrees/admissions/overview" target="_blank">Office of Admissions</a>. There are ample fellowship opportunities for prospective students from the Middle East.',
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
    excerpt: 'We accept research proposals for projects that target major policy issues affecting the Middle East and North Africa. Details regarding priority topic areas for each program are can be found below.',
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
    excerpt: 'We hosts senior policymakers and academics to engage with students and faculty as a visiting scholar as part of our programs. We focus on applications from scholars working on contemporary issues of policy relevance to the Middle East, and the Arabian Gulf in particular, in the disciplines of political science, economics, history, and sociology.',
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
