<template>
    <div class=" lg:hidden py-2 px-8 flex w-full justify-between items-center bg-white h-20">
        <button @click="isMenuOpen=!isMenuOpen"
                @blur="menuCollapseHandler">
            <i class="isax isax-menu-14 text-[30px]"/>
        </button>
        <h2>Logo</h2>
    </div>
    <div class="max-w-[270px] bg-white pt-7 pb-5 transition-all absolute lg:static lg:w-full lg:visible" @blur="menuCollapseHandler" :class="!isMenuOpen?'w-0 invisible':'visible w-full'">
        <section class="flex min-h-[calc(100vh-50px)] flex-col justify-between h-full">
            <section class="px-6 block lg:hidden text-end">
                <button class="ml-0" @click="menuCollapseHandler">

                    <i class="isax isax-close-circle text-2xl text-Gray-b3"/>
                </button>
            </section>
            <section>
            <img :src="user.avatar" class="w-[113px] h-[113px] border-2 border-Primary mb-5 mx-auto rounded-full p-1 object-cover"/>
            <h2 class="text-Gray-b3 text-base text-center">{{ user.username }}</h2>
                <h3 class="text-Primary text-[18px] mt-1 text-center font-semibold">Inventory : {{ user.inventory }}$</h3>
                <SideMenu/></section>
                <section>
                    <h6 class="text-Gray-b3 text-sm mx-3">All material and intellectual rights of this website are reserved for My Member site and any copying is illegal and will be prosecuted.</h6>
                </section>
        </section>
    </div>
</template>
<script setup>
import SideMenu from './SideMenu.vue'
import { useUserStore } from '@/store/user'
    import {ref} from 'vue' ;
    //state
    const state= useUserStore()
    const {user}=state;
    const isMenuOpen=ref(false)

    //methods

    const menuCollapseHandler=()=>{
        setTimeout(()=>{console.log('test blur')
            isMenuOpen.value=false
        },200)
    }
</script>