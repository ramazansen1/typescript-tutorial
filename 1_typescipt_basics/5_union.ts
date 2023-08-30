/* union kelime anlamı olarka birleştirmek anlamına gelir. Typescriipt içerisindeki 
yaptığı görev ise birden fazla type 'ı birleştirip herhangi birisine karşılık
olan değerin atanabilmesini sağlamaktadır. */

/* Örneğin bozuk para atma oyununu oynadığımızı düşünlim. Paranın tüm hareketlerini
farklı türdelerde belirtebiliriz. Örneğin paranın henüz atılmadığında undefined,
tura geldiğinde true, yazı geldiğinde false, dik düşerse string, para havadayken
birisi kaparsa null olduğunu düşünebiliriz. Bir değişkenin tüm durumlarını
karşılayabilmesi için birden fazla türe ihtiyaç duyarız.
 */
let money_status_1: boolean | string | undefined | null;
console.log(
  "Henüz para havaya atılmadığı durum",
  money_status_1,
  typeof money_status_1
);

money_status_1 = true;
console.log(
  "Paranın tura geldiği durum: ",
  money_status_1,
  typeof money_status_1
);

money_status_1 = false;
console.log(
  "Paranın yazı geldiği durum: ",
  money_status_1,
  typeof money_status_1
);

money_status_1 = "para dik geldi";
console.log(
  "Paranın dik geldiği durum: ",
  money_status_1,
  typeof money_status_1
);

money_status_1 = undefined;
console.log("undefined olduğu durum: ", money_status_1, typeof money_status_1);

money_status_1 = null;
console.log(
  "parayı attık ama kayboldu:",
  money_status_1,
  typeof money_status_1
);

/* Örneğin öğrenci isimlerini tutan bir değişkenimiz olsun. Fakat bu değişkene 
bazen string bazen de obje gelmesi söz konusu olduğunu düşünelim. Bu durumda bu değişkenin türü
olarak string ve obje olacak şekilde union type tanımlamamız gerekir. */

type StudentType_3 = {
  id: number;
  firstname: string;
  lastname: string;
};

let student_4: StudentType_3 | string;

// örneğin api'den bu şekilde değer geldiğini ve bu değeri atadığımızı düşünelim.
student_4 = {
  id: 34,
  firstname: "test",
  lastname: "test",
};

// Örneğin input'tan öğrenci ismi girildiğini düşünelim
student_4 = { id: 1, firstname: "test", lastname: "test" };
student_4 = "Ramazan Şen";

function printHello_1(student: StudentType_3 | string) {
  /* Yukarıda ki örnekte iki farklı türde değer ataması yaptık.
 Bu değişkeni kullanırken öncelikle bu değişkenin türünü tespit etmemiz gerekir.
 Ardından farklı türler için farklı şekilde bu değişkeni tanımlayabiliriz. */
  if (typeof student === "string") {
    console.log(student);
  } else if (typeof student === "object") {
    console.log(student.firstname + " " + student.lastname);
  }
}

printHello_1(student_4);

// Yukarıda 1 primitive ve custom type ile yaptık

/* Şimdi ki örneğimizde iki adet custom type ile çalışalım. Örneğin birkaç tane
araç türü tanımlayalım ve bunu union type şeklinde tanımlayalım */

type CarVehicleType = {
  doorCount: number;
  // union type'ları değerler içinde kullanabiliriz
  motorType: "diesel" | "gasoline" | "lpg" | "electric";
  seatCount: number;
  brand: string;
};

type MotorcycleVehicleType = {
  motorType: "gasoline" | "electric";
  isSingle: boolean;
  brand: string;
};

// let ramazanVehicle: CarVehicleType | MotorcycleVehicleType;

// ramazanVehicle = {
//   brand: "mercedes",
//   motorType: "gasoline",
//   isSingle: true,
// };

// function detectVehicle(vehicle: CarVehicleType | MotorcycleVehicleType) {
//   if (typeof vehicle["doorCount"] !== "undefined") {
//   } else if (typeof vehicle["isSingle"] !== "undefined") {
//   }
// }

// detectVehicle(ramazanVehicle);
