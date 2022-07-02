const API_URL = "http://localhost:8080/"

class UserService{
  
    addToFavorites (product){
        console.log("addtofavorites-> ",product)
        let fav = JSON.parse(localStorage.getItem("fav_list"))
        if (fav == null){
            fav = []
        }
        localStorage.setItem("fav_list",JSON.stringify([...fav,product]))
    }

    getFavourites(){
        let fav = JSON.parse(localStorage.getItem("fav_list"))
        if (fav == null){
            fav = []
        }
        return fav
    }
    
    clearFavourites(){
        localStorage.removeItem("fav_list")
    }

    clearLastVisited(){
        localStorage.removeItem("last_visited")
    }

    addToLastVisited (product){
        let last_visited = JSON.parse(localStorage.getItem("last_visited"))
        console.log("last visited : ",last_visited)
        if (last_visited == null){
            return localStorage.setItem("last_visited",JSON.stringify([product]))
        }

        if(last_visited.map(o => o.id).includes(product.id)){
        localStorage.setItem("last_visited",JSON.stringify([
            ...last_visited.filter(o => o.id !== product.id),product
        ]))
        }else{
            localStorage.setItem("last_visited",JSON.stringify([...last_visited,product]))
        }
    }

}

export default new UserService();