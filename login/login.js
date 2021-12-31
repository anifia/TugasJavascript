function checkForm(){
    var username = document.querySelector(".Username").value;
    var password = document.querySelector(".Password").value;

    if(username == "hani21154" && password == "rahasia"){
        window.open("loginberhasil.html")
    }
    else{
    alert("Login Gagal") 
    }
    
}
