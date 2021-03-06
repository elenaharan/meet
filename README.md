# Meet App <br>

This is a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events. <br>

![LiveDemo](https://github.com/elenaharan/meet/blob/main/demo/MeetLiveDemo.gif)

## Features & Requirements <br>
Key Features: <br>
1. Filter events by city. <br>
2. Show/hide event details. <br>
3. Specify number of events. <br>
4. Use the app when offline. <br>
5. Add an app shortcut to the home screen. <br>
6. View a chart showing the number of upcoming events by city. <br>

CLI Commands:

```npm start``` <br>
Runs the app in development mode.
The app can be viewed at **http://localhost:3000**

```npm build``` <br>
Builds the app for production mode

```npm run deploy``` <br>
Deploys the app to GitHub pages

```npm test``` <br>
Starts the test runner in the interactive watch mode

```npm test -- --coverage```<br>
Displays test coverage for the app

## Technical Requirements <br>
● The app must be a React application.<br>
● The app must be built using the TDD technique.<br>
● The app must use the Google Calendar API and OAuth2 authentication flow.<br>
● The app must use serverless functions (AWS lambda is preferred) for the authorization
server instead of using a traditional server.<br>
● The app’s code must be hosted in a Git repository on GitHub.<br>
● The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera,
as well as on IE11.<br>
● The app must display well on all screen sizes (including mobile and tablet) widths of
1920px and 320px.<br>
● The app must pass Lighthouse’s PWA checklist.<br>
● The app must work offline or in slow network conditions with the help of a service
worker.<br>
● Users may be able to install the app on desktop and add the app to their home screen
on mobile.<br>
● The app must be deployed on GitHub Pages.<br>
● The API call must use React axios and async/await.<br>
● The app must implement an alert system using an OOP approach to show information to
the user.<br>
● The app must make use of data visualization (recharts preferred).<br>
● The app must be covered by tests with a coverage rate >= 90%.<br>
● The app must be monitored using an online monitoring tool.<br>

## User Stories (Gherkin syntax)<br>

FEATURE 1: FILTER EVENTS BY CITY<br>
As a user I should be able to filter events by city so that I can see the list of events in that city. <br>
Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities. <br>
GIVEN: user hasn’t searched for any city yet <br>
WHEN: when user opens the app <br>
THEN: the user will see a list of events from all cities<br><br>

Scenario 2: User should see a list of suggestions when they search for a city.<br>
GIVEN: main page is open<br>
WHEN: user starts typing name of city <br>
THEN: user sees suggestions that match his search<br><br>

Scenario 3: User can select a city from the suggested list.<br>
GIVEN: user sees suggestions that match his search<br>
WHEN: user clicks on the suggested name<br>
THEN: user is redirected to list of events particular to the city<br><br>

FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS<br>
As a user, I should be able to expand and collapse the event descriptions so that I can view and hide 
the additional details of the event.<br>
Scenario 1: An element is collapsed by default.<br>
GIVEN: user is on main page<br>
WHEN: the event information is collapsed<br>
THEN: user sees a list of relevant events<br><br>
Scenario 2: User can expand an event to see its details<br>
GIVEN: User can see collapsed event element<br>
WHEN: user clicks on “View Details”<br>
THEN: element expand to display additional details<br><br>
Scenario 3: User can collapse an event to hide its details <br>
GIVEN: user sees expanded element<br>
WHEN: user clicks on “Hide Details”<br>
THEN: element returns to its default collapsed state<br><br>

FEATURE 3: SPECIFY NUMBER OF EVENTS<br>
As a user I should be able to specify the number of events I would like to be displayed so that I can 
view the desired number of events.<br>
Scenario 1: When user hasn’t specified a number, 32 is the default number.<br>
GIVEN: user opens the app<br>
WHEN: user sees a list of events<br>
THEN: there are 32 events listed<br><br>

Scenario 2: User can change the number of events they want to see.<br>
GIVEN: user opens the app<br>
WHEN: user enters number of events he wants to be displayed<br>
THEN: the corresponding number of events is displayed to the user<br><br>

FEATURE 4: USE THE APP WHEN OFFLINE<br>
As a user I should be able to use the app when offline so that I can view the app’s last accessed 
contents.<br>
Scenario 1: Show cached data when there’s no internet connection.<br>
GIVEN: user is offline<br>
WHEN: user opens the app in offline mode<br>
THEN: user is able to see the app’s contents while remaining offline<br><br>

Scenario 2: Show error when user changes the settings (city, time range).<br>
GIVEN: user is offline<br>
WHEN: user enters different parameters like city name, time range, etc.<br>
THEN: app shows error<br><br>

FEATURE 5: DATA VISUALIZATION<br>
Scenario 1: Show a chart with the number of upcoming events in each city<br>
GIVEN: user is viewing event details<br>
WHEN: user clicks on the chart<br>
THEN: user can see a chart representing upcoming events in the city<br><br>








