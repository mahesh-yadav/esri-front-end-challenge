import React from 'react';
import styles from '../styles/TransactionRow.module.css'

function TransactionRow({ transaction, sNo }) {
  return (
    <tr className={styles['row']}>
      <td className={styles['col']}>{sNo}</td>
      <td className={styles['col']}>{transaction['Date']}</td>
      <td className={styles['col']}>{transaction['Transaction Details']}</td>
      <td className={styles['col']}>{transaction['Withdrawal AMT'] ? transaction['Withdrawal AMT'] : '-'}</td>
      <td className={styles['col']}>{transaction['Deposit AMT'] ? transaction['Deposit AMT'] : '-'}</td>
      <td className={styles['col']} >{transaction['Balance AMT']}</td>
    </tr>
  );
}

export default TransactionRow;
