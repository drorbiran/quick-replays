import * as remx from 'remx';

const initialState = {
  selectedReply: {
    title: 'initial reply',
    description: 'Please select a reply'
  },
  replies: [
    {
      key: 'defaultReply1',
      title: 'Greeting',
      description: 'Hi there, I\'m here to chat if you have any questions.'
    },
    {
      key: 'defaultReply2',
      title: 'Bye',
      description: 'Thank you for dropping by'
    },
    {
      key: 'defaultReply3',
      title: 'Getting leads',
      description: 'We have 30% sale this week, leave me your email and I\'ll get back to you with the details.'
    }
  ]
};

const state = remx.state(initialState);

//#####################################
// getters
//#####################################

export const getters = remx.getters({

  getSelectedReply() {
    return state.selectedReply;
  },

  getReplies() {
    return state.replies;
  }

});

//#####################################
// setters
//#####################################
export const setters = remx.setters({

  setSelectedReply(reply) {
    state.selectedReply = reply;
  },

  setReplies(replies) {
    console.log('set new replies', replies);
    state.replies = replies;
  },

});
