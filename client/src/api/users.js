import axios from "./axios";

export const createUserRequest = (user) => axios.post("/users", user)

export const getUsersRequest = () => axios.get("/users")

export const deleteUsersRequest = (id) => axios.delete(`/users/${id}`)