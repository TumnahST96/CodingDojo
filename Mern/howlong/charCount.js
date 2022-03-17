const charCount = (str) => {
  let stored = {};

  for (let i = str.length - 1; i >= 0; i--) {
    if (!stored[str[i]]) {
      stored[str[i]] = 1;
    } else stored[str[i]] = stored[str[i]] + 1;
  }
  let temp = " ";
  let ar = [];
  let cr = [];
  for (const key in stored) {
    temp += key + stored[key];
    ar.push(stored[key]);
    // console.log(ar)
    cr.push(key);
  }


  
  console.log(temp);
  // console.log(stored)

  decode(ar, cr);
};

const decode = (ar, ch) => {
  let temp = "";
  for (let i = 0; i < ch.length; i++) {
    let b = ar[i];

    for (let j = 0; j < b; j++) {
      temp += (ch[i]);
    }
  }
  console.log(temp);

};

charCount("Snaps! crackles! pops!");
