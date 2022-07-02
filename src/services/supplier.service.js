import axios from "axios"
import authHeader from "./authHeader"
const API_URL = "http://localhost:8080/"

class SupplierService{
  
    async GetStores(ownerId){
        let query = "?ownerId=" + ownerId
        return axios.get(API_URL + "stores" + query, {headers: authHeader()})
            .then(res => {
                if (res.data){
                    return res.data
                }
            })
    }

    async AddStore(ownerId,name,website,city){
        return axios.post(API_URL + "stores",{
            owner_id: ownerId,
            store_name: name,
            store_url:website,
            city: city,
        }, {
            headers: authHeader()
        }).then(res => {
            if (res.data){
                return  res.data
            }
            return null
        })
    }

    async GetStoreInfo(storeId){
        return axios.get(API_URL + "stores/" + storeId , {headers : authHeader()})
            .then(res => {
                if (res.data){
                    return res.data
                }
            })
    }
}

export default new SupplierService();