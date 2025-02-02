export const productStateReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_PRODUCT_LIST":
      return { ...state, productList: payload };
    case "ADD_CATEGORIES":
      return { ...state, categoriesList: payload };
    case "ADD_CART_WISHLIST":
      return { ...state, cart: payload.cart, wishList: payload.wishlist };
    case "RESET_CART_WISHLIST":
      return { ...state, cart: [], wishList: [] };

    case "ADD_TO_CART":
      return { ...state, cart: [...payload] };
    case "REMOVE_FROM_CART":
      return { ...state, cart: [...payload] };
    case "ADD_TO_WISHLIST":
      return { ...state, wishList: [...payload] };
    case "REMOVE_FROM_WISHLIST":
      return { ...state, wishList: [...payload] };
    default:
      return { ...state };
  }
};
