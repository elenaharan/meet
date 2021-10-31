Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number.
Given user opens the app
When user sees a list of events
Then there are 32 events listed

Scenario: User can change the number of events they want to see.
Given user opens the app
When user enters number of events he wants to be displayed
Then the corresponding number of events is displayed to the use