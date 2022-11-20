import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('counter', {
  state: () => { return { 
    shortcut: 0,
    uf: ''
   } },
  getters :{
    globalFilter: (state) => {
      return {
        shortcut: state.shortcut,
        uf: state.uf
      }
    }
  },
  actions: { 
    setShortcut(shortcut: number){this.shortcut = shortcut;},
    setUf(uf: string){this.uf = uf;},
   }
});