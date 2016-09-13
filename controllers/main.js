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
//webRequest({id: 1});
// simulate a second web request
//webRequest({id: 2});

/*
 console.time('timer');
 setTimeout(function () {
 console.timeEnd('timer');
 }, 1000)
 */


console.time('timeit');
function fibonacci(n) {
    if (n < 2)        return 1;
    else
        return fibonacci(n - 2) + fibonacci(n - 1);
}
fibonacci(5);             // modify this number based on your system performance console.timeEnd('timeit');// Are these all falsy? if (!false) {    console.log('falsy'); } if (!null) {    console.log('falsy'); } if (!undefined) {    console.log('falsy'); }

// Are these all falsy?
if (!false) {
    console.log('falsy');
}
if (!null) {
    console.log('falsy');
}
if (!undefined) {
    console.log('falsy');
}


function printableMessage() {
    var message = 'hello';

    function setMessage(newMessage) {
        if (!newMessage) {
            console.log("throwing an exception");
            throw new Error('cannot set empty message');
        }
        message = newMessage;
    }

    function getMessage() {
        return message;
    }

    function printMessage() {
        console.log(message);
    }

    return {setMessage: setMessage, getMessage: getMessage, printMessage: printMessage};
}

// Pattern in use
var awesome1 = printableMessage();
awesome1.printMessage();

function foo2() {
    this.foo = 123;

    console.log('Is this global?: ', this == global);
    console.log('printing this prototype: ' + this.prototype);
}
foo2.prototype.bar = "testing proto";

// without the new operator
foo2(); // Is this global?: true
console.log(global.foo); // 123

// with the new operator
var newFoo = new foo2(); // Is this global?: false
console.log(foo2.prototype == newFoo.__proto__);


try {
    console.log('About to throw an error');
    throw new Error('Error thrown');
}
catch (e) {
    console.log('I will only execute if an error is thrown');
    console.log('Error caught: ', e.message);
}
finally {
    console.log('I will execute irrespective of an error thrown');
}


// function callbacks for db connection - example

function getConnection(callback) {
    var connection;
    try {
        // Lets assume that the connection failed
        throw new Error('connection failed');
        // Notify callback that connection succeeded?
        callback(null, connection);
    }
    catch (error) {
        // Notify callback about error?
        callback(error, null);
    }
}
// Usage
getConnection(function (error, connection) {
    if (error) {
        console.log('Error:', error.message);
    }
    else {
        console.log('Connection succeeded:', connection);
    }
});

