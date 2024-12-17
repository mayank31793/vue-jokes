import { createStore } from 'vuex'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const store = createStore({
    state() {
        return {
            count: 0,
            userEmailAfterSuccessfulLogin: null,
            errorMsg: null
        }
    },
    mutations: {
        increment(state, payload) {
            state.count = state.count + payload
        },
        authenticateUser: function (state, payload) {
            if (payload == false) {
                state.userEmailAfterSuccessfulLogin = null
            }
        },
        registerFirstTimeUser(state, payload) {
            const auth = getAuth()
            state.errorMsg = null
            createUserWithEmailAndPassword(auth, payload.email, payload.password)
                .then((userCredential) => {
                    state.userEmailAfterSuccessfulLogin = userCredential.user.email
                    store.commit('authenticateUser', true)
                })
                .catch((error) => {
                    console.log(error)
                    state.errorMsg = error.code
                    const errorCode = error.code
                    const errorMessage = error.message
                    console.log('errorCode > ', errorCode)
                    console.log('errorMessage > ', errorMessage)
                })
        },
        loginExistingUser(state, payload) {
            const auth = getAuth()
            state.errorMsg = null
            signInWithEmailAndPassword(auth, payload.email, payload.password)
                .then((userCredential) => {
                    state.userEmailAfterSuccessfulLogin = userCredential.user.email
                    store.commit('authenticateUser', true)
                })
                .catch((error) => {
                    state.errorMsg = error.code
                    const errorCode = error.code
                    const errorMessage = error.message
                    console.log('errorCode > ', errorCode)
                    console.log('errorMessage > ', errorMessage)
                    // ..
                })
        }
    },
    actions: {
        registerUser(context, payload) {
            context.commit('registerFirstTimeUser', payload)
        },
        loginUser(context, payload) {
            context.commit('loginExistingUser', payload)
        }
    }
})

export default store 