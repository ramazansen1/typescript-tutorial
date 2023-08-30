// Array Methodları

//! push() methodu
// diziye sonuna öğe eklemimizi sağlar
let city = ["Delhi", "Lucknow", "Banglore"];

city.push("Mumbai"); // Output: [ 'Delhi', 'Lucknow', 'Banglore', 'Mumbai' ]

console.log("push() methodu: ", city);

//! pop() methodu
// dizideki son elemanı kaldırır.
let cities = ["Delhi", "Lucknow", "Banglore", "Mumbai"];

// son elemanı kaldırır
let removedcity = cities.pop();

console.log("pop() methodu: ", cities); // Output: [ 'Delhi', 'Lucknow', 'Banglore' ]
console.log(removedcity); // Output: Mumbai
/* 
    ! reduce() method
    - bu method dizinin her öğesi üzerinde dolaşarak ona söylediğimizi
    - yaparak tek bir çıktı geri döndürür. Aşağıda ki methodun çalışma mantıgı
    - Bizden iki parametre ister:
    ! biri callback function diğeri başlangıç değeridir.
    - 0 + 20;
    - 20 + 10;
    - 30 + 18;
    - 48 + 12;
    - 60;
*/

const numbers = [20, 10, 18, 12];
const sum = numbers.reduce((x, y) => x + y, 0);

console.log("reduce() methodu: ", sum); // Output: 60

/*
    ! filter() methodu
    - bu method verilen işlev tarafından tanımlanan testi geçen
    tüm öğeler için yeni bir dizi oluşturur.
*/

const words = ["HTML", "CSS", "Javascript", "Python"];

const longWords = words.filter((word) => word.length > 4);

console.log("filter() methodu: ", longWords); // Output: [ 'Javascript', 'Python' ]

/*
    ! forEach() methodu
    - bu method her dizi öğesini döner.
*/

const languages = ["Englisch", "Turkisch", "Deutsch"];

languages.forEach((lang) => console.log("forEach() methodu: ", lang));
// Output:
// Englisch
// Turkisch
// Deutsch

/*
    ! map() methodu
    - Bu method her dizi öğresi için bir işlev çağırır ve yeni
    bir dizi return eder.
    
*/

const points = [1, 2, 3, 4, 5];

const doubled = points.map((point) => {
  return point * 2;
});

console.log("map() çalışmadan önce: ", points); // Output: [ 1, 2, 3, 4, 5 ]
console.log("map() methodu", doubled); // Output: [ 2, 4, 6, 8, 10 ]

/*
    ! find() methodu
    - Bu method fonksiyona yazılan işlevi yerine getiren ilk dizi 
    elemanını bize döndürür.
    
*/

const numbers_1 = [7, 6, 5, 128, 59];

const found = numbers_1.find((num) => num > 7);

console.log("find() methodu: ", found); // Output: 128

/*
    ! findIndex() methodu
    - Bu method fonksiyona yazılan işlevi yerine getiren ilk dizi
    öğesinin index'ini return eder. Aksi halde bize -1 return eder.  
*/

const numbers_2 = [6, 11, 9, 100, 46];

const indexFound = numbers_2.findIndex((index) => index > 15);

console.log("findIndex() methodu: ", indexFound); // 3

const numbers_3 = [6, 11, 9, 2, 1];

const indexFound_1 = numbers_3.findIndex((index) => index > 15);

console.log("findIndex() methodu: ", indexFound_1); // -1

/*
    ! sort() methodu
    - Bu method dizinin öğelerini belirli bir sıraya göre sıralar.
    (artan yada azalan)
    ASCII karakter sırasına göre sıralanır.

    - Sayılarda 
        < 0 ise a önce gelecek
        > 0 ise b önce gelecek
*/

let cities_2 = ["Delhi", "Lucknow", "Banglore", "Mumbai"];

let sortedArray = cities_2.sort();

console.log("sort() methodu: ", sortedArray); // Output:  [ 'Banglore', 'Delhi', 'Lucknow', 'Mumbai' ]

let numbers_4 = [4, 11, 5, 2, 77];

let sortedArray_2 = numbers_4.sort((a, b) => a - b);

console.log("sort() methodu: ", sortedArray_2); // Output: [ 2, 4, 5, 11, 77 ]

let sortedArray_3 = numbers_4.sort((a, b) => b - a);

console.log("sort() methodu: ", sortedArray_3); // Output:  [ 77, 11, 5, 4, 2 ]

const products = [
  {
    name: "laptop",
    price: 1000,
  },
  {
    name: "desktop",
    price: 1500,
  },
  {
    name: "phone",
    price: 500,
  },
];

let sortedArray_4 = products.sort((a, b) => {
  return a.price - b.price;
});

console.log("sort() methodu: ", sortedArray_4);
// Output:
/* 
[
    { name: 'phone', price: 500 },
    { name: 'laptop', price: 1000 },
    { name: 'desktop', price: 1500 }
]
*/

/*
    ! concat() methodu
    - Bu method iki veya daha fazla değeri/diziyi birleştirecek yeni bir dizi döndürür.
    
*/

let primeNumbers = [2, 3, 5, 7];
let evenNumbers = [2, 4, 6, 8];

let joinedArrays = primeNumbers.concat(evenNumbers);

console.log("concat() methodu :", joinedArrays);
