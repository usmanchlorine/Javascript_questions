function make_album(artist_name,album_title,tracks) {

    if (tracks==undefined){
        
    object1={
        artist:artist_name,
        album:album_title
    }
        
    }
    else{
        object1={
            artist:artist_name,
            album:album_title,
            trackes:tracks
        };
    }



    return object1
}


console.log(make_album("dhillion","Insane"));

console.log(make_album("dhillion","Excuses"));

console.log(make_album("anuv jain","Gul",5));



















