import React, { useState, useEffect } from 'react';
import TransactionsTable from './components/TransactionsTable';
import Account from './components/Account';
import PageControls from './components/PageControls';
import Header from './components/Header';

import { fetchTransactionsDetails } from './api';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const transactions = await fetchTransactionsDetails();

      setTransactions(transactions);
      setFilteredTransactions(transactions);
      setLastPage(Math.ceil(filteredTransactions.length / pageSize));
      setPageSize(10);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setSearchSuggestions([
      'All',
      'Indiaforensic SERVICES',
      'INTERNAL FUND TRANSFE',
      'INDO GIBL Indiaforensic',
    ]);
  }, []);

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
    return filteredTransactions.slice(startIndex, startIndex + pageSize);
  }

  function handleSearch(value) {
    let filtered = [];

    if (value === '' || value === 'All') {
      filtered = [...transactions];
    } else {
      filtered = transactions.filter(
        (transaction) =>
          transaction['Transaction Details'].indexOf(value) !== -1
      );
    }

    let lastPage = Math.ceil(filtered.length / pageSize);
    console.log(filtered, filtered.length);

    setFilteredTransactions(filtered);
    setCurrentPage(1);

    setLastPage(lastPage > 0 ? lastPage : 1);
    console.log(lastPage);
  }

  return (
    <div>
      <Header
        searchSuggestions={searchSuggestions}
        handleSearch={handleSearch}
      ></Header>
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
      {
        getTransactions().length > 0 && (
          <PageControls
            currentPage={currentPage}
            lastPage={lastPage}
            goToNextPage={goToNextPage}
            goToPrevPage={goToPrevPage}
          ></PageControls>
        )
      }
      <TransactionsTable transactions={getTransactions()} sNo={((currentPage - 1) * pageSize) + 1}></TransactionsTable>
    </div>
  );
}

export default App;
