import React from 'react';
import styles from '../styles/Account.module.css';

function Account({ accountNum, amount }) {
  return (
    <div className={styles['account']}>
      <div className={styles['account-icon']}>
        <i className='fas fa-user-tie fa-10x'></i>
      </div>
      <div className={styles['account-info']}>
        <h1>A/C No. : {accountNum}</h1>
        <h2>
          Balance: <i className='fas fa-rupee-sign'></i> {amount}
        </h2>
      </div>
    </div>
  );
}

export default Account;
