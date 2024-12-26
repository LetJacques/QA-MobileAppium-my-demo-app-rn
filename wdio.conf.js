export const config = {
  runner: "local",
  port: 4723,

  specs: ["./test/specs/**/*.js"],

  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      platformName: "Android",
      "appium:platformVersion": "11",
      "appium:deviceName": "emulator-5554",
      "appium:app": "app/Android-MyDemoAppRN.1.3.0.build-244.apk",
      "appium:automationName": "UIAutomator2",
      "appium:shouldTerminateApp": false,
    },
  ],

  logLevel: "info",

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 1,

  framework: "mocha",

  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
