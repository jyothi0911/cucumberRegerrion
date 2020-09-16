package com.stepdefinition;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class Jvmreport {

	public static void  generateJvmreport(String jsonFile){
		
		File loc=new File(System.getProperty("user.dir")+ "\\src\\test\\resources\\Reports");
		
		Configuration confi= new Configuration(loc,"Adactin hotel");
	confi.addClassifications("Sprint","20");
	confi.addClassifications("Browser","chrome");
	confi.addClassifications("EnV","UAt");
	confi.addClassifications("Os","WIN_10");
	
	List<String> jsonFiles=new ArrayList<>();
	jsonFiles .add(jsonFile);
	
ReportBuilder builder =new ReportBuilder(jsonFiles, confi);
builder.generateReports();
	
	}
}
