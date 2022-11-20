import { ref, watch } from 'vue'
import { useGlobalStore } from '../store';

export function useShortcut() {
    const shortcuts = ['Hoje', 'Semana', 'Mês'];
    const selectShortcut = ref(0);

    const { setShortcut } = useGlobalStore();

    watch(selectShortcut, () => setShortcut(selectShortcut.value));
    
    return { shortcuts, selectShortcut};
}