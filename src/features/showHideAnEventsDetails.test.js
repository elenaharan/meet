import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";
import EventList from "../EventList";
import Event from "../Event";
const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, test => {
    let EventListWrapper;
    let EventWrapper;
    let AppWrapper;
    //Feature2 scenario1 Element collapsed by default
    test('An element is collapsed by default.', ({ given, when, then }) => {
        given('user is on main page', () => {
          EventListWrapper = mount(<EventList events={mockData} />);
          EventWrapper = mount(<Event event={mockData[0]} />);
        });

        when('the user opens the app', () => {
          AppWrapper = mount(<App />);
        });

        then('user should sees a list of events in a collapsed form', () => {
          expect(EventWrapper.find('.event-description')).toHaveLength(0);
        });
    });

    //Feature2 Scenario 2 User can expand an event to see its details

    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('The main page is open', () => {
          AppWrapper = mount(<App />);
          EventListWrapper = mount(<EventList events={mockData} />);
          EventWrapper = mount(<Event event={mockData[0]} />);
        });

        when('User clicks on “View Details”', () => {
          EventWrapper.find('.showMore').at(0).simulate("click");
        });

        then('Element expand to display additional details', () => {
          expect(EventWrapper.find('.event-description')).toHaveLength(1);
        });
    });

    //Feature2 Scenario3 User can collapse an event to hide its details

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('user sees expanded element', () => {
        AppWrapper = mount(<App />);
        EventListWrapper = mount(<EventList events={mockData} />);
        EventWrapper = mount(<Event event={mockData[0]} />);
        EventWrapper.find('.showMore').at(0).simulate('click');
        EventWrapper.find('.event-description');
        });

        when('user clicks on “Hide Details”', () => {
          EventWrapper.find('.showLess').at(0).simulate('click');
        });

        then('element returns to its default collapsed state', () => {
          expect(EventWrapper.find('.event-description')).toHaveLength(0);
        });
    });
});

