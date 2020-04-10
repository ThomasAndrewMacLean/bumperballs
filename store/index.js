import create from 'zustand';

export const [useStore] = create((set) => ({
  showModal: false,
  setShowModal: (show) => set(() => ({ showModal: show })),
}));
