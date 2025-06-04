const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('time limit');
    },1000);

    try {
        resolve('fulfilled')
    }
    catch(err) {
        console.log(err);
        reject('rejected');
    }

})


doPromise
    .then(res => console.log(res))
    .catch(err => console.log(err))