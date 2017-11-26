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

})