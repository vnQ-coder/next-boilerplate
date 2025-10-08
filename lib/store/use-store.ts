import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// Example counter store
interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useCounterStore = create<CounterStore>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set({ count: 0 }),
      }),
      {
        name: "counter-storage",
      }
    )
  )
);

// Example user store
interface User {
  id: string;
  name: string;
  email: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set({ user }),
        clearUser: () => set({ user: null }),
      }),
      {
        name: "user-storage",
      }
    )
  )
);

// Example modal store
interface ModalStore {
  isOpen: boolean;
  modalType: string | null;
  modalData: any;
  openModal: (type: string, data?: any) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>()(
  devtools((set) => ({
    isOpen: false,
    modalType: null,
    modalData: null,
    openModal: (type, data = null) =>
      set({ isOpen: true, modalType: type, modalData: data }),
    closeModal: () =>
      set({ isOpen: false, modalType: null, modalData: null }),
  }))
);

