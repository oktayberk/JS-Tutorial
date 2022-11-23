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

function kullaniciVarmi(email, sifre) {
    for (i = 0; i < kullanicilar.length; i++) {
        if (kullanicilar[i].email == email && kullanicilar[i].sifre == sifre) {
            return true;
        }
        
    }
    return false;
}
function giris() {
    if (kullaniciVarmi(email, sifre)) { 
    console.log(tivitler)
    } else {
        console.log("yanlıs kullanici adi veya sifre");
    }
}
giris(email,sifre)