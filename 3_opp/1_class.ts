/* OPP: Object Oriented Programming (Nesne Tabanlı Programlama) 

    Eskiden bilgisayarların güçlü olmadığı dönemlerde herşeyi fonksiyonlar
    ile yapmak mümkündü. Bilgisayarın gelişimesiyle birlikte ihtiyaçlar arttı
    ve fonksiyon tabanlı programlama ihtiyaçları karşılayamayaz hale geldi.
    Bu sebepten dolayı mühendisler yeni bir programlama yaklaşımı oluşturdular.
*/

class Vehicle_1 {
  // Class'ın özelliklerine "property" ismi verilir.
  wheel_count: number = 0;
  door_count: number = 0;
  case_type: "suv" | "hatchback" | "sedan" | "pickup" | "limousine" = "sedan";
  engine_type: "gasolin" | "gas" | "diesel" | "electric" = "diesel";
  transmission_type: "auto" | "manuel" = "manuel";
  color_type: "red" | "white" | "blue" | "yellow" = "blue";

  /* Class'ın içerisideki fonksiyonlara "method" ismi verilir. */

  engine_start() {
    console.log("Engine started.");
  }
  run() {
    console.log("Engine is running");
  }

  go(meter: number) {
    console.log("Car is going for " + meter + " meter.");
  }

  turn(degree: number, direction: "left" | "right") {
    console.log(
      "Car is turning for " + degree + " degree to " + direction + "."
    );
  }
  engine_stop() {
    console.log("Engine stopped.");
  }
}

// `new` operatörü kullanarak Vehicle_1 class'ından yeni bir obje yaratıyoruz.
const ramazans_car: Vehicle_1 = new Vehicle_1();

ramazans_car.wheel_count = 4;
ramazans_car.door_count = 2;
ramazans_car.case_type = "hatchback";
ramazans_car.engine_type = "gasolin";
ramazans_car.transmission_type = "auto";
ramazans_car.color_type = "red";

ramazans_car.engine_start();
ramazans_car.run();
ramazans_car.go(20);
ramazans_car.turn(45, "right");
ramazans_car.go(300);
ramazans_car.engine_stop();

console.log("-------------------------------------");

class People_1 {
  firstname: string = "";
  lastname: string = "";
  age: number = 0;
  job: string = "";
  salary: number = 0;

  say_hello() {
    console.log(
      "Merhaba benim adım " +
        this.firstname +
        " " +
        this.lastname +
        " " +
        this.job +
        " yaşındayım. " +
        this.job +
        " " +
        "olarak çalışmaktayım."
    );
  }
}

const person_1: People_1 = new People_1();

person_1.firstname = "ahmet";
person_1.lastname = "can";
person_1.age = 25;
person_1.job = "Developer";
person_1.salary = 2000;

person_1.say_hello();

console.log("---------------------------------------");

/* Class'ı initialize etmek (constructor)

Class'tan obje oluşturduğumuzda bu objenin property'lerine ilk değer
verilmesi gerekir. Bunu yapmak için iki yöntem vardır. Birincisi yukarıda ki 
örnekteki gibi property'yi tanımladığımız yerde eşittir diyerek ilk değer
atamak, ikincisi ise `constructor` isimli methodu kullanmak
*/

// Birinci yöntem: Bu yöntemde property'lere kod içerisinde ilk değer verilebilir.
// Fakat burada dinamik bir yapı kuramayız. Verilen değerler hardcoded şekilde verilir
// ve dinamik bir yapı kurmamız mümkün değildir.

class ExampleClass_1 {
  foo: string = "";
  bar: boolean = true;
  baz: number = 0;
}

// İkinci Yöntem

class ExampleClass_2 {
  foo: string;
  bar: boolean;
  baz: number;

  /* Constructor fonksiyonun özellikleri
  
  - Bu method özel bir methoddur ve `new` ile yeni obje oluşturulduğunda
    typescript tarafından otomatik olarak çağrılır.

  - Buraya gelecek olan parametreler  `new` operatörünün çağırıldığı satırda 
    belirlenir.

  - Her class'ta constructor olması zorunlu değildir ama propertyleri 
    dinamik şekilde yani parametreden gelen değerlerle doldurmak istersek
    bu methodu oluşturmak zorundayız.
  */
  constructor(foo: string, bar: boolean, baz: number) {
    console.log("ExampleClass_2'nin constructor'ı çağrıldı. ");
    // `this` ifadesi şuanki objeyi ifade eder.
    this.foo = foo;
    this.bar = bar;
    this.baz = baz;
  }
}

console.log("Objeler oluşturuluyor.");
const exampleObj_1 = new ExampleClass_1();
const exampleObj_2 = new ExampleClass_2("test", false, 1);

console.log(">>> exampleObj_1:", exampleObj_1);
console.log(">>> exampleObj_2:", exampleObj_2);
