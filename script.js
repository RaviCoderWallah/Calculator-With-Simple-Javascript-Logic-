let displayArea = document.querySelector(".input-field input");
let btn = document.querySelectorAll("button");

let string = "";

btn.forEach(element => {
    element.addEventListener("click", (e) => {
        try {
            if (e.target.innerHTML == "=") {
                string = eval(string);
                displayArea.value = string;
            }
            else if (e.target.innerHTML == "C") {
                string = "";
                displayArea.value = string;
            }
            else if(e.target.innerHTML == "DEL"){
                string =  string.substring(0, string.length - 1);
                displayArea.value = string;
            }
            else {
                string = string + e.target.innerHTML;
                displayArea.value = string;
            }

        } catch (error) {
            alert("Bad Expersioon !! Enter valid expersion");
            string = "";
            displayArea.value = string;
        }

    });
});



