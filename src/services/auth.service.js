
import axios from "axios"
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
                return res.data
            }
        }).catch(err => {
            console.log(err)
            throw err
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
        }).then(res => {
            if (res.token){
                localStorage.setItem("token",JSON.stringify(res.token))
            }
        }).catch(err => {
            console.log(err)
        })
    }
}

export default new AuthService();