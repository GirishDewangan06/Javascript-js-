let score = "33"

// const {score} = req.body 
console.log(typeof score);
console.log(typeof(score));

let intoNum = Number(score)
console.log(intoNum);
console.log(typeof intoNum);

let data1 = "33abc"
let data2 = "Girish"
let data3 = Number([data1,data2])
console.log(data3);
console.log(typeof data3);
//--------------------------------Note--------------------------------------------
////"33"=>33
////"33abc"=>"NaN"
////"Girish"=>"NaN"
////""/null=> 0
////undefined=>NaN

let intoBool = Boolean(score)
console.log(intoBool);
console.log(typeof intoBool);

let someData1 = 15
let someData2 = 1
let someData3 = Boolean([someData1, someData2])
console.log(someData3);
console.log(typeof someData3)

let anoData1 = 0//null,undefined , 0 =>false
let anoData2 = Boolean(anoData1)
console.log(anoData2)
console.log(typeof anoData2)

//-----------------------------------Note----------------------------
//"girish"/1/1....=>true
//0/null/undefined =>true


let info1 = 1
let intostring = String(info1)
console.log(intostring);
console.log(typeof intostring);

let st = ""
let change = String(st)
console.log(change);
console.log(typeof change);
//-----------------------------------Note--------------------------------
//1/2/3.......=>1/2/3.....(string)
//""=>______(string)

//----------------------------------//--------//operations//---------//-------------------------------//
let value = 3
let negValue = -3
console.log(negValue);

console.log(2+3);//5
console.log(2-3);//-1
console.log(2*3);//6
console.log(2**3);//8
console.log(2/3);//0.6666666666666666
console.log(2%3);//2

let str1 = "hello,"
let str2 = "Girish"
let str3 = str1 + str2
console.log(str3);//hello,Girish

console.log(1 + "2");//12
console.log("1" + 2);//12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32
console.log(1 + 2 + "2" + 4 + 4);//32
//it gives o/p on the basis of which type appear first till string not get.(after getting string, it gives o/p as string)

//ToPrimirive
console.log(1  + true);
console.log(14  + true);
console.log(14  + false);
console.log(14  + "6");
console.log(+true);
console.log(+false);
console.log(+"");


let num1 , num2 , num3 = 2 // it only assign a particular value
num1 = num2 = num3 = 5
console.log([num1,num2,num3])

gameChanger = 100
gameChanger++
console.log(gameChanger);

let x = 3
let y = x++//here y<- 3 , then x increment and becomes 4(x=4)
//first assign to 'y' then increment 'x'.
console.log(`x:${x}, y:${y}`);


let x1 = 3
let y1 = ++x1// here , first increment of x1, then assign to 'y'
console.log(`x1:${x1}, y1:${y1}`);