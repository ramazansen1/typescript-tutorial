/* Eğer biz enumların değerlerine herhangi bir şey yapmazsak
standart olarak number değerini alırlar ve ilk değer sıfırdan başlar.  */

enum CarBrandsEnum_1 {
  Bmw,
  Tofas,
  Sahin,
  Kartal,
  Mercedes,
  Toros,
  Fiat,
  Audi,
  Cadillac,
  Ferrari,
}

console.log(CarBrandsEnum_1.Bmw); // 0
console.log(CarBrandsEnum_1["Bmw"]); // 0
console.log(CarBrandsEnum_1[0]); // Bmw
console.log(CarBrandsEnum_1[CarBrandsEnum_1.Bmw]); // Bmw

// Atama işlemi: Değişkenin türü belirtilir ve o enum türünün
// herhangi elemanı atanır.
let ismailinArabasi: CarBrandsEnum_1 = CarBrandsEnum_1.Bmw;
ismailinArabasi = CarBrandsEnum_1.Mercedes;
ismailinArabasi = CarBrandsEnum_1.Ferrari;

let ramazanınArabalari: CarBrandsEnum_1[] = [];
ramazanınArabalari.push(CarBrandsEnum_1.Bmw);
ramazanınArabalari.push(CarBrandsEnum_1.Mercedes);
ramazanınArabalari.push(CarBrandsEnum_1.Audi);

console.log(ramazanınArabalari);

/* Karşılaştırma işlemi: Belirli bir enum türündeki değişkenin değerini o enum 
türünün başka bir elemanıyla karşılaştırırken dikkat etmemiz gerekn bir durum vardır. Typescript 
farklı enum değerlerini doğrudan karşılaştırmıyor. Bu yüzden değişkeni ya kendi enum türüne
çeviririz yada javascirptteki primitive değerinin türüne çevirip o şekilde mkarşılaştırma yaparız. 
*/
if ((ismailinArabasi as number) === CarBrandsEnum_1.Mercedes) {
  console.log("Güzel Mercedes!");
} else if ((ismailinArabasi as number) === CarBrandsEnum_1.Ferrari) {
  // Burada değişkeni kendi türüne çeviriyoruz.
  console.log("Ferrari ile çok hız yapma");
} else if ((ismailinArabasi as number) === CarBrandsEnum_1.Cadillac) {
  // Burada değişkenin javscirpt'teki primitive türüne çeviriyoruz.
  console.log("Klasik Cadillac");
}

/* Typescript emnum eşitliğini kontrol etme işlemini net bir şekilde
dilin içine eklememiştir. Bu yüzden aşağıdaki satırda şu hatayı verir:

    console.log(ismailinArabasi === CarBrandsEnum_1.Cadillac)

    This comparison appears to be unintentional because the types 
    'CarBrandsEnum_1.Ferrari' and 'CarBrandsEnum_1.Cadillac' have no overlap.

*/

/* Yukarida ismailinArabası değişkenine değer ataması yapıldığı için bu değişkenin
orjinal türüne çeviererek karşılaştırma yapmamız gerekiyor. */

switch (ismailinArabasi as CarBrandsEnum_1) {
  case CarBrandsEnum_1.Ferrari:
    console.log("Arabanın markası Ferrari");
    break;
  case CarBrandsEnum_1.Cadillac:
    console.log("Arabanın markası Cadillac");
    break;

  default:
    break;
}

function printCarBrand(brand: CarBrandsEnum_1) {
  // burada `brand as CarBrandsEnum_1` yazmaya gerek yok çünkü bu bölge
  // içerisinde brand değişkenin türü belli
  switch (brand) {
    case CarBrandsEnum_1.Ferrari:
      console.log("Fonk: Arabanın markası Ferrari");
      break;
    case CarBrandsEnum_1.Cadillac:
      console.log("Arabanın markası Cadillac");
      break;

    default:
      console.log("Diğer marka araç");
      break;
  }
}

printCarBrand(CarBrandsEnum_1.Bmw);
printCarBrand(CarBrandsEnum_1.Ferrari);
printCarBrand(CarBrandsEnum_1.Audi);
printCarBrand(CarBrandsEnum_1.Mercedes);
printCarBrand(CarBrandsEnum_1.Sahin);
