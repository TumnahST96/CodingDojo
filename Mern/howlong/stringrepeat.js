//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//and don't you dare use built in functions for this one!
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!

// let s1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
// let s2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

// var stored = new Boolean(false);
// const store = (char) => {
//   stored = {};
//   if (stored[char] === true) {
//     return false;
//   } else {
//     stored[char] += true;
//     return true;
//   }
// };

const dedupe = (str) => {
  const stored = {};
  let temp = "";
  let ct = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (!stored[str[i]]) {
      temp = str[i] + temp;
      stored[str[i]] = true;
    }
  }
  let temp2 = "";
  let c = 0;
  for (let i = temp.length - 1; i >= 0; i--) {
    temp2 = temp[i] + temp2;
  }
  return temp2;
};

console.log(dedupe("Snaps! crackles! pops!"));
console.log(dedupe("Did I shine my shoes today?"));
console.log(dedupe("scoop dedupe!"));
