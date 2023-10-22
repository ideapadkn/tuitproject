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
    <div class="flex h-[90vh] justify-center items-center">
      <form class="form w-[400px]" @submit.prevent>
        <div class="form-box flex flex-col gap-3 p-4">
          <h1 class="text-xl font-semibold text-center mb-5">Create an Account</h1>
          <div class=" form-box__item flex flex-col gap-1">
            <label class="form-box__item-label">Email</label>
            <input class="form-box__item-input border-2 p-2 outline-none" type="text" placeholder="Email" v-model="email">
          </div>
          <div class=" form-box__item flex flex-col gap-1">
            <label class="form-box__item-label">Password</label>
            <input class="form-box__item-input border-2 p-2 outline-none" type="Password" placeholder="Password"
              v-model="password">
          </div>
          <div class="text-center mt-5"><button
              class="bg-green-500 p-2 rounded-md text-white hover:bg-green-600 transition-all"
              @click="register">Submit</button></div>
          <div class="text-center"><button @click="signInWithGoogle">Sign In With Google</button></div>
        </div>
      </form>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.form {
  &-box {
    background-color: transparent;
    border: 2px solid rgba(0, 0, 0, .5);
    border-radius: 20px;
    backdrop-filter: blur(15px);
    position: relative;
  }
}
</style>