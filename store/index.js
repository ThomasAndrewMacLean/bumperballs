import create from 'zustand';

export const [useStore] = create((set, get) => ({
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
  order: { '150 cm': 4, '120 cm': 0 },
  setOrder: (amount, seize) => {
    const { order } = get();
    order[seize] = amount;
    return set(() => ({ order }));
  },
}));
