

//Bài 2
document.write(newArr());
function newArr() {
  let s1 = "abc";
  let s2 = "0123";
  let mergeString = "";
  let maxLenght = s1.length > s2.length ? s1.length : s2.length;
  for (let i = 0; i < maxLenght; i++) {
    if (i < s1.length) {
      mergeString = mergeString.concat(s1.charAt(i));
    }
    if (i < s2.length) {
      mergeString = mergeString.concat(s2.charAt(i));
    }
  }
  console.log();
  return mergeString;
}
