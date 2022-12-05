const API_URL = "http://216.180.94.76:8085/api/auth/";

export const register = (name: string, email: string, password: string) => {
  return fetch(API_URL + "register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        return data;
      }
    });
};

export const login = (email: string, password: string) => {
  return fetch(API_URL + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        return data;
      }
    });
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getCurrentUser = () => {
  const useStr = localStorage.getItem("token");
  if (useStr) {
    return useStr;
  }
};
