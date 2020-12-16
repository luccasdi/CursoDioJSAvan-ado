fetch('/data.json').then(responseStream => {
    return responseStream.json().then(data => {
        console.log(data);
    })
    //console.log(responseStream);
});