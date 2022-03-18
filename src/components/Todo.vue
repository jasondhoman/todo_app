<script setup lang="ts">
interface Todo {
  id: number;
  desc: string;
  isDone: boolean;
}
interface Props {
  toggleDone: (todo: Todo) => void;
  removeTodo: (index: number) => void;
  todos: Array<Todo>;
}
defineProps<Props>();
</script>
<template>
  <TransitionGroup name="slidex" tag="ul" class="">
    <li
      v-for="(todo, index) in todos"
      :key="todo.id"
      title="Mark Complete"
      class="text-slate-400 grid grid-cols-3 max-w-lg mx-auto my-2 items-baseline px-3"
    >
      <h3
        :class="{ done: todo.isDone }"
        class="col-span-2"
        @click="toggleDone(todo)"
      >
        {{ todo.desc }}
      </h3>
      <button class="btn" @click="removeTodo(index)">Remove</button>
    </li>
  </TransitionGroup>
</template>
