import { create } from 'zustand';

interface WidthScreenState {
  widthScreen: number;
  setWidthScreen: (width: number) => void;
}

export const useWidthScreenStore = create<WidthScreenState>((set) => ({
  widthScreen: window.innerWidth,
  setWidthScreen: (width: number) => {
    set({ widthScreen: width });
  },
}));