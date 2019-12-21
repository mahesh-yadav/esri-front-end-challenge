import React, { useState, useEffect } from 'react';
import TransactionsTable from './components/TransactionsTable';
import Account from './components/Account';
import PageControls from './components/PageControls';

import data from './mockData';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [pageSize, setPageSize] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(data);
    setLastPage(Math.ceil(data.length / pageSize));
    setPageSize(10);
    // console.log('Last Page: ', Math.ceil(data.length / pageSize));
  }, [pageSize]);

  function goToPrevPage() {
    let prevPage;

    if (currentPage === 1) {
      prevPage = 1;
    } else {
      prevPage = currentPage - 1;
    }

    setCurrentPage(prevPage);
  }
  function goToNextPage() {
    let nextPage;

    if (currentPage === lastPage) {
      nextPage = lastPage;
    } else {
      nextPage = currentPage + 1;
    }

    setCurrentPage(nextPage);
  }

  function getTransactions() {
    let startIndex = (currentPage - 1) * pageSize;

    return transactions.slice(startIndex, startIndex + pageSize);
  }

  return (
    <div>
      <Account
        accountNum={data[0]['Account No']}
        amount={data[data.length - 1]['Balance AMT']}
      ></Account>
      <PageControls
        currentPage={currentPage}
        lastPage={lastPage}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
      ></PageControls>
      <TransactionsTable transactions={getTransactions()}></TransactionsTable>
    </div>
  );
}

export default App;
