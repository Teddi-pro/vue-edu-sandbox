<template>

<h1>Hello</h1>
<p>Im living in Russia</p>
<strong>ITS MY COUNTRY!!!</strong>
<router-link to="/"><button>Back</button></router-link>
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
<div>
  <ul>
    <li v-for="(item, index) in jobArray">
       Профессия-{{ ++index }}:{{ item }}
    </li>
  </ul>
</div>
<table border="1" height="50" width="50">
  <caption>Таблица</caption>
  <tr>
    <th>ФИО</th>
    <th>Возраст</th>
    <th>Пол</th>
    <th>Опыт работы</th>
   </tr>
   <tr><td>{{ NameSurPat }}</td><td>{{ personData.age }}</td><td>{{ personData.sex }}</td><td>{{ personData.xp }}</td></tr>
   

</table>

</template>

<script setup>
import {ref, reactive, computed} from 'vue'

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

const btnForm = () => personData.value = JSON.parse(JSON.stringify(person))

const NameSurPat = computed({
  get() {
    return personData.value.name + ' ' + personData.value.surname + ' ' + personData.value.patronymic
  }
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


</script>