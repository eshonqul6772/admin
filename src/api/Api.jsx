import axios from "axios"



const USER_URL = "http://localhost:3000"

export const API = {
    getUser: async()=> axios.get(`${USER_URL}/users`),
}


