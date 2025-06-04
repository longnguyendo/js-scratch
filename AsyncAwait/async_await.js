
const func1 = new Promise((resolve)=> {resolve('oke 1')})
const func2 = new Promise((resolve, reject)=> {reject('reject 1')})
const func3 = new Promise((resolve, reject)=> {reject('reject 1')})
const func4 = new Promise((resolve)=> {resolve('oke 1')})



function processAsyncFn(funcs) {
    return Promise.allSettled(funcs.map(fn => fn()))
    .then(results => {
        return results
            .filter(res => res.status === 'fulfilled')
            .map(res => res.value);
    });
}

processAsyncFn([func1,func2,func3,func4])