<script setup lang="ts">
import { storeToRefs } from 'pinia';
import NavbarDashboarVue from './components/NavbarDashboar.vue';
import { useCounterStore } from './store';

const { increment } = useCounterStore();
const { count } = storeToRefs(useCounterStore());


</script>

<template>
  <v-app>
    <NavbarDashboarVue />
    <v-main>
      <v-container>
        <v-row>
          {{count}}
          <v-col v-for="n in 24" :key="n" cols="4">
            <button @click="increment">+</button>
            <v-card height="100"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
