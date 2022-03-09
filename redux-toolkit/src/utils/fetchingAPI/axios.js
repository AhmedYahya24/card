import axios from "axios";
import { startUser, successUser, errorUser } from "../readux/userSlice";

const JSON_API_SERVER = "http://localhost:5000/posts";

export const addUser = async (user, dispatch) => {
    dispatch(startUser());
    console.log('user', user);

    try{

        const response = await axios.post(JSON_API_SERVER, user)
        dispatch(successUser(response.data))

    } catch(err) {

        dispatch(errorUser())

    }
}

const getUsers = async (dispatch)=>{
    dispatch(startUser());
    const data = await axios.get('http://localhost:5000/posts');
    dispatch(successUser())
    return data;
}
