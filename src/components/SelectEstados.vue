<script  lang="ts">
import { defineComponent, ref } from "vue";
import { Estados } from "../@types/Enums";

export default defineComponent({
    name: "SelectStados",
    setup() {
        const estados = Object.values(Estados);
        const select = ref('');

        return { estados, select }
    }
});
</script>

<template>
   <v-select v-model="select" :items="estados" label="Estados" dense solo />
</template>

<style scoped>

</style>
