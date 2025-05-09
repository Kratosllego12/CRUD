<script setup>
import { ref, computed, defineProps, defineEmits } from "vue";
import { FilterMatchMode } from "@primevue/core/api";

const props = defineProps({
  items: Array,
  title: Object,
  dynamic: Boolean,
  columns: Array,
});

const emits = defineEmits([
  "new-item-requested",
  "edit-item-requested",
  "delete-item-requested",
  "delete-selected-items-requested",
]);

const selectedItems = ref([]);
const filters = ref({ global: { value: null, matchMode: FilterMatchMode.CONTAINS } });

const newItem = () => emits("new-item-requested");
const editItem = (item) => emits("edit-item-requested", item);
const deleteItem = (item) => emits("delete-item-requested", item);
const deleteSelected = () => emits("delete-selected-items-requested", selectedItems.value);
</script>

<template>
  <h3>Manage {{ title.plural }}</h3>

  <pv-toolbar class="mb-4">
    <template #start>
      <pv-button class="mr-2" icon="pi pi-plus" label="New" severity="success" @click="newItem" />
      <pv-button :disabled="!selectedItems.length" icon="pi pi-trash" label="Delete" severity="danger"
                 @click="deleteSelected"/>
    </template>
    <template #end>
      <pv-button icon="pi pi-download" label="Export" severity="help"/>
    </template>
  </pv-toolbar>

  <pv-data-table
      v-model:selection="selectedItems"
      :filters="filters"
      :paginator="true"
      :rows="10"
      :rows-per-page-options="[5, 10, 20]"
      :value="items">
    <pv-column :exportable="false" selection-mode="multiple" style="width: 3rem"/>
    <slot name="custom-columns"></slot>
    <pv-column v-if="dynamic" v-for="column in columns" :key="column.field" :field="column.field" :header="column.header"/>
    <pv-column :exportable="false" style="min-width:8rem">
      <template #body="slotProps">
        <pv-button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editItem(slotProps.data)"/>
        <pv-button icon="pi pi-trash" outlined rounded severity="danger" @click="deleteItem(slotProps.data)"/>
      </template>
    </pv-column>
  </pv-data-table>
</template>
