import { ref } from 'vue'

export function useShortcut() {
    const shortcuts = ['Hoje', 'Semana', 'Mês'];
    const selectShortcut = ref(0);
    
    return { shortcuts, selectShortcut};
}