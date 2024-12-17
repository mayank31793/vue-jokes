<template>
  <p>Add Jokes</p>
  <input type="text" v-model="jokeTitle" placeholder="Joke Title" />
  <input type="text" v-model="jokeBody" placeholder="Joke Description" />
  <input type="submit" value="Add Joke" @click="addJoke" />
</template>

<script setup>
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { ref } from 'vue'

let jokeTitle = ref('')
let jokeBody = ref('')

async function addJoke() {
  console.log('Joke Added')
  const docRef = await addDoc(collection(db, 'Jokes'), {
    title: jokeTitle.value,
    body: jokeBody.value,
  })
  console.log('Document written with ID: ', docRef.id)
}
</script>
