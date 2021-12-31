const input = document.querySelector(".input");
const kursSelect = document.querySelector(".pilihan");
const hasil = document.querySelector(".IDR");

    let hitungBtn = document.querySelector(".hitung");
    hitungBtn.addEventListener("dblclick", function() {
        document.querySelector(".container");
        
        if (kursSelect.value == "1"){
            hasil.value =  input.value * 9915 ;
        }
        else if (kursSelect.value == "2"){
            hasil.value =  input.value * 13472 ;
        } 
        else if (kursSelect.value == "3"){
            hasil.value =  input.value * 874 ;
        }
        else if (kursSelect.value == "4"){
            hasil.value =  input.value * 120 ;
        }
        else if (kursSelect.value == "5"){
            hasil.value =  input.value * 15888 ;
        }
        else if (kursSelect.value == "6"){
            hasil.value =  input.value * 3592 ;
        }    
})

