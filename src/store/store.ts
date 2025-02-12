import { defineStore } from "pinia";

// I would save everything in the store here and re-structure but havent had time

export const useTasksStore = defineStore('store', {
    state: () => ({
      completedTasks: [],
    }),
    persist: true,
  })