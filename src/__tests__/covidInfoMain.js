import { shallow } from 'enzyme';
import React from 'react';
import CovidInfo from '../components/CovidInfo/CovidInfoMain';

describe('render covidInfoMain', () => {
	const wrapper = shallow(<CovidInfo />);
	it('render covidinfo correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('renders section title', () => {
		expect(wrapper.find('[data-testId="covidinfo-header"]').text()).toEqual('World Covid 19 Information');
	});
});

describe('check tab value change functionality', () => {
	const wrapper = shallow(<CovidInfo />);
	it('check handle tab change', () => {
		const event = {
			target: { value: 'success' },
		};
		const handleTabChange = wrapper.find('[data-testId="covidinfo-tabValue"]');
		handleTabChange.simulate('change', event);
		expect(wrapper).toMatchSnapshot();
	});
});
