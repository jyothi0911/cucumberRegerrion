Feature: Verify the Adactinpage functionalities
 
 Scenario Outline: Verifiying the AdactinPage details


  Given user is on the Adactinpage
  When user is should be enter the "<userName>" and "<password>"
  When user is should enter the details"<loacation>","<hotelname>","<roomType>" and "<noofRooms>"
  And  user Enter the dates "<checkIn>" and "<CheckOut>","<noofadults>" and "<noofchildren>"
  Then user click the search button 
  And  user in selectHotel page click the select option and continue option 
  When user should enter the personal details"<finame>","<lstname>","<addrs>","<ccno>","<cctype>","<Exmonth>","<Exyear>" and "<cvvno>"
  Then user click the Book  now option
  Then user know the booking oder no
  
  
 
 Examples:
   
    |  userName   | password |loacation| hotelname      |roomType    |noofRooms|checkIn   |CheckOut  |noofadults|noofchildren|finame|lstname|addrs        |ccno            |cctype|  Exmonth|Exyear|cvvno|
   
    | jyothibala  |navyasree |London   | Hotel Sunshine |Double      |    1    |26/08/2020|27/08/2020|  1       |1           |jyothi|gajula |Thamilnadu   |4568789123456789|VISA  |November | 2022|428  |
    | jyothibala  |navyasree |London   | Hotel Sunshine |Double      |    2    |26/08/2020|27/08/2020|  1       |1           |jyothi|gajula |Thamilnadu   |4568789123456789|Other |January  | 2022|428  |
    | jyothibala  |navyasree |London   | Hotel Sunshine |Double      |    4    |26/08/2020|27/08/2020|  1       |1           |jyothi|gajula |Thamilnadu   |4568789123456789|VISA  |August   | 2022|563  |
    | jyothibala  |navyasree |London   | Hotel Sunshine |Double      |    5    |26/08/2020|27/08/2020|  1       |1           |jyothi|gajula |Thamilnadu   |4568789123456789|Other |March    | 2022|428  |
    | jyothibala  |navyasree |London   | Hotel Sunshine |Double      |    6    |26/08/2020|27/08/2020|  1       |1           |jyothi|gajula |Thamilnadu   |4568789123456789|VISA  |May      | 2022|428  |
   # | jyothibala  |navyasree |London   | Hotel Sunshine |Double      |    7    |26/08/2020|27/08/2020|  1       |1           |jyothi|gajula |Thamilnadu   |4568789123456789|VISA  |November | 2022|428  |
    #| jyothibala  |navyasree |London   | Hotel Sunshine |Double      |    8    |26/08/2020|27/08/2020|  1       |1           |jyothi|gajula |Thamilnadu   |4568789123456789|Other |June     | 2022|428  |
    #| jyothibala  |navyasree |London   | Hotel Sunshine |Double      |    9    |26/08/2020|27/08/2020|  1       |1           |jyothi|gajula |Thamilnadu   |4568789123456789|VISA  |April    | 2022|428  |
    #| jyothibala  |navyasree |London   | Hotel Sunshine |Double      |    10   |26/08/2020|27/08/2020|  1       |1           |jyothi|gajula |Thamilnadu   |4568789123456789|VISA  |July     | 2022|428  |
    
    
    #  | jyothibala  |navyasree |London   | Hotel Sunshine |Double      |    10   |26/08/2020|27/08/2020|  2       |2           |jyothi|gajula |Thamilnadu   |4568789123456789|VISA  |November | 2022|428  |
     # | jyothibala  |navyasree |London   | Hotel Sunshine |Super Deluxe|    5    |26/08/2020|27/08/2020|  2       |2           |jyothi|gajula |Thamilnadu   |4568789123456789|Other |January  | 2022|428  |
      #| jyothibala  |navyasree |London   | Hotel Sunshine |Standard    |    1    |26/08/2020|27/08/2020|  2       |2           |jyothi|gajula |Thamilnadu   |4568789123456789|VISA  |February | 2022|428  |
      #| jyothibala  |navyasree |London   | Hotel Sunshine |Deluxe      |    2    |26/08/2020|27/08/2020|  2       |2           |jyothi|gajula |Thamilnadu   |4568789123456789|VISA  |March    | 2022|428  |
    
    #| jyothibala  |navyasree |London   | Hotel Sunshine |Deluxe      |    1    |26/08/2020|27/08/2020|  1       |0           |jyothi|gajula |Thamilnadu   |4568789123456789|VISA         |November | 2022|428  |
    #| jyothibala  |navyasree |London   | Hotel Sunshine |Deluxe      |    2    |26/08/2020|27/08/2020|  2       |1           |jyothi|gajula |Thamilnadu   |4568789123456789|Other        |February | 2022|428  |
    # | jyothibala  |navyasree |London   | Hotel Sunshine |Deluxe      |    3    |26/08/2020|27/08/2020|  2       |2           |jyothi|gajula |Thamilnadu   |4568789123456789|VISA         |November | 2022|428  |
    # | jyothibala  |navyasree |London   | Hotel Sunshine |Deluxe      |    4    |26/08/2020|27/08/2020|  2       |3           |jyothi|gajula |Thamilnadu   |4568789123456789|Master Card  |January  | 2022|428  |
     #| jyothibala  |navyasree |London   | Hotel Sunshine |Deluxe      |    5    |26/08/2020|27/08/2020|  2       |4           |jyothi|gajula |Thamilnadu   |4568789123456789|VISA         |November | 2022|428  |
    
     #| jyothibala  |navyasree |London   | Hotel Sunshine |Deluxe      |    2    |26/08/2020|27/08/2020|  1       |2           |jyothi|gajula |Thamilnadu   |4568789123456789|VISA  |November | 2022|428  |
     #| jyothibala  |navyasree |London   | Hotel Sunshine |Deluxe      |    2    |26/08/2020|27/08/2020|  2       |2           |jyothi|gajula |Thamilnadu   |4568789123456789|VISA  |November | 2022|428  |
     #| jyothibala  |navyasree |London   | Hotel Sunshine |Deluxe      |    2    |26/08/2020|27/08/2020|  3       |2           |jyothi|gajula |Thamilnadu   |4568789123456789|Other |January  | 2022|428  |
     #| jyothibala  |navyasree |London   | Hotel Sunshine |Deluxe      |    2    |26/08/2020|27/08/2020|  4       |2           |jyothi|gajula |Thamilnadu   |4568789123456789|VISA  |November | 2022|428  |
    
    

    
 
    