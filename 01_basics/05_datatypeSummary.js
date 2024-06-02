//On the Basis of how data store in memory and how to Access,Datatype divides into 2 categories:(Primitive And Non-Primitive(Reference) Datatype) 

//1...Primitive Datatype---(String, Number, Boolean, Null, Undefined, Symbol, BigInt)
   //it apply call by value method(where they not provide reference of memory , it just give the copied of data value from other places)

   let myName = "Girish"//string
   const score = 100//number
   const scoreValue = 100.3//number
   
   const isLoggedIn = false//Boolean
   const outsideTemp = null//object
   let noDefinedValue;//undefined
   
   const id = Symbol('123')//symbol
   const  another_id = Symbol('123')//symbol
   
   console.log(id === another_id);
   
   const BigNumber = 626789n
   console.log(typeof BigNumber);//bigint
   
   //2..Non-primitive(Reference):(Array, Objects, Functions)
     //--call by refrence,it just allocated memory refrence with data values
   
     //array//return_type 'object'
     const heroes = ["Shaktimaan","NagRaj", "Doga"]
     
     //object(which is within {})//returntype 'object'
    const myobj = {
       Name : "Girish",
       Age  : 21,
     }
     //Function//return_type 'object function'
     const myfunction = function(){
       console.log("Hello,Girish");
     }
     console.log(typeof myobj);

     
