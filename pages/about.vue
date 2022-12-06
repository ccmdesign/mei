<template>
  <article>
    <mei-hero
      background="../assets/images/about-hero.png"
      title="About"
      description="The Middle East Initiative (MEI) is dedicated to advancing public policy in the Middle East by convening the world's foremost academics and policy experts, developing the next generation of leaders, and promoting community engagement on campus and in the region."
    />

    <base-section size="l">
      <center-l size="wide">
        <stack-l>
          <h2 class="color:primary">What is MEI</h2>
          <figure>
            <img src="../assets/images/what-is-mei.png" alt="" />
          </figure>
          <stack-l class="margin-top:s3">
            <p>The Middle East Initiative (MEI) is dedicated to advancing public policy in the Middle East by convening the world's foremost academics and policy experts, developing the next generation of leaders, and promoting community engagement on campus and in the region. Tarek Masoud, Ford Foundation Professor of Democracy and Governance at Harvard Kennedy School, is MEI's Faculty Director.</p>
            <p>Established in 1998, MEI has expanded its programs to address diverse topics including energy and resource management, transitional democracy, foreign and security policy, human rights and humanitarian responses, economic diversification, demographic challenges, and beyond. Through the integration of research and policy analysis, education, and community engagement, MEI aims to advance public policy and build capacity in the Middle East.</p>
          </stack-l>
        </stack-l>
      </center-l>
    </base-section>

    <div class="mei-about-what | mei-texture-bg">
      <base-section color="transparent" size="l">
        <center-l size="wide">
          <div class="grid">
            <stack-l space="var(--s2)">
              <h2>What we do</h2>
              <!-- FIXME: Get content -->
              <p>The Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nesciunt nostrum deleniti reprehenderit delectus facere quibusdam aliquam temporibus numquam, dolore error hic dolorem iste nobis voluptates tenetur et consectetur omnis.</p> 
            </stack-l>
            <stack-l space="var(--s2)">
              <h2>Why we do it</h2>
              <!-- FIXME: Get content -->
              <p>The Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nesciunt nostrum deleniti reprehenderit delectus facere quibusdam aliquam temporibus numquam, dolore error hic dolorem iste nobis voluptates tenetur et consectetur omnis.</p>
            </stack-l>
            
            <div class="grid inner">
              <stack-l>
                <h5 data-style="h6">Office Location</h5>
                <p>1 Brattle Square, Suite 470 Cambridge, MA 02138</p>
              </stack-l>
              <stack-l>
                <h5 data-style="h6">Mailing Address</h5>
                <div>
                  <p>Middle East Initiative</p>
                  <p>Harvard Kennedy School</p>
                  <p>79 JFK Street</p>
                  <p>Mailbox 131</p>
                  <p>Cambridge, MA 02138</p>
                </div>
              </stack-l>
            </div>
            <div class="questions">
              <stack-l>
                <p>General Questions: Alison Hillegeist, Associate Director</p>
                <p>Research Fellowships & Grants: Julia Martin, Research and Finance Manager</p>
                <p>Events, Students: Sam Himmelman, Program and Communications Coordinator</p>
              </stack-l>
            </div>
          </div>
        </center-l>
      </base-section>
    </div>
  </article>
</template>    
          
<style scoped lang="scss">

.mei-about-what h2,
.mei-about-what h5,
.mei-about-what .questions p {
  color: var(--primary-color);
  font-weight: bold;
}
.mei-about-what p {
  color: var(--base-color);
}

.grid {
  grid-gap: var(--s3);
  --itemWidth: 400px;
}

.grid.inner {
  grid-gap: var(--s1);
  --itemWidth: 200px;
}

.grid.inner h5 { font-weight: bold;}
</style>
