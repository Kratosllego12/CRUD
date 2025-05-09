<script setup>
import {defineProps} from "vue";
import ArticleItem from "./article-item.component.vue";

defineProps({
  articles: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div v-for="article in articles" :key="article.id">
    <article-item :article="article"/>
  </div>
</template>

<style scoped></style>
