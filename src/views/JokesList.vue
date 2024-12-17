<template>
  <div class="jokke-heading-button-container">
    <h2>Jokes List {{ dataResponse }}</h2>
    <button
      v-if="store.state.userEmailAfterSuccessfulLogin != undefined"
      @click="openAddJokePopup"
      class="add-joke-button"
    >
      Add Joke
    </button>
  </div>
  <div v-if="dataResponse.length == 0" class="no-joke-container">
    <p>No Joke added</p>
    <p>Make people laugh with your humour</p>
    <p v-if="store.state.userEmailAfterSuccessfulLogin == undefined">
      <RouterLink to="/register">Register/Login</RouterLink> here and continue
    </p>
    <div class="svg-icon">&#128522;</div>
  </div>
  <div v-else>
    <div v-for="joke in dataResponse" :key="joke.id" class="joke-list">
      <h4 class="joke-title">{{ joke.title }}</h4>
      <p class="joke-body" v-html="joke.body"></p>
      <span @click="deleteJoke(joke.id)" class="joke-delete">&times;</span>
      <div class="joke-response">
        <div class="joke-createdby">
          <p>{{ 'by - ' + joke.createdBy }}</p>
        </div>
        <div class="reaction-container">
          <p class="dad-joke reactions" @click="reactionAdded(joke.id, 'dadJoke')" title="Dad Joke">
            &#128526;<span>{{ joke.dadJoke }}</span>
          </p>
          <p class="bad-joke reactions" @click="reactionAdded(joke.id, 'badJoke')" title="Bad Joke">
            &#128530;<span>{{ joke.badJoke }}</span>
          </p>
          <p
            class="good-joke reactions"
            @click="reactionAdded(joke.id, 'goodJoke')"
            title="Good Joke"
          >
            &#128518;<span>{{ ' ' + joke.goodJoke }}</span>
          </p>
          <p
            class="joke edit-icon"
            title="Edit"
            v-if="store.state.userEmailAfterSuccessfulLogin == joke.createdBy"
            @click="updateJokePopup(joke.id, joke.body, joke.title)"
          >
            <span>&#9998;</span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="add-joke-container" v-if="isAddJokeOpen">
    <div class="add-joke-container-inner">
      <AddJoke
        @get-jokes-list-after-new-jokeAdded="getJokesListAfterNewJokeAdded"
        :type="type"
        :joke-description="jokeDescription"
        :joke-title="jokeTitle"
        :joke-id="jokeId"
      />
    </div>
  </div>
</template>

<script setup>
import AddJoke from '@/components/AddJoke.vue'
import { ref, onMounted } from 'vue'
import { collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

let dataResponse = ref([])
let isAddJokeOpen = ref(false)
let type = ref('')
let jokeTitle = ref('')
let jokeDescription = ref('')
let jokeId = ref(null)
const store = useStore()
const router = useRouter()

async function reactionAdded(id, type) {
  let obj = {}
  obj[type] = JSON.parse(JSON.stringify(dataResponse.value)).find((res) => res.id == id)[type] + 1
  if (store.state.userEmailAfterSuccessfulLogin) {
    await updateDoc(doc(db, 'Jokes', id), obj)
  } else {
    router.push('/register')
  }
}

function openAddJokePopup() {
  if (store.state.userEmailAfterSuccessfulLogin) {
    isAddJokeOpen.value = true
    type.value = 'add'
  } else {
    router.push('/register')
  }
}

function getJokesListAfterNewJokeAdded(data) {
  console.log('data > ', data)
  isAddJokeOpen.value = false
  getJokes()
}

async function getJokes() {
  dataResponse.value = []
  const querySnapshot = await getDocs(collection(db, 'Jokes'))
  querySnapshot.forEach((doc) => {
    dataResponse.value.push({
      id: doc.id,
      title: doc.data().title,
      body: doc.data().body,
      dadJoke: doc.data().dadJoke,
      badJoke: doc.data().badJoke,
      goodJoke: doc.data().goodJoke,
      isEdited: doc.data().isEdited,
      createdBy: doc.data().createdBy,
    })
  })
}

function deleteJoke(id) {
  let text = 'Are you sure you want to delete this ?'
  if (confirm(text) == true) {
    deleteDoc(doc(db, 'Jokes', id))
    getJokes()
  }
}

function updateJokePopup(id, body, title) {
  if (store.state.userEmailAfterSuccessfulLogin) {
    isAddJokeOpen.value = true
    type.value = 'update'
    jokeId.value = id
    jokeDescription.value = body
    jokeTitle.value = title
  } else {
    router.push('/register')
  }
}

// function updateJoke(joke) {
//   isAddJokeOpen.value = true
//   type.value = 'update'
//   jokeTitle.value = joke.title
//   jokeDescription.value = joke.body
// }

onMounted(() => {
  getJokes()
})
</script>

<style scoped>
.joke-title {
  margin: 0px 0px 10px 0px;
  font-size: 14px;
}
.joke-list {
  margin: 10px 10px;
  border-radius: 5px;
  box-shadow: 0px 1px 10px #ccc;
  padding: 10px 15px 0px 15px;
  position: relative;
}

.joke-list p {
  margin: 0;
}
.joke-response {
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  height: 43px;
  align-items: center;
  margin-top: 10px;
}
.joke-response .reactions {
  color: #379bff;
  background-color: #e4e4e4;
  margin: 2px 5px;
  border-radius: 5px;
  padding: 3px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  align-content: center;
}
.joke-response .reactions:hover {
  cursor: pointer;
}
.joke-response p span {
  font-size: 12px;
  padding: 0px 0px 3px 0px;
}
.joke-response .edit-icon {
  color: #379bff;
  transform: rotateZ(90deg);
}
.joke-response .edit-icon :hover {
  cursor: pointer;
}
.joke-response .edit-icon span {
  font-size: 20px;
}
.joke-createdby p {
  font-size: 13px;
  color: #757575;
}
.add-joke-container-inner {
  position: relative;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
  z-index: 2;
  border-radius: 5px;
  background-color: #fff;
  opacity: 1;
}
.add-joke-container {
  background-color: rgb(155, 155, 155);
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.add-joke-button {
  background-color: rgb(44, 140, 249);
  color: #fff;
  height: 30px;
  width: 100px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
}
.jokke-heading-button-container {
  display: flex;
  padding: 0px 10px;
  justify-content: space-between;
  align-items: center;
}
.jokke-heading-button-container button:hover {
  cursor: pointer;
  background-color: rgb(5, 135, 248);
}
.joke-delete {
  position: absolute;
  top: 7px;
  right: 10px;
  font-weight: bold;
  font-size: 25px;
}
.joke-delete:hover {
  cursor: pointer;
  color: rgb(246, 97, 97);
}
.joke-body {
  font-size: 14px;
  line-height: 20px;
}
.reaction-container {
  display: flex;
}
.no-joke-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.svg-icon {
  width: 40px;
  height: 40px;
  font-size: 40px;
}
</style>
