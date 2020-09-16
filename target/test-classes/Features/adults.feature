Feature: Verify the Adactinpage functionalities

Scenario Outline: Verifiying the aaults details
  Given user is on the Adactinpage
  When user is should be enter the "<userName>" and"<password>"
  And  user is click the login button
  When user is should enter the details "<location>","<hotelname>","<roomType>" and "<noofRooms>"
  And  user Enter the dates "<checkIn>" and "<CheckOut>","<noofadults>" and "<noofchildren>"
  Then user click the search button 
  And  user in selectHotel page click the select option and continue option 
  When user should enter the personal details"<finame>","<lstname>","<addrs>","<ccno>","<cctype>","<Exmonth>","<Exyear>" and "<cvvno>"
  Then user click the Book  now option
  Then user know the booking oder no
  
   Examples:
   |userName    | password |location | hotelname     |roomType    |noofRooms|checkIn   |CheckOut  |noofadults|noofchildren|finame|lstname|addrs        |ccno            |cctype|  Exmonth|Exyear|cvvno|
   |jyothibala  | navyasree|London   | Hotel Sunshine|Double      |    1    |26/08/2020|27/08/2020|  4       |1           |jyothi|gajula |Thamilnadu   |4568789123456789|VISA  |November | 2022|428  |
   |jyothibala  | navyasree|New York | Hotel Creek   |Deluxe      |    2    |27/08/2020|28/08/2020|  1       |0           |bala  |jula   |AndhraPradesh|9456123456789200|VISA  |Descember|2021 |653  |
   |jyothibala  | navyasree|Paris    | Hotel Creek   |Standard    |    3    |26/08/2020|27/08/2020|  2       |2           |siva  |bhira  |WestBengal   |6894561234567892|VISA  |August   |2022 |651 |
   
   |jyothibala  | navyasree|Sydney   | Hotel Hervey  |Super Deluxe|    4    |28/08/2020|29/08/2020|  3       |3           |Navya |julkyf |GUjarath     |7894561789456277|VISA  |September|2023 |148 |
  