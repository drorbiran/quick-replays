const repliesActions = require('./replies.actions');
const repliesStore = require('./replies.store');

describe('replies store', () => {

  const deafaultReply1 = {
    key: 'defaultReply1',
    title: 'Greeting',
    description: 'Hi there, I\'m here to chat if you have any questions.'
  };

  const newReplyToAdd = {
    title: 'New Reply',
    description: 'New reply description'
  };

  const updatedReply = {
    key: 'defaultReply2',
    title: 'New updated Reply',
    description: 'New updated description'
  };

  it('should delete a reply by key', () => {
    repliesActions.deleteReplyByKey('defaultReply1');
    expect(repliesStore.getters.getReplies()).not.toEqual(jasmine.arrayContaining([deafaultReply1]));
  });

  it('should add a new reply', () => {
    repliesActions.addNewReply(newReplyToAdd);
    expect(repliesStore.getters.getReplies()).toEqual(jasmine.arrayContaining([newReplyToAdd]));
  });

  it('should update a reply', () => {
    repliesActions.updateReply(updatedReply);
    expect().toEqual();
    expect(repliesStore.getters.getReplies()).toEqual(jasmine.arrayContaining([updatedReply]));
  });

});
