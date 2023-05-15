<template>
  <nav class="nav" role="navigation" aria-label="Main" :open=open>
    <button class="nav__trigger" @click="openMenu"><i class="icon">menu</i></button>
    <ul class="nav__list">
      <li v-for="i in menuData" :key=i.url :disabled=i.disabled :title="i.label" :submenu="i.hasOwnProperty('submenu')">
        <a v-if="i.url" :href="$getLink(i.url)" target="_top" class="nav__item" :class="{submenuActive: i.submenu}">
          {{ i.label }}
          <span v-if="i.hasOwnProperty('submenu')" class="icon"></span>
        </a>

        <a v-else-if="i.fullUrl" :href="i.fullUrl" target="_blank" class="nav__item" :class="{submenuActive: i.submenu}">
          {{ i.label }}
          <span v-if="i.hasOwnProperty('submenu')" class="icon"></span>
        </a>

        <div v-else class="nav__item" :class="{submenuActive: i.submenu}">
          {{ i.label }}
          <span v-if="i.hasOwnProperty('submenu')" class="icon"></span>
        </div>
        
        <ul v-if="i.submenu" class="nav__submenu">
          <li v-for="j in i.submenu" :key="j.url">
            <a v-if="j.url" :href="$getLink(j.url, j.external)" class="nav__item" :disabled=i.disabled :title="j.label" target="_top">{{ j.label }}</a>
            <a v-else-if="j.fullUrl" :href="j.fullUrl" class="nav__item" target="_top">{{ j.label }}</a>
            <span v-else class="nav__item">{{ j.label }}</span>
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
    submenu: [
      { label: 'Leadership & Staff', url: '/people#staff' },
      { label: 'Faculty', url: '/people#faculty' },
      { label: 'Senior Fellows', url: '/people#senior-fellows' },
      { label: 'Fellows', url: '/people#fellows' },
      { label: 'Research Fellows', url: '/people#research-fellows' }
    ]
  },
  {
    label: 'Events',
    url: '/events',
    submenu: [
      {
        label: 'Subscribe',
        fullUrl: 'https://hksexeced.tfaforms.net/f/subscribe-s?s=a1n4V0000017w3iQAA',
      }
    ]
  },
  {
    label: 'Programs',
    submenu: [
      { label: 'Senior Fellows', url: '', external: false },
      { label: 'Emirates Leadership Initiative', url: '/emirates-leadership-initiative', external: true },
      { label: 'Kuwait Program', url: '/kuwait-program', external: true },
      { label: 'Tunisia Program', url: '/tunisia-program', external: true },
    ]
  },
  {
    label: 'Opportunities',
    submenu: [
      { label: 'Faculty research grant', url: '/opportunities/faculty-research-grants' },
      { label: 'Student travel grants', url: '/opportunities/student-travel-grants' },
      { label: 'Fellowships for scholars', url: '/opportunities/fellowships-for-scholars' } 
    ]
  },
  {
    label: 'Publications',
    url: '/publications',
    submenu: [
      { label: 'Mosaic', fullUrl: 'https://www.belfercenter.org/publication/middle-east-initiative-mosaic-2020-2021' },
      { label: 'Research papers and policy briefs', fullUrl: 'https://www.belfercenter.org/project/middle-east-initiative/publication?f%5B0%5D=type%3APolicy%20Briefs%20%26%20Testimonies&f%5B1%5D=type%3AReports%20%26%20Papers' },
      { label: 'MEI Blog', fullUrl: 'https://www.belfercenter.org/project/middle-east-initiative/publication?f[0]=type%3ABlogs' }
    ]
  },
]
</script>

<style lang="scss" scoped>
// CSS var for menu placement on production inside iframe.
.nav {
  --navHeight: 100vh;
}

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

.nav__trigger .icon {
  vertical-align: middle;
}

.nav__list,
.nav__list li,
.nav__item {
  display: inherit;
}

a.nav__item {
  cursor: pointer;
}

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
  background-color: var(--base-color);
}

.nav__list li .icon:after {
  content: 'expand_more'
}

.nav__list li:hover .icon:after {
  content: 'expand_less'
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
    top: var(--navHeight);
    height: 400px;
    margin-top: -60px;
    transition: all .4s ease;
    left: 0;
  }

  .nav[open="true"] {
    margin-top: -400px;
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

  .nav__submenu {
    position: relative;
    background-color: var(--gray-color);
    position: static;
  }

  .nav__list li .icon:after,
  .nav__list li:hover .icon:after {
    content: '';
  }
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

li .nav__item.disabled {
  cursor: default;
  pointer-events: none;
}

.nav__list li:last-child .nav__submenu {
  width: -webkit-fill-available;
}

.nav__list li:last-child .nav__submenu .nav__item {
  white-space: break-spaces;
}

.nav__submenu li:hover {
  background-color: hsla(var(--white-hsl), .2);
}

.nav__submenu {
  z-index: 100;
}
</style>
