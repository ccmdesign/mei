<template>
  <article>
    <mei-hero
      background="../assets/images/home-bg.jpg"
      title="Middle East Initiative"
      description="The Middle East Initiative at Harvard Kennedy School is dedicated to advancing public policy in the Middle East by convening the world's foremost academics and policy experts, developing the next generation of leaders, and promoting community engagement on campus and in the region."
    />
    <base-section>
      <center-l size="wide">
        <stack-l space="var(--s2)" class="margin-bottom:s2">
          <template v-if="error.statusCode === '404'">
            <h2 class="color:primary">Page not found</h2>
            <h4>Error {{ error.statusCode }}</h4>
            <p>Sorry, we couldn't find the page you were looking for.</p>
          </template>
          <template v-else>
            <h2 class="color:primary">{{ error.statusMessage }}</h2>
            <h4>Error {{ error.statusCode }}</h4>
            <p>Sorry, something went wrong.</p>
          </template>
        </stack-l>
      </center-l>
    </base-section>
  </article>
</template>

<script setup>
defineProps(["error"]);
</script>
