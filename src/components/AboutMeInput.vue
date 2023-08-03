<template>
<form @submit.prevent>
<legend>Форма для заполнения</legend>
  <div>Имя</div>
  <InputGui v-model="person.name" type="text" name="name" required="required"/>
  <div>Фамилия</div>
  <InputGui v-model="person.surname" type="text" name="surname"/>
  <div>Отчество</div>
  <InputGui v-model="person.patronymic" type="text" name="patronymic"/>
  <div>Возраст</div>
  <InputGui v-model="person.age" type="text" name="age"/>
  <div>Пол</div>
  <InputGui v-model="person.sex" type="text" name="sex"/>
  <button v-on:click="$emit('btnForm', person)">Отправить</button>
  <textarea v-model="jobs" type="text" name="xp" placeholder="Опыт работы"></textarea>
</form>
</template>

<style>
  div {
   color: rgb(128, 0, 255);
   background-color: black;
   height: auto;
   width: auto;
  }
  button {
    color: rgb(128, 0, 255);
    background-color: black;
  }
  textarea {
    color: rgb(247, 0, 255);
    background-color: black;
    border: 5px solid green;
  }
</style>

<script setup>
import {ref, reactive, computed} from 'vue'
import InputGui from './gui/InputGui.vue';


const person = reactive({
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

</script>