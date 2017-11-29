
const remx = require('remx');

const initialState = {
  keyBoardScreen: undefined
};

const state = remx.state(initialState);

//#####################################
// getters
// All the functions that are going to return parts of the state should be wrapped within the Getters function.
// The wrapped getters functions should be defined inside the same store file and should be exported.
//#####################################

const getters = remx.getters({

  getKeyboardScreen() {
    return state.keyBoardScreen;
  }

});

//#####################################
// setters
// All the functions that are going to change parts of the state should be wrapped within the Setters function.
// The warpped setters functions shoud be defined inside the store and should be exported.
//#####################################
const setters = remx.setters({

  setKeyboardScreen(screen) {
    state.keyBoardScreen = screen;
  }

});

module.exports = {
  getters,
  setters
}