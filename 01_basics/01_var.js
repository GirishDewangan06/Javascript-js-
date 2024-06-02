const accountId = 3000127
let accountEmail = "girish12@gmail.com"
var accountPass = "1223"//at this time we are not using var because of issue in block scope and functional scope
accountCity = "Bhilai"//don't write without keyword
let accountState ;

// accountId = 3000128// not allowed

accountEmail ="gk.gk.com"
accountPass = 1234
accountCity = "Durg"
console.log(accountId)
console.log(accountEmail)
console.table([accountId, accountEmail, accountPass, accountCity, accountState])//to print multi var