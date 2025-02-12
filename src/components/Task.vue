<template>
  <div class="flex flex-col">
  <li class="flex items-start justify-between gap-x-6 py-5 px-6">
    <div class="min-w-0">
      <div class="flex items-start gap-x-3">
        <p class="text-sm/6 font-medium text-gray-900">
          {{ newTask.title }}
        </p>
      </div>
    </div>

    <div class="flex flex-none items-center gap-x-4">
      <span
        data-cy="badge"
        class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
        :class="{ 'bg-green-100 text-green-800 ring-green-500/10': newTask.complete }"
      >
        {{ newTask.complete ? "complete" : "incomplete" }}
      </span>

      <div class="relative flex-none">
        <Menu>
          <template #trigger>
            <Button>
              <span class="sr-only">Open options</span>
              <svg
                class="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
                />
              </svg>
            </Button>
          </template>

          <MenuItem @click="markComplete"> Mark as complete </MenuItem>
          <MenuItem @click="deleteTask"> Delete Item </MenuItem>
          <MenuItem @click="editTask"> Edit Item </MenuItem>
          <MenuItem @click="addSubTask"> Add SubTask </MenuItem>
        </Menu>
      </div>
    </div>

  </li>
  <ul class="ml-10">
        <li v-for="subTask in newTask.subTasks" :key="subTask.id">
            <Task :task="subTask" />
        </li>
    </ul>
  </div>

</template>

<script setup>
import { ref } from "vue";

import Button from "@/components/Button.vue";
import Menu from "@/components/Menu.vue";
import MenuItem from "@/components/MenuItem.vue";
import { emitter } from "@/emitter";
import { useTasksStore } from "@/store/store";

const tasksStore = useTasksStore();

const props = defineProps({
  task: Object,
});

const newTask = ref(props.task);

const markComplete = () => {
  newTask.value.complete = true;
  tasksStore.completedTasks.push(newTask.value);
};

const deleteTask = () => {
    emitter.emit("deleteTask", newTask.value.id);
};

const editTask = () => {
    newTask.value.title = prompt("Edit task", newTask.value.title);
}

const addSubTask= () => {
    const subTask = prompt("Add subtask");
    if (subTask) {
        props.task.subTasks.push({
            id: props.task.subTasks.length,
            title: subTask,
            complete: false,
        });
    }
}
</script>
