package com.tages;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.pojo.adactin.LoginAdactPojo;
import org.utilclass.adactin.AdactinCucumber;

import com.manager.PageObjectManager;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class TagSteps extends AdactinCucumber {
	
	LoginAdactPojo la;
	PageObjectManager  manager;
	
	
	@Given("user is on the Adactinpage")
	public void user_is_on_the_Adactinpage() {
		browserlaunch();
		getUrl(" http://www.adactin.com/HotelApp/");
		maxwindow();
		time();
	}
	
	@When("user is should be enter the username,password")
	public void user_is_should_be_enter_the_username_password(io.cucumber.datatable.DataTable data) {
		manager=PageObjectManager.getInstance();
		la=manager.getLoginAdactinPojo();
		
		Map<String,String> mp= data.asMap(String.class,String.class);
	
		String s1=mp.get("userName");
		String s2=mp.get("password");
		sendkey(la.getEmail().get(0),s1);
		sendkey(la.getPass().get(0),s2);
		
		

   
	}
	

}
