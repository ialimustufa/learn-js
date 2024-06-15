function fetchDataWithCallback(callback){
    setTimeout(() => {
        const data = 'Data fetched with callback';
        callback(data);
    }, 2000);
 }
 
 
 function runCallbackExample (){
 const output = document.getElementById('callback-output');
 fetchDataWithCallback((data)=> {
    output.textContent= data;
 });
 }
 
 
 function fetchDataWithPromise() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            const success = true;
            if(success){
                resolve('Data fetched with Promise');
            } else {
                reject('Error Fetching data');
            }
        }, 2000);
    });
 }
 
 
 function runPromiseExample() {
    const output = document.getElementById('promise-output');
    fetchDataWithPromise().then(data => {
        output.textContent = data;
      }).catch(error => {
        output.textContent = error;
      });
  }
 