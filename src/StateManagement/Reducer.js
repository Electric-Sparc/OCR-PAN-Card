export const initialState = {
  source: "",
  blob: null,
  text: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SETSOURCE":
      console.log(state, action);
      return { ...state, source: action.payload };
    case "SETBLOB":
      return { ...state, blob: action.payload };
    case "SETTEXT":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
