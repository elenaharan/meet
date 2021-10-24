import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    })
   
    test('renders input textbox', () => {
        expect(NumberOfEventsWrapper.find(".NumberOfEvents")).toHaveLength(1);  
    });

    test("renders defaults number of 32 events", () => {
      expect(NumberOfEventsWrapper.find('.events-number').prop("value")).toEqual(32);
    });

    test("changes state when input changes", () => {
    const eventObject = { target: { value: 15 }};
    NumberOfEventsWrapper.find(".events-number").simulate('change', eventObject);
    expect(NumberOfEventsWrapper.find('.events-number').prop('value')).toBe(15);
    });
});