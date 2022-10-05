

megicians=["harry potter","hermoine","rowen weisly"]


function show_megicians(megicians){
    megicians.forEach(element => {
        console.log(element);
    });
}

function make_great(arr){
   arr=arr.map(i=> 'Great '+i);
   return arr
};



















megicians=make_great(megicians);

show_megicians(megicians);









