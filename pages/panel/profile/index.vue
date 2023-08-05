<template>
    <section class="profile">
        <Header>
            <template #title>Profile</template>
        </Header>
        <div class="w-full bg-white mt-6 rounded-xl lg:min-h-[calc(100vh-100px)] min-h-[calc(100vh-185px)] flex flex-col gap-6 pt-10 items-center">
            <div class="max-w-[400px] flex flex-col gap-2 w-full">
                <label class="text-[14px] text-Gray-b3 font-medium">Insert your phone number</label>
                <el-input type="number" v-model="state.mobile" placeholder="Insert your phone number" clearable />
            </div>
            <div class="max-w-[400px] flex flex-col gap-2 w-full">
                    <label class="text-[14px] text-Gray-b3 font-medium">Insert New password(optional)</label>
                    <el-input type="password" v-model="state.newPassword" placeholder="Insert New password" 
        show-password />
                </div>
                <div class="max-w-[400px] flex flex-col gap-2 w-full">
                    <button class="px-10 h-[40px] sm:py-[5px] rounded-lg transition delay-50 cursor-pointer min-w-fit text-center w-fit sm:text-sm text-sm py-5 bg-Primary text-white">
                        Submit
                    </button>
                </div>
        </div>
    </section>
</template>
<script setup>
import Header from '@/components/Panel/Base/Header.vue'
import { useUserStore } from '@/store/user'
import {ref} from 'vue'
definePageMeta({
    layout: 'panel'
})

//state

const state=ref({
    mobile:'',
    newPassword:''
})
const userState = useUserStore()
const { user } = userState;

//mounted 


onMounted(()=>{
    state.value.mobile=user.mobile
})
    
</script>