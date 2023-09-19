document.getElementById("Subscribe").addEventListener("click", validateForm);

    function validateForm() {
        let x = document.forms["Hirlevel"]["EmailInput"].value;
        if (x.includes("@")) {
            alert("Hirlevélre feliratkozva!");
            console.log("Sikeres Feliratkozas");
        }
        else{
            alert("Nem Valid Email-cim!");
            console.log("@nem talalt!");
        }
      }