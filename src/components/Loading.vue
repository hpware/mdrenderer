<script setup>
import { ref, onMounted } from "vue";
import { animate, scroll, stagger } from 'motion';
const loading = ref(null);
const dots = ref("...");
onMounted(() => {
    animate("li", { opacity: 1, y: [50, 0] }, { delay: stagger(0.05), duration: 0.5, repeat: Infinity, repeatDelay:0.8, ease: "easeInOut" });
});
</script>
<template>
  <h2>mdViewer</h2>
  <div class="center">
    <!--Loading Animation-->
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
<br/>
載入中{{ dots }}

</template>
<style scoped>
.loading {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: white;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  top:0;
  left:0;
  right:0;
  bottom:0;
}
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 50px;
  flex: 0;
  padding:0;
  margin:0;
}

li {
  width: 25px;
  height: 25px;
  border-radius: 50px;
  display: block;
  background-color: rgb(148, 212, 255);
  background-size: 200px 100px;
  opacity: 0;
  flex: 0 0 30px;
}

</style>