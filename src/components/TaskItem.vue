<template>
    <li>
    <span :class="{ completed: task.completed }"
   @click="toggle">{{ task.title }}</span>
    </li>
   </template>
   <script lang="ts">
   import { defineComponent } from 'vue';
   import { Task } from '../models/Task';
   export default defineComponent({
    props: {
    task: {
    type: Object as () => Task,
    required: true,
    },
    },
    methods: {
    toggle() {
    this.$emit('toggle', this.task);
    },
    },
   });
   </script>
   <style>
   .completed {
    text-decoration: line-through;
   }
   </style>