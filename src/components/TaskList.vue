<template>
    <div>
    <h2>Список задач</h2>
    <ul>
    <TaskItem
    v-for="task in tasks"
    :key="task.id"
    :task="task"
    @toggle="toggleTask"
    />
    </ul>
    <input v-model="newTask">
    <button @click="addTask">Добавить задачу</button>
    </div>
   </template>
   <script lang="ts">
   import { defineComponent } from 'vue';
   import { Task } from '../models/Task';
   import TaskItem from './TaskItem.vue';
   export default defineComponent({
    components: { TaskItem },
    newTask :"",
    props: {
    tasks: {
    type: Array as () => Task[],
    required: true,
    },
    },
    methods: {
    toggleTask(task: Task) {
        this.$emit("toggle",task)
    },
    addTask(){
        this.$emit('addTask')
    }
    },
   });
   </script>