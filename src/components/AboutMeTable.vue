<template>
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
import { computed } from 'vue';

const props = defineProps(['personData'])

const NameSurPat = computed({
  get() {
    return props.personData.name + ' ' + props.personData.surname + ' ' + props.personData.patronymic
  }
})

</script>