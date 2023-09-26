import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useUserLogin = create(
  persist(
    (set) => ({
      isLogged: false,
      user: {},
      setIsLogged: (isLogged) => set(() => ({ isLogged: isLogged })),
      setUser: (user) => set(() => ({ user: user })),
    }),
    {
      name: "user-login-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useUserLogin;
