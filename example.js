// var http = require('http');
var oAjaxReq = new XMLHttpRequest();

function run() {
    console.log(123)

    fetch('/User', {
        method: 'post',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: 'foo=bar&lorem=ipsum'
    })
        // .then(json)
        .then(function (data) {
            console.log('Request succeeded with JSON response', data);
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });


    //    oAjaxReq.open("post","/User")
    //     .then(function (product) {
    //         // localStorage.setItem("tokenProduct", product.data.userAdmin);
    //         console.log(product)
    //     }, function (err) {
    //         console.log(err);
    //     });
}
run()