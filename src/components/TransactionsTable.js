import React from 'react';
import TransactionRow from './TransactionRow';

function TransactionsTable({ transactions, sNo }) {
  return (
    <div>
      {
        transactions.length === 0 && (
          <div>
            No Data
          </div>
        )
      }
      {
        transactions.length > 0 && (
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
                    sNo={sNo + index}
                  ></TransactionRow>
                );
              })}
            </tbody>
          </table>
        )
      }
    </div>
  );
}

export default TransactionsTable;
