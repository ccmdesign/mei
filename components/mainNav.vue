<template>
  <nav class="nav" role="navigation" aria-label="Main" :open="open">
    <i class="nav__trigger icon color:white" @click="openMenu">{{open ? 'close' : 'menu'}}</i>
    <ul class="nav__list">
      <li v-for="i in menuData" :key=i.url :disabled=i.disabled :title="i.label" :submenu="i.hasOwnProperty('submenu')">
        <div v-if="i.url">
          <a :href="$getLink(i.url)" target="_top" class="nav__item">
            {{ i.label }}
            <span v-if="i.hasOwnProperty('submenu')" class="icon color:white desktop"></span>
          </a>
          <span v-if="i.hasOwnProperty('submenu')" class="icon color:white mobile" @click.stop="() => toggleSubmenu(i.label)">{{ opensubmenu[i.label] ? 'expand_less' : 'expand_more' }}</span>
        </div>

        <div v-else-if="i.fullUrl">
          <a :href="i.fullUrl" target="_blank" class="nav__item">
            {{ i.label }}
            <span v-if="i.hasOwnProperty('submenu')" class="icon color:white desktop"></span>
          </a>
          <span v-if="i.hasOwnProperty('submenu')" class="icon color:white mobile" @click.stop="() => toggleSubmenu(i.label)">{{ opensubmenu[i.label] ? 'expand_less' : 'expand_more' }}</span>
        </div>

        <div v-else>
          <div class="nav__item">
            {{ i.label }}
            <span v-if="i.hasOwnProperty('submenu')" class="icon color:white desktop"></span>
          </div>
          <span v-if="i.hasOwnProperty('submenu')" class="icon color:white mobile" @click.stop="() => toggleSubmenu(i.label)">{{ opensubmenu[i.label] ? 'expand_less' : 'expand_more' }}</span>
        </div>

        <ul v-if="i.submenu" class="nav__submenu" :open="opensubmenu[i.label]">
          <li v-for="j in i.submenu" :key="j.url">
            <a v-if="j.url" :href="$getLink(j.url, j.external)" class="nav__item" :disabled=i.disabled :title="j.label" target="_top">{{ j.label }}</a>
            <a v-else-if="j.fullUrl" :href="j.fullUrl" class="nav__item" target="_top" :title="j.label">{{ j.label }}</a>
            <span v-else class="nav__item">{{ j.label }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const open = ref(false);
const opensubmenu = ref({
  About: false,
  People: false,
  Events: false,
  Programs: false,
  Opportunities: false,
  Publications: false,
})

const openMenu = function() {
  open.value = !open.value;
}

const toggleSubmenu = function(label) {
  opensubmenu.value[label] = !opensubmenu.value[label]
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
      { label: 'Senior Fellows', url: '/senior-fellows-program', external: true },
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
      { label: 'Reports & papers', fullUrl: 'https://www.belfercenter.org/project/middle-east-initiative/publication?f[0]=type%3AReports%20%26%20Papers' },
      { label: 'Policy briefs', fullUrl: 'https://www.belfercenter.org/project/middle-east-initiative/publication?f[0]=type%3APolicy%20Briefs%20%26%20Testimonies' },
      { label: 'MEI Blog', fullUrl: 'https://www.belfercenter.org/project/middle-east-initiative/publication?f[0]=type%3ABlogs' }
    ]
  },
]
</script>

<style lang="scss" scoped>
.nav {
  --navHeight: 100vh;
  display: flex;
}

.nav__trigger {
  display: none;
}

.nav__list,
.nav__list li,
.nav__item {
  display: inherit;
}

.nav__list {
  flex-wrap: wrap;
  margin: 0;

  & li {
    align-items: stretch;
  }

  & li[disabled] a {
    opacity: .4;
    pointer-events: none;
  }

  &  li .desktop.icon:after {
    content: 'expand_more'
  }
  & li:hover .desktop.icon:after {
    content: 'expand_less'
  }

  & [submenu] { 
    position: relative;
  }
}

.nav__item {
  align-items: center;
  font-weight: 700;
  border: none;
  color: hsla(var(--white-hsl), 1);
  padding-inline: var(--s0);
  letter-spacing: .5px;
  white-space: nowrap;
  width: 100%;
  text-decoration: none;
  transition: all .4s ease;

  &:hover {
    background-color: hsla(var(--base-hsl), .05);
    text-decoration: none;
    transition: all .4s ease;
  }

  &[active] {
    color: var(--primary-color);
  }
}

a.nav__item {
  cursor: pointer;
}

li .nav__item.disabled {
  cursor: default;
  pointer-events: none;
}

.nav__submenu {
  display: none;

  & li:hover {
    background-color: hsla(var(--white-hsl), .2);
  }

  & .nav__item {
    padding-block: var(--s-1);
  }
}

[submenu]:hover .nav__submenu {
  position: absolute;
  left: 0;
  top: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: var(--base-color);
  z-index: 100;
  box-shadow: 0 8px 12px hsla(var(--base-hsl), .1);
}

.mobile {
  display: none;
}

.nav__list li > div {
  display: flex;
}

@media (max-width: 62em) {
  .nav {
    order: -1;
    flex-direction: column;
  }

  .mobile {
    display: block;
  }

  .desktop {
    display: none;
  }

  .nav__trigger {
    cursor: pointer;
    display: block;
    padding: 0;
    background-color: inherit;
    color: var(--white-color);
    position: absolute;
    top: var(--s1);
    left: var(--s1);
    border: none;
    line-height: var(--ratio);
  }

  .nav__list {
    display: none;
  }

  .nav[open="true"] {
    padding: var(--s1) 0 0 var(--s0);
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--primary-color);
    width: 100%;
    min-height: 100vh;
    z-index: 120;

    & .nav__list {
      display: flex;
      flex-direction: column;
      gap: var(--s-1);
      padding: var(--s1) var(--s2);
      margin: 0;
    }
  
    & .nav__list li {
      display: inline-flex;
      flex-direction: column;

      & > div {
        display: inline-flex;
        align-items: center;
      }
    }
    
    & .nav__submenu {
      display: none;
    }

    & .nav__submenu[open="true"] {
      position: static;
      margin-left: var(--s0);
      background-color: var(--primary-color);
      border-left: 1px solid var(--white-color);
      display: flex;
      flex-direction: column;

      & .nav__item {
        padding-block: var(--s-2);
        font-weight: normal;
      }
    }

    .nav__submenu li:hover {
      background-color: inherit;
    }

    & .nav__item {
      padding-block: var(--s-1);
    }
  }

  [submenu]:hover .nav__submenu {
    box-shadow: none;
  }
}
</style>
