let y = document.getElementById("output");

document.addEventListener('click', e => {
    if (e.target.matches('button')) {
        if (e.target.innerHTML == "C"){y.innerHTML = y.innerHTML.substring(0, y.innerHTML.length-1);}
       
        else if(e.target.innerHTML == "="){y.innerHTML = eval(y.innerHTML)}
        else if (e.target.innerHTML == "x²") {
            y.innerHTML = eval(y.innerHTML**2);
        }
        else if (e.target.innerHTML == "√x") {
            y.innerHTML = Math.sqrt(eval(y.innerHTML));
        }
        else if (e.target.innerHTML != "=") {
            if (e.target.innerHTML == "x") { y.innerHTML += "*" }
            else if (e.target.innerHTML == "÷") { y.innerHTML += "/" }
            else if (e.target.innerHTML == "xˣ") { y.innerHTML += "**";}
            else { y.innerHTML += e.target.innerHTML; }

        }
    };
}
);

document.addEventListener('keydown', e => {
    if(e.key === '=') {
        y.innerHTML = eval(y.innerHTML);

    }
    else if(e.key == '1' || e.key == '2' || e.key == '3' || e.key == '4' || e.key == '5' || e.key == '6' || e.key == '7' || e.key == '8' || e.key == '9' || e.key == '0' || e.key == '+' || e.key == '/' || e.key == '*' || e.key == '-') {
        y.innerHTML += e.key;
    }

    else if (e.key === "Backspace"){
        y.innerHTML = y.innerHTML.substring(0, y.innerHTML.length-1);
    }

});





