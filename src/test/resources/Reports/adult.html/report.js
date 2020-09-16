$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/adults.feature");
formatter.feature({
  "name": "Verify the Adactinpage functionalities",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifiying the aaults details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactinpage",
  "keyword": "Given "
});
formatter.step({
  "name": "user is should be enter the \"\u003cuserName\u003e\" and\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user is click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "user is should enter the details \"\u003clocation\u003e\",\"\u003chotelname\u003e\",\"\u003croomType\u003e\" and \"\u003cnoofRooms\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user Enter the dates \"\u003ccheckIn\u003e\" and \"\u003cCheckOut\u003e\",\"\u003cnoofadults\u003e\" and \"\u003cnoofchildren\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click the search button",
  "keyword": "Then "
});
formatter.step({
  "name": "user in selectHotel page click the select option and continue option",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter the personal details\"\u003cfiname\u003e\",\"\u003clstname\u003e\",\"\u003caddrs\u003e\",\"\u003cccno\u003e\",\"\u003ccctype\u003e\",\"\u003cExmonth\u003e\",\"\u003cExyear\u003e\" and \"\u003ccvvno\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click the Book  now option",
  "keyword": "Then "
});
formatter.step({
  "name": "user know the booking oder no",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "location",
        "hotelname",
        "roomType",
        "noofRooms",
        "checkIn",
        "CheckOut",
        "noofadults",
        "noofchildren",
        "finame",
        "lstname",
        "addrs",
        "ccno",
        "cctype",
        "Exmonth",
        "Exyear",
        "cvvno"
      ]
    },
    {
      "cells": [
        "jyothibala",
        "navyasree",
        "London",
        "Hotel Sunshine",
        "Double",
        "1",
        "26/08/2020",
        "27/08/2020",
        "4",
        "1",
        "jyothi",
        "gajula",
        "Thamilnadu",
        "4568789123456789",
        "VISA",
        "November",
        "2022",
        "428"
      ]
    },
    {
      "cells": [
        "jyothibala",
        "navyasree",
        "New York",
        "Hotel Creek",
        "Deluxe",
        "2",
        "27/08/2020",
        "28/08/2020",
        "1",
        "0",
        "bala",
        "jula",
        "AndhraPradesh",
        "9456123456789200",
        "VISA",
        "Descember",
        "2021",
        "653"
      ]
    },
    {
      "cells": [
        "jyothibala",
        "navyasree",
        "Paris",
        "Hotel Creek",
        "Standard",
        "3",
        "26/08/2020",
        "27/08/2020",
        "2",
        "2",
        "siva",
        "bhira",
        "WestBengal",
        "6894561234567892",
        "VISA",
        "August",
        "2022",
        "651"
      ]
    },
    {
      "cells": [
        "jyothibala",
        "navyasree",
        "Sydney",
        "Hotel Hervey",
        "Super Deluxe",
        "4",
        "28/08/2020",
        "29/08/2020",
        "3",
        "3",
        "Navya",
        "julkyf",
        "GUjarath",
        "7894561789456277",
        "VISA",
        "September",
        "2023",
        "148"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifiying the aaults details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactinpage",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinLoginStep.user_is_on_the_Adactinpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is should be enter the \"jyothibala\" and\"navyasree\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is click the login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is should enter the details \"London\",\"Hotel Sunshine\",\"Double\" and \"1\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user Enter the dates \"26/08/2020\" and \"27/08/2020\",\"4\" and \"1\"",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinLoginStep.user_Enter_the_dates_and_and(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click the search button",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinLoginStep.user_click_the_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user in selectHotel page click the select option and continue option",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinLoginStep.user_in_selectHotel_page_click_the_select_option_and_continue_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should enter the personal details\"jyothi\",\"gajula\",\"Thamilnadu\",\"4568789123456789\",\"VISA\",\"November\",\"2022\" and \"428\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinLoginStep.user_should_enter_the_personal_details_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click the Book  now option",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinLoginStep.user_click_the_Book_now_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user know the booking oder no",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinLoginStep.user_know_the_booking_oder_no()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verifiying the aaults details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactinpage",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinLoginStep.user_is_on_the_Adactinpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is should be enter the \"jyothibala\" and\"navyasree\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is click the login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is should enter the details \"New York\",\"Hotel Creek\",\"Deluxe\" and \"2\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user Enter the dates \"27/08/2020\" and \"28/08/2020\",\"1\" and \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinLoginStep.user_Enter_the_dates_and_and(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click the search button",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinLoginStep.user_click_the_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user in selectHotel page click the select option and continue option",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinLoginStep.user_in_selectHotel_page_click_the_select_option_and_continue_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should enter the personal details\"bala\",\"jula\",\"AndhraPradesh\",\"9456123456789200\",\"VISA\",\"Descember\",\"2021\" and \"653\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinLoginStep.user_should_enter_the_personal_details_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click the Book  now option",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinLoginStep.user_click_the_Book_now_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user know the booking oder no",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinLoginStep.user_know_the_booking_oder_no()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verifiying the aaults details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactinpage",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinLoginStep.user_is_on_the_Adactinpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is should be enter the \"jyothibala\" and\"navyasree\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is click the login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is should enter the details \"Paris\",\"Hotel Creek\",\"Standard\" and \"3\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user Enter the dates \"26/08/2020\" and \"27/08/2020\",\"2\" and \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinLoginStep.user_Enter_the_dates_and_and(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click the search button",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinLoginStep.user_click_the_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user in selectHotel page click the select option and continue option",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinLoginStep.user_in_selectHotel_page_click_the_select_option_and_continue_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should enter the personal details\"siva\",\"bhira\",\"WestBengal\",\"6894561234567892\",\"VISA\",\"August\",\"2022\" and \"651\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinLoginStep.user_should_enter_the_personal_details_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click the Book  now option",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinLoginStep.user_click_the_Book_now_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user know the booking oder no",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinLoginStep.user_know_the_booking_oder_no()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verifiying the aaults details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactinpage",
  "keyword": "Given "
});
formatter.match({
  "location": "AdactinLoginStep.user_is_on_the_Adactinpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is should be enter the \"jyothibala\" and\"navyasree\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is click the login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is should enter the details \"Sydney\",\"Hotel Hervey\",\"Super Deluxe\" and \"4\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user Enter the dates \"28/08/2020\" and \"29/08/2020\",\"3\" and \"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinLoginStep.user_Enter_the_dates_and_and(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click the search button",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinLoginStep.user_click_the_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user in selectHotel page click the select option and continue option",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinLoginStep.user_in_selectHotel_page_click_the_select_option_and_continue_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should enter the personal details\"Navya\",\"julkyf\",\"GUjarath\",\"7894561789456277\",\"VISA\",\"September\",\"2023\" and \"148\"",
  "keyword": "When "
});
formatter.match({
  "location": "AdactinLoginStep.user_should_enter_the_personal_details_and(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click the Book  now option",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinLoginStep.user_click_the_Book_now_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user know the booking oder no",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinLoginStep.user_know_the_booking_oder_no()"
});
formatter.result({
  "status": "skipped"
});
});