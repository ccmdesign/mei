<template>
  <base-card class="mei-card-minimal" hideAction>
    <slot>
      <stack-l space="var(--s-2)">
        <h2 class="mei-card-minimal__title"><nuxtLink class="mei-card-minimal__title-link" to="/card/">Minimal Card</nuxtLink></h2>
        <div class="mei-card-minimal__excerpt">
          <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, laborum vitae beatae aut maiores ducimus eaque sed perferendis, suscipit delectus animi! Praesentium omnis id consequuntur obcaecati, facere in laborum eligendi!</p>
          <nuxt-link class="mei-card-minimal__more" to="/card/">More</nuxt-link>
        </div>
      </stack-l>
    </slot>
  </base-card>
</template>


<style lang="scss" scoped>
.mei-card-minimal {
  --card-border: 0;
  --card-padding: 0 var(--s1) ;
  
}
.mei-card-minimal__title { font-size: 1.2em; }

.mei-card-minimal__title-link { 
  text-decoration: none; 
  color: var(--primary-color);
}

.mei-card-minimal__excerpt p {
  font-size: 90%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
}

.mei-card-minimal__more { font-weight: bold; }
</style>
