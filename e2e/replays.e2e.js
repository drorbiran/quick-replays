describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should toggle between different quick replies from the keyboard', async () => {
    await driver.openRepliesKeyboard();
    await driver.selectReply('defaultReply1');
    await expect(element(by.label('Hi there, I\'m here to chat if you have any questions.'))).toBeVisible();
    await driver.selectReply('defaultReply2');
    await expect(element(by.label('Thank you for dropping by'))).toBeVisible();
  });

  it('should be able to select different quick replies from the replies editor screen', async () => {
    await driver.openRepliesEditorScreen();
    await driver.selectReply('defaultReply1-item');
    await expect(element(by.label('Hi there, I\'m here to chat if you have any questions.'))).toBeVisible();
    await driver.openRepliesEditorScreen();
    await driver.selectReply('defaultReply2-item');
    await expect(element(by.label('Thank you for dropping by'))).toBeVisible();
  });

  it('should be able to add a new reply', async () => {
    const title = 'New reply title';
    const description = 'New reply description';
    await driver.addNewReply(title, description);
    await expect(element(by.label(title))).toBeVisible();
    await expect(element(by.label(description))).toBeVisible();
  });

  it('should be able to cancel adding a new reply', async () => {
    const title = 'New reply title';
    const description = 'New reply description';
    await driver.addNewReplyAndCancel(title, description);
    await expect(element(by.label(title))).toNotExist();
  });
 
  it('should be able to edit reply', async () => {
    const title = 'New reply title';
    const description = 'New reply description';
    await driver.editReply(title, description);
    await expect(element(by.label(title))).toBeVisible();
    await expect(element(by.label(description))).toBeVisible();
  });

  it('should be able to cancel editing a new reply', async () => {
    const title = 'New reply title';
    const description = 'New reply description';
    await driver.editReplyAndCancel(title, description);
    await expect(element(by.label(title))).toNotExist();
  });

  it('should be able to delete a reply', async () => {
    const key = 'defaultReply1'
    await driver.deleteReplyByKey(key);
    await expect(element(by.id(`${key}-item`))).toNotExist();
  });

});

//######################################################
// driver
//######################################################

const tapById = id => element(by.id(id)).tap();
const tapByLabel = label => element(by.label(label)).tap();

const driver = {
  openRepliesKeyboard: () => tapById('open-replies-keyboard-bth'),
  selectReply: replyId => tapById(replyId),
  selectReplyByLabel: replyLabel => tapByLabel(replyLabel),
  openRepliesEditorScreen: async () => {
    await tapById('open-replies-keyboard-bth');
    await tapById('open-replies-editor');
  },
  typeNewReply: async (title, description) => {
    await element(by.id('title-input')).replaceText('');
    await element(by.id('title-input')).typeText(title);
    await element(by.id('description-input')).replaceText('');
    await element(by.id('description-input')).typeText(description);
  },
  addNewReply: async (title, description) => {
    await driver.openRepliesEditorScreen();
    await tapById('add-new-reply-btn');
    await driver.typeNewReply(title, description);
    await tapById('add-btn');
  },
  addNewReplyAndCancel: async (title, description) => {
    await driver.openRepliesEditorScreen();
    await tapById('add-new-reply-btn');
    await driver.typeNewReply(title, description);
    await tapById('cancel-btn');
  },
  editReply: async (title, description) => {
    await driver.openRepliesEditorScreen();
    await tapById('defaultReply1-reply-edit-btn');
    await driver.typeNewReply(title, description);
    await tapById('save-btn');
  },
  editReplyAndCancel: async (title, description) => {
    await driver.openRepliesEditorScreen();
    await tapById('defaultReply1-reply-edit-btn');
    await driver.typeNewReply(title, description);
    await tapById('cancel-btn');
  },
  deleteReplyByKey: async key => {
    await driver.openRepliesEditorScreen();
    await tapById(`${key}-reply-edit-btn`);
    await tapById('delete-btn');
  },
  closeRepliesEditorScreen: () => tapById('add-btn')
};
