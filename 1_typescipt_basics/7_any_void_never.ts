/* `any` type: Bir değişkenin herhangi bir değer atanabilmesini
sağlar. any olarak tanımlanmış bir değişkene sonradan farklı türlerde değerler 
atanabilir. Bu durumda değişken aynı js de davrandığı gibi davranır.  */

let x: any = "test";
console.log(">>> x: ", typeof x);

x = 10;
console.log(">>> x: ", typeof x);

x = false;
console.log(">>> x: ", typeof x);

x = {
  id: 1,
};
console.log(">>> x: ", typeof x);

x = {
  fullname: "test",
};
console.log(">>> x: ", typeof x);

x = undefined;
console.log(">>> x: ", typeof x);

x = null;
console.log(">>> x: ", typeof x);

/* `void` type: Bir fonksiyondan değer dönmesini istemiyorsak o fonksiyonun dönüş türünü "void" 
olarak tanımlamamız gerekir. Böyleyece bu fonksiyondan bir değer dönmeyeceği anlaşılmış olur.
Çünkü eğer fonksiyonun dönüş türünü belirtmezsek mantıksal hatalara sebep olabilir. Örneğin yanlışlıkla gereksiz
bir değer döndürebiliriz. Bu durumda typescript bu döndürülen değerin türünü fonksiyonun dönüş türü olarak algılar.
Ama biz algoritmayı bu fonksiyondan değer dönmeyecek şekilde kurgulamışızdır. Bunun gibi mantıksal hatalara sebep 
olamamak için dönüş türünü `void` olarak set etmeliyiz.*/

// typescriptte fonksiyonda return olduğunda dönüş türünü parantezler olarasına belirtiriz.
/* Örneğin sum_1 fonksiyonundan sayısal bir değer dönmesini beklediğimizi düşünelim. İki sayıyı
toplayıp bize sonucu döndürecek. Bundan dolayı bu fonksiyonun dönüş türü number olarak belirtilmiştir. */
function sum_1(no1: number, no2: number): number {
  return no1 + no2;
}

/* Fakat aşağıdaki fonksiyondan algoritma gereği bir değer beklemiyoruz. 
Sadece verilen ismi ekrana basmasını bekliyoruz. Bu durumda bu fonksiyonun dönüş türünü
void olarak ayarlarsak algoritmamızı sağlıklık bir şekilde implement etmiş oluruz. */
function printHello_1(name: string): void {
  console.log("Merhaba" + name);
  // tek başına return yazmak ile hiç return yazmamak aynı şey
  // çünkü ikiside fonksiyona birşey döndürmüyor. Fonksiyona
  // veri döndüren fonksiyon sum_1 fonksiyonu gibi olmalıdır.
  return;
}

// Eğer fonksiyona dönüş türünü belirtmezsek typscript ilk return
// satırını dönüş türü olarak kabul eder.
// Ama bu durumda bir mantıksal bir problem olur. Biz fonksiyondan birşey gelmemesini bekliyoruz
// ama bir değer geliyor. Bu yüzden problemlemden kaçabilmek için fonksiyonun dönüş türünü
// belirtmemiz gerekir ki hata vermeyelim. Kendimizi güvence altına almak için. Doğru olan
// printHello_3 fonksiyonudur.
function printHello_2(name: string) {
  console.log("Merhaba" + name);

  return "merhaba " + name;
}

function printHello_3(name: string): void {
  console.log("Merhaba" + name);
}

// Aşağıda ki örnek return kullanımıyla ilgili bir örnektir.

function calculateExamResult_1(
  vize: number,
  final: number
): number | undefined {
  if (vize < 0 || vize > 100) {
    return;
  }
  if (final < 0 || final > 100) {
    return;
  }
  return vize * 0.4 + final * 0.6;
}

const result_1 = calculateExamResult_1(9999, 10000);

if (typeof result_1 === "undefined") {
  console.log("Hatalı bilgi girildi");
} else {
  console.log("result", result_1);
}

/* "never" type: Bir fonksiyondan hata fırlatılacaksa o fonksiyonun dönüş türünü 
never olarak belirtmek gerekir.

Bir fonksiyonun çalışmasını durdurmak için iki yöntem vardır. Birincisi return yöntemi,
diğeri de throw yöntemidir. Return ettiğimizde döndürülen değer çağırılan noktaya gider.
Ama throw ettiğimizde fırlatılan hata çağırılan bölge tarafından yakalanmazsa (try-catch ile yakalanmalı) 
o zaman program crash olur.(biter)
*/

/* call stack: birbbirini çağıran fonksiyonların sırasını tutan dizi */

// function fn1() {
//   console.log("fn1 çağrıldı");
//   fn2();
// }

// function fn2() {
//   console.log("fn2 çağrıldı");
//   fn3();
// }

// function fn3() {
//   console.log("fn3 çağrıldı");
//   fn4();
// }

// function fn4() {
//   console.log("fn4 çağrıldı");
//   fn5();
// }

function fn5(): never {
  console.log("fn5 çağrıldı");

  throw new Error("ErrorMesajı: >> fn5");

  // Yukarıda throw edildiği için ondan sonraki satırlar çalışmaz.
  // return "test";
}

// fn1();

/* Eğer fn5() fonksiyonunu try-catch içerisinde yazmazsak bu satırda 
hatayı ekrana basar ve program sonlanır. */
// fn5();

/* Eğer fn5() fonksiyonunu try-catch içerisinde yazarsa o zaman fırlatılan
hata catch blogunda yakalanır. catch içerisine gelen Error objesindeki message property'si console basılabilir.
Sonuç olarak programın çalışması kesilmez ve böylece hatayı kontrol altında tutmuş oluruz. */
try {
  fn5();
} catch (e: any) {
  console.log(e.message);
}
console.log("fn5 çağırıldıktan sonra kodlar çalışmaya devam eder");

/* Örnek: Vize final ortalamasını alan bir fonk. yazalım. Fakat girilen değerler
0-100 arasında değilse hata fırlatalım */

// bu fonksiyonda ya bize hata döner yada number döner o yüzden dönüş
// türünü belirtirken union kullanırız.(number | never)
function calculateExam_1(vize: number, final: number): number | never {
  if (vize < 0 || vize > 100) {
    throw new Error("Vize 0-100 arasında olmalı.");
  }

  if (final < 0 || final > 100) {
    throw new Error("Final 0-100 arasında olmalı.");
  }

  return vize * 0.4 + final * 0.6;
}

try {
  const result_2 = calculateExam_1(20, 99);
  console.log("Sınav Sonucu: ", result_2);
} catch (error: any) {
  console.log(error.message);
}

console.log("Program Başarılı Bir şekilde sonlandı");

/* Örnek: İsim girildiğinde "merhaba isim" şeklinde konsola bilgi yazan
bir fonksiyon tanımlayın. Eger isim boş string girilirse hata fırlatsın */

function sayHello_1(name: string): void | never {
  if (name.length === 0) {
    throw new Error("Lütfen isim alanını boş bırakmayınız.");
  }
  console.log("Merhaba " + name);
}

try {
  sayHello_1("Ramazan");
  sayHello_1("");
} catch (error: any) {
  console.log(error.message);
}

function fn(a: string | number): boolean | never {
  if (typeof a === "string") {
    return true;
  } else if (typeof a === "number") {
    return false;
  } else {
    return false;
  }
}
