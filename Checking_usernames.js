"use strict";
//Written by :TAYYABA RAO
//Date: 18/feb/2024
//current user array
const current_users = ['Rukhsana', 'Farzana', 'Shazia', 'Nadia', 'Bushra'];
//new users array
const new_users = ['Farzana', 'Nadia', 'Adeel', 'Tanzeel', 'Bushra'];
//loop through new_users list
for (let new_user of new_users) {
    const lowercase_new_users = new_user.toLowerCase();
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_users)) {
        console.log(`The username '${new_users}' is not avaiable. Please choose a different username.`);
    }
    else {
        console.log(`The username '${new_users}' is avaiable.`);
    }
}
