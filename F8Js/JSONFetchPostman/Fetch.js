// Fetch // call api url, baseUri

// fe, xay dung giao dien
// be- xay dung logic xu ly + co so du lieu;
// understand about API // cong giao tiep giua cac PM
//  communication port between software
// --> JSON.parse -> Js type;
// --> render ra giao dien voi html

const link = 'http://localhost:8080/api/v1/boards';

// let callApi = fetch(link) 
//     .then((res) => res.json())
//     .catch((err) => {console.log(err);
//     })

// use async await ;

// let getBoardsData = async(link) => {

//     let res = await fetch(link);
//     let data = await res.json();
//     return data;
    
// }

// getBoardsData(link)
//     .then((res) => {
//         // console.log(res);
//         let data = res.data.map((e) => {
//             return e;
//         })
//         console.log(data);
//         let html = data.map((e) => {
//             return e ? `<h1>${e.name}</h1> <p>${e.description}</p>` : '';
//         }).join('');
//         let ulEle = document.querySelector('ul');
//         console.log(ulEle);
//         ulEle.innerHTML = html;
//     })

// add 10 promises;
// ...promises - if we dont know how manny input or this situation is hm promises

const addPromises = (...promises) => {

    return Promise.all(promises)
        .then((res) =>{
            // console.log("add", res);
            return res.reduce((accu, item) => accu.concat(item),[])
        })
        .then((data) => {
            console.log("data", data);
            return data;
        })
}

let promise1 = new Promise(
    function(resolve) {
        setTimeout(() => {
            resolve([1,2]);
        }, 1000);
    }
);

let promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve([3,4])
    }, 2000);
})

let promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve([5,6,7]);
    },2000);
})

let sumPromise = addPromises(promise1, promise2, promise3)
    .then((res) => {
        // console.log("sumPromise", res);
    });

// Backend -> api -> fetch -> JSON/XML
// 

// fetch(postApi)
//     .then((res) => {
//         return res.json();
//     })

// 176 JSON;
// install json-server;
// if u dont install -g -> 
// script: 
// "starrt": "json-server --watch db.json"
// 177.  Server: API server (fake) / Mock API --> OK


// postman;
addPromises(promise1, promise2, promise3);


