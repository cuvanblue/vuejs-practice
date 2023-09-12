<script setup>
import Header from './components/Header/Header.vue';
import Main from './components/Main/Main.vue';
</script>

<template>
  <div class="app-container">
    <Header />
    <Main class="main" />
  </div>
</template>

<style >
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  font-size: 62.5%;
}

.main {
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
}
</style>
