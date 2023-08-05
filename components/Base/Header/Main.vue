<template>
  <header class="main-header animate__animated animate__slideInLeft bg-white py-6">
    <section class="container">
      <section class="md:flex items-center justify-between gap-6 desktop-header hidden">
        <img src="/assets/images/logo/logo.png" class="w-16"/>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
            background-color="white"
        >
          <template v-for="menu in activeMenu.items">
            <template v-if="menu.child">
              <el-sub-menu :index="menu.title" popper-class="desktop-header-menu-submenu">
                <template #title>{{ menu.title }}</template>
                <el-menu-item v-for="child in menu.child" :index="`${menu.title}-${child.title}`">{{ child.title }}</el-menu-item>
              </el-sub-menu>
            </template>
            <template v-else-if="menu.desktop">
          <el-menu-item :index="menu.title">{{ menu.title }}</el-menu-item>
            </template>
          </template>
        </el-menu>
        <section class="flex items-center gap-3 grow-0">
          <el-button class="btn btn-primary text-sm shrink-0" @click="goLogin">{{ $t('user panel') }}</el-button>
          <el-dropdown @command="handleCommand">
            <el-button text class="btn text-sm px-3 py-1 border-none focus:border-none">
              <img :src="`/flags/${activeLocale.flag}`" class="w-6"/>
              {{ activeLocale.label }}
              <i class="isax isax-arrow-down-14" />
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="item in locales" :command="item.value">
                  <section class="flex items-center gap-1 p-3">
                <img :src="`/flags/${item.flag}`" class="w-6">
                    <h3 class="text-sm text-Gray-b3 font-medium">{{ item.label }}</h3>
                  </section>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </section>
      </section>
      <section class="flex items-center justify-between md:hidden">
        <el-button text class="btn" @click="sideMenuIsOpen = true">
          <i class="isax isax-category"/>
        </el-button>
        <img src="/assets/images/logo/logo.png" class="w-14"/>
        <el-button class="btn btn-primary text-sm" @click="goLogin">{{ $t('user panel') }}</el-button>
      </section>
    </section>
    <client-only>
      <el-drawer
          v-model="sideMenuIsOpen"
          direction="ltr"
          class="w-64 side-menu"
      >
        <section class="flex items-center justify-between">
          <img src="/assets/images/logo/logo.png" class="w-14"/>
          <el-button class="btn btn-primary text-sm" @click="goLogin">{{ $t('user panel') }}</el-button>
        </section>
        <section class="mt-6">
          <el-collapse v-model="activeName" accordion>
            <template v-for="menu in activeMenu.items">
              <template v-if="menu.child">
                <el-collapse-item :title="menu.title" :name="menu.title">
                  <section class="grid grid-cols-1 gap-5 mt-6">
                    <template v-for="child in menu.child">
                      <nuxt-link :to="child.link" class="text-sm text-Gray-b5 hover:text-Gray-b2 font-medium">
                        {{ child.title }}
                      </nuxt-link>
                    </template>
                  </section>
                </el-collapse-item>
              </template>
              <template v-else>
                <section class="py-3 border-b border-Gray-300">
                  <nuxt-link :to="menu.link" class="text-sm text-Gray-b2 hover:text-Gray-b2 font-medium">
                    {{ menu.title }}
                  </nuxt-link>
                </section>
              </template>
            </template>
          </el-collapse>
          <section class="mt-6">
            <a :href="`tel:${$t('app phone')}`" class="text-center block text-base font-medium text-Gray-b2 text-center">{{ $t('phone') }} : {{ $t('app phone') }}</a>
            <section class="mt-4">
            <h2 class="text-base text-center block font-medium text-Gray-b2 grid grid-cols-1 gap-2">{{ $t('my member in social') }} :
              <section class="flex items-center justify-center gap-3">
                <img src="/assets/images/logo/telegram.png" class="w-7" />
                <img src="/assets/images/logo/whatsapp.png" class="w-7" />
                <img src="/assets/images/logo/instagram.png" class="w-7"  />
              </section>
            </h2>
            </section>
          </section>
        </section>
      </el-drawer>
    </client-only>
  </header>
</template>

<script setup>
import menus from '@/sampleData/header.json'

const sideMenuIsOpen = ref(false)
const router = useRouter()
const activeName = ref('')
const activeIndex = ref('')
const {locale} = useI18n()
const locales = ref([
  { id: 1, value: 'fa', flag: 'fa.svg', label: 'فارسی'},
  { id: 2, value: 'en', flag: 'en.png', label: 'English'}
])
const activeLocale = computed(()=>{
  return locales.value.find(item=> item.value == locale.value)
})
const activeMenu = computed(() => {
  let menu = ''
  for (let item in menus) {
    if (item == locale.value) {
      menu = menus[item]
    }
  }
  return menu
})
const goLogin = () => {
  router.push({ path: '/login' })
}
const handleCommand = (e) => {
  locale.value = e
}

</script>

<style scoped>

</style>