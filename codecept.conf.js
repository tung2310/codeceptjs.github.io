const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://opensource-demo.orangehrmlive.com',
      show: true,
      windowSize: '1200x900',
      chrome: {
        args: [
          '--disable-web-security',
        ]
      }
    },
    MockRequestHelper: {
      require: '@codeceptjs/mock-request',
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {
    reporterOptions: {
      mochaFile: "output/result.xml",
      reportDir: "output"
    }
  },
  name: 'Codecept',
  plugins: {
    stepByStepReport: {
      enabled: false
    },
    allure: {
      enabled: true
    }
  }
}