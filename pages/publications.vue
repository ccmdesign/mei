<template>
  <article>
    <mei-hero
      background="../assets/images/publications-hero.png"
      title="Publications"
      description="The Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
      nesciunt nostrum deleniti reprehenderit delectus facere quibusdam
      aliquam temporibus numquam, dolore error hic dolorem iste nobis
      voluptates tenetur et consectetur omnis."
    />
    
    <base-section>
      <center-l size="wide">
        <stack-l space="var(--s0)">
          <sorting-header />
          <hr/>
          <stack-l v-for="i in 3" space="var(--s2)">
            <mei-card-wide />
            <hr/>
          </stack-l>
          <div class="text-align:center">
            <base-button color="primary" visual="primary">View more updates</base-button>
          </div>
        </stack-l>
      </center-l>
      
    </base-section>
  </article>
</template>
