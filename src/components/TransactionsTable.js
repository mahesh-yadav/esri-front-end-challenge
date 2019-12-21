import React from 'react';
import TransactionRow from './TransactionRow';

function TransactionsTable({ transactions }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Date</th>
            <th>Transaction Detail</th>
            <th>
              Withdrawal Amt ( <i className='fas fa-rupee-sign'></i> )
            </th>
            <th>
              Deposit Amt ( <i className='fas fa-rupee-sign'></i> )
            </th>
            <th>
              Balance Amt ( <i className='fas fa-rupee-sign'></i> )
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
            return (
              <TransactionRow
                transaction={transaction}
                key={index}
                sNo={index + 1}
              ></TransactionRow>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsTable;
