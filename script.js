function compute()
{
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+years;

    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + year + "</mark>";
}
function updateRate(){
    rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval;
}

function validateAmount(){
    var principal = document.getElementById("principal").value;
    var positive = parseInt(principal)>0;
    if (!positive){
        alert("enter a positive number")
        document.getElementById("principal").focus();
    }
}