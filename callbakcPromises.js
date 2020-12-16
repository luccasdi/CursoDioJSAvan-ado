// Promises

const doSomethingPromise = () => 
new Promise((resolve, reject) => {
    //throw new Error ('Something went wrong');
    setTimeout(function(){
        resolve('First Data');
    }, 1000);
});

const doOtherThingPromise = () => 
new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('Second Data');
    }, 1000);
});

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});


doSomethingPromise()
    .then(data => {
    console.log(data.split('')); 
    return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error));
// doSomethingPromise.then(data => console.log(data)).catch(error => console.log(error));


//Pending/Fulfilled/Rejected

// CallBacks
function doSomething(callback){
    setTimeout(function(){
        callback('First Data');
    }, 1000);
}

function doOtherThing(callback){
    setTimeout(function(){
        callback('Second Data');
    }, 1000);
}

function doAll(){
    try {
    doSomething(function(data){
        var processedData = data.split('');
        try {
        doOtherThing(function(data2){
            var processedData2 = data2.split('');
            try{
            setTimeout(function(){
                console.log(processedData, processedData2);
            }, 1000);
        }catch(err){
            //handle error
        }
        });
    }catch(err){
        //handle error
    }
   });
    } catch(err){
        //handle error
    }
}

doAll();