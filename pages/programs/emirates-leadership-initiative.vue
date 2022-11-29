<template>
  <article class="program-page">
    <mei-hero
      :background="programPage.heroUrl"
      :title="programPage.title"
      :description="programPage.tagline"
    />

    <base-section>
      <center-l>
        <stack-l>
          <img class="program-page__logo" :src="programPage.logoUrl" alt="" />
        </stack-l>
      </center-l>     
    </base-section>

    <base-section>
      <center-l size="wide">
        <stack-l>
          <h2 class="color:primary">{{programPage.title}}</h2>
          <ccm-prose class="program-page__description">
            <!-- ToDo: This is supposed to receive rich text/markdown. Multiple Paragraphs -->
            <div v-html="programPage.description"></div>
          </ccm-prose>
        </stack-l>
      </center-l>
    </base-section>

    <base-section>
      <center-l size="wide">
        <stack-l class="program-block">
          <mei-links-group :groups="programPage.blocks" />
        </stack-l>
      </center-l>
    </base-section>
  </article>
</template>

<script setup>

const programPage = {
  heroUrl: '../assets/images/program-page-hero.png',
  title: 'Emirates Leadership Initiative',
  tagline: '', // FIXME: Where to find Hero text

  // Peguei o texto daqui: https://www.belfercenter.org/project/middle-east-initiative#!emirates-leadership-initiative
  description: `
  <p>A collaboration between Harvard Kennedy School’s Center for Public Leadership and the Belfer Center’s Middle East Initiative, the Emirates Leadership Initiative (ELI) provides the critical opportunities needed for emerging leaders from the United Arab Emirates and the Middle East to confront the region’s public policy issues in question through a multi-pronged approach.</p>
  <img class="center" src="../assets/images/program-mei.jpg"/>
  <p>The complexities of modern leadership require more than traditional academic coursework. Effective leaders utilize tools of strategic and financial analysis balanced with self-understanding and the ability to work across cultures and sectors. Now, more than ever, leaders need to be equipped with the tools to think globally and act locally.</p>
  <p>Funded by the government of the United Arab Emirates, the Emirates Leadership Initiative features several components, including: a research fund supporting pre-doctoral, post-doctoral, and faculty research; student degree fellowships; an on-site learning experience in the UAE; and Executive Education programs. Please click the links below to learn more about ELI’s various elements.</p>
  `,
  logoUrl: '../assets/images/emirates-logo.png',
  blocks: [
    {
      title: 'Research',
      excerpt: '',
      links: [
        {
          label: 'Pre-Doctoral, Postdoctoral, and Faculty Fellowships',
          url: 'https://www.belfercenter.org/project/middle-east-initiative#!research-grants-and-fellowships'
        },
        {
          label: 'Harvard University Faculty Research Fund',
          url: 'https://www.belfercenter.org/project/middle-east-initiative#!research-grants-and-fellowships'
        },
        {
          label: 'Harvard Kennedy School Student Research Fund',
          url: 'https://www.belfercenter.org/project/middle-east-initiative#!student-resources'
        },
        {
          label: 'Senior Fellows Program',
          url: '#',
          disabled: true
        }
      ]
    },
    {
      title: 'Student Degree Fellowships',
      links: [
        {
          label: 'Student Degree Fellowships',
          url: 'http://cpl.hks.harvard.edu/emirates-leadership-initiative-fellowship?_gl=1*1n7ud0i*_ga*ODMxOTQ5MjUyLjE2NTgyNDgxNDc.*_ga_72NC9RC7VN*MTY2OTY3MDY1NS42Mi4wLjE2Njk2NzA2NTUuMC4wLjA.'
        },
        
      ]
    },
    {
      title: 'Executive Education',
      links: [
        {
          label: 'Executive Education',
          url: 'https://www.hks.harvard.edu/executive-education?_ga=2.137470965.476707840.1669662609-831949252.1658248147&_gl=1*82m3me*_ga*ODMxOTQ5MjUyLjE2NTgyNDgxNDc.*_ga_72NC9RC7VN*MTY2OTY3MDY1NS42Mi4wLjE2Njk2NzA2NTUuMC4wLjA.'
        },
        
      ]
    },
    {
      title: 'On-Site Learning in the UAE',
      links: [
        {
          label: 'On-Site Learning in the UAE',
          url: 'https://cpl.hks.harvard.edu/field-experience-trip-united-arab-emirates?_gl=1*82m3me*_ga*ODMxOTQ5MjUyLjE2NTgyNDgxNDc.*_ga_72NC9RC7VN*MTY2OTY3MDY1NS42Mi4wLjE2Njk2NzA2NTUuMC4wLjA.'
        },
        
      ]
    },
  ]
} 

</script>

<style lang="scss" scoped>

.program-page__description * {
  max-width: 80ch;
}

.program-block { max-width: 50ch; }

// ToDo: For some reason I was not able to use the proper configs in the stack-l
.program-block > * + * { margin-top: var(--s3); }

.program-block ul {
  padding: 0;
}

.program-block li {
  display: flex;
  padding: var(--s0) 0;
  margin: 0;
}

.program-block li + li {
  border-top: 1px solid hsla(var(--base-hsl), .2);
}

.arrow {
  border-radius: 20px;
  margin-left: auto;
}

// ToDo: This style is pulling the :root variables from the DS and not the theme file in the project
//       If we just update the button to the new version it will probably work just fine.
.arrow:before { color: var(--base-color); }

</style>
