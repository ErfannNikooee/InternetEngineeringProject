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

}

export default new UserService();