<template>
  <div class="default-layout">
    <div class="content-wrapper">
      <main class="main-content">
        <RouterView/>
      </main>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import AppHeader from './the-header.component.vue';
import AppFooter from './the-footer.component.vue';
import Sidebar from './the-sidebar.component.vue';

const showSidebar = ref(true);

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};
</script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrapper {
  display: flex;
  flex: 1;
}

.main-content {
  flex: 1;
  padding: 1rem;
}

.toggle-button {
  margin: 1rem;
  padding: 0.5rem;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
