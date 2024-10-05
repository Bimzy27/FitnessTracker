import { defineStore } from 'pinia'

export const useActiveViewStore = defineStore('activeView', {
  state: () => {
    return { activeView: 'profile' }
  },
  actions: {
    setActiveView(view:string) {
      this.activeView = view
    }
  }
})