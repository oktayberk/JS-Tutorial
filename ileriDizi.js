const dizi = [1, 2, 3, 4];
const kareDizisi = [];
dizi.forEach(sayi =>{
    kareDizisi.push(sayi*sayi);
}) 
console.log(kareDizisi);

//map

const mapDizi= dizi.map(sayi =>sayi * 3) //butun elemanları 3 ile çarp ve mapdizi ye aktar
console.log(mapDizi);

//filter

const filtreliDizi = dizi.filter(sayi => sayi > 2)  //butun elemanları gez elemanlardan >2 olanları filtrelidizi içine aktar
console.log(filtreliDizi);

//reduce

const toplam = dizi.reduce((acc, sayi) => {  //acc baslangıc degeri ve defaultu 0, burada butun sayıları topluyorz.
    return acc + sayi;
})
console.log(toplam);