import React, { useState, useEffect } from 'react';
import TransactionsTable from './components/TransactionsTable';
import Account from './components/Account';
import PageControls from './components/PageControls';
import { fetchTransactionsDetails } from './api';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const transactions = await fetchTransactionsDetails();

      setTransactions(transactions);
      setLastPage(Math.ceil(transactions.length / pageSize));
      setPageSize(10);
    }
    fetchData();
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
        accountNum={
          transactions.length > 0 ? transactions[0]['Account No'] : '----'
        }
        amount={
          transactions.length > 0
            ? transactions[transactions.length - 1]['Balance AMT']
            : 0
        }
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
