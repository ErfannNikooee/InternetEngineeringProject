import axios from "axios"
import authHeader from "./authHeader"
const API_URL = "http://localhost:8080/"
class ProductService{
    async getProduct(productId){
        return axios.get(API_URL+ "products/" + productId, {headers: authHeader()})
    }

    async getProductByType(category){
        let query = "?category=" + category
        return axios.get(API_URL+ "products" + query, {headers : authHeader()})
    }
    
    async GetProductOffers(productId){
        return axios.get(API_URL + "offers/" + productId, {headers: authHeader()})
    }

    async GetCategories(){
        let categories = []
        let res = await axios.get(API_URL + "categories", {headers: authHeader()})
        if (res.data){
            let categories = res.data
            let modified = categories.map(c => {
                return {
                    name: c.name,
                    description: c.description ? c.description : "",
                    parent : c.path ? c.path.split(",").at(-1) : ""
                } 
            })
            console.log("modified: ",modified)
        }
        return res
    }
}

export default new ProductService();