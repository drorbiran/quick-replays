import * as repliesStore from './replies.store'
import uuidv4 from 'uuid/v4'


export function deleteReplyByKey(key, replies) {
    const replyIndex = replies.findIndex((reply) => reply.key === key);
    const newReplies = [
        ...replies.slice(0, replyIndex),
        ...replies.slice(replyIndex + 1)
    ]
    return newReplies;
}

export function addNewReply(reply) {
    console.log('Adding new reply: ', reply);
    const key = uuidv4();
    const newReply = { ...reply, key }
    const replies = repliesStore.getters.getReplies();
    const newReplies = [...replies, newReply];
    repliesStore.setters.setReplies(newReplies);
}

