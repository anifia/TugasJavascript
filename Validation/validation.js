let nama = document.getElementById("nama")
        let email = document.getElementById("email")
        let jam = document.getElementById("jam")
        let tujuan = document.getElementById("tujuan")
        let jumlah = document.getElementById("jumlah")
        let span = document.getElementsByTagName("span")

        function proses() {
            let snama = document.getElementById("snama")
            let semail = document.getElementById("semail")
            let sjam = document.getElementById("sjam")
            let stujuan = document.getElementById("stujuan")
            let sjumlah = document.getElementById("sjumlah")


            if (nama.value == "") {
                snama.innerHTML = "Nama tidak boleh kosong"
            }
            if (email.value == "") {
                semail.innerHTML = "Email tidak boleh kosong"
            }
            if (jam.value == "") {
                sjam.innerHTML = "Jam tidak boleh kosong"
            }
            if (tujuan.value == "") {
                stujuan.innerHTML = "Tujuan tidak boleh kosong"
            }
            if (jumlah.value == "") {
                sjumlah.innerHTML = "Jumlah tidak boleh kosong"
            } else {
                alert("Pemesanan Tiket Bus Sukses")

                let hnama = document.getElementById("hnama")
                let hemail = document.getElementById("hemail")
                let hjam = document.getElementById("hjam")
                let htujuan = document.getElementById("htujuan")
                let hjumlah = document.getElementById("hjumlah")

                let hasil = document.getElementById("hasil")
                hasil.style.visibility = "visible"

                hnama.innerHTML = nama.value
                hemail.innerHTML = email.value
                hjam.innerHTML = jam.value
                htujuan.innerHTML = tujuan.value
                hjumlah.innerHTML = jumlah.value
            }
        }
        function reset() {
            nama.value = ""
            email.value = ""
            jam.value = ""
            tujuan.value = ""
            jumlah.value = ""

            let info = document.getElementById("sukses")
            info.style.visibility = "hidden"
            let hasil = document.getElementById("hasil")
            hasil.style.visibility = "hidden"

            if (nama.value == "") {
                snama.innerHTML = ""
            }
            if (email.value == "") {
                semail.innerHTML = ""
            }
            if (jam.value == "") {
                sjam.innerHTML = ""
            }
            if (tujuan.value == "") {
                stujuan.innerHTML = ""
            }
            if (jumlah.value == "") {
                sjumlah.innerHTML = ""
            }
        }