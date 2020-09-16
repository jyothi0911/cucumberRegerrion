package com.stepdefinition;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.utilclass.adactin.AdactinCucumber;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HookClass extends AdactinCucumber{
	

	@Before
	public void testcase1() {
		//browserlaunch();
		//getUrl(" http://www.adactin.com/HotelApp/");
		
		System.out.println("Before Annotation1");
	}
	
	@After
	public void testcase2(Scenario s) {
		
		//TakesScreenshot ts=(TakesScreenshot)d;
	    //byte[] b=	ts.getScreenshotAs(OutputType.BYTES);
      //s.embed(b, "img/png");
	System.out.println("After Anotation");	
	}

}
