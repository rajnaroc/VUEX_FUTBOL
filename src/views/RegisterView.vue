<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <h2 class="mt-10 text-center text-4xl font-bold tracking-tight text-gray-900">Register</h2>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="registerView">
            <div>
                <label  class="block text-xl font-medium text-gray-900">Correo Electronico</label>
                <div class="mt-2">
                <input type="email" placeholder="Escribe tu Correo Eletronico" v-model="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
            </div>
            <div>
            <div class="flex items-center justify-between">
                <label for="password" class="block text-xl font-medium text-gray-900">Contraseña</label>
            </div>
            <div class="mt-2">
                <input type="password" min="6" placeholder="Escribe tu Contraseña" v-model="password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
        </div>
        <div class="text-sm">
                    <router-link to="/login" class="font-semibold text-indigo-600 hover:text-indigo-500">Tienes cuenta?</router-link>
        </div>
            <div class="flex items-center">
                <button type="submit" class="flex w-40 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registarse</button>
            </div>
        </form>
    </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import { toast } from 'vue-sonner'
export default {
    name:'RegisterView',
    data(){
        return{
            email: '',
            password: ''
        }   
    },
    methods: {
        ...mapActions(['register']),
        registerView(){
            this.register({email: this.email,password:this.password})
            if (this.register) {
                toast.success('Registrado el usuario')
                this.$router.push('/home')
            }
        }
        }
    }
</script>

<style>

</style>