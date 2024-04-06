export const CHANGE_COLOR = "CHANGE_COLOR";

export const themeReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      const newState = {
        ...state,
        color: action.payload,
      };
      localStorage.setItem('theme', JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

export const toggleTheme = () => ({
  type: CHANGE_COLOR,
});


