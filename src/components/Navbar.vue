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
    <router-link class="text-2xl font-semibold" to="/">
      TUIT Project
    </router-link>
    <nav class="navbar flex gap-4">
      <router-link class="text-xl font-semibold" active-class="active" to="/">Home</router-link>
      <router-link class="text-xl font-semibold" active-class="active" to="/feed">Feed</router-link>
      <router-link class="text-xl font-semibold" active-class="active" to="/register">Register</router-link>
      <router-link class="text-xl font-semibold" active-class="active" to="/sign-in">Login</router-link>
      <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.active {
  color: aquamarine;
}
</style>