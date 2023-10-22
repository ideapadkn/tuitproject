<script setup>
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router';

const isLoggedIn = ref(false)
const router = useRouter()

let auth;
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/')
  })
}
</script>

<template>
  <div class="flex justify-between items-center">
    <router-link class="text-2xl font-semibold text-green-500" to="/">
      TUIT Project
    </router-link>
    <nav class="navbar flex gap-4 items-center">
      <router-link class="text-xl font-semibold hover:text-green-300" active-class="active" to="/">Home</router-link>
      <router-link class="text-xl font-semibold hover:text-green-300" active-class="active" to="/feed">Feed</router-link>
      <router-link v-if="!isLoggedIn" class="text-xl font-semibold hover:text-green-300" active-class="active"
        to="/register">Register</router-link>
      <router-link v-if="!isLoggedIn" class="text-xl font-semibold hover:text-green-300" active-class="active"
        to="/sign-in">Login</router-link>
      <button @click="handleSignOut" class="bg-red-500 p-2 rounded-md text-white hover:bg-red-600 transition-all"
        v-if="isLoggedIn">Sign Out</button>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.active {
  color: rgb(34 197 94);
}
</style>