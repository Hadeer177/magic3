


function validate() {
    var value = document.getElementById("demo").value;
    var result = document.getElementById("mouse");

    if (value == "") {
        result.innerHTML = "Please Insert Data";
        return false;
    } else if (isNaN(value)) {
        result.innerHTML = "Please Insert Number Not String";
        return false;
    } else {
        result.innerHTML = value * 30 +" "+"Egyption Pound";
        return false;
    }
    }






    






    