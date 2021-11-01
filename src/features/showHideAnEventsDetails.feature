Feature: SHOW/HIDE AN EVENT’S DETAILS

Scenario: An element is collapsed by default.
Given user is on main page
When the user opens the app
Then user should sees a list of events in a collapsed form

Scenario: User can expand an event to see its details
Given The main page is open
When User clicks on “View Details”
Then Element expand to display additional details

Scenario: User can collapse an event to hide its details
Given user sees expanded element
When user clicks on “Hide Details”
Then element returns to its default collapsed state