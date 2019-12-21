import React from 'react';
import TransactionRow from './TransactionRow';
import styles from '../styles/TransactionsTable.module.css';

function TransactionsTable({ transactions, sNo }) {
  return (
    <div>
      {
        transactions.length === 0 && (
          <div className={styles['no-data']}>
            No Data
          </div>
        )
      }
      {
        transactions.length > 0 && (
          <table className={styles['transactions-table']}>
            <thead>
              <tr className={styles['row-header']}>
                <th className={styles['col-header']}>S.No.</th>
                <th className={styles['col-header']}>Date</th>
                <th className={styles['col-header']}>Transaction Detail</th>
                <th className={styles['col-header']}>
                  Withdrawal Amt <br></br> ( <i className='fas fa-rupee-sign'></i> )
            </th>
                <th className={styles['col-header']}>
                  Deposit Amt <br></br> ( <i className='fas fa-rupee-sign'></i> )
            </th>
                <th className={styles['col-header']}>
                  Balance Amt <br></br> ( <i className='fas fa-rupee-sign'></i> )
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
