<template>
  <article>
    <mei-hero
      background="../assets/images/opportunities-hero.jpg"
      title="Opportunities"
      description="The Middle East Initiative at Harvard Kennedy School is dedicated to advancing public policy in the Middle East by convening the world's foremost academics and policy experts, developing the next generation of leaders, and promoting community engagement on campus and in the region."
    />
    
    <base-section class="opportunities" color="transparent">
      <stack-l>
        <tab-bar :options="tabs" sticky />
        <mei-opportunity-group id="students" :content="opportunities[0]" ellipsisClass="bottom-right"/>
        <mei-opportunity-group id="faculty" :content="opportunities[1]" ellipsisClass="top-left" inverted :gradient="true" :pattern="true" />
        <mei-opportunity-group id="outside-scholars" :content="opportunities[2]" ellipsisClass="top-right"/>
      </stack-l>
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
        heading: 'Student Research Grants',
        excerpt: 'MEI offers funding to HKS students to support PAE and SYPA research and summer internships located in or for work regarding the Middle East and North Africa.',
        links: [
          {
            title: 'Eligibility & Application Information',
            url: 'https://www.belfercenter.org/opportunities#mei-students-research-grants'
          }
        ]
      },

      {
        heading: 'J-Term “Classroom-in-the-Field”',
        excerpt: 'Faculty Director Professor Tarek Masoud leads an annual January term for-credit course to the region to meet with and learn from local leaders.',
        links: [
          {
            title: 'Eligibility & Application Information',
            url: 'https://www.belfercenter.org/opportunities#mei-students-j-term'
          }
        ]
      },

      {
        heading: 'Kuwait Foundation Fellowship for Outstanding Emerging Leaders',
        excerpt: 'The Kuwait Foundation Fellowship for Outstanding Emerging Leaders provides a full scholarship to students from the Arab League with a preference for those from Kuwait.',
        links: [
          {
            title: 'Eligibility & Application Information',
            url: 'https://www.belfercenter.org/opportunities#mei-students-kuwait-fellowship'
          }
        ]
      },
    ]
  },
  {
    imageUrl: '../assets/images/opportunities2.jpg',
    imageLabel: 'Research Grants for Harvard Faculty',
    heading: 'Research Grants for Harvard Faculty',
    excerpt: 'We accept research proposals for projects that target major policy issues affecting the Middle East and North Africa. Details regarding priority topic areas for each program are can be found below.',
    groups: [
    {
        heading: 'Faculty Research Grants',
        excerpt: 'MEI’s Faculty Research Grants support research projects conducted by Harvard faculty on policy-relevant research in the Middle East. This program generates interest in MENA-based research, including opportunities to collaborate with or present at institutions in the region. The project findings contribute to a growing body of policy-relevant research on a variety of topics. ',
        links: [
          {
            title: 'Fund Details and Priority Topics',
            url: 'https://www.belfercenter.org/opportunities#mei-faculty-research-details'
          },
          {
            title: 'Eligibility & Application Information',
            url: 'https://www.belfercenter.org/opportunities#mei-faculty-research-eligibililty'
          }
        ]
      },
    ]
  },
  {
    imageUrl: '../assets/images/opportunities3.jpg',
    imageLabel: 'For Visiting Scholars',
    heading: 'Opportunities for Scholars',
    excerpt: 'We hosts senior policymakers and academics to engage with students and faculty as a visiting scholar as part of our programs. We focus on applications from scholars working on contemporary issues of policy relevance to the Middle East, and the Arabian Gulf in particular, in the disciplines of political science, economics, history, and sociology.',
    groups: [
      {
        heading: 'Kuwait Visiting Research Fellowship',
        excerpt: 
        "The Middle East Initiative hosts senior policymakers and academics to engage with students and faculty as a visiting scholar for one semester as part of the Kuwait Program at Harvard Kennedy School. Applications from scholars working on contemporary issues of policy relevance to the Middle East, and the Arabian Gulf in particular, in the disciplines of political science, economics, history, and sociology are especially welcome. All visiting scholars are expected to either: - Conduct a research project preferably with a Harvard Kennedy School faculty member; or - Lead a not-for-credit eight week study group on a topic relevant to policy and development in the Middle East and North Africa.",
        links: [
          {
            title: 'Eligibility & Application information',
            url: 'https://www.belfercenter.org/opportunities#mei-visiting-research'
          },
        ]
      },
    ]
  },
]
</script>

<style lang="scss" scoped>
.opportunities {
  overflow: visible;
}
</style>
