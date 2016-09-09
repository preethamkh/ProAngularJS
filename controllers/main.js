/**
 * Created by Preetham on 09/09/2016.
 */
console.log("testing node.js from webstorm");

var foo = {
    bar: 123,
    bas: [1, 2, 3]
};
console.log(foo);

(function foo() {
    console.log('foo was executed!');
})();
/*
setTimeout(function () {
    console.log('2000 milliseconds have passed since this demo started');
}, 2000);*/

function longRunningOperation(callback) {
// simulate a 3 second operation
    setTimeout(callback, 3000);
}
function webRequest(request) {
    console.log('starting a long operation for request:', request.id);
    longRunningOperation(function () {
        console.log('ending a long operation for request:', request.id);
    });
}
// simulate a web request
webRequest({ id: 1 });
// simulate a second web request
webRequest({ id: 2 });