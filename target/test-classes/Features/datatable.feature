Feature: Verify the Adactinpage functionalities

  Scenario Outline: Verifiying the AdactinPage details
    Given user is on the Adactinpage
    When user is should be enter the "<userName>" and "<password>"
    When user is should enter the details"<location>","<hotelname>", "<roomType>","<checkIn>" and "<CheckOut>"
      | rooms | adults | children |
      |     1 |      1 |        0 |
      |     2 |      2 |        1 |
      |     3 |      3 |        2 |
      |     4 |      4 |        3 |
      |     5 |      0 |        4 |
      |     6 |      1 |        0 |
      |     7 |      2 |        1 |
      |     8 |      3 |        2 |
      |     9 |      4 |        3 |
      |    10 |      0 |        4 |
    Then user click the search button
    And user in selectHotel page click the select option and continue option
    When user should enter the personal details"<finame>","<lstname>","<addrs>","<ccno>","<cctype>","<Exmonth>","<Exyear>" and "<cvvno>"
    Then user click the Book  now option
    Then user know the booking oder no

    Examples: 
      | userName   | password  | location | hotelname      | roomType     | checkIn    | CheckOut   | finame | lstname | addrs      | ccno             | cctype | Exmonth  | Exyear | cvvno |
      | jyothibala | navyasree | London   | Hotel Sunshine | Double       | 26/08/2020 | 27/08/2020 | jyothi | gajula  | Thamilnadu | 4568789123456789 | VISA   | November |   2022 |   428 |
      | jyothibala | navyasree | London   | Hotel Sunshine | Super Deluxe | 26/08/2020 | 27/08/2020 | jyothi | gajula  | Thamilnadu | 4568789123456789 | Other  | January  |   2022 |   428 |
      | jyothibala | navyasree | London   | Hotel Sunshine | Standard     | 26/08/2020 | 27/08/2020 | jyothi | gajula  | Thamilnadu | 4568789123456789 | VISA   | February |   2022 |   428 |
      | jyothibala | navyasree | London   | Hotel Sunshine | Deluxe       | 26/08/2020 | 27/08/2020 | jyothi | gajula  | Thamilnadu | 4568789123456789 | VISA   | March    |   2022 |   428 |
