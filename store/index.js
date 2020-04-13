import create from 'zustand';

export const [useStore] = create((set) => ({
  showModal: false,
  setShowModal: (show) => {
    if (show) {
      document.querySelector('body').classList.add('modal-open');
    } else {
      document.querySelector('body').classList.remove('modal-open');
    }
    return set(() => ({ showModal: show }));
  },
  showPricesFor: '',
  setShowPricesFor: (day) => {
    return set(() => ({ showPricesFor: day }));
  },
}));
