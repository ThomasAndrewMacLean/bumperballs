import create from 'zustand';

export const [useStore] = create((set) => ({
  showModal: true,
  setShowModal: (show) => set(() => ({ showModal: show })),
}));
