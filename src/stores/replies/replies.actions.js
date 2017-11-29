const repliesStore = require('./replies.store');
const uuidv4 = require('uuid/v4');


function deleteReplyByKey(key) {
  const replies = repliesStore.getters.getReplies();  
  const replyIndex = replies.findIndex(reply => reply.key === key);
  const newReplies = [
    ...replies.slice(0, replyIndex),
    ...replies.slice(replyIndex + 1)
  ];
  repliesStore.setters.setReplies(newReplies);
}

function addNewReply(reply) {
  const key = uuidv4();
  const newReply = {...reply, key};
  const replies = repliesStore.getters.getReplies();
  const newReplies = [...replies, newReply];
  repliesStore.setters.setReplies(newReplies);
}

function updateReply(updatedReply) {
  const replies = repliesStore.getters.getReplies();
  const newReplies = replies.map(reply => {
    if (reply.key !== updatedReply.key) {
      return reply;
    } else {
      return {
        ...reply,
        ...updatedReply
      };
    }
  });
  repliesStore.setters.setReplies(newReplies);
}

function sum(a, b) {
  return a + b;
}

module.exports = {
  deleteReplyByKey,
  addNewReply,
  updateReply,
  sum
};
