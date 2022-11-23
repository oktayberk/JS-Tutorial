var kullanicilar = [
    { email: "oktayaltintas@gmail.com", sifre: "12345" },
    { email: "arasaltintas@gmail.com", sifre: "12345" }
]

var tivitler = [
    { email: "oktayaltintas@gmail.com", tivit: "bugun hava cok guzel" },
    { email: "oktayaltintas@gmail.com", tivit: "bugun hava cok guzel22" },
    { email: "arasaltintas@gmail.com", tivit: "ottay abi senin odana didelim" }
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function giris() {
    if ((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) ||
        (email = kullanicilar[1].email && sifre == kullanicilar[1])) { 
    console.log(tivitler)
    } else {
        console.log("yanlıs kullanici adi veya sifre");
    }
}
giris(email,sifre)