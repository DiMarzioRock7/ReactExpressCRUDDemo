// test.js
const User = require('./user');
//
// User.addUser('label').then(User.findAllUser().then(result => {
//     console.log('Sending to REACT : '+ JSON.stringify(result)+ '!!!');
// }));
//
//
// User.findAllUser().then(result => {
//     console.log('Sending to REACT : 22'+ JSON.stringify(result)+ '!!!');
// });
let jsonObj = {'name':'after_ff', 'id': '48'};

User.updateUser(jsonObj).then(result => {
    console.log('Sending to REACT : '+ JSON.stringify(result)+ '!!!');
    });

