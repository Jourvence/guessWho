var chosen = null;

function chooseX(){
    chosen = "X";
    document.getElementById("chooser").remove();
    console.log("X");
}

function chooseO(){
    chosen = "O";
    document.getElementById("chooser").remove();
    console.log("O");
}

function colOne(){
    if (chosen != null && document.getElementById("one").textContent != "X" && document.getElementById("one").textContent != "O"){
        document.getElementById("one").textContent = chosen;
        
        if (chosen == "X")
            chosen = "O";
        else
            chosen = "X";    
    }
    console.log(document.getElementById("one").textContent);
}

function colTwo(){
    if (chosen != null && document.getElementById("two").textContent != "X" && document.getElementById("two").textContent != "O"){
        document.getElementById("two").textContent = chosen;
        
        if (chosen == "X")
            chosen = "O";
        else
            chosen = "X";    
    }
    console.log(document.getElementById("two").textContent);
}

function colThree(){
    if (chosen != null && document.getElementById("three").textContent != "X" && document.getElementById("three").textContent != "O"){
        document.getElementById("three").textContent = chosen;
        
        if (chosen == "X")
            chosen = "O";
        else
            chosen = "X";    
    }
    console.log(document.getElementById("three").textContent);
}

function colFour(){
    if (chosen != null && document.getElementById("four").textContent != "X" && document.getElementById("four").textContent != "O"){
        document.getElementById("four").textContent = chosen;
        
        if (chosen == "X")
            chosen = "O";
        else
            chosen = "X";    
    }
    console.log(document.getElementById("four").textContent);
}

function colFive(){
    if (chosen != null && document.getElementById("five").textContent != "X" && document.getElementById("five").textContent != "O"){
        document.getElementById("five").textContent = chosen;
        
        if (chosen == "X")
            chosen = "O";
        else
            chosen = "X";    
    }
    console.log(document.getElementById("five").textContent);
}

function colSix(){
    if (chosen != null && document.getElementById("six").textContent != "X" && document.getElementById("six").textContent != "O"){
        document.getElementById("six").textContent = chosen;
        
        if (chosen == "X")
            chosen = "O";
        else
            chosen = "X";    
    }
    console.log(document.getElementById("six").textContent);
}

function colSeven(){
    if (chosen != null && document.getElementById("seven").textContent != "X" && document.getElementById("seven").textContent != "O"){
        document.getElementById("seven").textContent = chosen;
        
        if (chosen == "X")
            chosen = "O";
        else
            chosen = "X";    
    }
    console.log(document.getElementById("seven").textContent);
}

function colEight(){
    if (chosen != null && document.getElementById("eight").textContent != "X" && document.getElementById("eight").textContent != "O"){
        document.getElementById("eight").textContent = chosen;
        
        if (chosen == "X")
            chosen = "O";
        else
            chosen = "X";    
    }
    console.log(document.getElementById("eight").textContent);
}

function colNine(){
    if (chosen != null && document.getElementById("nine").textContent != "X" && document.getElementById("nine").textContent != "O"){
        document.getElementById("nine").textContent = chosen;
        
        if (chosen == "X")
            chosen = "O";
        else
            chosen = "X";    
    }
    console.log(document.getElementById("nine").textContent);
}