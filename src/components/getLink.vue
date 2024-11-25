<script setup lang="ts">
import { ref } from 'vue';

const form = ref({ url: '' });
const host = new URL(location.href).host;
const url = ref();
const displayurl = ref();
const sf1 = ref(false);

function getLink() {
    if (!form.value.url.startsWith("https://") && !form.value.url.startsWith("http://")) {
        alert("請輸入https 或 http 開頭的連結");
        return;
    }
    url.value = "https://" + host + "/?u=" + form.value.url;
    navigator.clipboard.writeText(url.value);
    displayurl.value = url.value;
    sf1.value = true;
    alert("連結已複製到剪貼簿");
}
</script>
<template>
    <h2>創立連結</h2>
    <form @submit.prevent="getLink">
        <input type="text" v-model="form.url" placeholder="輸入MD檔案的網址" required />
        <button type="submit">創立連結</button>
    </form>
    <p v-if="sf1">{{ url.value }}</p>
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