export async function fetchTransactionsDetails() {
  try {
    let response = await fetch('http://localhost:5000/transactions', {
      mode: 'cors',
    });

    let data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
