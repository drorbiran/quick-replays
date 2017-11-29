import * as repliesStore from './replies.store';
import uuidv4 from 'uuid/v4';


export function deleteReplyByKey(key) {
  const replies = repliesStore.getters.getReplies();  
  const replyIndex = replies.findIndex(reply => reply.key === key);
  const newReplies = [
    ...replies.slice(0, replyIndex),
    ...replies.slice(replyIndex + 1)
  ];
  repliesStore.setters.setReplies(newReplies);
}

export function addNewReply(reply) {
  const key = uuidv4();
  const newReply = {...reply, key};
  const replies = repliesStore.getters.getReplies();
  const newReplies = [...replies, newReply];
  repliesStore.setters.setReplies(newReplies);
}

export function updateReply(updatedReply) {
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
