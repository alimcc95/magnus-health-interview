<template>
  <div class="p-8 space-y-8">
    <nav>   <RouterLink to="/">Home</RouterLink> | <RouterLink to="/completed">Complete</RouterLink></nav>
    <Header />

    <Tasks :tasks="todos" />

    <div>
      <p class="text-sm mb-1 font-medium">Brownie points:</p>
      <ul class="text-sm list-disc pl-4 text-gray-700">
        <li>Filters to hide/show completed tasks</li>
        <li>Allow users to add a due date to a task</li>
        <li>Allow reordering of tasks</li>
        <li>Allow subtasks to have subtasks</li>
        <li>Add additional cypress tests</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import Header from "@/components/Header.vue";
import Tasks from "@/components/Tasks.vue";
import { emitter } from "@/emitter";
import { onMounted, ref } from "vue";

/**
 * Digistorm frontend test main tasks
 * Add/remove/manipulate this array as needed to complete the test
 *
 * Reference of main tasks
 * - Allow the user to add a new task
 * - Allow users to delete a task
 * - Show the badge in a different color for completed tasks
 * - Allow users to edit the title of their task
 * - Allow users to add sub tasks
 * - Display completed tasks on a seperate page
 *
 *
 */

onMounted(() => {
  emitter.on("deleteTask", removeTask);
});
const todos = ref([
  {
    id: 1,
    title: "Allow the user to add a new task",
    complete: false,
    subTasks: [],
  },
  {
    id: 2,
    title: "Allow users to delete a task",
    complete: false,
    subTasks: [],
  },
  {
    id: 3,
    title: "Show the badge in a different color for completed tasks",
    complete: false,
    subTasks: [],
  },
  {
    id: 4,
    title: "Allow users to edit the title of their task",
    complete: false,
    subTasks: [],
  },
  {
    id: 5,
    title: "Allow users to add sub tasks",
    complete: false,
    subTasks: [],
  },
  {
    id: 6,
    title: "Display completed tasks on a seperate page",
    complete: false,
    subTasks: [],
  },
]);

const removeTask = (index) => {
  todos.value.splice(index, 1);
};
</script>

<style lang="scss" scoped></style>
