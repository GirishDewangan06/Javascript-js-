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

     //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     //on the basis of allocation, memory divides into 2 parts:1)Stack 2)Heap
     //1)Stack--(primitive type)--copy of variable
     let myNamee = "Girish Dewangan"
     let broName = myNamee 
      broName = "Durgesh"
     console.log(myNamee);
     console.log(broName);

     //2)Heap--(Non Primitive type)--direct allocats memory location , changes happens in original value

     let userOne ={
      email:"user@google.com",
      upi: "user@ybl",
     }

     let userTwo = userOne
     
     userTwo.email = "girish@google.com"
     console.log(userOne.email);
     console.log(userTwo.email);//it changes original value, becoz in heap type memory , it provide memory reference to interfare in ori value//

  to Better understand concepts ,see link: https://excalidraw.com/#json=ViTGbd1gTCf4PiZnvxD7F,zGYtfVPfQJFPcitvm9DCfw
