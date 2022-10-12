<template>
  <article>
    <mei-hero
      background="../assets/images/about-hero.png"
      title="About"
      description="The Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
    nesciunt nostrum deleniti reprehenderit delectus facere quibusdam
    aliquam temporibus numquam, dolore error hic dolorem iste nobis
    voluptates tenetur et consectetur omnis."
    >
    </mei-hero>

    <base-section size="xl">
      <center-l size="wide">
        <ccm-prose class="about">
          <h2>What is MEI</h2>

          <figure>
            <img src="../assets/images/what-is-mei.png" alt="" />
          </figure>

          <stack-l space="var(--s3)">
            <stack-l space="var(--s2)">
              <p>
                The Middle East Initiative (MEI) is dedicated to advancing
                public policy in the Middle East by convening the world's
                foremost academics and policy experts, developing the next
                generation of leaders, and promoting community engagement on
                campus and in the region. Tarek Masoud, Ford Foundation
                Professor of Democracy and Governance at Harvard Kennedy School,
                is MEI's Faculty Director.
              </p>
              <p>
                Established in 1998, MEI has expanded its programs to address
                diverse topics including energy and resource management,
                transitional democracy, foreign and security policy, human
                rights and humanitarian responses, economic diversification,
                demographic challenges, and beyond. Through the integration of
                research and policy analysis, education, and community
                engagement, MEI aims to advance public policy and build capacity
                in the Middle East.
              </p>
            </stack-l>
          </stack-l>
        </ccm-prose>
      </center-l>
    </base-section>

    <base-section color="primary-10">
      <stack-l space="var(--s2)">
        <split-panel>
          <stack-l space="var(--s2)" class="black-text">
            <stack-l space="var(--s2)">
              <h2>What we do</h2>
              <p>
                The Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam nesciunt nostrum deleniti reprehenderit delectus facere
                quibusdam aliquam temporibus numquam, dolore error hic dolorem
                iste nobis voluptates tenetur et consectetur omnis.
              </p>
            </stack-l>
            <stack-l space="var(--s2)">
              <split-panel class="right-border">
                <stack-l space="var(--s2)">
                  <h4>Office Location</h4>
                  <h6>1 Brattle Square, Suite 470 Cambridge, MA 02138</h6>
                </stack-l>
                <stack-l space="var(--s2)">
                  <h4>Mailing Address</h4>
                  <h6>
                    Middle East Initiative Harvard Kennedy School 79 JFK Street
                    Mailbox 131 Cambridge, MA 02138
                  </h6>
                </stack-l>
              </split-panel>
            </stack-l>
          </stack-l>

          <stack-l space="var(--s2)" class="black-text">
            <stack-l space="var(--s2)">
              <h2>Why we do it</h2>
              <p>
                The Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam nesciunt nostrum deleniti reprehenderit delectus facere
                quibusdam aliquam temporibus numquam, dolore error hic dolorem
                iste nobis voluptates tenetur et consectetur omnis.
              </p>
            </stack-l>

            <stack-l space="var(--s1)">
              <h4>General Questions: Alison Hillegeist, Associate Director</h4>
              <h4>
                Research Fellowships & Grants: Julia Martin, Research and
                Finance Manager
              </h4>
              <h4>
                Events, Students: Sam Himmelman, Program and Communications
                Coordinator
              </h4>
            </stack-l>
          </stack-l>
        </split-panel>
      </stack-l>
    </base-section>
  </article>
</template>

<style scoped lang="scss">
.about p {
  font-weight: 400;
}

.black-text p,
.black-text h6 {
  font-weight: 400;
  color: var(--base-color);
}

.right-border {
  border-right: 1px var(--black-color) solid;
}
</style>
