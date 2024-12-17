<template>
  <header>
    <div class="wrapper">
      <div>
        <h2>Jokes For Fun</h2>
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/jokes">Jokes</RouterLink>
        <RouterLink v-if="store.state.userEmailAfterSuccessfulLogin == undefined" to="/register"
          >Register
        </RouterLink>
        <button
          v-if="store.state.userEmailAfterSuccessfulLogin != undefined"
          @click="showLogoutButton"
          class="logout-button"
        >
          {{ store.state.userEmailAfterSuccessfulLogin }}&nbsp;<span>&#129171;</span>
        </button>
        <button @click="logoutUser" v-if="isLogoutButtonVisible" class="logout-button-visible">
          Logout
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

let isLogoutButtonVisible = ref(false)
const router = useRouter()
const store = useStore()
let auth

onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    console.log('user status > ', user)
    if (user) {
      store.commit('authenticateUser', true)
      router.push('/jokes')
    } else {
      store.commit('authenticateUser', false)
    }
  })
})

function showLogoutButton() {
  isLogoutButtonVisible.value = !isLogoutButtonVisible.value
}

function logoutUser() {
  signOut(auth).then(() => {
    store.commit('authenticateUser', false)
    router.push('/register')
    isLogoutButtonVisible.value = !isLogoutButtonVisible.value
  })
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: baseline;
  padding: 0px 15px;
}
.wrapper a {
  padding: 4px 10px;
  text-decoration: none;
  color: rgb(102, 238, 238);
  font-size: 15px;
  font-weight: bold;
}
.wrapper h2 {
  color: azure;
}
.wrapper a:hover {
  cursor: pointer;
  background-color: rgb(77, 77, 77);
}
.router-link-exact-active {
  color: rgb(181, 181, 181);
  background-color: rgb(93, 93, 93);
  border-radius: 3px;
  padding: 4px 6px;
}
header {
  background-color: #42273b;
}
.logout-button {
  margin-left: 10px;
  background-color: transparent;
  border-radius: 3px;
  padding: 4px 6px;
  border: none;
  color: rgb(102, 238, 238);
  font-size: 15px;
  font-weight: bold;
}
.logout-button:hover {
  cursor: pointer;
  background-color: rgb(77, 77, 77);
}
.logout-button-visible {
  position: absolute;
  background-color: #e0d8de;
  border: none;
  color: #db324d;
  border-radius: 4px;
  width: 100px;
  height: 30px;
  top: 50px;
  right: 20px;
  font-weight: bold;
}
.logout-button-visible:hover {
  cursor: pointer;
  background-color: #beb6bc;
}
</style>
