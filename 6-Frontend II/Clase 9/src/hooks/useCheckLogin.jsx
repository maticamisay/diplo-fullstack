import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserLogin from "../store/useUserLogin";

const useCheckLogin = () => {
  const { isLogged, user } = useUserLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
  }, []);

  return {
    isLogged,
    user,
  };
};

export default useCheckLogin;
