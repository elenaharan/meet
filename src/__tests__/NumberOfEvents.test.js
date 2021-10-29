import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';



describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    })
   
    test('renders input textbox', () => {
        expect(NumberOfEventsWrapper.find(".events-number")).toHaveLength(1);  
    });

    test("renders default number of 32 events", () => {
      expect(NumberOfEventsWrapper.find('.events-number').prop("value")).toEqual(32);
    });

    test("changes state when input changes", () => {
    NumberOfEventsWrapper.setState({ 
        numOfEvents: '7'
    });
    const eventObject = { target: { value: '3' }};
    NumberOfEventsWrapper.find(".events-number").simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numOfEvents')).toBe('3');
    });
    

    
});



