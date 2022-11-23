    // **!!! FOREACH dongusu :!!!!:

var sehirler = ["ankara", "istanbul", "izmir", "adana"];
    
// for each elimizde dizi tmelli olan kelimeleri tek tek dolaşmamıza yarar
//şehirlerdeki her bi eleman için for, ornegin ankarayı kullanmak için each kullanır
//burada biz function ile o an gezdigim şehri sehir olarak tanımluıyoruz. Ankaradayken sehir=ankara, istanbuldayken sehir=istanbul...
//burada her gezdigim şehri şehire eşitleyip console.log ile yazdırıyorum. Burada tek tek sehirler[] içerisini gezip şehire eşitlediklerini yazdırıyor
sehirler.forEach(function (sehir){
    console.log(sehir);
})
