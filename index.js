// Code your solutions in this file
let writeCards = (names, event) => {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  };

let countDown = (num) => {
    let i = num;
    while (i >= 0) {
      console.log(i);
      i--;
    }
  };