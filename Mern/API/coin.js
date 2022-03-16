function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsSync() {
  let headsCount = 0;
  let attempts = 0;
  while (headsCount < 5) {
    attempts++;
    //   if (attempts == 100) {
    //     reject("past 100. it doesnt matter bro");
    //     return;
    //   }
    let result = tossCoin();
    console.log(`${result} was flipped`);
    if (result === "heads") {
      headsCount++;
      // if (headsCount == 5) {
      //   resolve("You got 5 counts in before 100 try");
      //   return;
      // }
    } else {
      headsCount = 0;
    }
  }
  return `It took ${attempts} tries to flip five "heads"`;
}

function fiveHeads() {
  return new Promise((resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount <= 100) {
      attempts++;
      if (attempts == 100) {
        reject("past 100. it doesnt matter bro");
        return;
      }
      let result = tossCoin();
      console.log(`${result} was flipped`);
      if (result === "heads") {
        headsCount++;
        if (headsCount === 5) {
          resolve("You got 5 counts in before 100 try");
          return;
        }
      } else {
        headsCount = 0;
      }
    }
    return `It took ${attempts} tries to flip five "heads"`;
  });
}
fiveHeads()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
console.log("When does this run now?");

console.log(fiveHeadsSync());
console.log("This is run after the fiveHeadsSync function completes");
