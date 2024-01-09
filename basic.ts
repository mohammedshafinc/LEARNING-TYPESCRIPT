

//Enum


enum Role { ADMIN,READ_ONLY,AUTHOR}

const person = {
    name:"shafin",
    age:20,
    hobbies:['sports','cooking'],
    role:Role.ADMIN
}

if(person.role === Role.AUTHOR){
    console.log("this is admin");
    
}

console.log(person);






