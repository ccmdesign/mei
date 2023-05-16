<template>
  <mei-opportunity-page :opportunity="opportunity" ellipsisClass="top-left" />
</template>

<script setup>
const opportunity = {
  imageUrl: '../../assets/images/opportunities3.jpg',
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
}
</script>
