//Bài 1

function findOppositeNumber(){
    let n=Number(prompt("Nhập vào số nguyên dương thứ nhất"))
    let b=Number(prompt("Nhập vào số nguyên dương thứ hai"))
    if(b>(n/2))
      return (b-(n/2))
      else
      return(b+(n/2))
}
let n = 10, b = 2;
document.write(findOppositeNumber(n, b));