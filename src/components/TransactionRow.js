import React from 'react';

function TransactionRow({ transaction, sNo }) {
  return (
    <tr>
      <td>{sNo}</td>
      <td>{transaction['Date']}</td>
      <td>{transaction['Transaction Details']}</td>
      <td>{transaction['Withdrawal AMT'] ? transaction['Withdrawal AMT'] : '-'}</td>
      <td>{transaction['Deposit AMT'] ? transaction['Deposit AMT'] : '-'}</td>
      <td>{transaction['Balance AMT']}</td>
    </tr>
  );
}

export default TransactionRow;
