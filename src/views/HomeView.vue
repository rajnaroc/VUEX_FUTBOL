<template>
<div class="flex items-center gap-10 min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <h1 class="mt-10 text-center text-3xl font-bold tracking-tight text-gray-900">Bienvenido {{ this.user.email }}</h1>
    <button @click="logout" class="flex w-40 justify-center rounded-md bg-red-400 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">cerrar sesion</button>
</div>
</template>

<script>
import { mapState} from 'vuex'
import { auth } from '@/db/firebase'
import { signOut } from 'firebase/auth'
export default {
    name: 'HomeView',
    data(){
        return{

        }
    },
    computed:{
        ...mapState(['user'])
    },
    methods:{
        logout(){
            signOut(auth)
            this.$router.push('/login')
        }
    }
}
</script>

<style>

</style>