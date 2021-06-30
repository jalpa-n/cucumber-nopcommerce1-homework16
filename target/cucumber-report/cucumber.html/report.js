$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featureFile/1registration.feature");
formatter.feature({
  "line": 1,
  "name": "Registration Test",
  "description": "\r\nAs a user I want to register my account on nopcommerce website",
  "id": "registration-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3777137800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should able to register with valid inputs to all mandatory field",
  "description": "",
  "id": "registration-test;user-should-able-to-register-with-valid-inputs-to-all-mandatory-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Smoke"
    },
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter first name \"Jalpa\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter last name \"Ganatra\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter email \"ptl_sweet@yahoo.co.in\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter password \"J12345678\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter confirm password \"J12345678\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should be able to register",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I should be able to see \"Your registration completed\" message",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 203619500,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1453454700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jalpa",
      "offset": 20
    }
  ],
  "location": "RegistrationStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 1151107200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganatra",
      "offset": 19
    }
  ],
  "location": "RegistrationStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 1155857600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ptl_sweet@yahoo.co.in",
      "offset": 15
    }
  ],
  "location": "RegistrationStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1178859600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "J12345678",
      "offset": 18
    }
  ],
  "location": "RegistrationStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 1170925400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "J12345678",
      "offset": 26
    }
  ],
  "location": "RegistrationStepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 1150721300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 510596300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iShouldBeAbleToRegister()"
});
formatter.result({
  "duration": 35100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 25
    }
  ],
  "location": "RegistrationStepdefs.iShouldBeAbleToSeeMessage(String)"
});
formatter.result({
  "duration": 20103268100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Your registration completed\u0027)]\"}\n  (Session info: chrome\u003d91.0.4472.124)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-J6HCANK\u0027, ip: \u0027192.168.1.28\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.124, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\jalpa\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58423}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ffef8c14bba8a51b8caf70eba966832e\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027Your registration completed\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.RegisterPage.getRegistrationCompleteText(RegisterPage.java:92)\r\n\tat com.nopcommerce.demo.cucumber.stepDefs.RegistrationStepdefs.iShouldBeAbleToSeeMessage(RegistrationStepdefs.java:75)\r\n\tat ✽.And I should be able to see \"Your registration completed\" message(src/test/java/resources/featureFile/1registration.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 992543400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "User should not be able to register with any empty mandatory field",
  "description": "",
  "id": "registration-test;user-should-not-be-able-to-register-with-any-empty-mandatory-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Sanity"
    },
    {
      "line": 25,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter first name \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter last name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter confirm password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should be able to see \"\u003cerrorMessage\u003e\" under first name field",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "registration-test;user-should-not-be-able-to-register-with-any-empty-mandatory-field;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "password",
        "confirmPassword",
        "errorMessage"
      ],
      "line": 37,
      "id": "registration-test;user-should-not-be-able-to-register-with-any-empty-mandatory-field;;1"
    },
    {
      "cells": [
        "",
        "Ganatra",
        "ptl_sweet@yahoo.co.in",
        "J12345678",
        "J12345678",
        "First name is required."
      ],
      "line": 38,
      "id": "registration-test;user-should-not-be-able-to-register-with-any-empty-mandatory-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2933907100,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "User should not be able to register with any empty mandatory field",
  "description": "",
  "id": "registration-test;user-should-not-be-able-to-register-with-any-empty-mandatory-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 25,
      "name": "@Sanity"
    },
    {
      "line": 25,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter first name \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter last name \"Ganatra\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter email \"ptl_sweet@yahoo.co.in\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter password \"J12345678\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter confirm password \"J12345678\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should be able to see \"First name is required.\" under first name field",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 53300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1333241300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "RegistrationStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 1108671300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganatra",
      "offset": 19
    }
  ],
  "location": "RegistrationStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 1120767400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ptl_sweet@yahoo.co.in",
      "offset": 15
    }
  ],
  "location": "RegistrationStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1192466900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "J12345678",
      "offset": 18
    }
  ],
  "location": "RegistrationStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 1118327000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "J12345678",
      "offset": 26
    }
  ],
  "location": "RegistrationStepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 1106461300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 94601900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 25
    }
  ],
  "location": "RegistrationStepdefs.iShouldBeAbleToSeeUnderFirstNameField(String)"
});
formatter.result({
  "duration": 56322800,
  "status": "passed"
});
formatter.after({
  "duration": 796616900,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featureFile/2login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As a user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2189370300,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should be able to see \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 30700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1219005200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 15900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 25
    }
  ],
  "location": "LoginStepdefs.iShouldBeAbleToSee(String)"
});
formatter.result({
  "duration": 55472200,
  "status": "passed"
});
formatter.after({
  "duration": 731526400,
  "status": "passed"
});
formatter.before({
  "duration": 2925236600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Smoke"
    },
    {
      "line": 13,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter email \"ptl_sweet@yahoo.co.in\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter password \"J12345678\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I should be able to see \"Log out\" option",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 36600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 582827100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ptl_sweet@yahoo.co.in",
      "offset": 15
    }
  ],
  "location": "RegistrationStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1141468600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "J12345678",
      "offset": 18
    }
  ],
  "location": "RegistrationStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 1121469000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 12226691800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 19400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 25
    }
  ],
  "location": "LoginStepdefs.iShouldBeAbleToSeeOption(String)"
});
formatter.result({
  "duration": 50368900,
  "status": "passed"
});
formatter.after({
  "duration": 733147300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Sanity"
    },
    {
      "line": 23,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter email\"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 33,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "jalpa@gmail.com",
        "Jbcgfb",
        "Login was unsuccessful."
      ],
      "line": 34,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "bty@yahoo.com",
        "y203",
        "Login was unsuccessful."
      ],
      "line": 35,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "abc@ymail.com",
        "10a",
        "Login was unsuccessful."
      ],
      "line": 36,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2811188100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Sanity"
    },
    {
      "line": 23,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter email\"jalpa@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"Jbcgfb\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the error message \"Login was unsuccessful.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 40000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 633779500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jalpa@gmail.com",
      "offset": 14
    }
  ],
  "location": "LoginStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1104619700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jbcgfb",
      "offset": 18
    }
  ],
  "location": "RegistrationStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 1126891500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1173030600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful.",
      "offset": 32
    }
  ],
  "location": "LoginStepdefs.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 40744700,
  "status": "passed"
});
formatter.after({
  "duration": 708084400,
  "status": "passed"
});
formatter.before({
  "duration": 2978075200,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Sanity"
    },
    {
      "line": 23,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter email\"bty@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"y203\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the error message \"Login was unsuccessful.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1260070500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bty@yahoo.com",
      "offset": 14
    }
  ],
  "location": "LoginStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1138750500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "y203",
      "offset": 18
    }
  ],
  "location": "RegistrationStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 1121644200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1143162000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful.",
      "offset": 32
    }
  ],
  "location": "LoginStepdefs.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 39127100,
  "status": "passed"
});
formatter.after({
  "duration": 708032200,
  "status": "passed"
});
formatter.before({
  "duration": 3109583000,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@Sanity"
    },
    {
      "line": 23,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter email\"abc@ymail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"10a\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the error message \"Login was unsuccessful.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 118700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1222593800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@ymail.com",
      "offset": 14
    }
  ],
  "location": "LoginStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1139903900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10a",
      "offset": 18
    }
  ],
  "location": "RegistrationStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 1124719800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 529166400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful.",
      "offset": 32
    }
  ],
  "location": "LoginStepdefs.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 62133900,
  "status": "passed"
});
formatter.after({
  "duration": 795314700,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featureFile/3computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "\r\nAs a user I want to navigate to computer page and its all related products page on nopcommerce website",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2091908400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be able to navigate to computer page successfully",
  "description": "",
  "id": "computer-test;user-should-be-able-to-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be able to navigate to computers page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should able to see \"Computers\" as title on computers page",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 20100,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iClickOnComputersTab()"
});
formatter.result({
  "duration": 2252750100,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iShouldBeAbleToNavigateToComputersPageSuccessfully()"
});
formatter.result({
  "duration": 19600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 22
    }
  ],
  "location": "ComputersStepdefs.iShouldAbleToSeeAsTitleOnComputersPage(String)"
});
formatter.result({
  "duration": 57686900,
  "status": "passed"
});
formatter.after({
  "duration": 745469400,
  "status": "passed"
});
formatter.before({
  "duration": 2158832100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should be able to  navigate to desktop page successfully",
  "description": "",
  "id": "computer-test;user-should-be-able-to--navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Smoke"
    },
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I mouse hover on computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I mouse hover and click on \"Desktops\" from computers drop down menu",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to navigate to Desktops page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I should be able to see \"Desktops\" as title on Desktops page",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 34600,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iMouseHoverOnComputersTab()"
});
formatter.result({
  "duration": 203234000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 28
    }
  ],
  "location": "ComputersStepdefs.iMouseHoverAndClickOnFromComputersDropDownMenu(String)"
});
formatter.result({
  "duration": 1735786600,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iShouldBeAbleToNavigateToDesktopsPageSuccessfully()"
});
formatter.result({
  "duration": 241400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 25
    }
  ],
  "location": "ComputersStepdefs.iShouldBeAbleToSeeAsTitleOnDesktopsPage(String)"
});
formatter.result({
  "duration": 55986900,
  "status": "passed"
});
formatter.after({
  "duration": 788016900,
  "status": "passed"
});
formatter.before({
  "duration": 2859592900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to  navigate to Notebooks page successfully",
  "description": "",
  "id": "computer-test;user-should-be-able-to--navigate-to-notebooks-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Sanity"
    },
    {
      "line": 20,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I mouse hover on computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I mouse hover and click on \"Notebooks\" from computers drop down menu",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to navigate to Notebooks page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I should be able to see \"Notebooks\" as title on Notebooks page",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 16800,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iMouseHoverOnComputersTab()"
});
formatter.result({
  "duration": 188322500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Notebooks",
      "offset": 28
    }
  ],
  "location": "ComputersStepdefs.iMouseHoverAndClickOnFromComputersDropDownMenu(String)"
});
formatter.result({
  "duration": 2534505400,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iShouldBeAbleToNavigateToNotebooksPageSuccessfully()"
});
formatter.result({
  "duration": 25600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Notebooks",
      "offset": 25
    }
  ],
  "location": "ComputersStepdefs.iShouldBeAbleToSeeAsTitleOnNotebooksPage(String)"
});
formatter.result({
  "duration": 42737400,
  "status": "passed"
});
formatter.after({
  "duration": 707117500,
  "status": "passed"
});
formatter.before({
  "duration": 2094660800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User should be able to  navigate to Software page successfully",
  "description": "",
  "id": "computer-test;user-should-be-able-to--navigate-to-software-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I mouse hover on computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I mouse hover and click on \"Software\" from computers drop down menu",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should be able to navigate to Software page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I should be able to see \"Software\" as title on Software page",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 26900,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iMouseHoverOnComputersTab()"
});
formatter.result({
  "duration": 218848800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software",
      "offset": 28
    }
  ],
  "location": "ComputersStepdefs.iMouseHoverAndClickOnFromComputersDropDownMenu(String)"
});
formatter.result({
  "duration": 2331215800,
  "status": "passed"
});
formatter.match({
  "location": "ComputersStepdefs.iShouldBeAbleToNavigateToSoftwarePageSuccessfully()"
});
formatter.result({
  "duration": 29900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software",
      "offset": 25
    }
  ],
  "location": "ComputersStepdefs.iShouldBeAbleToSeeAsTitleOnSoftwarePage(String)"
});
formatter.result({
  "duration": 47379700,
  "status": "passed"
});
formatter.after({
  "duration": 715810800,
  "status": "passed"
});
});