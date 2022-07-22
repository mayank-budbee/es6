import {message, setMessage } from './greeting.js';
console.log(message); // 'Hi'

setMessage('Hello');
console.log(message); // 'Hello'

message = 'Hallo'; //  error, app2.js:7 Uncaught TypeError: Assignment to constant variable.