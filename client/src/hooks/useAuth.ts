import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import type { LoginValues, RegisterValues } from "../types";
import authApi from "../service/auth";

// custom hook : kendi oluşturduğumuz hooklar

const useAuth = () => {
  const navigate = useNavigate();

  const login = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginValues) => authApi.login(data),
    onSuccess: () => {
      navigate("/");
    },
  });

  const register = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: RegisterValues) => authApi.register(data),
    onSuccess: () => {
      navigate("/");
       },
  });
  return {
    login,
    register,
  };
};
export default useAuth;
