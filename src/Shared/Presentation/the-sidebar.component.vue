<template>
  <aside
      :class="['sidebar', { 'collapsed': isCollapsed }]"
      aria-label="Main Navigation"
  >
    <button class="toggle-button" @click="toggleSidebar">
      {{ isCollapsed ? sidebarTexts.show : sidebarTexts.hide }}
    </button>
    <nav v-if="!isCollapsed">
      <ul>
        <li v-for="(item, index) in sidebarTexts.links" :key="index">
          <RouterLink :to="item.href">{{ item.text }}</RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import {ref} from "vue";

const isCollapsed = ref(false);

const sidebarTexts = ref({
  show: "Show Sidebar",
  hide: "Hide Sidebar",
  links: [
    {text: "Home", ariaLabel: "Home Section", href: "/"},
    {text: "News", ariaLabel: "News Section", href: "/article"},
    {text: "Products", ariaLabel: "Products Section", href: "/products"}
  ]
});

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #ececec;
  padding: 1rem;
  border-right: 1px solid #ddd;
  transition: width 0.3s ease-in-out;
}

.collapsed {
  width: 50px;
  overflow: hidden;
}

.toggle-button {
  background: #2196f3;
  color: #fff;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  width: 100%;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  margin: 0.5rem 0;
}

.sidebar a {
  text-decoration: none;
  color: #2196f3;
}
</style>
