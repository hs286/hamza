import * as types from "./actionType";

const initialState = {
  services: [],
  service:{},
  cartProducts:[],
  homeData:[]
};

const campaignReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SERVICES:
      return {
        ...state,
        services: action.payload
      };
      case types.GET_SERVICE_BY_ID:
        return {
          ...state,
          service: action.payload
        };
        case types.GET_CART_SERVICES:
          return{
            ...state,
            cartProducts: action.payload,
          }
          case types.REGISTER_USER:
        return {
          ...state,
          users: action.payload1,
          registerError: action.payload2
        };
        case types.USER_LOGIN:
        return {
          ...state,
          token: action.payload1,
          LoginError: action.payload2
        };
          case types.GET_HOME_DATA:
            return{
              ...state,
              homeData: action.payload,
            }
          
    default:
      return state;
  }
};
export default campaignReducers;
