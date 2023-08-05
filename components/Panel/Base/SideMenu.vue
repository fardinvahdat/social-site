<template>
  <nav class="mt-5">
    <ul>
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        class="mx-3 cursor-pointer"
        @click="activeRoute = item"
      >
        <NuxtLink
          :to="item.route"
          class="text-sm rounded-full h-10 w-full flex items-center px-4 justify-start hover:bg-gray-300"
          :class="
            activeRoute == item ? 'text-white bg-Primary' : 'text-Gray-b1'
          "
          >{{ item.title }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>
<script setup>
    import {ref} from 'vue';
    const activeRoute=ref(null)
    const menuItems=ref([
    {
        title: 'Submit Order',
        route: '/panel/orders',
        isActive:false
    },
    {
        title: 'Add Fund',
        route: '/panel/add-funds',
        isActive:false
    },
    {
        title: 'Transactions',
        route: '/panel/payments',
        isActive:false
    },
    {
        title: 'Orders',
        route: '/panel/orders/list',
        isActive:false
    },
    {
        title: 'Support',
        route: '/panel/support',
        isActive:false
    },
    {
        title: 'Profile',
        route: '/panel/profile',
        isActive:false
    },
    {
        title: 'Developers (API)',
        route: '/panel',
        isActive:false
    },
    {
        title: 'Cooperation in sales',
        route: '/panel/invite',
        isActive:false
    },
    {
        title: 'Log out',
        route: '/',
        isActive:false
    },
    ])
</script>
