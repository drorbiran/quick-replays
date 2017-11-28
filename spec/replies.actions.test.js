const repliesActions =  require('../src/stores/replies/replies.actions');

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      expect(repliesActions.sum(1,2)).toBe(4);
    });
  });