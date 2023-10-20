<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router';

const email = ref('')
const password = ref('')
const router = useRouter()

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('Successfully registered!');
      router.push('/feed')
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message)
    })
}

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push('/')
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message)
    })
}
</script>

<template>
  <div>
    <div class="flex h-[90vh] justify-center items-center flex-col gap-3">
      <h1 class="text-xl font-semibold">Create an Account</h1>
      <p><input class="border-2 p-2 outline-none" type="text" placeholder="Email" v-model="email"></p>
      <p><input class="border-2 p-2 outline-none" type="Password" placeholder="Password" v-model="password"></p>
      <p><button class="bg-green-500 p-2 rounded-md text-white hover:bg-green-600 transition-all" @click="register">Submit</button></p>
      <p><button @click="signInWithGoogle">Sign In With Google</button></p>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>