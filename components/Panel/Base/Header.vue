<template>
    <header class="flex justify-between">
        <div>
            <h2 class="border-b-Primary border-b-2 pb-1 text-lg text-Gray-b2 w-fit">
                <slot name="title"></slot>
            </h2>
        </div>
        <div class="gap-2 flex">
            <slot name="actions"></slot>
            <NuxtLink to="/" class="h-10 w-10 rounded-lg bg-white flex items-center justify-center hover:bg-opacity-75"><i class="isax isax-home-15 text-Gray-b3 text-xl"/></NuxtLink>
        </div>
    </header>
</template>
<script setup>
    
</script>