import * as remx from 'remx';

const initialState = {
    selectedReplay: {
        title: "initial replay",
        description: "Please selet a replay"
    },
    replays: [
        {
            title: "Greeting",
            description: "Hi there, I'm here to chat if you have any questions."
        },
        {
            title: "Bye",
            description: "Thank you for dropping by"
        },
        {
            title: "Getting leads",
            description: "We have 30% sale this week, leave me your email and I'll get back to you with the details."
        },
    ]
};

const state = remx.state(initialState);

//#####################################
// getters
// All the functions that are going to return parts of the state should be wrapped within the Getters function.
// The warpped getters functions shoud be defined inside the same store file and should be exported.
//#####################################

export const getters = remx.getters({

    getSelectedReplay(){
        return state.selectedReplay;
    },

});

//#####################################
// setters
// All the functions that are going to change parts of the state should be wrapped within the Setters function. 
// The warpped setters functions shoud be defined inside the store and should be exported.
//#####################################
export const setters = remx.setters({

    setSelectedReplay(replay){
      state.selectedReplay = replay;
    }

});