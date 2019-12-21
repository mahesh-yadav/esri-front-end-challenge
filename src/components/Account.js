import React from 'react';

function Account({ accountNum, amount }) {
  return (
    <div>
      <div>
        <i className='fas fa-user-tie fa-10x'></i>
      </div>
      <h1>A/C No. : {accountNum}</h1>
      <h2>
        Balance: <i className='fas fa-rupee-sign'></i> {amount}
      </h2>
    </div>
  );
}

export default Account;
