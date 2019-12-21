import React from 'react';
import TransactionsTable from './components/TransactionsTable';
import data from './mockData';

function App() {
  return (
    <div>
      <TransactionsTable transactions={data}></TransactionsTable>
    </div>
  );
}

export default App;
