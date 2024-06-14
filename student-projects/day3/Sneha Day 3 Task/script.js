  function fetchData(callback) {
    setTimeout(() => {
      const data = 'Data fetched from server';
      callback(data);
    }, 2000);
  }
  
  function displayData(data) {
    console.log(data);
  }
  
  fetchData(displayData); 

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
      console.log(data); 
    })
    .catch((error) => {
      console.error(error); 
    });



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
      console.log(data); 
    } catch (error) {
      console.error(error);
    }
  }
  
  displayData();