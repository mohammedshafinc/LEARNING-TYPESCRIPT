//Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "shafin",
    age: 20,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
if (person.role === Role.AUTHOR) {
    console.log("this is admin");
}
console.log(person);
