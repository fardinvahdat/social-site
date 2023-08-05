<template>
  <section class="bg-white">
    <section class="py-10 max-w-[1108px] mx-auto">
      <section class="grid grid-cols-1 gap-10 md:grid-cols-3 container">
        <template v-if="activeMenu">
          <section v-for="menu in activeMenu.items">
            <section>
              <h1 class="font-bold text-base text-Gray-b1">{{ menu.title }}</h1>
              <section
                class="grid grid-cols-1 gap-5 mt-6"
                v-if="menu.child.length"
              >
                <template v-for="child in menu.child">
                  <nuxt-link
                    :to="child.link"
                    class="text-sm text-Gray-b5 hover:text-Gray-b2 font-medium"
                  >
                    {{ child.title }}
                  </nuxt-link>
                </template>
              </section>
            </section>
          </section>
        </template>
        <section class="mt-10 col-span-full">
          <p class="text-sm text-Gray-b1 font-medium">
            {{ $t("app coppy policy") }}
          </p>
        </section>
      </section>
    </section>
  </section>
</template>

<script setup>
import menus from "@/sampleData/menu.json";

const { locale } = useI18n();
const activeMenu = computed(() => {
  let menu = "";
  for (let item in menus) {
    if (item == locale.value) {
      menu = menus[item];
    }
  }
  return menu;
});
</script>

<style scoped></style>
