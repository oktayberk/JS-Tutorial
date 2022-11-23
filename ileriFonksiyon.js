var selamFonksiyonu=function selam() {
    console.log("merhaba");
}
selamFonksiyonu();

//
//arrow fonksiyonu : => function anlamına gelir 
const selamFonksiyonu2 =() => { 
    console.log("merhaba2");
}
selamFonksiyonu2();

//

const selamFonksiyonu3 =(mesaj) => { 
    console.log(mesaj);
}
selamFonksiyonu3("merhaba dunya");

//

var topla = (sayi1, sayi2) => {
    return sayi1 + sayi2;
}
let toplam = topla(3, 4);
console.log(toplam);