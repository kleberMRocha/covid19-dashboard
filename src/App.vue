<script setup lang="ts">
import { ref } from 'vue';
import NavbarDashboarVue from './components/NavbarDashboar.vue';
import SelectEstados from './components/SelectEstados.vue';

const dataTemp = ref('');
const navTemp = ref(true);

</script>

<template>
  <v-app class="main-dashboard">
    <NavbarDashboarVue />
    <v-navigation-drawer style="width: 300px;" v-model="navTemp"  fixed bottom temporary>
      <v-list nav dense class="main-dashboard-nav">
       <SelectEstados />
       <v-date-picker mode="date" v-model="dataTemp" class="main-dashboard-nav-date-picker" />
       <v-btn  depressed color="blue">Aplicar Filtro</v-btn>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="n in 24" :key="n" cols="4">
            <v-card height="100"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.main-dashboard{
  width: 100vw;
  margin: 0;
  padding:0;

}
.main-dashboard-nav{
  margin-top: 18px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.main-dashboard-nav-date-picker{
  align-self: center;
}
</style>
