
// auth ile alakalı bütün api istekleri burda tanımlanır

import type { LoginValues, RegisterValues } from "../types";
import api from "./axios";

const authApi = {
  register: (data: RegisterValues) => api.post("/auth/register", data),
  login: (data: LoginValues) => api.post("/auth/login", data),
  refreshToken: () => api.post("/auth/refresh-token"),
  logout: () => api.post("/auth/logout"),
  getMe: () => api.get("/auth/me"),
  
};

export default authApi;

