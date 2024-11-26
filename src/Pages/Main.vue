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
const verifieddoamin = ref(false);
const displayURL = ref(false);

const VerifiedDomains = [
    'https://mdviewer.yuanhau.com/',
    'https://pub-4a2940c7ae814b14901247f772d85856.r2.dev/',
    'https://0nas.yuanhau.com/~hw/',
    'https://yuanh.xyz/',
    'https://zz.yuanhau.com/',
    'https://yuanhau.com/',
    'https://assets.yuanhau.com/',
    'https://raw.githubusercontent.com/hpware/'
];

const isVerified = host && VerifiedDomains.some(domain => host.startsWith(domain));

if (isVerified) {
    verifieddoamin.value = true;
}
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
        if (!text) {
            displayError1.value = true
            displayError.value = '檔案無法讀取'
            loading.value = false
            return
        } else if (text.includes('Error 404 Object not found'))
        {
            displayError1.value = true
            displayError.value = '檔案不存在'
            loading.value = false
            return
        }
        md.value = marked.parse(text)
    } catch (e) {
        displayError.value = `Error: ${e}`
        displayError1.value = true
    } finally {
        setTimeout(() => {
            loading.value = false
        }, 2050)
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
        <h3>如何創立連結: <a href="https://mdviewer.yuanhau.com/?u=https://pub-4a2940c7ae814b14901247f772d85856.r2.dev/%E5%A6%82%E4%BD%95%E4%B8%8A%E5%82%B3%E6%AA%94%E6%A1%88.md">連結</a></h3>
        <GetLink />
    </div>
    <div v-else>
        <div v-if="verifieddoamin" style="color:#a4e2ff">
            <span>檔案來自開發者擁有的來源 <i class="bi bi-check-circle-fill" style="color:#4efe63" @click="displayURL = !displayURL"></i></span>
            <div class="popup" v-if="displayURL">
                    <span>{{ host }}</span>
            </div>
        </div>
        <div v-else style="color:#a4e2ff">
            <span>URL: {{ host }}</span>
        </div>
        <div v-html="md"></div>
    </div>
    </div>
    <div v-else-if="loading">
        <Loading />
    </div>
</template>
<style scoped>
.popup {
    transition: opacity 1s ease-in-out;
    color: #4efe63;
}
</style>