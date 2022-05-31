document.getElementById('add-user');
document.getElementById('double');
document.getElementById('show-millionaires');
document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

async function getRandomUser(){
    // fetch random user and add money
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    // console.log(data);
    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() *  1000000)
    }

    // console.log(newUser);
    addData(newUser);
}

function addData(obj){
    data.push(obj);
}