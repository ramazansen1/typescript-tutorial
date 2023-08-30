/* Fonksiyon parametresine fonksiyon göndermek.
Bir fonksiyonun parametresine yine bir fonksiyon gönderirsek bunu type'ını
nasıl tanımlrız? 

Parametre type'ını tanımlarken daha önceden gördüğümüz fonksiyon
type'ını o parametreyi yazarken tanımlayabiliriz. yada parametrenin fonksiyoon
type'ını ayrı tanıplayıp dış fonksiyon type'ını da ayrı tanımlayabiliriz.

*/

// parametre type'ını doğrudan tanımlama

type ExampleFnType_2 = (
  param1: (param1: number, param2: string) => string,
  param2: string
) => number;

// parametre type'ını ayrı bir type içerisinde tanımlayıp kullanmak

type ExampleFnParamType_1 = (no1: number, no2: number) => string;
type ExampleFnType_3 = (param1: string, param2: ExampleFnParamType_1) => object;

/* Soru: Diziler üzerinde işlem yapmamızı sağlayan map() ve forEach()
fonksiyonlarını normal bir fonksiyon olarak türlerini tanımlayıp
implement ediniz.   */

type IteratorFnType = (currentItem: any, index: number) => any;
type MapFnType_1 = (iterator: IteratorFnType, arr: any[]) => any[];

/* map_1 fonksiyondur ve yukarıda tanımladığımız türe bağlı olarak
yazılmış herhangi bir fonksiyonu tutar.  */
const map_1: MapFnType_1 = (iterator, arr) => {
  console.log("map_1 inkode edildi", arr);

  // newArr dönüş türü MapFnType_1 dönüş türü ile aynı olması gerekiyor
  const newArr: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    console.log("For döngüsü i: ", i);

    const result = iterator(arr[i], i);

    newArr.push(result);
  }
  console.log(">>> newArr: ", newArr);

  return newArr;
};

/* mapResult_1, map_1 fonksiyonundan dönen sonucu tutar. */
const mapResult_1 = map_1(
  // fonkiyon
  (item, index) => {
    console.log("map_1' gönderilen ilk parametre yani fonk. çağırıldı");
    console.log(">> item: ", item, "index: ", index);

    // buradan dönen değer resultta geliyor. resultta fonksiyon çağırıldğı için
    return item * 2;
  },
  // arr dizisi
  [40, 75, -30, -100, 43]
);

console.log(">>> mapResult_1: ", mapResult_1);

// const mapResult_2 = map_1(
//   (item, index) => {
//     return item * 2;
//   },
//   [1, 2, 3, 4, 5]
// );

// console.log("mapResult_2:", mapResult_2);

/* Bir değişşkene atadığımız değer invoke edilebilen bir değerse o değişkeni
            çağırabiliriz (veya invoke edebiliriz veya call yapabiliriz.) Ama atanan değer invoke
            edilebilen bir değer değilse o zaman çağıramayız. Örneğin firstname değişkenine string 
            atandığı için bunu çağıramayız. Ama `foo` değişkenine bir fonksiyon atandığı için bunu 
            çağırabilriiz. */

const firstname = "ahmet";
// aşağıdaki satır hata verir
// firstname()

const foo = () => {};
foo();

// fonksiyonun ismi ile tanımlanması
function exampleFn_4() {
  //
}

// fonksiyonun bir değişkene atanarak tanımlanması
const exampleFn_5 = () => {};
console.log("--------------------------------------------");

type ForEachFnType_1 = (iterator: IteratorFnType, arr: any[]) => undefined;

const forEach_1: ForEachFnType_1 = (iterator, arr) => {
  console.log("forEact_1 invoke edildi", arr);

  //   const newArr: undefined[] = [];

  for (let i = 0; i < arr.length; i++) {
    console.log("For döngüsü i: ", i);

    // const result = iterator(arr[i], i);
    iterator(arr[i], i);
    // newArr.push(result);
    // console.log(">>> forEach > newArr: ", newArr);
  }
};

const forEachResult_1 = forEach_1(
  (item, index) => {
    console.log("map_1' gönderilen ilk parametre yani fonk. çağırıldı");
    console.log(">> item: ", item, ",", "index: ", index);

    return item * 2;
  },
  [22, -100, 43, 66, 90]
);

console.log("forEach result: ", forEachResult_1);
