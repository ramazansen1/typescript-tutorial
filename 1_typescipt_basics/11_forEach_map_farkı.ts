// forEach() ile map() arasındaki farklar

/* 
    - forEach fonksiyonu sadece itemleri sırayla gezmek için kullanılır.
    - map fonksiyonu ise itemleri gezerken her itemin sıra numarasına 
      karşılık gelecek şekilde yeni bir dizi oluşturmak için kullanılır.
    - her iki fonksiyonda senkron çalışır.

    Kısaca arasında ki fark forEach'ten "undefined" dönerken map'ten yeni bir dizi döner. 
*/

const studentNames_2: string[] = [
  "Alpay",
  "Ceyhun",
  "Farhad",
  "Ramazan",
  "Serhat",
  "Suat",
];

const forEachOutsideResult: number[] = [];
const forEachResult = studentNames_2.forEach((item) => {
  console.log("forEach item >>>", item);
  forEachOutsideResult.push(item.length);
});

const mapResult = studentNames_2.map((item) => {
  console.log("map item >>>", item);

  // yeni dizi oluşturdu ve dizi içerisindeki isimlerin tek tek uzunluklarını diziye aktardı.
  // Çıktı: >>>> mapResult >>> [ 5, 6, 6, 7, 6, 4 ]
  return item.length;
});

console.log("forEachResult >>>", forEachResult);

console.log("mapResult >>>", mapResult);

console.log("forEachOutsideResult >>", forEachOutsideResult);
// forEachOutsideResult >> [ 5, 6, 6, 7, 6, 4 ] içisindeki isimlerin uzunluğunu döndürdü

const numbers_3: number[] = [1, 2, 3, 4, 5];

const forEach = numbers_3.forEach((item) => {
  console.log(">>>>>>>foreach ile döndüm", item);
});

console.log(forEach);

const mapfonk = numbers_3.map((item) => {
  console.log(">>>>>>>mapfonk ile döndüm", item);
  return item;
});

console.log("mapfonksiyonu", mapfonk);
