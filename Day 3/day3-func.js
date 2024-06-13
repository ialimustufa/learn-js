// asyncronous  js

/**
 
A callback is a function that is passed as an argument to another function 
and is executed after some operation has completed.

 */

function fetchData(callback) {
    setTimeout(() => {
      const data = 'Data fetched from server';
      callback(data);
    }, 2000);
  }
  
  function displayData(data) {
    console.log(data);
  }
  
  fetchData(displayData); // Output after 2 seconds: Data fetched from server

  // Promise

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Data fetched successfully');
      } else {
        reject('Error fetching data');
      }
    }, 2000);
  });
  
  promise
    .then((data) => {
      console.log(data); // Output: Data fetched successfully
    })
    .catch((error) => {
      console.error(error); // Output: Error fetching data
    });

// Async/Await

function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'Data fetched from server';
        resolve(data);
      }, 2000);
    });
  }
  
  async function displayData() {
    try {
      const data = await fetchData();
      console.log(data); // Output: Data fetched from server
    } catch (error) {
      console.error(error);
    }
  }
  
  displayData();

  // mini-project: Fetch APIs