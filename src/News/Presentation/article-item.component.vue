<script setup>
import {defineEmits, defineProps} from "vue";

const props = defineProps({
  article: {type: Object, required: true}
});

const emits = defineEmits(["show-tooltip"]);

async function shareArticle() {
  const shareData = {
    title: props.article.title,
    url: props.article.url
  };
  if (navigator.share) {
    try {
      await navigator.share(shareData);
      console.log("Article shared successfully");
    } catch (error) {
      console.error("Error sharing article:", error);
    }
  } else {
    try {
      await navigator.clipboard.writeText(props.article.url);
      emits("show-tooltip", props.article.url);
    } catch (error) {
      console.error("Copy to clipboard failed:", error);
    }
  }
}
</script>

<template>
  <pv-card class="m-2">
    <template #title>
      <p>{{ article.title }}</p>
      <p>{{ article.author }}</p>
    </template>
    <template #content>
      <p class="flex align-content-start flex-wrap mt-4">
        {{ article.description }}
      </p>
    </template>
    <template #footer>
      <div class="flex justify-content -webkit-box-sizing: border-box; justify-content: space-between;">
        <a :href="article.url" target="_blank">{{ $t('read-more') }}</a>
        <span class="p-spacer"></span>
        <pv-button
            :label="$t('article.share')"
            aria-label="Share article"
            class="p-button-text p-button-sm"
            icon="pi pi-share-alt"
            pv-tooltip="$t('article.copy-to-clipboard')"
            @click="shareArticle"/>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.p-button-sm {
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
}

.p-spacer {
  flex: 1 1 auto;
}

.image-fit {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>