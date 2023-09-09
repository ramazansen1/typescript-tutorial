/* Constructor:

    Constructor'ların asıl görevi class property'lerini hardcode veya 
    dinamik şekilde initialize (yani ilk değer ataması) etmektir.
    Hardcode derken yani doğrudan değer vererek. Dinamik değer ataması
    yapmak için ise parametreden değeri alırız.

*/

class ExampleClass_1 {
  // 1- property'lere tanımlandığı noktada ilk değer ataması yapmıyoruz.
  private foo: number;
  private bar: string;
  private baz: boolean;

  public constructor() {
    // 2- Burada ilk değer taması yapabiliriz.
    // Örneğin hardcode olarak değerleri atayalım.

    this.foo = 0;
    this.bar = "";
    this.baz = true;
  }
}

// constructor'ın parametre listesi boş olduğu için bu objenin
// parametrelerine birşey yazmıyoruz.
const obj1 = new ExampleClass_1();
console.log("obj1", obj1);

class ExampleClass_2 {
  // 1- property'lere tanımlandığı noktada ilk değer ataması yapmıyoruz.
  private foo: number;
  private bar: string;
  private baz: boolean;

  public constructor(foo: number, param_bar: string, baz: boolean) {
    /* 2- Burada ilk değerleri parametre listesinden alarak set ediyoruz.
    Parametre listesindeki değişkenlerin isimleri property isimleriyle
    aynı olmak zorunda değil. Anlamlı olmaları açısından genelde aynı
    isimler kullanılır ama farklı isimler de kullanmak mümkün. Dikkat
    etmemiz gereken en önemli şey property'lerin türlerine uyumlu
    olacak şekilde parametreleri oluşturmak */
    this.foo = foo;
    this.bar = param_bar;
    this.baz = baz;
  }
}

// Extreme örnek: Singleton design pattern implementasyon örneği:

class ExampleClass_3 {
  private foo: string;

  private static instance: ExampleClass_3;

  static getInstance() {
    // eğer instance yoksa oluştur.
    if (!ExampleClass_3.instance) {
      ExampleClass_3.instance = new ExampleClass_3();
    }
    // sonra dönder.
    return ExampleClass_3.instance;
  }

  private constructor() {
    console.log("Private constructor invoke edildi.");
  }
}
const obj3 = ExampleClass_3.getInstance();
