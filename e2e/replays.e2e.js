describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should show the first default message and choose a reply button', async () => {
    await expect(element(by.label('Please select a reply'))).toBeVisible();
    await expect(element(by.id('action1'))).toBeVisible();
  });

  it('should show the replySelector when pressing on the action', async () => {
    await element(by.id('action1')).tap();
    await expect(element(by.id('ReplySelector'))).toBeVisible();
  });

  it('should open the replyEditor page when pressing on the edit button in the ReplaySelector screen', async () => {
    await element(by.id('action1')).tap();
    await element(by.id('editReplaysButton')).tap();
    await expect(element(by.id('ReplysEditor'))).toBeVisible();
  });

  it.only('should go back to first screen after pressing cacnel in replysEdit screen', async () => {
    await element(by.id('action1')).tap();
    await element(by.id('editReplaysButton')).tap();
    await element(by.id('cancelButton')).tap();
    await expect(element(by.label('Please select a reply'))).toBeVisible();
  });



})