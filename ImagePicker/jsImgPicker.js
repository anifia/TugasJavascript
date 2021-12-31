function imgBarang() {
    let cetak = document.getElementById("cetak")
    let belanjaan = document.getElementById("dagangan")

    belanjaan.addEventListener("change", cetak)
    if (belanjaan.value == "2") {
        cetak.src = "foto/img1.jpg";
        alert("Abaya cantik yang siap temani harimu!");
    } else if (belanjaan.value == "3") {
        cetak.src = "foto/img3.png";
        alert("Tunik rasa anak muda");
    } else if (belanjaan.value == "4") {
        cetak.src = "foto/img4.jpg";
        alert("Outer gemes");
    } else if (belanjaan.value == "5") {
        cetak.src = "foto/img5.jpg";
        alert("Tas super simple dan gemes");
    } else if (belanjaan.value == "6") {
        cetak.src = "foto/img6.jpg";
        alert("Bingkisan cantik untuk orang tersayang!");
    }
    else if (belanjaan.value == "7") {
        cetak.src = "foto/img7.jpg";
        alert("Bouquet cantik untuk hadiah orang tersayang!");
    }
    
}