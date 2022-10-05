let current_users=['umers','usman','faizan','neha','kanwal','umair'];
var new_users=['ahmed','khurram','rizwan','FAIZAN','neha','zia'];



new_users.forEach(element => {
    element=element.toLowerCase();
    if (current_users.includes(element)){
        console.log('this username is already been used: '+element)
    }

    else{
        console.log('username is availabe: '+element)
    }
});






















