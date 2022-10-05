let Numbers=[1,2,3,4,5,6,7,8,9];


Numbers.forEach(element=>{
    if ([1,2].includes(element)){
        console.log(element+"nd");
    }

    else if ([3].includes(element)){
        console.log(element+"rd");

    }
    else{
        console.log(element+"th");
    }
});






















