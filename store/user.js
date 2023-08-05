export const useUserStore = defineStore('user', ()=> {
    const user = ref({
        name: 'John',
        family: 'Doe',
        username: "09383847952",
        password: '',
        mobile: "09383847952",
        avatar: '/banners/person-with-phone.png',
        inventory:10,
    })
    const getUser = computed(user.value.name + ' ' + user.value.family)
    return {user}
})