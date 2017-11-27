import * as repliesStore from './replies.store'

export function deleteReplyByKey(key,replies){
    const replyIndex = replies.findIndex((reply) => reply.key === key);
    const newReplies = [
        ...replies.slice(0,replyIndex),
        ...replies.slice(replyIndex + 1)
    ]
    return newReplies;
}
