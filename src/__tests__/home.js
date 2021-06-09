import { shallow } from 'enzyme';
import React from 'react';
import Home from '../components/Home/Home';

describe('renders home component', () => {
	let wrapper = shallow(<Home />);

	it('renders correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('renders intro text', () => {
		expect(wrapper.find('.home__intro').text()).toEqual('Vaccine Availablity');
	});
});
