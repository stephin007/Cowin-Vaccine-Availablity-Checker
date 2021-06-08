import { shallow } from 'enzyme';
import React from 'react';
import About from '../components/About/About';

describe('render about component', () => {
	const wrapper = shallow(<About />);

	it('render about properly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('render head properly', () => {
		expect(wrapper.find('.about-head').text()).toEqual('About the App');
	});
});
