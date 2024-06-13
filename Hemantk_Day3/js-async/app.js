// Callback Example
function fetchDataWithCallback(callback) {
    setTimeout(() => {
      const data = 'Data fetched with callback';
      callback(data);
    }, 2000);
  }
  
  function runCallbackExample() {
    const output = document.getElementById('callback-output');
    fetchDataWithCallback((data) => {
      output.textContent = data;
    });
  }
  
  // Promise Example
  function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve('Data fetched with promise');
        } else {
          reject('Error fetching data');
        }
      }, 2000);
    });
  }
  
  function runPromiseExample() {
    const output = document.getElementById('promise-output');
    fetchDataWithPromise()
      .then(data => {
        output.textContent = data;
      })
      .catch(error => {
        output.textContent = error;
      });
  }
  
  // Async/Await Example
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data fetched with async/await');
      }, 2000);
    });
  }
  
  async function runAsyncAwaitExample() {
    const output = document.getElementById('async-output');
    try {
      const data = await fetchData();
      output.textContent = data;
    } catch (error) {
      output.textContent = error;
    }
  }
  
  // Fetch API with Promises
  function fetchWithPromises() {
    const output = document.getElementById('fetch-promises-output');
    output.innerHTML = '';
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        data.slice(0, 5).forEach(post => {
          const li = document.createElement('li');
          li.textContent = post.title;
          output.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Fetch API with Async/Await
  async function fetchWithAsyncAwait() {
    const output = document.getElementById('fetch-async-output');
    output.innerHTML = '';
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      data.slice(0, 5).forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.title;
        output.appendChild(li);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Promise.all Example
  function fetchMultipleResources() {
    const output = document.getElementById('promise-all-output');
    output.innerHTML = '';
    
    const promise1 = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
    const promise2 = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
  
    Promise.all([promise1, promise2])
      .then(values => {
        const [posts, users] = values;
        const postTitles = posts.slice(0, 3).map(post => `<li>Post: ${post.title}</li>`).join('');
        const userNames = users.slice(0, 3).map(user => `<li>User: ${user.name}</li>`).join('');
        output.innerHTML = postTitles + userNames;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Promise.race Example
  function racePromises() {
    const output = document.getElementById('promise-race-output');
    
    const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'First'));
    const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'Second'));
  
    Promise.race([promise1, promise2])
      .then(value => {
        output.textContent = `Winner: ${value}`;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  