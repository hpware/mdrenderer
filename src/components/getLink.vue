<script setup lang="ts">
import { ref, onMounted } from 'vue';

const form = ref({ url: '' });
const host = new URL(location.href).host;
const url = ref();

function getLink() {
    if (!form.value.url.includes("https://") || !form..value.url.includes("http://")) {
        alert("請輸入https 或 http 開頭的連結");
        return;
    }
    url.value = "https://" + host + "/?u=" + form.value.url;
    navigator.clipboard.writeText(url.value);
    alert("連結已複製到剪貼簿");
}
</script>
<template>
    <h2>創立連結</h2>
    <form @submit.prevent="getLink">
        <input type="text" v-model="form.url" placeholder="輸入MD檔案的網址" required />
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