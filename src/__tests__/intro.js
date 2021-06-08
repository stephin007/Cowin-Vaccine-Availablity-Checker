import { shallow } from 'enzyme';
import React from 'react';
import Intro from '../components/Intro/Intro';

describe('renders intro component', () => {
	const wrapper = shallow(<Intro />);

	it('renders intro correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('renders home text', () => {
		expect(wrapper.find('.intro__homeText').text()).toEqual('Vaccine Availability');
	});
});
