$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('src\test\resources\hero.feature');
formatter.feature({
  "line": 2,
  "name": "Admin can log into the portal",
  "description": "As A Admin\r\nI want to Login\r\nSo that I can see the dashboard",
  "id": "admin-can-log-into-the-portal",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "line": 9,
  "name": "Admin can login and see welcome message.-Happy path",
  "description": "",
  "id": "admin-can-log-into-the-portal;admin-can-login-and-see-welcome-message.-happy-path",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Admin is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin enters \u0027testlabadmin\u0027 as username",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Admin enters \u0027Admin1\u0027 as password",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin clicks on \u0027login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Admin should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Admin should see \u0027Welcome Admin\u0027 text message,dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.Admin_is_in_login_page()"
});
formatter.result({
  "duration": 176400423,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.Admin_enters_testlabadmin_as_username()"
});
formatter.result({
  "duration": 43856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "Stepdefs.Admin_enters_Admin_as_password(int)"
});
formatter.result({
  "duration": 2617952,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.Admin_clicks_on_login_button()"
});
formatter.result({
  "duration": 67167,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.Admin_should_login_successfully()"
});
formatter.result({
  "duration": 77045,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefs.Admin_should_see_Welcome_Admin_text_message_dashboard()"
});
formatter.result({
  "duration": 105493,
  "status": "passed"
});
});