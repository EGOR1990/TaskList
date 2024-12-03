<template>
    <div>
    <h1>Трекер задач</h1>
    <TaskList :tasks="tasks" @toggle="toggleTask" @add = "addTask"/>
    </div>

   </template>
   <script lang="ts">
   import { defineComponent } from 'vue';
   import { Task } from '../models/Task';
   import TaskList from '../components/TaskList.vue';
   import { TaskStore } from '../stores/TaskStore';
   export default defineComponent({
    components: { TaskList },
    data() {
    return {
    taskStore: new TaskStore(),
    newTaskTitle: '',
    };
    },
    computed: {
    tasks(): Task[] {
    return this.taskStore.getTasks();
    },
    },
    methods: {
    toggleTask(task: Task) {
    this.taskStore.toggleTask(task.id);
    },
    addTask(message:string){
        this.taskStore.addTask(message)
    }
    },
   });
   </script>