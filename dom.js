// // document.getElementById("bio").innerHTML="aras altintas : 2018 "

// var intro1 = document.getElementById("intro1");

// var mesaj = document.getElementById("mesaj");

// mesaj.innerHTML = intro1.innerHTML;  // id si mesaj olan paragrafı id si introl olan ğparagrafa eşitledi. Bu durumda pragraflar aynı oldu

// var tumListeler = document.getElementsByTagName("ul"); // tum listelerle ilgili yar yapmak çiçin kullanıyoruz. Getelementsbytagname ile ul tagı olan butun elementleri aldık
// var sehirler = tumListeler[0];

// tumElemanlar = sehirler.getElementsByTagName("li");

// for (i = 0; i < tumElemanlar.length; i++) {
//     alert(tumElemanlar[i].innerHTML); //innerhtml ile içini oku diyoruz
// }

// var classElemanlari = document.getElementsByClassName("intro1"); //class olarak intro1 kullanan elemanları classelemanlarına esitledim
// alert(classElemanlari[0].innerHTML); //classelemanlarından 0.elemanıniçerigini okuduk

// var queryElemanları = document.querySelectorAll("p.intro1"); // document.queryselectorAll sorgu elemanlarından p.intro1 plerden intro kullananları
// alert(queryElemanları.length);

// var isimElemanlari = document.getElementsByName("musteriAdi")
// alert(isimElemanlari[0].value);

// var oktay = document.getElementById("oktay").addEventListener("click", rengiDeğistir); //by id ile oktaya ulastık. add eventliistener click ile ustune tıklandıgında , den sonraki fonksiyonu yapmasını soyledil
// //ayrıca click yerine mouseover gelirse hover efekti oldugunda yani değişikleri ona göre yapar
// function rengiDeğistir() { //bburada bir fonksiyon yazıyoruz
//     document.getElementById("div1").style.color = "red"; //bu fonsiyon div1 in rengini red yapıyor
//     var isimElemanlari = document.getElementsByName("musteriAdi");
//     isimElemanlari[0].value = "UmutAras"  //tıklandıgında umutarasa cevirdi
// }

// var node = document.getElementById("agac");
// alert(node.childNodes[0].nodeValue);

var baslik = document.createElement("h2");
var node = document.createTextNode("Merhaba JS");
baslik.appendChild(node);

var div1 = document.getElementById("div1"); //div1 e ulastık
var p2 = document.getElementById("p2"); // div1 içerisindeki p2 ye ulastık

div1.insertBefore(baslik, p2) //inster before diyerek onune ekliyoruz, (heading) ekliyoruz ,p2) p2 den once ekle. Yani div1in içinde p2den once baslik ekle diyor

alert("p2 siliniyor")
div1.removeChild(p2); // alert verdikten sonra p2 yi siliyor

alert("degistiriliyor");
var p1 = document.getElementById("p1"); //p1 e ulastık
div1.replaceChild(baslik, p1); //div1de replacechild=yerine koy yani baslıgı p1 yerine koy diyoruz
