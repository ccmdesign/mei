import { defineStore } from 'pinia'

export const useComponentStore = defineStore({
  id: 'component-store',
  state: () => {
    return {
      activateDialogId: ref('XXX'),
    }
  },
  actions: {
  },
  getters: {
  },
})
