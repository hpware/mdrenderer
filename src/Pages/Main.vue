<script setup lang="ts">
import { marked } from 'marked'
import { onMounted, ref } from 'vue'
import GetLink from '../components/getLink.vue'
import Loading from '../components/Loading.vue'

const md = ref();
const displayError = ref();
const displayError1 = ref(false);
const host = new URLSearchParams(location.search).get('u');
const loading = ref(true);

async function getFile() {
    if (!host) {
        displayError1.value = true
        displayError.value = '沒有指定檔案'
        loading.value = false
        return
    }
    try {
        const response = await fetch(host)
        const text = await response.text()
        md.value = marked.parse(text)
    } catch (e) {
        displayError.value = `Error: ${e}`
        displayError1.value = true
    } finally {
        loading.value = false
    }
}
onMounted(() => {
        getFile();
})
</script>

<template>
    <div v-if="!loading">
        <div v-if="displayError1">
        <h1>錯誤</h1>
        <h3>{{ displayError }}</h3>
        <h3>關於此系統: <a href="https://mdviewer.yuanhau.com/?u=https://mdviewer.yuanhau.com/mds/about.md">連結</a></h3>
        <GetLink />
    </div>
    <div v-else>
        <div v-html="md"></div>
    </div>
    </div>
    <div v-else-if="loading">
        <Loading />
    </div>
</template>