import React from 'react';
import ReactDOM from 'react-dom';
import TransactionRow from './TransactionRow';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('Product ', () => {
  const transaction = {
    'Account No': 409000611074,
    Date: '29 Jun 17',
    'Transaction Details': 'TRF FROM  Indiaforensic SERVICES',
    'Value Date': '29 Jun 17',
    'Withdrawal AMT': '',
    'Deposit AMT': '10,00,000.00',
    'Balance AMT': '10,00,000.00',
  };

  test('renders without crashing', () => {
    const tbody = document.createElement('tbody');
    ReactDOM.render(
      <TransactionRow transaction={transaction} sNo={1}></TransactionRow>,
      tbody
    );
  });

  test('renders transaction details inside <td></td>', () => {
    const wrapper = shallow(
      <TransactionRow transaction={transaction} sNo={1}></TransactionRow>
    );

    const details = wrapper.find('.col').at(2);

    expect(details.type()).toBe('td');
    expect(details.text()).toBe(transaction['Transaction Details']);
  });

  test('renders deposit amount correctly when it is not null', () => {
    const wrapper = shallow(
      <TransactionRow transaction={transaction} sNo={1}></TransactionRow>
    );

    const details = wrapper.find('.col').at(4);

    expect(details.type()).toBe('td');
    expect(details.text()).toBe(transaction['Deposit AMT']);
  });

  test('renders withdrawal amount correctly when it is null', () => {
    transaction['Deposit AMT'] = '';

    const wrapper = shallow(
      <TransactionRow transaction={transaction} sNo={1}></TransactionRow>
    );

    const details = wrapper.find('.col').at(4);

    expect(details.type()).toBe('td');
    expect(details.text()).toBe('-');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <TransactionRow transaction={transaction} sNo={1}></TransactionRow>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
