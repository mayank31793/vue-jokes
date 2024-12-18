<template>
  <div class="add-joke-component-container">
    <h2 v-if="type == 'add'">Add Joke</h2>
    <h2 v-if="type == 'update'">Update Joke</h2>
    <span class="cancel-add-joke" @click="closeAddJoke">&times;</span>
    <div class="joke-title">
      <label for="joke-title">Title</label><br />
      <input type="text" id="joke-title" v-model="addJokeTitle" />
    </div>
    <div class="joke-description">
      <label for="joke-description">Joke Description</label><br />
      <textarea id="joke-description" v-model="addJokeDescription" @keyup="msg"></textarea>
    </div>
    <button @click="addJoke" v-if="type == 'add'">Add Joke</button>
    <button @click="updateJoke" v-if="type == 'update'">Update Joke</button>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps, onMounted } from 'vue'
import { doc, collection, addDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { useStore } from 'vuex'

let addJokeTitle = ref('')
let addJokeDescription = ref('')
let addJokeId = ref(null)
const emit = defineEmits(['closeAddJoke'])
const store = useStore()

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  jokeTitle: {
    type: String,
    required: true,
  },
  jokeDescription: {
    type: String,
    required: true,
  },
  jokeId: {
    type: Number,
    required: true,
  },
})

onMounted(() => {
  addJokeTitle.value = props.jokeTitle
  addJokeDescription.value = props.jokeDescription
  addJokeId.value = props.jokeId
  console.log(
    store,
    store.state.userEmailAfterSuccessfulLogin,
    addJokeId.value,
    addJokeDescription.value,
    addJokeTitle.value,
  )
})

function msg() {
  console.log('jokeDescription >', addJokeDescription.value)
}

function closeAddJoke() {
  emit('getJokesListAfterNewJokeAdded', false)
  addJokeTitle.value = ''
  addJokeDescription.value = ''
  addJokeId.value = null
}

async function addJoke() {
  await addDoc(collection(db, 'Jokes'), {
    title: addJokeTitle.value,
    body: addJokeDescription.value.replaceAll('\n', '<br />'),
    dadJoke: 0,
    badJoke: 0,
    goodJoke: 0,
    isEdited: false,
    createdBy: store.state.userEmailAfterSuccessfulLogin,
  })
  closeAddJoke()
}

async function updateJoke() {
  await updateDoc(doc(db, 'Jokes', addJokeId.value), {
    title: addJokeTitle.value,
    body: addJokeDescription.value.replaceAll('\n', '<br />'),
    dadJoke: 0,
    badJoke: 0,
    goodJoke: 0,
    isEdited: false,
    createdBy: store.state.userEmailAfterSuccessfulLogin,
  })
  closeAddJoke()
}
</script>

<style scoped>
.add-joke-component-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
.joke-title,
.joke-description {
  width: 100%;
}
.joke-title input,
.joke-description textarea {
  width: 97%;
  margin-bottom: 15px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.joke-description textarea {
  height: 80px;
}
.joke-title label,
.joke-description label {
  color: rgb(56, 58, 60);
  font-size: 15px;
  font-size: 15px;
}

.add-joke-component-container button {
  width: 100%;
  height: 30px;
  border: none;
  color: white;
  background-color: rgb(30, 146, 247);
  border-radius: 4px;
  font-weight: bold;
}

.add-joke-component-container button:hover {
  cursor: pointer;
  background-color: rgb(5, 135, 248);
}

.cancel-add-joke {
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  right: 10px;
  top: 10px;
}

.cancel-add-joke:hover {
  cursor: pointer;
  color: red;
}
</style>
