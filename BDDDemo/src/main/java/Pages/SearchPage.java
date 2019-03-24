package Pages;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import Utils.TestBase;

public class SearchPage extends TestBase {

	@FindBy(xpath = "//div[@class='search-icon']")
	WebElement searchBar;

	@FindBy(xpath = "//*[contains(@placeholder,'Search')]")
	WebElement searchbox;
	
	
	@FindBy(name="email")
	WebElement emailbox;
	
	@FindBy(xpath="//button[text()='Inspire Me']")
	WebElement inspireBtn;
	

	public SearchPage() {
		PageFactory.initElements(driver, this);
	}

	public String validateTitle() {
		return driver.getTitle();
	}

	public void clickSearchBar() {
		searchBar.click();
	}

	public void search_loctn(String loctn) {

		searchbox.sendKeys(loctn);
		searchbox.sendKeys(Keys.ENTER);
	}

	public void enter_email(String email)
	{
		emailbox.sendKeys(email);
	}
	
	public void click_inspire_me() {
		inspireBtn.click();
	}
	

	
}
