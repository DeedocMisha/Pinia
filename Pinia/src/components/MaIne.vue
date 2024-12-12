<template>
  <div>
    <h1>Счетчик: {{ counterStore.count }}</h1>
    <button @click="counterStore.increment">+</button>
    <button @click="counterStore.decrement">-</button>
  </div>
</template>

<script>
import { useCounterStore } from "./stores/counter";

export default {
  setup() {
    const counterStore = useCounterStore();

    return { counterStore };
  },
};
</script>
