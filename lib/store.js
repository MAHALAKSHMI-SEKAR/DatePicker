import { create } from 'zustand';

const useDateStore = create((set) => ({
  selectedDates: [],
  addDate: (date) =>
    set((state) => ({
      selectedDates: [...state.selectedDates, date],
    })),
  removeDate: (date) =>
    set((state) => ({
      selectedDates: state.selectedDates.filter((d) => d !== date),
    })),
}));

export default useDateStore;
