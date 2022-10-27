a= new Promise(function(resolve, reject) {
    resolve(1);
});

a.then((value) => {
    console.log(value);
});

Promise.all([a]).then((value) => {
    console.log(value);
})

Promise.resolve(1).then((value) => {
    console.log(value);
});

Promise.reject("Bhakk").catch((value) => {
    console.log(value);
});

// Returns a value that get resolved

Promise.race([a]).then((value) => {
    console.log(value);
});

