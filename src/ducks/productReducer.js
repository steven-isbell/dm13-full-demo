import axios from "axios";

const GET_PRODUCTS = "GET_PRODUCTS";
const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";

export function getProducts() {
  return {
    type: GET_PRODUCTS,
    payload: axios.get("/api/product")
  };
}

export function getCart() {
  return {
    type: GET_CART,
    payload: axios.get("/api/cart")
  };
}

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    payload: axios.post(`/api/cart/${id}`)
  };
}

const initialState = {
  products: [],
  cart: []
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_PRODUCTS}_FULFILLED`:
      return {
        ...state,
        products: action.payload.data
      };
    case `${GET_CART}_FULFILLED`:
      return {
        ...state,
        cart: action.payload.data
      };
    case `${ADD_TO_CART}_FULFILLED`:
      return {
        ...state,
        cart: action.payload.data
      };
    default:
      return state;
  }
}
