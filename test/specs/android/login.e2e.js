import userData from "../../data/userData.json" with { type: "json" }
import { expect } from "@wdio/globals";
import { $ } from "@wdio/globals";
import menuScreen from "../../screen/android/menu.screen.js";
import loginScreen from "../../screen/android/login.screen.js";

describe("My Login application", () => {
  it("should fail login with invalid credentials", async () => {
    await menuScreen.accessLoginScreen();
    await loginScreen.fillLoginForm(
      userData.UserFail.username,
      userData.UserFail.password
    );
    await expect($(loginScreen.errorMessage)).toHaveText(
      "Provided credentials do no match any user in this service."
    );
  });
});
