import create from 'zustand'
import { AppState, State } from './types'


export const useAppStore = create<AppState>((set) => ({
    state: "form",
    setState: (state: State) => set({ state })
}))