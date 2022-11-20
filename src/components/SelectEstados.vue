<script  lang="ts">
import { defineComponent, ref, watch } from "vue";
import { Estados } from "../@types/Enums";

import { useGlobalStore } from '../store/index';


export default defineComponent({
    name: "SelectStados",
    setup() {
        const estados = Object.values(Estados);
        const select = ref('');
        const { setUf } = useGlobalStore();
        watch(select, (() =>  setUf(select.value)));

        return { estados, select }
    }
});
</script>

<template>
   <v-select v-model="select" :items="estados" label="Estados" dense solo  />
</template>

<style scoped>

</style>
