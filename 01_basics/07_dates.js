//DATE in js
 let myDate = new Date()
 console.log(myDate)//it gives ...z std
 console.log(myDate.toString())//coordinated univ. time
 console.log(myDate.toDateString())//today's date//Fri Jun 07 2024
 console.log(myDate.toLocaleString())//6/7/2024, 11:19:15 AM
 console.log(myDate.toISOString())//2024-06-07T11:19:15.199Z
 console.log(myDate.toDateString("en-IN"))//Fri Jun 07 2024
 console.log(myDate.toJSON())//2024-06-07T11:19:15.199Z
 console.log(myDate.toLocaleTimeString())//11:24:21 AM
 console.log(myDate.toUTCString())//Fri, 07 Jun 2024 11:24:21 GMT

 const myTime = new  Date(2023,0 , 23)
 console.log(myTime)//2023-01-23T00:00:00.000Z
 const myTime1 = new Date(2023,0,23, 5, 25, 78)
 console.log(myTime1.toDateString())//Mon Jan 23 2023
 console.log(myTime1.toLocaleString())//1/23/2023, 5:26:18 AM

 const myTime2 = new Date("2-02-2024")
 console.log(myTime2.toLocaleString())//2/2/2024, 12:00:00 AM


///////++++++++++++++++++//January 1, 1970, UTC (the epoch).//++++++++++++++++++++++++++++++++++++++++
 let myTimeStamp = Date.now()
 console.log(myTimeStamp)//gives answ in millisec
 console.log(myTime2.getTime())//to comp the time

 console.log(Date.now())//it gives time in millisec
 console.log(Date.now()/1000)//it gives time in sec, but decimal is there
 console.log(Math.floor(Date.now()/1000))//time in sec without decimal

let newDate = new Date()
 console.log(newDate)
 console.log(newDate.getDate())
 console.log(newDate.getMonth())//it takes jan as 0 
 console.log(newDate.getMonth()+1)//it takes jan as 0, so we add one for user satisfaction 
 console.log(newDate.getDay())//it gives days as no.

// //to use string intrpolation means back text``
// `so the date is ${newDate.getDate()} and the month is ${newDate.getMonth()}`

newDate.toLocaleString('Default',{
   weekday: "long"

})