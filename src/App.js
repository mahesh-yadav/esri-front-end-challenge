import React from 'react';
import TransactionsTable from './components/TransactionsTable';
import Account from './components/Account';

import data from './mockData';

function App() {
  return (
    <div>
      <Account
        accountNum={data[0]['Account No']}
        amount={data[data.length - 1]['Balance AMT']}
      ></Account>
      <TransactionsTable transactions={data}></TransactionsTable>
    </div>
  );
}

export default App;
