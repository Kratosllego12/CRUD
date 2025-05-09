<template>
  <div>
    <h2>Latest Operations</h2>
    <pv-button label="New Operation" @click="openNew"></pv-button>
    <pv-data-table :value="articles" paginator rows="10">
      <pv-column field="title" header="Title"></pv-column>
      <pv-column field="operation" header="Operation"></pv-column>
      <pv-column field="date" header="Date"></pv-column>
      <pv-column header="Actions">
        <template #body="slotProps">
          <pv-button icon="pi pi-trash" severity="danger" @click="deleteArticle(slotProps.data)" label="Delete"></pv-button>
        </template>
      </pv-column>
    </pv-data-table>
  </div>
</template>

<script setup>
import {onBeforeMount, reactive, ref} from 'vue';
import {ArticleAssembler} from "@/News/Application/article.assembler.js";
import {ArticleService} from "@/News/Application/article-api.service.js";
import router from "@/router.js";

const articles = ref([]);
const article = reactive({});
const articleService = new ArticleService();

onBeforeMount(async () => {
  await getData();
});

const getData = async () =>{
  articles.value = ArticleAssembler.toEntitiesFromResponse(await articleService.getAll());
}
const openNew = () => {
  router.push("/article/create")
};

const editArticle = (selected) => {
  router.push({name: "updateArticle", params: {id: selected.id}});
};


const deleteArticle = async(selected) => {
  const { status } = await articleService.deleteArticle(selected.id);
  if( status === 200 ) {
    alert("Article deleted successfully.");
  }
  else{
    alert("Error deleting article")
  }

  await getData();

};
</script>


<style scoped>
h2 {
  margin-bottom: 20px;
}
</style>
