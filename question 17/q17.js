
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

//append of element 
people.push("huziafa");



//insertion of element function can be made  

new_array=['shaiz'+","]
copy_array=people
people=new_array+copy_array;

people=people.split(",")

console.log(people);


console.log('sorry you can invite only 2 people at the moment');


for (let index = 0; index < people.length; index++) {
   d=people.pop();
   if (people.length==2){
    break
   };
};

people.forEach(element => {
    console.log("you are still invited "+element);
});


for (let index = 0; index <=people.length; index++) {
    
        people.pop();
    
};
console.log(people);