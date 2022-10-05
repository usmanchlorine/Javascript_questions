var max_age=['green','yellow','red']
let age=max_age[Math.floor(Math.random()*max_age.length)]; // when this program will execute it will generate a random alien color from the above list and based on this result 
// i have obtained this knowledge from stack overflow  i have done this python 
//https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/

if (age=='green'){
    console.log('Congratulation you just earned 5 points for killing green !')
}
else if (age=='yellow') {

    console.log('Congratulation you just earned 10 points for killing yellow !')

}

else{
    console.log('Congratulation you just earned 15 points ! for killing red ! ')
}



























