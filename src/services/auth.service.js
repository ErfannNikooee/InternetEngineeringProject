
import axios from "axios"
import authHeader from "./authHeader"
import userService from "./user.service"

const API_URL = "http://localhost:8080/"

class AuthService{
    async login(username,password) {
        console.log("before req")
        return axios.post(API_URL+ "login", {
            username:username,
            password:password
        }).then(res => {
            if (res.data.token){   
                console.log("received")
                localStorage.setItem("token",JSON.stringify(res.data.token))
                return res
            }
        })
    }

    logout(){
        localStorage.removeItem("token")
        userService.clearFavourites()
        userService.clearLastVisited()
    }
    async validateToken(){
        return axios.get(API_URL + "validateToken", {
            headers : authHeader()
        }).then(res => {            
            return res.data
        }).catch(err => {
            throw err
        })
    }

    async register(email,username,password){
        return axios.post(API_URL + "signup", {
            username: username,
            email: email,
            password: password,
            role : 1
            //fullname
        }).then(res => {
            if (res.data){
                console.log(res.data)
                localStorage.setItem("token",JSON.stringify(res.data.token))
                return res
            }
        })
    }
}

export default new AuthService();