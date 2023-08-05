<template>
        <div class="bg-Gray-b7 flex lg:flex-row flex-col">
            <SideBar/>
            <div class="w-full lg:max-w-[calc(100%-270px)] px-8 py-5">
                <slot/>
            </div>
        </div>
</template>
<script setup>
import SideBar from '@/components/Panel/Base/SideBar.vue'
    
</script>