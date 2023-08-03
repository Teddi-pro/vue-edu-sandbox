<template>
<input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style>
input {
    border: 5px solid rebeccapurple;
    color: rgb(247, 0, 255);
    background-color: black;
}
</style>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>