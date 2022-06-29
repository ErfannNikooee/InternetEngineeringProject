
import axios from "axios"
const API_URL = "localhost:8080/"

class AuthService{
    async login(username,password) {
        return axios.post(API_URL+ "login", {
            username,password
        }).then(res => res.json())
        .then(data => {
            if (data.token){   
                localStorage.setItem("token",JSON.stringify(data.token))
            }
        }).catch(err => {
            console.log(err)
        })
    }

    logout(){
        localStorage.removeItem("token")
    }

    async register(email,username,password){
        return axios.post(API_URL + "signup", {
            username: username,
            email: email,
            password: password,
            role : 1
            //fullname
        }).then(res => res.json)
        .then(data => {
            if (data.token){
                localStorage.setItem("token",JSON.stringify(data.token))
            }
        }).catch(err => {
            console.log(err)
        })
    }
}

export default new AuthService();