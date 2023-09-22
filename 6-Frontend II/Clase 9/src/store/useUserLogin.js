import { create } from "zustand";

const useUserLogin = create((set) => ({
  isLogged: false,
  user: {
    name: "John Doe",
    rol: "admin",
  },
  setIsLogged: (isLogged) => set(() => ({ isLogged: isLogged })),
  setUser: (user) => set(() => ({ user: user })),
}));

export default useUserLogin;
