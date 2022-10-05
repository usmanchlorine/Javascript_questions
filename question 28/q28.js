var max_age=85;
let age=Math.floor(Math.random()*max_age); // when this program will execute it will generate a random age from the above max age from 0 to 85 and based on this result 
// i have obtained this knowledge from stack overflow  i have done this in  python math.floor is doing round up/down math.random is gives (0-1)in between in python random.randint(0,85) 
//https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/

if (age>=2 && age<4){
    console.log('person is toddler');
}
else if (age>=4 && age<13) {

    console.log('person is kid ');

}

else if (age>=13 && age<20) {

    console.log('person is teenager ');


}



else if (age>=20 && age<65) {

    console.log('person is adult ');

}



else if (age>=65) {

    console.log('person is elder ');

}


else{
    console.log('person age is below 2 !')
}





























