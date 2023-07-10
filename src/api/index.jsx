import axios from "axios"



const USER_URL = "http://localhost:1212/admin";



 const API = {
    getProduct: async()=> axios.get(`${USER_URL}/products`)
}


export default API;


