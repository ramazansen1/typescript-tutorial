/* Enum: Bir değişkenin alabileceği değerleri belirten tanımlamalardır.
   Kelime anlamı aslında "enumeration" kelimesinin kısaltılmasıdır. Bu da 
   "saymak" anlamına gelir. Ama bu rakamsal olarak saymak değildir. Örneğin
   telefon numarası türlerini sayın dediğimizde mobil numara, ticari numara gibi ifadelerin
   peş peşe söyenmesi şeklinde sayma işlemi yapılır.


    Özellikleri:

    - "type" keywordüyle başlamazlar, "enum" keywordüyle başlarlar.
    - Typelar da ki gibi bir atama işlemi yoktur, doğrudan süslü parantez
    kullanılarak tanımlanmaya başlanır.
    - Değerler tırnaksız şekilde yazılır ve değişken ismi tanımlama
    kuralları geçerlidir.
    - 
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Enum içeisinde kullanılan bazı konular:

// Objelerin property'lerine iki şekilde ulaşılabilir. birinicisi eğer
// property içerisinde özel karakter yoksa nokta notasyonuyla property'ye
// ulaşılır. İkincisi de köşeli parantezler kullanılarak ulaşılır. Bu yöntem
// property içerisine özel karakter olduğu zaman kullanılır. Çünkü
// o özel karakteri ifade etmenin tek yolu tırnak içerisinde string olarak yazmaktır.
const exampleObj_1: any = {};
exampleObj_1.foo = "test";

// Mesela aşağıdaki propertylerde özel karakterler var. Tire, yıldız,
// köşeli parantez bunlar özel karakterlerdir ve tırnak içinde yazılmalıdır.
// "foo-bar"
// foo*bar
// [foo]

exampleObj_1["foo-bar"] = "test";
exampleObj_1["foo*bar"] = "test";
exampleObj_1["[foo]"] = "test";
exampleObj_1["bar"] = "test";
exampleObj_1["{bar}"] = "test";

console.log(">>> exampleObj_1", exampleObj_1);

// diziler aslında Array objesidir, yani aslında dizi diye birşey yoktur,
// property'si number olan objeler vardır.
// bu sebepten dolayı aşağıdaki iki tanımlama aynıdır.
// ikiside Array objesidir.
const exampleArr_1: string[] = [];
const exampleArr_2 = new Array<string>();

enum GenderEnum_1 {
  Male,
  Female,
  NotSelected,
}

/*

var GenderEnum_1;
(function (GenderEnum_1) {
  ! GenderEnum_1.Male = 0;
    ? Burada aslında iki adet atama işlemi yapılıyor. Birincisi "Male"
    ? propertysine 0(sıfır) değeri atanıyor, ikincisi de 0(sıfır) propertysine
    ? "Male" değeri atanıyor. 
    ! GenderEnum_1[(GenderEnum_1["Male"] = 0)] = "Male";

    ? Yukarıda ki tek satırın açılımı aslında aşağıdaki iki atamadır. 
    ! GenderEnum_1["Male"] = 0;
    ! GenderEnum_1[0] = "Male";
  
    ! GenderEnum_1[(GenderEnum_1["Female"] = 1)] = "Female";
    ! GenderEnum_1[(GenderEnum_1["NotSelected"] = 2)] = "NotSelected";
  ! })(GenderEnum_1 || (GenderEnum_1 = {}));

  Sonuç olarak GenerEnum_! objesinin içeriği tam olarak şu şekilde oluyor.
  
  GenderEnem_1 ={
    Male: 0,
    Female: 1,
    NotSelected: 2,
    0: "Male",
    1: "Female",
    2: "NotSelected"
  }
  
*/

enum OperatingSystemEnum_1 {
  Unix,
  Linux,
  Windows,
  MaxOs,
  iOs,
  Anroid,
}

/* Soru: 0-100 arasında ki sınav notlarını enum şeklinde tanımlayabilir miyiz? 
Cevap: Tanımlayamayız. Çünkü enum'lar küçük miktarda ve sayılması kolay olan dataları
tanımlamak için kullanılır.

Çok miktarda ki dataları enum şeklinde yazmak sintaks olarak doğrudur, ama pratik olarak
yanlıştır. Bu sebepten dolayı aşağıda ki gibi bir tanımlama yapmamalıyız.
*/

enum ExamNote_1 {
  _0,
  _1,
  _2,
  // ...
}

/* Aslında enum'lar union'lara benzerler. Fakat burada hangi yöntemi seçeceğimiz tamamen
probleme göre değişken bir konudur.. Bazı problemlerde (veya tasklarda) enum'lar daha çok
avantaj sağlarken bazılarında da unionlar avantaj sağlar. Bunun kararını o problemin
gereksinimlerine göre biz karar veririz. */

enum StatusEnum_1 {
  Success,
  Error,
}

type StatusType_1 = "success" | "error";

/* Sonuç olarak bir yazılım projesini yaparken benzer işleri yapan
farklı yöntemlr mevcuttur ve bunun tercihini yazılımcı yapar. */
