const repliesActions = require('./replies.actions');

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    expect(repliesActions.sum(1, 2)).toBe(3);
  });
});
