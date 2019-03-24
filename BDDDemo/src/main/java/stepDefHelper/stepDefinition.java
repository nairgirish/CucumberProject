package stepDefHelper;

import java.util.List;

import org.junit.Assert;

import Pages.SearchPage;
import Utils.TestBase;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefinition extends TestBase {

	SearchPage searchPage;

	@Given("^Open Browser and input the URL$")
	public void open_Browser_and_input_the_URL() {
		TestBase.initialization();

	}
	
	@When("^correct link is open by the browser$")
	public void correct_link_is_open_by_the_browser() {
		searchPage = new SearchPage();
		String Title = searchPage.validateTitle();
		Assert.assertEquals("trivago Magazine", Title);
	}

	@Then("^Click on search menu$")
	public void click_on_search_menu() {
		searchPage = new SearchPage();
		searchPage.clickSearchBar();

	}

	@Then("^Enter the location \"(.*)\" to search hotels$")
	public void enter_the_location_to_search_hotels(String arg1) {
		searchPage = new SearchPage();
		searchPage.search_loctn(arg1);

	}

	@When("^User search for newsletter option$")
	public void user_search_for_newsletter_option() {

	}

	@Then("^input email address \"(.*)\"$")
	public void input_email_address(String email) {
		searchPage = new SearchPage();
		searchPage.enter_email(email);

	}

	@Then("^Submit the consent to receive newsletter$")
	public void submit_the_consent_to_receive_newsletter() {
		searchPage = new SearchPage();
		searchPage.click_inspire_me();
	}

	@And("^user closes browser$")
	public void user_closes_browser() {
		driver.quit();
	}
	
	
	

}
