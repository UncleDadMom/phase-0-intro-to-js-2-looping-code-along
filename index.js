// Code your solutions in this file
/* const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); */
const thank = []
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        thank.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    debugger;}
    return thank
}

let int=11
function countDown(int) {
    while(int >= 0) {
        console.log(int);
        int--
    }
    return int
}