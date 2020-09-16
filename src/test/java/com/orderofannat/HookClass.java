package com.orderofannat;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.utilclass.adactin.AdactinCucumber;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HookClass  extends AdactinCucumber{
	
	@Before()
	public void test1() {
		
		System.out.println("Before Annotation 1 ");
	}
	
	
	@Before("@first")
	public void case2() {
		
		System.out.println("Before Annotation 2 ");
	}
	
	@Before("@second")
	public void CAE() {
		
		System.out.println("Before Annotation 3 ");
	}
	
	@Before("@third")
	public void Test() {
		
		System.out.println("Before Annotation 4 ");
	}
	
}
