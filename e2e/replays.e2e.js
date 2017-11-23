describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should show the first default message and choose a reply button', async () => {
    await expect(element(by.label('Please select a reply'))).toBeVisible();
    await expect(element(by.id('action1'))).toBeVisible();
  });

  it('should show the repliesSelector when pressing on the action', async () => {
    await element(by.id('action1')).tap();
    await expect(element(by.id('replySelector'))).toBeVisible();
  });

  it('should open the replyEditor page when pressing on the edit button in the replieSelector screen', async () => {
    await element(by.id('action1')).tap();
    await element(by.id('editRepliesButton')).tap();
    await expect(element(by.id('repliesEditor'))).toBeVisible();
  });

  it('should go back to first screen after pressing cacnel in repliesEdit screen', async () => {
    await element(by.id('action1')).tap();
    await element(by.id('editrepliesButton')).tap();
    await element(by.id('cancelButton')).tap();
    await expect(element(by.label('Please select a reply'))).toBeVisible();
  });

})