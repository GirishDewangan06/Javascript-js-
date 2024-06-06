const simpleNum = 400
console.log(simpleNum)

const num = new Number(23.5)
console.log(num)

console.log(num.toString().length)//we can use the property of string using toString()
console.log(typeof num);

console.log(num.toFixed(2))
console.log(num.toPrecision(2))

const otherNum = new Number(100000000001001000)
console.log(otherNum.toLocaleString())//US std
console.log(otherNum.toLocaleString("en-In"))//indian std

////++++++++++++++++++++++++++++//MATHS//+++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-34))//to chnage -ve no. to +ve no.

console.log(Math.round(4.6))//roundoff

console.log(Math.ceil(4.2))//it gives upper most value
console.log(Math.floor(4.9))//lower most values
console.log(Math.min(4,1,4,0.2,67))//it gives min values
console.log(Math.max(4,1,4,0.2,67))//it gives max values

console.log(Math.random())
console.log(Math.random()*10)//it shift the value 1 left
console.log(Math.random()*1000)//it shift the value 3 left
console.log(Math.floor(Math.random()))//it gives 0 always bcoz random no generate values b/w 0 and 1
console.log(Math.floor(Math.random()*10))//it gives 0 always bcoz random no generate values b/w 0 and 1

//for 0.01 it gives zero so add 1 
console.log(Math.floor(Math.random()*10) + 1)//it shift the value 1 left and add one if no. is like 0.1 so it gives  0 so, we dont want zero thatwhy we have written here

//to get values b/w specific
const Min = 10
const Max = 20
console.log(Math.floor(Math.random()*(Max - Min)))
//we dont want zero(0)
console.log(Math.floor(Math.random()*(Max - Min + 1)))
console.log(Math.floor(Math.random()*(Max - Min + 1)) + Min)// more from min 
