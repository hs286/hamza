
import axios from "axios";
import toast from "react-hot-toast";
import * as types from "../actionType";

export const userRegistered = (users,error) => ({
  type: types.REGISTER_USER,
  payload1: users,
  payload2: error,
});

export const registerUser = (userCredentials) => async (dispatch) => { 
  try {
    const res = await axios.post(`${process.env.REACT_APP_API}/user`,  userCredentials );
    toast.success("New user registered successfully")
    dispatch(userRegistered(res,false));
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error.response.data.message);
  }
};

export const userLogin = (users,error) => ({
  type: types.USER_LOGIN,
  payload1: users,
  payload2: error,
});

export const checkLoginCredentials = (userCredentials) => async (dispatch) => { 
  try {
    const res = await axios.post(`${process.env.REACT_APP_API}/user/login`,  userCredentials );
    toast.success("New user login successfully")
    localStorage.setItem('loginToken',(res.data.token))
    dispatch(userLogin(res,false));
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error.response.data.message);
  }
};

export const updateUserPassword = (userCredentials) => async (dispatch) => { 
  try {
    const res = await axios.put(`${process.env.REACT_APP_API}/user`,  userCredentials );
    toast.success("Password update successfully")
    dispatch(userLogin(res,false));
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error.response.data.message);
  }
};
