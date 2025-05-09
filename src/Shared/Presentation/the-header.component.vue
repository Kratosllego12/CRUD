<template>
  <header class="header">
    <h1>{{ $t('message.hello', {user: 'Naldo'}) }}</h1>
    <LanguageSwitcher/>
  </header>
</template>

<script setup>
import LanguageSwitcher from '@/Shared/Presentation/language-switcher.component.vue'
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #2196f3;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
