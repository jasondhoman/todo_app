<script setup lang="ts">
import { ref } from 'vue';
import TodoVue from './components/Todo.vue';

interface Todo {
  id: number;
  desc: string;
  isDone: boolean;
}

const todos = ref<Array<Todo>>([]);
const todo = ref('');

function addTodo() {
  let new_todo: Todo = {
    id: Date.now(),
    desc: todo.value,
    isDone: false,
  };
  todos.value?.push(new_todo);
  todo.value = '';
}

function clearDone() {
  todos.value = todos.value.filter((t) => !t.isDone);
  console.log(todos.value);
}

function removeTodo(index: number) {
  todos.value.splice(index, 1);
}

function toggleDone(todo: Todo) {
  todo.isDone = !todo.isDone;
}
</script>

<template>
  <div class="">
    <div
      class="flex bg-slate-900 items-center justify-center h-12 text-center mb-3"
    >
      <span class="text-slate-300 text-xl">Another TODO App</span>
    </div>

    <Transition name="slide" mode="in-out" appear>
      <div class="flex flex-row mx-auto my-4 justify-center">
        <form @submit.prevent="addTodo" class="flex">
          <input
            type="text"
            v-model="todo"
            class="rounded-md flex-1 w-96 mr-1"
          />
          <button class="btn" type="submit">Add</button>
        </form>
        <button class="btn" @click="clearDone">Clear Done</button>
      </div>
    </Transition>
    <TodoVue :todos="todos" :toggleDone="toggleDone" :removeTodo="removeTodo" />
  </div>
</template>

<style lang="postcss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

li {
  cursor: pointer;
}

.btn {
  @apply flex-initial whitespace-nowrap bg-transparent hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded mx-1;
}

.done {
  text-decoration: line-through;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.75s, transform 0.75s;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-30%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(30%);
}

.slidex-enter-active,
.slidex-leave-active {
  transition: opacity 0.75s, transform 0.75s;
}

.slidex-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.slidex-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slideup-enter-active,
.slideup-leave-active {
  transition: opacity 0.75s, transform 0.75s;
}

.slideup-enter-from {
  opacity: 0;
  transform: translateY(30%);
}

.slideup-leave-to {
  opacity: 0;
  transform: translateY(30%);
}

* {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
