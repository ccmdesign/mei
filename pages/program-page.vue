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
            <p>{{programPage.description}}</p>
          </ccm-prose>
        </stack-l>
      </center-l>
    </base-section>

    <base-section>
      <center-l size="wide">
        <stack-l class="program-block">
          <stack-l v-for="i in programPage.blocks">
            <h3 class="color:primary">{{i.title}}</h3>
            <p>{{i.description}}</p>
            <ul>
              <li v-for="j in i.links">
                {{j.label}} 
                <!-- ToDo: Implement new Buttons -->
                <base-button class="arrow" :href="j.url" color="primary" icon-before="arrow_forward" />
              </li>
            </ul>
          </stack-l>
        </stack-l>
      </center-l>
    </base-section>
  </article>
</template>

<script setup>

const programPage = {
  heroUrl: '../assets/images/program-page-hero.png',
  title: 'Emirates Leadership Initiative',
  tagline: 'The deadline to apply for the Spring 2023 Kuwait Visiting Research Fellowship has passed. Applications for this position are no longer being accepted at this time.',
  description: 'The deadline to apply for the Spring 2023 Kuwait Visiting Research Fellowship has passed. Applications for this position are no longer being accepted at this time. The deadline to apply for the Spring 2023 Kuwait Visiting Research Fellowship has passed. Applications for this position are no longer being accepted at this time. The deadline to apply for the Spring 2023 Kuwait Visiting Research Fellowship has passed. Applications for this position are no longer being accepted at this time.',
  logoUrl: '../assets/images/emirates-logo.png',
  blocks: [
    {
      title: 'Research Fellowship',
      description: 'The deadline to apply for the Spring 2023 Kuwait Visiting Research Fellowship has passed. Applications for this position are no longer being accepted at this time.',
      links: [
        {
          label: 'Current Syllabus',
          url: '#'
        },
        {
          label: 'Photos from past courses',
          url: '#'
        }
        
      ]
    },
    {
      title: 'Research Grants',
      description: 'The deadline to apply for the Spring 2023 Kuwait Visiting Research Fellowship has passed. Applications for this position are no longer being accepted at this time.',
      links: [
        {
          label: 'Current Grants',
          url: '#'
        },
        {
          label: 'How to apply',
          url: '#'
        }
        
      ]
    },
    {
      title: 'Research Grants',
      description: 'The deadline to apply for the Spring 2023 Kuwait Visiting Research Fellowship has passed. Applications for this position are no longer being accepted at this time.',
      links: [
        {
          label: 'Current Grants',
          url: '#'
        },
        {
          label: 'How to apply',
          url: '#'
        }
        
      ]
    }
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
