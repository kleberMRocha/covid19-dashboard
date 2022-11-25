<script  lang="ts">
import { defineComponent } from "vue";
import { useShortcut } from '../Composables/useShortcuts';
import SelectEstados from "./SelectEstados.vue";

export default defineComponent({
    name: "NavbarDashboar",
    setup() {
        const { selectShortcut, shortcuts } = useShortcut();
        const a = true;
        return { selectShortcut};
    },
    components: { SelectEstados, }
});
</script>

<template>
    <v-app-bar class="pa-2" color="blue">
        <v-row align="center">
            <v-col class="d-flex" cols="12" sm="6">
            </v-col>
        </v-row>
    </v-app-bar>
</template>
<style scoped>

</style>
