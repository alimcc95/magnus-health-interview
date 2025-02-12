<script setup>
import { RouterLink } from "vue-router";
import Task from "@/components/Task.vue";
import { useTasksStore } from "@/store/store";
const tasksStore = useTasksStore();
</script>

<template>
  <nav>
    <!-- TODO: This should be nav component -->
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/completed">Complete</RouterLink>
  </nav>
  <div class="completed-tasks">
    <h1>Completed Tasks</h1>
    <ul v-if="tasksStore.completedTasks.length">
      <li v-for="task in tasksStore.completedTasks" :key="task.id">
        <Task :task="task" />
      </li>
    </ul>
    <div v-else>
      <p>No completed tasks</p>
    </div>
  </div>
</template>
