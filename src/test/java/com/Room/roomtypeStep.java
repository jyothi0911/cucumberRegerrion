 package com.Room;

import org.openqa.selenium.Alert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.pojo.adactin.BookIternary;
import org.pojo.adactin.CheckPayment;
import org.pojo.adactin.HotelDetailspojo;
import org.pojo.adactin.LoginAdactPojo;
import org.pojo.adactin.OrderNoPojo;
import org.pojo.adactin.SelectHotelAdact;
import org.utilclass.adactin.AdactinCucumber;

import com.manager.PageObjectManager;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class roomtypeStep extends AdactinCucumber {
	LoginAdactPojo la;
	HotelDetailspojo hdp;
	SelectHotelAdact sha;
	CheckPayment cp;
	OrderNoPojo on;
	BookIternary bi;
	PageObjectManager  manager;
	
	@Given("user is on the Adactinpage")
	public void user_is_on_the_Adactinpage() {
	
		browserlaunch();
		getUrl(" http://www.adactin.com/HotelApp/");
		maxwindow();
		time();
		
	}
	@When("user is should be enter the {string} and{string}")
	public void user_is_should_be_enter_the_and(String username, String password) {
		manager=PageObjectManager.getInstance();
		la=manager.getLoginAdactinPojo();
		  sendkey(la.getEmail().get(0),username);
			 sendkey(la.getPass().get(0),password);
	   
	}
	
    
	@When("user is click the login button")
	public void user_is_click_the_login_button(){
	
		
		logButton(la.getLogn().get(0));
	   
	}
    @When("user is should enter the details{string},{string},{string} and {string}")
    public void user_is_should_enter_the_details_and(String location, String Hname, String roomtype, String norooms) throws InterruptedException {
      
       manager=PageObjectManager.getInstance();
   	hdp=manager.getHotelDetailspojo();
      
       select(hdp.getLoc(),location);
       
       select(hdp.getHotel(),Hname);
       select(hdp.getRoom(),roomtype);
      select(hdp.getRoomno(),norooms);
       
	  }
	
    @When("user Enter the dates {string} and {string},{string} and {string}")
	public void user_Enter_the_dates_and_and(String in, String out, String adult, String child) {
    	manager=PageObjectManager.getInstance();
    	hdp=manager.getHotelDetailspojo();
    	sendkey(hdp.getChindate(),in);
    	sendkey(hdp.getChoutdate(),out);
    	select(hdp.getAdultroom(),adult);
    	select(hdp.getChildrm(),child);
   }
	@Then("user click the search button")
	public void user_click_the_search_button() {
		
		logButton(hdp.getSearch());
   }
	@When("user in selectHotel page click the select option and continue option")
	public void user_in_selectHotel_page_click_the_select_option_and_continue_option() {
		
		manager= PageObjectManager.getInstance();
		cp=manager.getCheckPayment();
		 logButton(cp.getRadibuton());
		 logButton(cp.getContiu());
	}
@When("user should enter the personal details{string},{string},{string},{string},{string},{string},{string} and {string}")
public void user_should_enter_the_personal_details_and(String fname, String lname, String add, String ccno, String cctype, String xmon, String xyr, String cvv){
	 manager= PageObjectManager.getInstance();
	   sha=manager.getSelectHotelAdact();
	
	sendkey(sha.getFname(),fname);
	sendkey(sha.getLname(),lname);
	sendkey(sha.getAddrs(),add);
	sendkey(sha.getCardno(),ccno);
	sendkey(sha.getCardtype(),cctype);
	sendkey(sha.getExmont(),xmon);
	sendkey(sha.getExyer(),xyr);
	sendkey(sha.getCvv(),cvv);
	
   }

	@Then("user click the Book  now option")
	public void user_click_the_Book_now_option() {
		
		logButton(sha.getBook());
	}
	
	  @Then("user know the booking oder no click the book iternary")
		public void user_know_the_booking_oder_no_click_the_book_iternary() {
		 manager=PageObjectManager.getInstance();
		 on=manager.getOrderNoPojo();
		 on.bokno();
		 
	}

	@Then("click the check box")
	public void click_the_check_box()  {
	manager=PageObjectManager.getInstance();
	bi=manager.getBookIternary();
	bi.bookitern();
	bi.id();
	bi.ok();
	
	bi.id2();
	bi.ok();
	


	
		}

}





