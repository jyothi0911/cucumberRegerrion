package com.Adult;

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

public class AdultsStep  extends AdactinCucumber{
	LoginAdactPojo la;
	HotelDetailspojo hdp;
	SelectHotelAdact sha;
	BookIternary bi;
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
		  sendkey(la.getEmail().get(0),username);
			 sendkey(la.getPass().get(0),password);
			 logButton(la.getLogn().get(0));
	   
	}

	@Then("click the bookiternary option")
	public void click_the_bookiternary_option() {
		manager=PageObjectManager.getInstance();
		bi=manager.getBookIternary();
		bi.bookitern();
	}

	@Then("cancel the order")
	public void cancel_the_order() {
		
		bi.id();
	   alrtmesg();
		bi.ok();
		
		bi.id2();
		alrtmesg();
		bi.ok();
		
	   
	}

	
	



}
