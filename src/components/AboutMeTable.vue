<template>
    <table>
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

<style>
  table {
    border: 5px solid green;
    width: 400px;
    height: 200px;
  }
  th {
    border: 3px solid green;
    height: 50px;
  }
  td {
    color: rgb(247, 0, 255);
    border: 5px solid green;
  }
</style>

<script setup>
import { computed } from 'vue';

const props = defineProps(['personData'])

const NameSurPat = computed({
  get() {
    return props.personData.name + ' ' + props.personData.surname + ' ' + props.personData.patronymic
  }
})

</script>