import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXUkAw6Zu_4iSB48KAOXH1zaXwumsRSgg",
  authDomain: "tuit-project.firebaseapp.com",
  projectId: "tuit-project",
  storageBucket: "tuit-project.appspot.com",
  messagingSenderId: "130192523665",
  appId: "1:130192523665:web:08c3b48c4f10ecb4a7da30",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
