import { shallow } from 'enzyme';
import React from 'react';
import CovidInfo from '../components/CovidInfo/CovidInfoMain';

describe('render covidInfoMain', () => {
	const wrapper = shallow(<CovidInfo />);
	console.log(wrapper.debug());
	it('render covidinfo correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('renders section title', () => {
		expect(wrapper.find('[data-testId="covidinfo-header"]').text()).toEqual('World Covid 19 Information');
	});
});

describe('check tab value change functionality', () => {
	const wrapper = shallow(<CovidInfo />);
	const event = {
		target: { value: 'success' },
	};
	beforeEach(() => {
		wrapper.find('[data-testId="covidinfo-tabValue"]').simulate('change', event);
	});
	it('change tab value', () => {
		expect(wrapper.find('[data-testId="covidinfo-tabValue"]')).toBeCalledWith('success');
	});
});
