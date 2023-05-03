<template>
<form @submit.prevent>
<legend>Форма для заполнения</legend>
  <div>Имя</div>
  <input v-model="person.name" type="text" name="name" required="required">
  <div>Фамилия</div>
  <input v-model="person.surname" type="text" name="surname">
  <div>Отчество</div>
  <input v-model="person.patronymic" type="text" name="patronymic">
  <div>Возраст</div>
  <input v-model="person.age" type="text" name="age">
  <div>Пол</div>
  <input v-model="person.sex" type="text" name="sex">
  <button v-on:click="btnForm">Отправить</button>
  <textarea v-model="jobs" type="text" name="xp" placeholder="Опыт работы"></textarea>
</form>
</template>

<script setup>
import {ref, reactive, computed} from 'vue'


const props = defineProps('input')


const person = reactive({
  name:"",
  surname:"",
  patronymic:"",
  age:"",
  sex:"",
  xp:""
})


const personData = ref({
  name:"",
  surname:"",
  patronymic:"",
  age:"",
  sex:"",
  xp:""
})


const jobs = computed({
  get() {
    return person.xp 
  },
  set(jobsList) {
     person.xp = jobsList
  }
})


const jobArray = computed({
  get() {
    return personData.value.xp.split(',')
  }
})


const btnForm = () => personData.value = JSON.parse(JSON.stringify(person))

</script>