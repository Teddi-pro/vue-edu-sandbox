<template>

<h1>Hello</h1>
<p>Im living in Russia</p>
<strong>ITS MY COUNTRY!!!</strong>
<router-link to="/"><button>Back</button></router-link>
<AboutMeInput :inputs="input"></AboutMeInput>
<AboutMeTable :person-data="personData"></AboutMeTable>
<div>
  <ul>
    <li v-for="(item, index) in jobArray">
       Профессия-{{ ++index }}:{{ item }}
    </li>
  </ul>
</div>
</template>


<script setup>
import {ref, reactive, computed} from 'vue'
import AboutMeTable from './AboutMeTable.vue';
import AboutMeInput from './AboutMeInput.vue';


</script>