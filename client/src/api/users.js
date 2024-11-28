import axios from "./axios";

export const createUserRequest = (user) => axios.post("/users", user)