let variable="usman";
let lowercase_name=variable.toLowerCase()
let uppercase_name=variable.toUpperCase()
let title_name=variable.split("")
title_name[0]=title_name[0].toUpperCase()
title_name=title_name.join("")


console.log(lowercase_name,uppercase_name,title_name)
alert(lowercase_name+uppercase_name+title_name)