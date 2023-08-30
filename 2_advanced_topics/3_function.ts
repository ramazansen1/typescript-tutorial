/* Fonksiyonların türünü (protipini) tanımlamak:

Typescriptte dört şekilde fonksiyon tanımlama yöntemi (sintaksı)
vardır. Bunlar isimimli fonksiyon, isimsiz fonksiyon, arrow function ve 
single line arrow function. Bu yöntemlerden birincisi hariç hepsi
bir değişkene atama yapılarak yazılır. Bir atama işlemi yapıldığına göre
eşittir karakterinin sağ tarafında ki ifade bir "değer" (value")  olarak kabul edilir.
(buradaki değer, fonksiyon olmuş oluyor). Ortada bir değer varsa bunun türü de vardır.
*/

const exampleFn_6 = (param1: number, param2: number): number => {
  return param1 + param2;
};

/* Bir fonksiyon türü nasıl tanımlanır onu görelim */

type SumFnType_1 = (no1: number, no2: number) => number;

const sum_1: SumFnType_1 = (no1: number, no2: number): number => {
  //
  return no1 + no2;
};

const sum_2: SumFnType_1 = (no1: number, no2: number): number => {
  console.log("parametreler:", no1, no2);
  return no1 + no2;
};

sum_2(3, 5);

// Örnek
type SayHelloType = (name: string, lastname: string) => string;

const printHello_5: SayHelloType = (name: string, lastname: string): string => {
  console.log("Merhaba,", name, lastname);
  return name + lastname;
};

printHello_5("ramazan", "şen");

// Örnek
type FullnameCreaterType_1 = (
  firstname: string,
  middlename: string,
  lastname: string
) => string;

const fullnameCreater_1: FullnameCreaterType_1 = (
  firstname: string,
  middlename: string,
  lastname: string
): string => {
  console.log(firstname, middlename, lastname);
  return firstname + middlename + lastname;
};

fullnameCreater_1("melahat", "özge", "şimşek");

console.log("-----------------------------");
const fullnameCreater_2: FullnameCreaterType_1 = (
  firstname: string,
  middlename: string,
  lastname: string
): string => {
  return firstname + " " + middlename + " " + lastname;
};

console.log(fullnameCreater_2("ramazan", "özge", "şen"));
console.log("-----------------------------");

const fullnameCreater_3: FullnameCreaterType_1 = (
  firstname: string,
  middlename: string,
  lastname: string
): string => {
  //   let totalStr = "";
  //   totalStr += firstname + " ";
  //   if (middlename.length > 0) {
  //     totalStr += middlename + " ";
  //   }
  //   totalStr += lastname;
  //   return totalStr;

  return firstname + " " + (middlename ? middlename + " " : "") + lastname;
};
console.log(fullnameCreater_3("murat", "", "göğebakan"));
console.log(fullnameCreater_3("   ferda  ", "   anıl", "  yarkın  "));
console.log("-----------------------------");

// javascript boş stringe false olarak davranır.
// ama normalde stringler true olarak döner bu js'e özel durumdur.
console.log("" ? "evet" : "hayır");
console.log("a" ? "evet" : "hayır");

console.log("-----------------------------");

/* Bu implementasyonlara bazı özellikler ekleyelim.
 - İsimlerin ilk harfleri büyük sonraki harfleri küçük olsun.
 - Sağ ve soldaki boşluk karakterleri temizlensin
 - Middlename kuralı yine aynen mevcut olsun
*/

const fullnameCreater_4: FullnameCreaterType_1 = (
  firstname: string,
  middlename: string,
  lastname: string
): string => {
  firstname = firstname.toLowerCase().trim();
  firstname = firstname[0].toUpperCase() + firstname.slice(1);

  if (middlename.length > 0) {
    middlename = middlename.toLowerCase().trim();
    middlename = middlename[0].toUpperCase() + middlename.slice(1);
  }

  if (lastname.length > 0) {
    lastname = lastname.toLowerCase().trim();
    lastname = lastname[0].toUpperCase() + lastname.slice(1);
  }

  return firstname + " " + (middlename ? middlename + " " : "") + lastname;
};

console.log(fullnameCreater_4("murat", "", "göğebakan"));
console.log(fullnameCreater_4("ramazan", "", ""));
console.log(fullnameCreater_4("   mustafa  ", "   kemal     ", "  aTaTüRk  "));
console.log("-----------------------------");

/* Bu implementasyonlara bazı özellikler ekleyelim.
 - İsimlerin ilk harfleri büyük sonraki harfleri küçük olsun.
 - Sağ ve soldaki boşluk karakterleri temizlensin
 - Middlename kuralı yine aynen mevcut olsun
*/

type CarModelCreateType_1 = (
  brand: string,
  model: string,
  year: number
) => string;

const carmodelCreater_1: CarModelCreateType_1 = (
  brand: string,
  model: string,
  year: number
): string => {
  brand = brand.toLowerCase().trim();
  brand = brand[0].toUpperCase() + brand.slice(1);

  if (model.length > 0) {
    model = model.toLowerCase().trim();
    model = model[0].toUpperCase() + model.slice(1);
  }
  return brand + " " + (model ? model + " " : "") + year;
};
console.log("-----------------------------");

console.log(carmodelCreater_1("sEAt ", " arOna ", 2023));
console.log(carmodelCreater_1("merCEdeS ", "", 2000));
console.log(carmodelCreater_1("   bMw    ", "    X5    ", 1900));
