$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Girish Nair/git/CucumberProject/BDDDemo/src/main/java/Feature/TrivagoSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Trivago Website Search Functionality Test",
  "description": "",
  "id": "trivago-website-search-functionality-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search for a location on Room5 using search bar",
  "description": "",
  "id": "trivago-website-search-functionality-test;search-for-a-location-on-room5-using-search-bar",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open Browser and input the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "correct link is open by the browser",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on search menu",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter the location \"\u003clocation\u003e\" to search hotels",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user closes browser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "trivago-website-search-functionality-test;search-for-a-location-on-room5-using-search-bar;",
  "rows": [
    {
      "cells": [
        "location"
      ],
      "line": 14,
      "id": "trivago-website-search-functionality-test;search-for-a-location-on-room5-using-search-bar;;1"
    },
    {
      "cells": [
        "England"
      ],
      "line": 15,
      "id": "trivago-website-search-functionality-test;search-for-a-location-on-room5-using-search-bar;;2"
    },
    {
      "cells": [
        "Chicago"
      ],
      "line": 16,
      "id": "trivago-website-search-functionality-test;search-for-a-location-on-room5-using-search-bar;;3"
    },
    {
      "cells": [
        "Dallas"
      ],
      "line": 17,
      "id": "trivago-website-search-functionality-test;search-for-a-location-on-room5-using-search-bar;;4"
    },
    {
      "cells": [
        "New York"
      ],
      "line": 18,
      "id": "trivago-website-search-functionality-test;search-for-a-location-on-room5-using-search-bar;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Search for a location on Room5 using search bar",
  "description": "",
  "id": "trivago-website-search-functionality-test;search-for-a-location-on-room5-using-search-bar;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open Browser and input the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "correct link is open by the browser",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on search menu",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter the location \"England\" to search hotels",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user closes browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.open_Browser_and_input_the_URL()"
});
formatter.result({
  "duration": 64780064288,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.correct_link_is_open_by_the_browser()"
});
formatter.result({
  "duration": 6312980289,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.click_on_search_menu()"
});
formatter.result({
  "duration": 4402792745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "England",
      "offset": 20
    }
  ],
  "location": "stepDefinition.enter_the_location_to_search_hotels(String)"
});
formatter.result({
  "duration": 3109765703,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_closes_browser()"
});
formatter.result({
  "duration": 25250598649,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Search for a location on Room5 using search bar",
  "description": "",
  "id": "trivago-website-search-functionality-test;search-for-a-location-on-room5-using-search-bar;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open Browser and input the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "correct link is open by the browser",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on search menu",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter the location \"Chicago\" to search hotels",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user closes browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.open_Browser_and_input_the_URL()"
});
formatter.result({
  "duration": 21372273904,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.correct_link_is_open_by_the_browser()"
});
formatter.result({
  "duration": 443151109,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.click_on_search_menu()"
});
formatter.result({
  "duration": 2584443388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chicago",
      "offset": 20
    }
  ],
  "location": "stepDefinition.enter_the_location_to_search_hotels(String)"
});
formatter.result({
  "duration": 3822758023,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_closes_browser()"
});
formatter.result({
  "duration": 1127552388,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search for a location on Room5 using search bar",
  "description": "",
  "id": "trivago-website-search-functionality-test;search-for-a-location-on-room5-using-search-bar;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open Browser and input the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "correct link is open by the browser",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on search menu",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter the location \"Dallas\" to search hotels",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user closes browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.open_Browser_and_input_the_URL()"
});
formatter.result({
  "duration": 21431936852,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.correct_link_is_open_by_the_browser()"
});
formatter.result({
  "duration": 35196578,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.click_on_search_menu()"
});
formatter.result({
  "duration": 1388413519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dallas",
      "offset": 20
    }
  ],
  "location": "stepDefinition.enter_the_location_to_search_hotels(String)"
});
formatter.result({
  "duration": 1067950064,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_closes_browser()"
});
formatter.result({
  "duration": 961887006,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search for a location on Room5 using search bar",
  "description": "",
  "id": "trivago-website-search-functionality-test;search-for-a-location-on-room5-using-search-bar;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open Browser and input the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "correct link is open by the browser",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on search menu",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter the location \"New York\" to search hotels",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user closes browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.open_Browser_and_input_the_URL()"
});
formatter.result({
  "duration": 33224837753,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.correct_link_is_open_by_the_browser()"
});
formatter.result({
  "duration": 36894945,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.click_on_search_menu()"
});
formatter.result({
  "duration": 703537985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 20
    }
  ],
  "location": "stepDefinition.enter_the_location_to_search_hotels(String)"
});
formatter.result({
  "duration": 2043678154,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_closes_browser()"
});
formatter.result({
  "duration": 3769106511,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Subscribe to the Newsletter",
  "description": "",
  "id": "trivago-website-search-functionality-test;subscribe-to-the-newsletter",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@test2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Open Browser and input the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User search for newsletter option",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "input email address \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Submit the consent to receive newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user closes browser",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "trivago-website-search-functionality-test;subscribe-to-the-newsletter;",
  "rows": [
    {
      "cells": [
        "email"
      ],
      "line": 29,
      "id": "trivago-website-search-functionality-test;subscribe-to-the-newsletter;;1"
    },
    {
      "cells": [
        "natasha@org.com"
      ],
      "line": 30,
      "id": "trivago-website-search-functionality-test;subscribe-to-the-newsletter;;2"
    },
    {
      "cells": [
        "steve@org.com"
      ],
      "line": 31,
      "id": "trivago-website-search-functionality-test;subscribe-to-the-newsletter;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Subscribe to the Newsletter",
  "description": "",
  "id": "trivago-website-search-functionality-test;subscribe-to-the-newsletter;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@test2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Open Browser and input the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User search for newsletter option",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "input email address \"natasha@org.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Submit the consent to receive newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user closes browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.open_Browser_and_input_the_URL()"
});
formatter.result({
  "duration": 14873260422,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_search_for_newsletter_option()"
});
formatter.result({
  "duration": 89069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "natasha@org.com",
      "offset": 21
    }
  ],
  "location": "stepDefinition.input_email_address(String)"
});
formatter.result({
  "duration": 984841539,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.submit_the_consent_to_receive_newsletter()"
});
formatter.result({
  "duration": 299514133,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_closes_browser()"
});
formatter.result({
  "duration": 930097420,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Subscribe to the Newsletter",
  "description": "",
  "id": "trivago-website-search-functionality-test;subscribe-to-the-newsletter;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@test2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Open Browser and input the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User search for newsletter option",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "input email address \"steve@org.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Submit the consent to receive newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user closes browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.open_Browser_and_input_the_URL()"
});
formatter.result({
  "duration": 32452251502,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_search_for_newsletter_option()"
});
formatter.result({
  "duration": 69016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "steve@org.com",
      "offset": 21
    }
  ],
  "location": "stepDefinition.input_email_address(String)"
});
formatter.result({
  "duration": 892623296,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.submit_the_consent_to_receive_newsletter()"
});
formatter.result({
  "duration": 289697926,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_closes_browser()"
});
formatter.result({
  "duration": 933924109,
  "status": "passed"
});
});