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
    await element(by.id('Greeting')).tap();
    await expect(element(by.label('Hi there, I\'m here to chat if you have any questions.'))).toBeVisible();
    await element(by.id('Bye')).tap();
    await expect(element(by.label('Thank you for dropping by'))).toBeVisible();    
  });

})