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
      yazarak methodu tanımlamaya başlanır.

    -

*/
class UserPaymentInfo_2 {
  public _creditCardNumber: string = "";
  public _expireMonth: number = 0;
  public _expireYear: number = 0;

  public set creditCardNumber(creditCardNumber: string) {
    // .. burada kontroller yapışır.

    this._creditCardNumber = creditCardNumber;
  }

  public get creditCardNumber() {
    return this._creditCardNumber;
  }
}
