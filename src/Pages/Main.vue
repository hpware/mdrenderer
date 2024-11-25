<script setup lang="ts">
import { marked } from 'marked'
import { onMounted, ref } from 'vue'
import GetLink from '../components/GetLink.vue';

const md = ref();
const displayError = ref();
const displayError1 = ref(false);
const host = new URLSearchParams(location.search).get('u');

async function getFile() {
    try {
        const response = await fetch(host);
        const text = await response.text();
        md.value = marked.parse(text);
    } catch (e) {
        displayError.value = e;
        displayError1.value = true;
    }
}

onMounted(() => {
    if (!host) {
        displayError1.value = true;
        displayError.value = '沒有指定檔案';
    } else {
        getFile();
    }
})
</script>
<template>
    <div v-if="displayError1">
        <h1>錯誤</h1>
        <h3>{{displayError}}</h3>
        <GetLink />
    </div>
    <div>
        <div v-html="md" v-ref="md"></div>
    </div>
</template>