// promise
// - sync 
// - async

// setTimeout, setInterval, fetch, XMLHTTPRequest, file reading,
// request animation frame;

// Callback

// sinh ra  de xu ly thao tac bat dong bo 
// truoc khi co promise xai cb -> cb hell
// promise giup viet code k bi sau

// sleep
// setTimeout(() =>{
//     console.log(1);
// },1000);

// console.log(2);

// the painful of callback: Callback hell
// example
// setTimeout(()=> {
//     console.log(1);
//     setTimeout(()=> {
//         console.log(2);
//         setTimeout(()=> {
//             console.log(3);
//         },100)
//     },100)
// },100)
// solving it; we use promise
// 1. new 
// 2. executor
// memory leak
let promise = new Promise(
    // Executor;
    function(resolve, reject) {
        
        // logic
        // thanh cong : resolve();
        // that bai : reject();
        // fake call api
        resolve([
        {
            id:1,
            name:'Javascript'
        },
        {
            id:2,
            name:'nodejs',
        }]);
        // reject();
    }
) //(Object Constructors);

// promise chain
// promise
//     .then(function() {
//         return new Promise((resolve) => {
//             setTimeout(()=>{
//                 resolve(123);
//             },1000)
//         })
//     })
//     .then(function(data) {
//         console.log(data);
//         return 3;
//     })
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(err) {
//         console.log(err);
//     })
//     .finally(function(done) {
//         console.log(done);
//     })

// help no hell cb
// let sleep = (ms) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve(123),ms);
//     })
// }

// sleep(1000)
//     .then(() => {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then((data) => {
//         console.log(2);
//         return sleep(1000);
//     })
//     .then(() =>{
//         console.log(3);
//     })
//     .catch(() =>{

//     })


// const noHell = (val) => {
//     return new Promise((resolve, reject) => {
//         resolve(val);
//     }) 
// }

// noHell(10)
//     .then((data) => {
//         return noHell(data+1)
//     })
//     .then((data) => {
//         return noHell(data+1);
//     })
//     .then((data) => {
//         return noHell(data+1);
//     })
//     .then((data) => {
//         console.log(data);
//     })

// 173 code lai
// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all
// add 10 promise;
// let promise1 = new Promise(
//     function(resolve) {
//         setTimeout(() => {
//             resolve([1,2]);
//         }, 1000);
//     }
// );

// let promise2 = new Promise(
//     function(resolve) {
//         setTimeout(() => {
//             resolve([3,4]);
//         }, 2000);
//     }
// )

// let promise3 = new Promise((reject) => {
//     reject("Err");
// })

// let res = Promise.all([promise1, promise2, promise3])
//     .then((res) => {
//         return res;
//     })
//     .catch((err) => {   
//         console.log(err);  
//     })

// res
//     .then((res)=> {
//         let sum = 0;
//         res.forEach((items) => {
//             items.map((item) => {
//                 console.log(item);
                
//             })
//         })
//         console.log("sum",sum);
//         return sum;
//     })
//     .catch((err) => {
//         console.log("err in main code",err);
//     })



// 174. promise example;
// 1. lay comments;
// 2. tu comment lay user by userId;
const users = [
    {
        id:1,
        name: "Chu tus",
    },
    {
        id: 2,
        name: "Long em",
    },
    {
        id: 3,
        name: "anh a",
    },
    {
        id: 4,
        name: "chi b",
    }
]

const comments = [
    {
        id: 3,
        userId: 1,
        content: "hoc edit di em",
    },
    {
        id: 4,
        userId: 2,
        content: "Da em dang dinh bat dau tu tuan sau",
    },
    {
        id: 5,
        userId: 1,
        content: "Hoc tu co ban nha em",
    },
    {
        id: 6,
        userId: 2,
        content: "Da vang anh",
    }
]
// // fake api;

const getComments = () => {
    return new Promise((resolve, rerject) => {
        setTimeout(() => {
            resolve(comments);
        }, 1000);
    })
}

getComments()
    .then((comments) => {
        const userIds = comments.map((comment) => comment.userId);
        console.log(userIds);
        
        getUsersByIds(userIds)
            .then((users) => {
                return(users);
            })
            .then((users) => {
                let html = comments.map((comment) => {
                    let user = users.find((user) => {
                        return user.id === comment.userId;
                    });
                    return user ? `<li><h2>${user.name}</h2> <p>${comment.content}</p></li>` : '';
                }).join('');
                console.log(html);
                const ulEle = document.querySelector('ul');
                ulEle.innerHTML = html;
            })
            
    })
    .catch((err) => {
        console.log(err);
        
    })

function getUsersByIds(userIds) {
    return new Promise((resolve) => {
        let res = users.filter((user) => {
            return userIds.includes(user.id);
        })
        resolve(res);
    })
}

