/* Getter & Setter

Private veya protected olan property'lere dışarıladan erişim sağlamak amacıyla
yazılan fonkisyonlardır. Bu fonksiyonların görevi eğer okuma yapmaksa o zaman
`getter` eğer yazma yapmaksa `setter` olarak isimlenidirilir. Bu amaç doğrultusunda 
iki yöntem kullanılır. Bunlar normal method yazma yöntemi ve typescript'in kendi
getter/setter sintaksını kullanarak fonksiyon yazma yöntemidir.

Kurallar:
    - Yönetilen property'ler private veya protected olmalı. Çünkü okuma ve yazma(get & set)
      işlemlerini kontrollü bir şekilde yapmak için fonksiyonları kullanıp property'yi de
      gizlemeniz gerekiyor. Eğer gizlemezsek kontrolün bir amacı kalmaz.
    
    - Setter fonksiyona göndereceğimiz parametrenin türü set edeceğimiz parametrenin türüyle
      aynı yapılır. Aynı olmağı durumlar da olabilir, bu tamamen yapılan için durumuyla ilgilidir.
    
    - Bir fonksiyonun setter veya getter olduğu fonksiyonun önündeki (başında ki) "get" veya "set"
      ifadesi vasıtasıyla belirlenmez. Fonksiyonun yaptığı işe bakılır (yani implement ettiği
      algoritmaya bakılır). Eğer bir property'yi set ediyorsa bu setterdır, property'de ki 
      datayı bir şekilde döndürüyorsa getter olarak isimlendirilir.
    
    - Fonksiyonların önüne eklenen "set" ve "get" ifadeleri sadece fonksiyonun görevini ilk bakışta
      anlaşılsın diye yazılır. Normalde bunlar kullanılmasa bile fonksiyon set veya get işlemi yapabilir.

*/

// Yöntem 1: Normal method yazarak getter/setter amacını gerçekleştirmek.
class Foo_1 {
  private bar: string = "";
  private baz: string = "";
  private qux: string = "";

  public getBar() {
    return this.bar;
  }
  public setBar(bar: string) {
    return this.bar;
  }
}

const foo = new Foo_1();

foo.getBar();

// Birinci yöntemin gerçek dünya probleminde örneği
class UserPaymentInfo_1 {
  private creditCardNumber: string = "";
  private expireMonth: number = 0;
  private expireYear: number = 0;

  /* Genelde parametreden gelen değerin türüyle properyy'nin türü aynı
  olarak belirlenir. Böylece tür dönüşümü yapmaktan kurtulmuş oluruz.*/
  public setCreditCardNumber(cardNumber: string) {
    if (cardNumber.length !== 16) {
      throw new Error("Kart numbarası 16 haneli olmak zorunda.");
    }

    if (Number(cardNumber.trim()) + "" !== cardNumber) {
      throw new Error("Lütfen sadece sayısal bilgiler giriniz.");
    }

    this.creditCardNumber = cardNumber;
  }

  // Bazı durumlarda parametre aynı türde olmayabilir. Fakat bu türü uygun bir şekilde
  // set edeceğimiz property'nin türünden bir değere dönüştürmeliyiz. Örneğin aşağıdaki
  // fonksiyonda kart numarasını tuple ile alıyoruz ama class property'sine set ederken
  // string çeviriyruz. (Doğrulama işleminin yapıldığını düşünelim)
  public setCreditCardNumberWithTuple(
    cardNumber: [number, number, number, number]
  ) {
    //
    // ... Burada parametrelerden gelen bilgilerin doğrulanması yapılsın.
    //
    this.creditCardNumber = cardNumber.join(""); // join'den string dönüyor.
  }

  public getCreditCardNumber() {
    return "**** **** **** " + this.creditCardNumber.slice(-4);
  }
}

const person_1_credit_card: UserPaymentInfo_1 = new UserPaymentInfo_1();

person_1_credit_card.setCreditCardNumber("2345123456347654");
console.log("Yöntem - 1");
console.log("Kart no: ", person_1_credit_card.getCreditCardNumber());
console.log("----------------------------");

/* 
    Yöntem 2: Get & Set sintaksı kullanıması
    Kurallar:

    - Gizli olan property'ler alt tire ile başlamalı. Örn: private _creditCardNumber

    - Methodların erişim belirtecinden sonra `get` ve `set` isimli erişim belirletçlerini
      yazarak methodu tanımlamaya başlarız.

    - Normal fonksiyonlarda aynı isimde iki fonksiyon bulunmamalıdır. Fakat `get` ve `set`
      olarak tanımlanan aynı isme sahip iki fonksiyon tanımlamak mümkündür.

*/
class UserPaymentInfo_2 {
  public _creditCardNumber: string = "";
  public _expireMonth: number = 0;
  public _expireYear: number = 0;

  public set creditCardNumber(creditCardNumber: string) {
    // .. burada kontroller yapışır.
    console.log(
      "set creditCardNumber(creditCardNumber:string) fonksiyonu çağrıldı, creditCardNumber:",
      creditCardNumber
    );

    this._creditCardNumber = creditCardNumber;
  }

  public get creditCardNumber() {
    console.log("get creditCardNumber() fonksiyonu çağrıldı.");
    return this._creditCardNumber;
  }
}

const ramazanin_kredi_karti = new UserPaymentInfo_2();

// Yukarıda "set" olarak tanımlanmış olan fonksiyonu sanki bir propery'miş
// gibi kullanıyoruz. Eşittir ifadesini kullanarak değer ataması yaptığımda
// aslında bu property'yi set etmiş olurum. Set ettiğimimde de yukarıda
// "set creditCardNumber(...)" şeklinde tanımlanmış olan fonksiyon invoke
// edilir. Bu invoke etme olayını typescript yapar. Yani biz aslında eşittir
// ile atama yapıyoruz ama arka planda fonksiyon çalışıyor.
// Böylece birinci yöntemde yapılan tüm kontrolleri bu atama işlemi için de
// yapmak mümkün hala geliyor.
// set fonksiyonun fonksiyon gibi çağırmayız property ekleyerek yaparz.
ramazanin_kredi_karti.creditCardNumber = "test";

// "get" fonkisdyonu çalışır. geriye değer dönderir.
console.log("Okunan bilgi: ", ramazanin_kredi_karti.creditCardNumber);
console.log("------------------------------------");

class AgeCalculator {
  private _year: number = 2023;

  public set calculate(birthYear: number) {
    console.log(
      "set calculate(birthYear:number) fonkisiyonu çağrıldı, birthYear: ",
      birthYear
    );
    const age = this._year - birthYear;
    this._year = age;
  }
  public get calculate() {
    console.log("get calculate() fonksiyonu çağrıldı.");
    return this._year;
  }
}

const ramazanin_yasi = new AgeCalculator();

ramazanin_yasi.calculate = 1996;

console.log("ramazanın yaşı: ", ramazanin_yasi.calculate);

console.log("------------------------------------");

class ExchangeMoney {
  private _country: string;
  private _money: number;
  private _currentDolar: number;
  private _currentTl: number;

  public constructor(country: string) {
    this._country = country;
    this._money = 0;
    this._currentDolar = 20;
    this._currentTl = 0.038;
  }

  private exchangeToTurkish(excMoney: number): number {
    return excMoney * this._currentDolar;
  }

  private exchangetoDolar(excMoney: number): number {
    return excMoney * this._currentTl;
  }

  public set exchangeMoney(excMoney: number) {
    console.log("set fonksiyon çalıştı, excMoney: ", excMoney);
    if (this._country === "ABD") {
      this._money = this.exchangeToTurkish(excMoney);
    } else {
      this._money = this.exchangetoDolar(excMoney);
    }
  }

  public get exchangeMoney() {
    console.log("get fonksiyonu çalıştı");
    if (this._country === "ABD") {
      return this._money;
    }
    return this._money;
  }
}

const abdDolars = new ExchangeMoney("ABD");
// 20 dolar gönderiyoruz.
abdDolars.exchangeMoney = 20;

const turkishLiras = new ExchangeMoney("TUR");
// 400 tl gönderiyoruz.
turkishLiras.exchangeMoney = 400;

console.table({ abdDolars, turkishLiras });
console.table([abdDolars.exchangeMoney, turkishLiras.exchangeMoney]);
