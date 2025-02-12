<template>
  <div data-cy="tasks" class="bg-white sm:rounded-lg border border-gray-200">
    <div
      class="flex justify-between items-center px-4 py-6 sm:px-6 border-b border-gray-200"
    >
      <h3
        class="text-base/7 font-semibold text-gray-900 flex justify-between items-center w-full"
      >
        My tasks
      </h3>
      <div class="flex mb-4 p-4 rounded-full">
        <input
          v-model="newTask"
          @keyup.enter="addTodo"
          type="text"
          placeholder="Add a new todo"
          class="flex-grow rounded-full bg-grey"
        />
        <ActionButton label="Add" color="bg-teal" @click="addTodo" />
      </div>
    </div>

    <ul role="list" class="divide-y divide-gray-200">
      <span v-for="task in tasks" :key="task.id">
        <Task :task="task" v-if="!task.complete" />
      </span>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Task from "@/components/Task.vue";
import ActionButton from "@/components/ActionButton.vue";

const props = defineProps({
  tasks: Array,
});

const newTask = ref("");

const addTodo = () => {
  if (newTask.value.trim() !== "") {
    props.tasks.push({
      id: props.tasks.length,
      title: newTask.value,
      complete: false,
      subtasks: [],
    });
    newTask.value = "";
  }
};
</script>
