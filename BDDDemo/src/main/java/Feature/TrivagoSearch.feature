Feature: Trivago Website Search Functionality Test 


@test1
Scenario Outline: Search for a location on Room5 using search bar 
	Given Open Browser and input the URL 
	When correct link is open by the browser 
	Then Click on search menu 
	And Enter the location "<location>" to search hotels 
	And user closes browser 
	
	Examples:
	
	| location | 
	| England |
	| Chicago |
	| Dallas |
	| New York |

@test2	
Scenario Outline: Subscribe to the Newsletter 
	Given Open Browser and input the URL 
	When User search for newsletter option 
	Then input email address "<email>" 
	And Submit the consent to receive newsletter 
	And user closes browser 
	
	Examples: 
		| email | 
		|  natasha@org.com| 
		|  steve@org.com |
		
		
		
		
    	