package sample.hero;

import org.junit.runner.RunWith; 


import cucumber.junit.Cucumber; 







	 

	@RunWith(Cucumber.class) 
    @Cucumber.Options( 

	        format = {"pretty","html:target/cucumber"}, 
	        features="src/test/resources")		
	
	      


	public class Runner {

	
	

}
