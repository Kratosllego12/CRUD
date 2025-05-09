<template>
  <div class="home-view">
    <main class="main-content">
      <h1 class="title">{{ $t("home.title") }}</h1>
      <p class="welcome-message">{{ $t("home.welcome_message") }}</p>
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.main-content {
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 2rem;
  font-weight: bold;
}

.welcome-message {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}
</style>
