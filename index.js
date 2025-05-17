for(var i=0; i<document.querySelectorAll("button").length ;i++){
    document.querySelectorAll("button")[i].addEventListener("click" , function(){ 
        color(this.id)}
    );
}

function color(c){
    if(c === "c1"){
        document.body.style.backgroundColor = "FF90BB";
    }
    else if(c === "c2"){
        document.body.style.backgroundColor = "90D1CA";
    }
    else if(c === "c3"){
        document.body.style.backgroundColor = "F2C078";
    }
    else if(c === "c4"){
        document.body.style.backgroundColor = "F79B72";
    }

}