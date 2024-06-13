// callback Example
function fetchDataWithCallBack(callback){
    setTimeout(()=>{
        console.warn("Some delay expected")
        const data = 'Data from server';
        callback(data)
    },2000);
}
function runCallbackExample(){
    const output = document.getElementById('callback-output');
    fetchDataWithCallBack((data)=>{
        output.textContent = data;
    });
}
// Promise Example 
// new
function fetchDataWithPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const success = true;
            if (success){
                resolve('Data from server');
            }
            else{
                reject('Error fetching data');
            }
        }, 2000);
    });
}
function runPromiseExample(){
    const output = document.getElementById('promise-output');
    console.log("Starting ")
    fetchDataWithPromise()
    .then(data=>{
        output.textContent = data;
        console.log(data)
    })
    .catch(error=>{
        output.textContent = error;
    })
    .finally(()=>{
        console.log("Promise Example complete")
    })
}
// async / await example 
function fetchData(){
    return new Promise(resolve,reject)
}
async function runAsyncAwaitExample(){
    const output = document.getElementById('async-output');
    try{
        const data = await fetchData();
        output.textContent = data;
    } catch(error){
        output.textContent = error;
    }
}
// fetch api
// let m = fetch('https://jsonplaceholder.typicode.com/todos/1')
// Fetch with promises 
function fetchWithPromise(){
    const output = document.getElementById('fetch-api-promise')
    output.innerHTML = '';
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>{
        data.slice(0,5).forEach(post=>{
            const li = document.createElement('li');
            const des = document.createElement('li');
            des.textContent = post.title;
            li.textContent = post.title;
            output.appendChild(li);
        });
    }).catch(error=>{
        console.log("Error",error);
    });
}
