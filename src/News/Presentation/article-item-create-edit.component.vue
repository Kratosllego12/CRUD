<script setup>
import {onMounted, ref} from 'vue';
import {ArticleService} from "../Application/article-api.service.js";
import router from "@/router.js";
import {useRoute} from "vue-router";

const articleService = new ArticleService();
const title = ref("");
const operation = ref("");
const date = ref("");
const isEditing = ref(false);

const routes = useRoute();
const id = ref(routes.params.id || '')

defineProps({
  existingArticle: {
    type: Object,
    default: () => ({title: "", operation: "", date:""})
  }
});

const saveArticle = async () => {
  const article = {
    title: title.value,
    operation: operation.value,
    date: date.value
  };

  try {
    if (id.value !== '') {
      const {status} = await articleService.updateArticle(id.value, article);
      if (status === 200) {
        alert("Operation updated successfully.");
        router.push("/article");
      }
    } else {

      const {status} = await articleService.createArticle(article);
      if (status === 201) {
        alert("Operation created successfully.");
        router.push("/article");
      }
    }
  } catch (error) {
    console.error("Error creating Operation:", error);
  }
};

onMounted(async () => {
  if (id.value !== 0) {
    const response = await articleService.getById(id.value);
    title.value = response.data.title;
    operation.value = response.data.operationType;
    date.value = response.data.date;
  }
})

</script>

<template>
  <label for="title">Title</label>
  <pv-input-text v-model="title"></pv-input-text>
  <p></p>
  <label for="title">Operation Type</label>
  <pv-input-text v-model="operation"></pv-input-text>
  <p></p>
  <label for="title">Date</label>
  <pv-input-text v-model="date"></pv-input-text>
  <p></p>
  <pv-button label="Save" @click="saveArticle"></pv-button>
</template>

<style scoped></style>
