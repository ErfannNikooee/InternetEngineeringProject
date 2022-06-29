import axios from "axios"
import authHeader from "./authHeader"
const API_URL = "localhost:8080/"
class ProductService{
    getProduct(productId){
        axios.get(API_URL+ "products/" + productId, authHeader())
    }
}