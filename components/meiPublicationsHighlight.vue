<template>
    <base-section color="transparent">
        <center-l size="wide">
          <stack-l space="var(--s2)">
            <h2 class="color:primary padding-bottom:s2">Publications & Commentary</h2>
            <mei-card-wide v-for="i in 2" />
            <div class="text-align:center padding-top:s2">
              <baseButton color="primary" visual="primary">Viewl All Publications</baseButton>
            </div>
        </stack-l>
      </center-l>
    </base-section>
</template>

<script setup>
// ToDo: Set up Props
</script>

<style lang="scss" scoped>

</style>
