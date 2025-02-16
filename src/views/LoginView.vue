<template>
<div class="flex items-center justify-center min-h-screen bg-gray-50">
    <div class="bg-white rounded-lg shadow-lg p-8 w-full sm:w-96">
        <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 mb-8">Iniciar sesión</h2>
        <form class="space-y-6" @submit.prevent="loginView">
            <div>
                <label class="block text-xl font-medium text-gray-900">Correo Electrónico</label>
                <div class="mt-2">
                    <input type="email" placeholder="Escribe tu Correo Electrónico" v-model="email" required
                        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-green-600 sm:text-sm" />
                </div>
            </div>
            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-xl font-medium text-gray-900">Contraseña</label>
                </div>
                <div class="mt-2">
                    <input type="password" min="6" placeholder="Escribe tu Contraseña" v-model="password" required
                        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-green-600 sm:text-sm" />
                </div>
            </div>
            <div class="text-sm">
                <router-link to="/" class="font-semibold text-green-600 hover:text-green-500">¿No tienes cuenta?</router-link>
            </div>
            <div class="flex items-center">
                <button type="submit"
                    class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                    Iniciar sesión
                </button>
            </div>
        </form>
    </div>
</div>
</template>



    
<script>
import { toast } from 'vue-sonner'
import {mapActions} from 'vuex'
export default {
    name:'RegisterView',
    data(){
        return{
            email: '',
            password: ''
        }   
    },
    methods: {
        ...mapActions(['login']),
        loginView(){
            this.login({email: this.email,password:this.password})
            if (this.login) {
                toast.success('Iniciando sesion')
                setTimeout(() => {
                    this.$router.push('/home')
                }, 1000);
            }
        }
    }
}
</script>
    
<style>
    
</style>