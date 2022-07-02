import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { clearUser, setUser } from '../features/user/userSlice';
import authService from '../services/auth.service';

export default function useAuth(){
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    
    useEffect(() =>{
        console.log("calling validate token")
        authService.validateToken().then(u => {
            console.log("validate token response: ",u)
            dispatch(setUser(u))
        }).catch(err => {
            console.log("user not logged in: ",err)
            dispatch(clearUser())
        })
    },[])

    return user
}