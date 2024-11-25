<script setup lang="ts">
import { ref, onMounted } from 'vue';

const form = ref({ url: '' });
function getLink() {
    console.log(form.value.url);
}
</script>
<template>
    <h2>創立連結</h2>
    <form @submit.prevent="getLink">
        <input type="text" v-model="form.url" placeholder="輸入MD檔案的網址" />
        <button type="submit">創立連結</button>
    </form>
</template>
<style scoped>
input[type='text'] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 16px;
    margin-bottom: 10px;
}
</style>