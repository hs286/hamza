import axios from "axios";

export const addContactUs = (contactData) => async (dispatch) => {
  try {
     await axios.post(`${process.env.REACT_APP_API}/contact`,contactData);
    
  } catch (error) {
    
    console.log(error.response.data.message);
  }
};
