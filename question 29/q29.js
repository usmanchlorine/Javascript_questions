var favorite_fruits=['banana','apple','orange',NaN];
let picked_fruit=favorite_fruits[Math.floor(Math.random()*favorite_fruits.length)]; // when this program will execute it will generate a random result  from the above list and based on this result 
// i have obtained this knowledge from stack overflow  i have done this in  python math.floor is doing round up/down math.random is gives (0-1)in between in python random.randint(0,85) 
//https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/

if (picked_fruit =='banana'){
    console.log('You really like bananas!');
}
else if (picked_fruit=='orange') {

    console.log('your really like '+picked_fruit+"!");

}

else if (picked_fruit=='apple') {

    console.log('your really like '+picked_fruit+"!");


}

else{
    console.log('you picked no fruits')
}





























