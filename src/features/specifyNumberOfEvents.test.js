import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
    let AppWrapper;
    given('user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    when('user sees a list of events', () => {
        
    });

    then('there are 32 events listed', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.event')).toHaveLength(2);
        expect(AppWrapper.state('numOfEvents')).toBe(32);
        AppWrapper.unmount();
    });
  });

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    let AppWrapper;
    given('user opens the app', () => {
      AppWrapper = mount(<App />);
        });

    when('user enters number of events he wants to be displayed', () => {
      AppWrapper.find('.events-number').simulate('change', { target: { value: 1 }});
        });

    then('the corresponding number of events is displayed to the use', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(1);
        });
    });
});
