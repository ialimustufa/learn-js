

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
 
