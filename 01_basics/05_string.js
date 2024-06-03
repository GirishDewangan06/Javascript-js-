const name = "Girish"
const repoCount = 50

console.log(name + repoCount + "values");//thats not good way to write
//try another way=>``-->back text
console.log(`My Name is ${name} and my repoCount is ${repoCount}`);//string impolition(making placeholders)
//another way using "new" ->object and constructor
const gameNumber = new String("Girish")

console.log(gameNumber[0]);
console.log(gameNumber.__proto__);

console.log(gameNumber.length);

console.log(gameNumber.toUpperCase());//becoz of string will not affect original value
console.log(gameNumber);

console.log(gameNumber.charAt(2))//to find character through index
console.log(gameNumber.indexOf("s"))// to find index from character


const newString = "GirishKumar"
console.log(newString.substring(-4,4))//it doesn't accepts negative number, it start from index(0) if you give neg index

const anothString = newString
console.log(anothString.slice(-10,6));//it doesn't provide the value of neg Index(for 0->1,after 10 ->it gives value from index(1))

const newStringOne = "     Girish         "
console.log(newStringOne);
console.log(newStringOne.trim());//TRIM()->FOR We dont want extra spaces  strting and last (beneficial for only first and last space , not for b/w word space)

const url = "https://girish%20Dewangan"
console.log(url.replace("%20","-"));

console.log(url.includes("hitesh"))

const genString = "Girish-Kumar-Dewangan-Durgesh"
console.log(genString.split("-"), 2);


//++++++++++++++++++++++++++////NOTE////++++++++++++++++++++++++++++++//
//length->to find length
//toUppercase->to change uppercase
//charAt->to find value from index
//indexOf->to find index from character
//substring->to find particular length of index
//slice -> work same as substring (but it accepts neg value)
//replace("which", "changein")->to replace from particular value
//includes()->to check string is present or not in wholestring

//split("separator","limit")->on the basis of separator (it can be -, ,.,etc) it divides whole string into array