import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCart = create(
  persist(
    (set) => ({
      cart: [],
      setCart: (nuevoCarrito) => set(() => ({ cart: nuevoCarrito })),
      clearCart: () => set(() => ({ cart: [] })),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCart;
