import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../components/Header/Header';

describe('Rendering Header Component', () => {
	let header = shallow(<Header />);

	it('renders correctly', () => {
		expect(header).toMatchSnapshot();
	});

	it('renders AppBar Component', () => {
		expect(header.find('[data-testId="header-appbar"]').exists()).toEqual(true);
	});

	it('renders toolbar component', () => {
		expect(header.find('[data-testId="header-toolbar"]').exists()).toEqual(true);
	});
	it('renders typography component', () => {
		expect(header.find('[data-testId="header-typography"]').exists()).toEqual(true);
	});
	it('renders toggle button component', () => {
		expect(header.find('[data-testId="header-toggleTheme"]').exists()).toEqual(true);
	});
});

describe('toggle Theme', () => {
	let toggleTheme = jest.fn();
	let header = shallow(<Header toggleTheme={toggleTheme} />);
	beforeEach(() => {
		header.find('[data-testId="header-toggleTheme"]').simulate('click');
	});

	it('button click event', () => {
		expect(header.find('[data-testId="header-toggleTheme"]').props().onClick).toHaveBeenCalled();
	});
});
