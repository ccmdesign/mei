<template>
  <mei-opportunity-page :opportunity="opportunity" ellipsisClass="bottom-right" />
</template>

<script setup>
const opportunity = {
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
}
</script>
