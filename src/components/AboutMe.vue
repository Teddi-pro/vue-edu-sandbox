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
</form>
<table border="1" height="50" width="50">
  <caption>Таблица</caption>
  <tr>
    <th>Имя</th>
    <th>Фамилия</th>
    <th>Отчество</th>
    <th>Возраст</th>
    <th>Пол</th>
   </tr>
   <tr><td>{{ personData.name }}</td><td>{{ personData.surname }}</td><td>{{ personData.patronymic }}</td><td>{{ personData.age }}</td><td>{{ personData.sex }}</td></tr>
   

</table>

</template>

<script setup>
import {ref, reactive} from 'vue'

const person = reactive({
  name:"",
  surname:"",
  patronymic:"",
  age:"",
  sex:""
})

const personData = ref({
  name:"",
  surname:"",
  patronymic:"",
  age:"",
  sex:""
})

const btnForm = () => personData.value = JSON.parse(JSON.stringify(person))



</script>