const initState = {
  listProducts: [],
  editProduct: {
    id: "",
    productName: "",
    description: "",
    price: 0,
  },
};

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "ACT_GETALL_PRODUCT_SUCCESS":
      console.log(action.payload);
      // thực hiện cập nhật dữlieeuj nhận về từ api vào trong state
      state = { ...state, listProducts: [...action.payload] };
      return state;
    case "ACT_GET_PRODUCT_BY_ID_SUCCESS":
      state = { ...state, editProduct: { ...action.payload } };
      return state;
    default:
      return state;
  }
};
