<script  lang="ts">
import { defineComponent } from "vue";
import { useShortcut } from '../Composables/useShortcuts';
import SelectEstados from "./SelectEstados.vue";

export default defineComponent({
    name: "NavbarDashboar",
    setup() {
        const { selectShortcut, shortcuts } = useShortcut();
        return { selectShortcut, shortcuts };
    },
    components: { SelectEstados }
});
</script>

<template>
    <v-app-bar class="pa-2" color="blue">
        <v-row align="center">
            <v-col class="d-flex" cols="12" sm="6">
                <v-chip-group v-model="selectShortcut" active-class="primary--text">
                    <v-chip v-for="shortcut in shortcuts" :key="shortcut">
                        {{ shortcut }}
                    </v-chip>
                </v-chip-group>
            </v-col>
            <v-col class="d-flex pa-2 mt-4" cols="6" sm="3">
                <SelectEstados />
            </v-col>
        </v-row>
    </v-app-bar>
</template>
<style scoped>
</style>
