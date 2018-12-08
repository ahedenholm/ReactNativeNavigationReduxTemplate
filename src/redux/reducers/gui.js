
const
  SET_WELCOME_MESSAGE = 'SET_WELCOME_MESSAGE';

const gui = (state = '', action) => {
  switch (action.type) {
    case SET_WELCOME_MESSAGE: {
      return { ...state, welcomeMessage: action.payload };
    }
    default:
      return state;
  }
};

export default gui;

export const setWelcomeMessage = (message) => {
  return { type: SET_WELCOME_MESSAGE, payload: message };
}
