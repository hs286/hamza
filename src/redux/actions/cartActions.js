import axios from "axios";
import * as types from "../actionType";


export const updateCart = (service, quantity) => async (dispatch) => {
  var items = [],
    data;
  const cartServices = JSON.parse(localStorage.getItem("cart"));
  if (cartServices !== null) {
    items = cartServices;
    data = items.find((el) => el.service._id === service._id);
  }
  if (cartServices === null) {
    items.push({ service, quantity });
  } else if (data === undefined) {
    items.push({ service, quantity });
  } else {
    items = cartServices;
    var foundIndex = items.findIndex((el) => el.service._id === service._id);
    items[foundIndex] = { service, quantity };
  }
  localStorage.setItem("cart", JSON.stringify(items));
};

export const gettingCartServices = (cartServices) => ({
  type: types.GET_CART_SERVICES,
  payload: cartServices,
});

export const getCartServices = () => async (dispatch) => {
  const cartServices = JSON.parse(localStorage.getItem("cart"));
  if (cartServices === null) {
    dispatch(gettingCartServices(cartServices));
  } else {
    dispatch(gettingCartServices(cartServices));
  }
};

export const deleteCartService = (id) => async (dispatch) => {
  const cartServices = JSON.parse(localStorage.getItem("cart"));

  const updatedCart = cartServices.filter((el) => el.service._id !== id);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  dispatch(gettingCartServices(updatedCart));
};
export const addOrderDetails = (addressDetails, _id) => async (dispatch) => {
  var cartServices = JSON.parse(localStorage.getItem("cart"));
  cartServices = cartServices.map(({ quantity, service }) => {
    return {
      quantity: quantity,
      product: service.name,
      price: service.price.$numberDecimal,
      unit: service.unit,
    };
  });
  try {
    await axios.post(
      `${process.env.REACT_APP_API}/orderDetails`,
      { addressDetails, _id, cartServices },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};
