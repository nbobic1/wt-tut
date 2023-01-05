function pokusajAjax(pokusaj,fnCallback){
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {// Anonimna funkcija
        if (ajax.readyState == 4 && ajax.status == 200){
           alert("uspjesan unos");
        }
        else if (ajax.readyState == 4)
            fnCallback(ajax.statusText,null);
    }
    ajax.open("POST","http://localhost:3000/upis",true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify({ime_prezime:document.getElementById("fname").value,adresa:document.getElementById("lname").value,broj_telefona:document.getElementById("broj").value}));
 }
 function fnCallback(a,b)
 {

 }