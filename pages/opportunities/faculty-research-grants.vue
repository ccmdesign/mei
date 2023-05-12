<template>
  <mei-opportunity-page :opportunity="opportunity" ellipsisClass="top-left" />
</template>

<script setup>
const opportunity = {
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
}
</script>