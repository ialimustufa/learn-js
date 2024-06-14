
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
    console.log("Starting with promise");
    fetchDataWithPromise().then(data => {
        console.log("Promise Resolved with Data", data);
        output.textContent = data;
      }).catch(error => {
        console.error("Promise rejected with error", error)
        output.textContent = error;
      }).finally(() =>{
        console.log("Promise example complete");
      });
  }
  function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched with async/await');
        },2000);
    });
  }
 
 
 async function runAsyncAwaitExample(){
    const output = document.getElementById("async-output");
    try{
        const data  = await fetchData();
        output.textContent = data;
    } catch (error){
        output.textContent = error;
    }
 }