import { create } from 'zustand';

interface AsideState {
  open: boolean;
  closeAside: () => void;
  openAside: () => void;
}

const useAside = create<AsideState>((set) => ({
  open: false,
  closeAside: () => set({ open: false }),
  openAside: () => set({ open: true }),
}));

export default useAside;
