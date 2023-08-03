<template>
<h1>Hello</h1>
<p>Im living in Russia</p>
<strong>ITS MY COUNTRY!!!</strong>
<router-link to="/"><button>Back</button></router-link>
<AboutMeInput @btn-form= "btnForm"></AboutMeInput>
<AboutMeTable :person-data="personData"></AboutMeTable>
<div>
  <ul>
    <li v-for="(item, index) in jobArray">
       Профессия-{{ ++index }}:{{ item }}
    </li>
  </ul>
</div>
</template>

<style>
body {
  background-color: black;
}
</style>

<script setup>
import {ref, reactive, computed} from 'vue'
import AboutMeTable from './AboutMeTable.vue';
import AboutMeInput from './AboutMeInput.vue';

const personData = ref({
  name:"",
  surname:"",
  patronymic:"",
  age:"",
  sex:"",
  xp:""
})


const jobArray = computed({
  get() {
    return personData.value.xp.split(',')
  }
})

const btnForm = (person) => personData.value = JSON.parse(JSON.stringify(person))


</script>