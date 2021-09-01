// Code your solutions in this file
/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
    
}
*/
let thankYous = []
function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        thankYous.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
        debugger;
    }
    return thankYous;
}
function countDown(x) {
    while (x >= 0) {
        console.log(x);
        x--
    }
}