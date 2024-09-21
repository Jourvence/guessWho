var chosen = null;

function chooseX(){
    chosen = "X";
    document.getElementById("chooser").remove();
}

function chooseO(){
    chosen = "O";
    document.getElementById("chooser").remove();
}

function colOne(){
    var one = document.getElementById("one");
    if (chosen != null && one.textContent != "X" && one.textContent != "O"){
        one.textContent = chosen;
        
        if (chosen == "X")
            chosen = "O";
        else
            chosen = "X";    
    }
   
    win();
}

function colTwo(){
    var two = document.getElementById("two");
    if (chosen != null && two.textContent != "X" && two.textContent != "O"){
        two.textContent = chosen;
        
        if (chosen == "X")
            chosen = "O";
        else
            chosen = "X";    
    }
 
    win();
}

function colThree(){
    var three = document.getElementById("three");
    if (chosen != three.textContent != "X" && three.textContent != "O"){
        three.textContent = chosen;
        
        if (chosen == "X")
            chosen = "O";
        else
            chosen = "X";    
    }
  
    win();
}

function colFour(){
    var four = document.getElementById("four");
    if (chosen != null && four.textContent != "X" && four.textContent != "O"){
        four.textContent = chosen;
        
        if (chosen == "X")
            chosen = "O";
        else
            chosen = "X";
    }
    win();
}

function colFive(){
    var five = document.getElementById("five");
    if (chosen != null && five.textContent != "X" && five.textContent != "O"){
        five.textContent = chosen;
        
        if (chosen == "X")
            chosen = "O";
        else
            chosen = "X";    
    }
    win();
}

function colSix(){
    var six = document.getElementById("six");
    if (chosen != null && six.textContent != "X" && six.textContent != "O"){
        six.textContent = chosen;
        
        if (chosen == "X")
            chosen = "O";
        else
            chosen = "X";    
    }
    win();
}

function colSeven(){
    var seven = document.getElementById("seven");
    if (chosen != null && seven.textContent != "X" && seven.textContent != "O"){
        seven.textContent = chosen;
        
        if (chosen == "X")
            chosen = "O";
        else
            chosen = "X";    
    }
    win();
}

function colEight(){
    var eight = document.getElementById("eight");
    if (chosen != null && eight.textContent != "X" && eight.textContent != "O"){
        eight.textContent = chosen;
        
        if (chosen == "X")
            chosen = "O";
        else
            chosen = "X";    
    }
    win();
}

function colNine(){
    var nine = document.getElementById("nine");
    if (chosen != null && nine.textContent != "X" && nine.textContent != "O"){
        nine.textContent = chosen;
        
        if (chosen == "X")
            chosen = "O";
        else
            chosen = "X";    
    }
    win();
}

function win(){
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    let elements = document.getElementsByClassName('col');

    // vertical
    if ((one.textContent == two.textContent) && (one.textContent == three.textContent) && (one.textContent == "X" || one.textContent == "O")){
        one.style.color = "green";
        two.style.color = "green";
        three.style.color = "green";
       
        for (let i = 0; i < elements.length; i++) {
            elements[i].removeAttribute("onclick");
        }
        return
    }
    else if ((four.textContent == five.textContent) && (four.textContent == six.textContent) && (four.textContent == "X" || four.textContent == "O")){
        four.style.color = "green";
        five.style.color = "green";
        six.style.color = "green";

        for (let i = 0; i < elements.length; i++) {
            elements[i].removeAttribute("onclick");
        }
        return
    }
    else if ((seven.textContent == eight.textContent) && (seven.textContent == nine.textContent) && (seven.textContent == "X" || seven.textContent == "O")){
        seven.style.color = "green";
        eight.style.color = "green";
        nine.style.color = "green";
        
        for (let i = 0; i < elements.length; i++) {
            elements[i].removeAttribute("onclick");
        }
        return
    }
    // horizontal

    else if ((one.textContent == four.textContent) && (one.textContent == seven.textContent) && (one.textContent == "X" || one.textContent == "O")){
        one.style.color = "green";
        four.style.color = "green";
        seven.style.color = "green";

        for (let i = 0; i < elements.length; i++) {
            elements[i].removeAttribute("onclick");
        }
        return
    }
    else if ((two.textContent == five.textContent) && (two.textContent == eight.textContent) && (two.textContent == "X" || two.textContent == "O")){
        two.style.color = "green";
        five.style.color = "green";
        eight.style.color = "green";

        for (let i = 0; i < elements.length; i++) {
            elements[i].removeAttribute("onclick");
        }
        return
    }
    else if ((three.textContent == six.textContent) && (three.textContent == nine.textContent) && (three.textContent == "X" || three.textContent == "O")){
        three.style.color = "green";
        six.style.color = "green";
        nine.style.color = "green";

        for (let i = 0; i < elements.length; i++) {
            elements[i].removeAttribute("onclick");
        }
        return
    }
    // Two X's
    else if ((one.textContent == five.textContent) && (one.textContent == nine.textContent) && (one.textContent == "X" || one.textContent == "O")){
        one.style.color = "green";
        five.style.color = "green";
        nine.style.color = "green";

        for (let i = 0; i < elements.length; i++) {
            elements[i].removeAttribute("onclick");
        }
        return
    }
    else if ((three.textContent == five.textContent) && (three.textContent == seven.textContent) && (three.textContent == "X" || three.textContent == "O")){
        three.style.color = "green";
        five.style.color = "green";
        seven.style.color = "green";

        for (let i = 0; i < elements.length; i++) {
            elements[i].removeAttribute("onclick");
        }
        return
    }
}