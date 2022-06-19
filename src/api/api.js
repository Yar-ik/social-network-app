/** @format */

import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "002283c6-beab-441c-8cf7-1d2dff045dbc",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  follow(userId) {
    return instance.post(`follow/${userId}`);
    // Запрос //
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`); // Запрос //
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId); // Запрос //
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },

  logout() {
    return instance.delite(`auth/login`);
  },
};
