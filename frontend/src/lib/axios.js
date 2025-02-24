import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "shahmeer141-fullstack-realtime-chat-app.vercel.app" : "/api",
    withCredentials: true,
})
