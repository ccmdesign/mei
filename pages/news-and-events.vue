<template>
  <div>
    <mei-hero
      background="../assets/images/news-and-events-hero.png"
      title="News and Events"
      description="The Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
      nesciunt nostrum deleniti reprehenderit delectus facere quibusdam
      aliquam temporibus numquam, dolore error hic dolorem iste nobis
      voluptates tenetur et consectetur omnis."
    >
    </mei-hero>

    <base-section size="xl">
      <center-l size="wide">
        <h2>Upcoming Events</h2>

        <mei-card-wide
          heading="Arab Constitutionalism: The Coming Revolution"
          tagline="Tue., Apr. 19, 2022 | 1:30pm - 2:45pm"
          excerpt="Following the 2011 Arab uprisings, policy makers, constitutional negotiators and drafters did little to address the demands of the millions of protesters across the region. The result has been a generalized regression in democratic governance throughout the region, in some cases far beyond the already poor standards that caused the 2011 uprisings in the first place. Author and lawyer Zaid Al-Ali will discuss the constitutional processes that followed the 2011 Arab uprisings and whether we are likely to see more protests in the coming years."
          url="url"
          imageUrl="../assets/image/news-and-events-hero.png"
        />
      </center-l>

      <split-panel>
        <mei-card />
        <mei-card />
      </split-panel>
    </base-section>

    <base-section color="primary-10">
      <center-l size="wide">
        <h2>Past Events</h2>

        <split-panel>
          <stack-l>
            <mei-card />
            <mei-card />
          </stack-l>

          <stack-l>
            <mei-card />
            <mei-card />
          </stack-l>
        </split-panel>

        <base-button>Watch more MEI events</base-button>
      </center-l>
    </base-section>

    <base-section>
      <h2>News</h2>

      <div>
        <mei-card-wide />
        <mei-card-wide />
        <mei-card-wide />
      </div>
        
      <base-button>View more updates</base-button>

    </base-section>
  </div>
</template>

<script setup>
  import meiCardWide from "@/components/meiCardWide.vue";
</script>
