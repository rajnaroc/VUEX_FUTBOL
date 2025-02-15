import { createStore } from 'vuex'
import { auth } from "@/db/firebase"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification} from "firebase/auth"
export default createStore({
  state: {
    user:{
      user: null
    },
    equipos: []
  },
  getters: {
  },
  mutations: {
    SET_USER_DATA(state,st){
      state.user = st
    }
  },
  actions: {
    async register({commit},data){
      try {
        const userCredential = await createUserWithEmailAndPassword(auth,data.email,data.password)
        commit("SET_USER_DATA",userCredential)
        await sendEmailVerification(userCredential.user)
        return true
      }
      catch(error){
        console.log(error);
        return false

      }
    },
    async login({commit},data){
      try {
        const userCredential = await signInWithEmailAndPassword(auth,data.email,data.password)
        commit("SET_USER_DATA",userCredential)
        return true
      }
      catch(error){
        console.log(error);
        return false
      }
    }
  },
  modules: {
  }
})
