
let people=["umer","usman","umair"];
person_cant_make="umair";
new_person='zaid';
console.log("sorry"+person_cant_make+"can not come to dinner party");

people.forEach(element => {
    if (element==person_cant_make){
        index=people.indexOf(element);
        people[index]=new_person
    }
});

people.forEach(element => {
    console.log("would you like to come to my home for dinner "+element)
});
