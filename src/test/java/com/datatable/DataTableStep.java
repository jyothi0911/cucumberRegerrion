package com.datatable;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.WebElement;
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

public class DataTableStep extends AdactinCucumber {

	LoginAdactPojo la;
	HotelDetailspojo hdp;
	SelectHotelAdact sha;
	CheckPayment  cp;
	OrderNoPojo on;
	PageObjectManager  manager;
	
	@Given("user is on the Adactinpage")
	public void user_is_on_the_Adactinpage() {
		browserlaunch();
		getUrl(" http://www.adactin.com/HotelApp/");
		maxwindow();
		time();
		
	  
	}

	@When("user is should be enter the {string} and {string}")
	public void user_is_should_be_enter_the_and(String username, String password) {
		manager=PageObjectManager.getInstance();
		la=manager.getLoginAdactinPojo();
		la.login(username, password);
		
	  
	}

	@When("user is should enter the details{string},{string}, {string},{string} and {string}")
	public void user_is_should_enter_the_details_and(String location, String hname, String roomtype, String in, 
			 String out, io.cucumber.datatable.DataTable data) throws InterruptedException {
		manager=PageObjectManager.getInstance();
    	hdp=manager.getHotelDetailspojo();
    	hdp.datadetails1(location,hname,roomtype,in,out);
    	
    	List<Map<String,String>> lm1=data.asMaps();
    	Map<String,String> m1=lm1.get(2);
    	
    	
       
        String s=m1.get("rooms");
    	String s1=m1.get("adults");
    	String s2=m1.get("children");
    	
    	Thread.sleep(2000);
    	select(hdp.getRoomno(),s);
    	
    	Thread.sleep(2000);
    	select(hdp.getAdultroom(),s1);
    	
    	Thread.sleep(2000);
    	select(hdp.getChildrm(),s2);
    	
   }

	@Then("user click the search button")
	public void user_click_the_search_button() {
		manager=PageObjectManager.getInstance();
    	hdp=manager.getHotelDetailspojo();
		 hdp.srch();
		
	  
	}

	@Then("user in selectHotel page click the select option and continue option")
	public void user_in_selectHotel_page_click_the_select_option_and_continue_option() {
		manager= PageObjectManager.getInstance();
		cp=manager.getCheckPayment();
		cp.rdbuton();
		cp.contu();
	 
	}

	@When("user should enter the personal details{string},{string},{string},{string},{string},{string},{string} and {string}")
	public void user_should_enter_the_personal_details_and(String fname, String lname, String add, 
			String ccno, String cctype, String xmon, String xyr, String cvv) {
		manager= PageObjectManager.getInstance();
		   sha=manager.getSelectHotelAdact();
		   sha.firtname(fname, lname, add, ccno, cctype, xmon, xyr, cvv);
		
	}

	@Then("user click the Book  now option")
	public void user_click_the_Book_now_option() {
		 manager= PageObjectManager.getInstance();
		   sha=manager.getSelectHotelAdact();
	sha.bookhotel();	
		
	    
	}

	@Then("user know the booking oder no")
	public void user_know_the_booking_oder_no() {
		manager=   PageObjectManager.getInstance();
		 on=manager.getOrderNoPojo();
		 String s=on.getBookno().getAttribute("value");
			System.out.println(s);
	  
	}




}
