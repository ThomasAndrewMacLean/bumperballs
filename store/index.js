import create from 'zustand';

export const [useStore] = create((set) => ({
  showModal: true,
  setShowModal: (show) => {
    if (show) {
      document.querySelector('body').classList.add('modal-open');
    } else {
      document.querySelector('body').classList.remove('modal-open');
    }
    return set(() => ({ showModal: show }));
  },
}));
