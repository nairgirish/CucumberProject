package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\Girish Nair\\git\\CucumberProject\\BDDDemo\\src\\main\\java\\Feature\\TrivagoSearch.feature", glue = {
		"stepDefHelper" }, dryRun = false, 
				plugin = { "pretty", "html:test-output",
				"json:target/cucumber.json" }, tags = {}, monochrome = true
// "usage:target/cucumber-usage.json",
// "junit:targer/cucumber-results.xml"
)

public class TestRunner {

}
