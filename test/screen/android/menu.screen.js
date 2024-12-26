class MenuScreen {
  constructor() {
    this.leftMenuButton = "~open menu";
    this.logInButton = '//*[@text="Log In"]';
  }

  async accessLoginScreen() {
    await $(this.leftMenuButton).click();
    await $(this.logInButton).click();
  }
}

export default new MenuScreen();
