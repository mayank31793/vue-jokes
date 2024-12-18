<template>
  <div class="container">
    <div class="cred-container">
      <div v-if="isLoginUser" class="login-container">
        <h2>Login User</h2>
        <div>
          <label for="email">Email</label><br />
          <input type="email" id="email" placeholder="Email" v-model="userEmail" />
          <p class="error-fields" v-if="store.state.errorMsg">* {{ store.state.errorMsg }}</p>
        </div>
        <div>
          <label for="password">Password</label><br />
          <input
            :type="isPasswordVisible ? 'text' : 'password'"
            id="password"
            placeholder="Password"
            v-model="userPassword"
          />
          <input
            type="checkbox"
            id="checkbox-showpassword"
            v-model="isPasswordVisible"
            @click="checkboxClicked"
          />
          <label for="checkbox-showpassword">Show Password</label>
        </div>
        <button @click="loginUser()">Login</button>
        <p class="register-text">First time User <span @click="switchRegister">Register</span></p>
      </div>
      <div v-if="isRegisterUser" class="register-container">
        <h2>Register User</h2>
        <div>
          <label for="email">Email</label><br />
          <input type="email" id="email" placeholder="Email" v-model="userEmail" />
          <p class="error-fields" v-if="store.state.errorMsg">* {{ store.state.errorMsg }}</p>
        </div>
        <div>
          <label for="password">Password</label><br />
          <input type="password" id="password" placeholder="Password" v-model="userPassword" />
          <input
            type="checkbox"
            id="checkbox-showpassword"
            v-model="isPasswordVisible"
            @click="checkboxClicked"
          />
          <label for="checkbox-showpassword">Show Password</label>
        </div>
        <button @click="registerUser()">Register</button>
        <p class="login-text">Already a user <span @click="switchLogin">Login </span></p>
      </div>
    </div>
  </div>
</template>

<script setup>
// imports from packages
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

// imports from packages assigns consts
const router = useRouter()
const store = useStore()

// variables declared
let isLoginUser = ref(false)
let isRegisterUser = ref(true)
let userEmail = ref('')
let userPassword = ref('')
let isPasswordVisible = ref(false)

// methods declarations
function switchLogin() {
  console.log('login')
  isRegisterUser.value = false
  isLoginUser.value = true
  isPasswordVisible.value = false
}

function switchRegister() {
  console.log('register')
  isLoginUser.value = false
  isRegisterUser.value = true
  isPasswordVisible.value = false
}

function registerUser() {
  let userDetails = {
    email: userEmail.value,
    password: userPassword.value,
  }
  store.dispatch('registerUser', userDetails)
  if (
    store.state.errorMsg == null &&
    (store.state.userEmailAfterSuccessfulLogin != undefined || null)
  ) {
    router.push('/jokes')
  }
}

function loginUser() {
  let userDetails = {
    email: userEmail.value,
    password: userPassword.value,
  }
  store.dispatch('loginUser', userDetails)
  if (
    store.state.errorMsg == null &&
    (store.state.userEmailAfterSuccessfulLogin != undefined || null)
  ) {
    router.push('/jokes')
  }
}

function checkboxClicked() {
  isPasswordVisible.value = !isPasswordVisible.value
}
</script>

<style scoped>
.container {
  background: linear-gradient(178.6deg, rgb(20, 36, 50) 11.8%, rgb(124, 143, 161) 83.8%);
  height: calc(100vh - 71px);
}
.cred-container {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
/* .container {
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
} */
.register-container,
.login-container {
  width: 400px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
}
.login-container h2,
.register-container h2 {
  text-align: center;
}
.register-container input,
.login-container input {
  width: 394px;
  height: 32px;
  margin-bottom: 20px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.register-container button,
.login-container button {
  width: 100%;
  height: 32px;
  border: none;
  color: white;
  background-color: rgb(30, 146, 247);
  border-radius: 4px;
  font-weight: bold;
  font-size: 15px;
}
.register-container button:hover,
.login-container button:hover {
  cursor: pointer;
}
.register-container label,
.login-container label {
  color: rgb(56, 58, 60);
  font-size: 15px;
  font-weight: bold;
}
.register-text span {
  color: rgb(44, 140, 249);
}
.register-text span:hover {
  cursor: pointer;
}
.login-text span {
  color: rgb(44, 140, 249);
}
.login-text span:hover {
  cursor: pointer;
}
.error-fields {
  margin: 0px;
  font-size: 10px;
  color: red;
  position: relative;
  top: -18px;
  font-weight: bold;
  padding-left: 5px;
}
#checkbox-showpassword {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 0px;
  position: relative;
  top: -16px;
}
label[for='checkbox-showpassword'] {
  position: relative;
  top: -16px;
  left: 3px;
}
</style>
