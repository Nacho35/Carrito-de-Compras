import { TYPES } from "../acciones/shoppingActions";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Lata de frijoles", price: 50 },
    { id: 2, name: "Arroz Amarillo", price: 100 },
    { id: 3, name: "Fideos Spaguetti", price: 120 },
    { id: 4, name: "Yerba Mate", price: 300 },
    { id: 5, name: "Biscochitos Salados", price: 150 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      console.log(newItem);

      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_PRODUCT: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      console.log(itemToDelete);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_PRODUCTS: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART: {
      return shoppingInitialState;
    }

    default:
      return state;
  }
}
