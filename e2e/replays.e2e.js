describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should navigate between the screens QuickReplies > RepliesSelector > RepliesEditor > QuickReplies', async () => {
    await element(by.id('action1')).tap()
    await element(by.id('editRepliesButton')).tap();
    await element(by.id('cancelButton')).tap();
    await element(by.id('action1')).tap();
    await expect(element(by.id('editRepliesButton'))).toBeVisible();
  });

  it('should change the reply when selecting one of the replies', async () => {
    await element(by.id('action1')).tap();
    await element(by.id('defaultReply1')).tap();
    await expect(element(by.label('Hi there, I\'m here to chat if you have any questions.'))).toBeVisible();
    await element(by.id('defaultReply2')).tap();
    await expect(element(by.label('Thank you for dropping by'))).toBeVisible();    
  });

  it('should not change anything if you pressed cancel',async () => {
    await element(by.id('action1')).tap();
    await element(by.id('editRepliesButton')).tap();
    await element(by.id('defaultReply1')).replaceText('new saved reply');
    await element(by.id('defaultReply1Description')).replaceText('');
    await element(by.id('defaultReply1Description')).tap();
    await element(by.id('defaultReply1Description')).typeText('new Description');
    await element(by.id('cancelButton')).tap();
    await element(by.id('cancelButton')).tap(); 
    await element(by.id('action1')).tap();
    await element(by.id('defaultReply1')).tap();
    await expect(element(by.label('Hi there, I\'m here to chat if you have any questions.'))).toBeVisible();
  });
  
  it('should be able to edit description of an existing reply', async () => {
    await element(by.id('action1')).tap();
    await element(by.id('editRepliesButton')).tap();
    await element(by.id('defaultReply1Description')).replaceText('');
    await element(by.id('defaultReply1Description')).typeText('new Description');
    await element(by.id('saveButton')).tap();
    await element(by.id('saveButton')).tap(); 
    await element(by.id('action1')).tap();
    await element(by.id('defaultReply1')).tap();
    await expect(element(by.label('new Description'))).toBeVisible();
  });

  it('should be able to edit title of an existing reply', async () => {
    await element(by.id('action1')).tap();
    await element(by.id('editRepliesButton')).tap();
    await element(by.id('defaultReply1')).replaceText('new saved reply');
    await element(by.id('saveButton')).tap();
    await element(by.id('action1')).tap();
    await element(by.label('new saved reply')).tap();
    await expect(element(by.label('Hi there, I\'m here to chat if you have any questions.'))).toBeVisible();
  });


})