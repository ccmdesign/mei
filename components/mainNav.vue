<template>
  <nav class="nav" role="navigation" aria-label="Main" :open=open>
    <button class="nav__trigger" @click="openMenu"><i class="icon">menu</i></button>
    <ul class="nav__list">
      <li v-for="i in menuData" :key=i.url :disabled=i.disabled :title="i.label" :submenu='i.submenu'>
        <nuxtLink v-if="i.url" :to="i.url" class="nav__item" :class="{submenuActive: i.submenu}">
          {{ i.label }}
        </nuxtLink>

        <span v-else class="nav__item">
          {{ i.label }}
        </span>

        <ul v-if="i.submenu" class="nav__submenu">
          <li v-for="j in i.submenu" :key="j.url">
            <nuxtLink v-if="j.url" :to="j.url" class="nav__item" :disabled=i.disabled :title="j.label">{{ j.label }}</nuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const open = ref(false);

const openMenu = function() {
  open.value = !open.value;
}

const menuData = [
  {
    label: 'About',
    url: '/about'
  },
  {
    label: 'People',
    url: '/people',
    // submenu: [
    //   { label: 'Staff', url: '/people#staff' },
    //   { label: 'Faculty', url: '/people#faculty' },
    //   { label: 'Fellows', url: '/people#fellows' },
    // ]
  },
  {
    label: 'Events',
    url: '/events'
  },
  {
    label: 'Publications',
    url: '/publications'
  },
  {
    label: 'Opportunities',
    url: '/opportunities'
  },
  {
    label: 'Programs',
    url: '/programs'
  },
  {
    label: 'Subscribe',
    url: 'https://hksexeced.tfaforms.net/f/subscribe-s?s=a1n4V0000017w3iQAA',
  }
]
</script>

<style lang="scss" scoped>
.nav { display: flex; }

.nav__trigger {
  display: none;
  padding: var(--s0);
  background-color: var(--white-color);
  color: var(--accent-color);
  border: 0;
  border-top: 1px solid hsla(var(--base-hsl), .2);
  border-bottom: 1px solid hsla(var(--base-hsl), .2);
}

.nav__list,
.nav__list li,
.nav__item { display: inherit; }

.nav__list li { align-items: stretch; }

.nav__item { 
  align-items: center;
  font-weight: 700;
  border: none;
}

.nav__list { 
  flex-wrap: wrap; 
  margin: 0;
}

.nav__list li[disabled] a {
  opacity: .4;
  pointer-events: none;
}

.nav__item { 
  color: hsla(var(--white-hsl), 1);
  padding-inline: var(--s0);
  letter-spacing: .5px;
  white-space: nowrap;
  width: 100%;
  text-decoration: none;
  transition: all .4s ease;
}

.nav__item:hover { 
  background-color: hsla(var(--base-hsl), .05); 
  text-decoration: none;
  transition: all .4s ease;
}

.nav__item[active],
.nuxt-link-exact-active,
.nuxt-link-active.submenuActive {
  color: var(--primary-color);
}

.nav__list [submenu] { position: relative; }

.nav__submenu {
  position: absolute;
  left: 0;
  top: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: var(--topbar-bg);
}

@media (min-width: 35.98em) {
  .nav__submenu { display: none; }
  [submenu]:hover .nav__submenu { 
    display: flex;
    box-shadow: 0 8px 12px hsla(var(--base-hsl), .1);
  }

  .nav__submenu .nav__item {
    padding-block: var(--s-1);
  }
}

@media (max-width: 35.98em) { 
  /* positions the navigation at the bottom of the mobile screens */
  .nav { 
    flex-direction: column;
    background-color: hsla(var(--white-hsl), 1); 
    position: fixed;
    z-index: 100;
    width: 100vw;
    top: 100vh;
    margin-top: -60px;
    transition: all .4s ease;
    left: 0;
  }

  .nav[open="true"] { 
    bottom: 0;
    top: unset;
    transition: all .4s ease;
  }

  .nav__trigger { display: block; }
  
  .nav__list { 
    flex-direction: column; 
    flex-grow: 1;
  }

  .nav__list li { 
    flex-direction: column;
  }
  .nav__item {
    color: var(--base-color);
    flex: 1;
    justify-content: center;
    padding: var(--s-3);
  }

  .nav__submenu { position: relative; }
}

.lang-switcher {
  text-transform: uppercase;
  border: none;
  background: none;
  transition: font-weight 0.2s ease-in-out;
  padding: 0 15px;
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  &:hover, &.lang-switcher--active {
    font-weight: 500;
  }
}

.lang-switcher__list-selector {
  text-transform: uppercase;
}

.logo { flex-shrink: 0; }
</style>
