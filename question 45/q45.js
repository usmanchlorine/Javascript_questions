function cars(manufacturer,model_name,gear,headlight){
    if (gear==undefined && headlight==undefined){
        object1={
            manufactur:manufacturer,
            model:model_name,
        }

    }
    else{
        object1={
            manufactur:manufacturer,
            model:model_name,
            gear:gear,
            lights:headlight
        }
    }

    return object1


}

console.log(cars("Toyota","corolla"));

console.log(cars("Toyota","corolla","manual","foglight"));