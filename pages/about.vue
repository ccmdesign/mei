<template>
  <article>
    <mei-hero
      background="../assets/images/about-hero.png"
      title="About"
      description="The Middle East Initiative (MEI) is dedicated to advancing public policy in the Middle East by convening the world's foremost academics and policy experts, developing the next generation of leaders, and promoting community engagement on campus and in the region."
    />

    <base-section size="l" class="mei-about-section">
      <center-l size="wide">
        <stack-l>
          <div class="mei-about-what-why | grid">
            <figure>
              <img src="../assets/images/what-is-mei.png" alt="" />
            </figure>
            <stack-l>
              <p>The Middle East Initiative (MEI) is dedicated to advancing public policy in the Middle East by convening the world's foremost academics and policy experts, developing the next generation of leaders, and promoting community engagement on campus and in the region. Tarek Masoud, Ford Foundation Professor of Democracy and Governance at Harvard Kennedy School, is MEI's Faculty Director.</p>
              <p>Established in 1998, MEI has expanded its programs to address diverse topics including energy and resource management, transitional democracy, foreign and security policy, human rights and humanitarian responses, economic diversification, demographic challenges, and beyond. Through the integration of research and policy analysis, education, and community engagement, MEI aims to advance public policy and build capacity in the Middle East.</p>
              <hr class="divider"/>
              <p class="large">MEI is Harvard University’s principal forum for policy-relevant research and teaching on the contemporary Near East and North Africa. Each year, MEI supports an international group of scholars and practitioners working on governance, security, and development in the region, advances their work through workshops and research seminars, and disseminates it through its working paper series.</p>
              <hr class="divider"/>
              <p>MEI also conducts in-house research projects on public policy in the region, and encourages Harvard faculty research on these issues through its faculty research grants program.</p>
              <p>MEI also provides funding opportunities and connections for Kennedy School students who wish to work on the region’s public policy challenges. Finally, MEI helps advance Americans’ understanding of the region and its policy challenges through its events series. The Initiative is part of the Belfer Center for Science and International Affairs at Harvard University’s John F. Kennedy School of Government.</p>
            </stack-l>
          </div>
        </stack-l>
      </center-l>
    </base-section>

    <div class="mei-about-where | mei-texture-bg">
      <base-section color="transparent" size="l" class="mei-about-section">
        <center-l size="wide">
          <div class="grid">           
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
.mei-about-section {
  --base-section-padding: var(--s2);
}

.mei-about-where h2,
.mei-about-where h5,
.mei-about-where .questions p {
  color: var(--primary-color);
  font-weight: bold;
}
.mei-about-where p {
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

.mei-about-what-why p {
  font-family: var(--display-font);
}

.mei-about-what-why p.large {
  font-weight: 500;
  font-size: 2rem;
  line-height: 38px;
}

.mei-about-what-why .divider {
  margin: 48px 0;
  background-color: hsla(var(--primary-hsl), 0.2);
}

.mei-about-what-why img {
  object-fit: cover;
  height: 100%;
}
</style>
