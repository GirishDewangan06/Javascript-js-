// console.log(2 = 2);// error (bcoz it is used for assining values)
console.log(2 == 2);//true
console.log("2" === 2);//false(bcoz , it also checks its datatype)
console.log(2 > 2);//false
console.log(2 >= 2);//true
console.log(2 < 2);//false
console.log(2 <= 2);//true
console.log(2 != 2);//false

console.log("2" > 1);//true//it treated value as number
console.log("02" > 1);//true

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true(bcoz of comparison operator , it treated "null" as '0' ,thatswhy, null>0--false and null>=---true)

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined >= 0);//false

//"==="-->Strict check
console.log("2" === 2);