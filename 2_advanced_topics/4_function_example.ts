// type ExampleObjType = {}
// type ExampleTuppleType = []
// type ExampleFnType = ()

type ExampleFnType_1 = (
  param1: number,
  param2: number,
  param3: boolean,
  param4: string
) => object;

const exampleFn_1: ExampleFnType_1 = (
  param1: number,
  param2: number,
  param3: boolean,
  param4: string
): object => {
  return { param1, param2 };
};

// fonksiyonun türünü belirtsekde olur belirtmesekde çünkü
// ExampleFnType_1 den bu bilgileri alır.
const exampleFn_2: ExampleFnType_1 = (param1, param2, param3, param4) => {
  console.log("exampleFn_2 invoked");
  return { param1, param2 };
};

/* Örnek: İki sayı kullanılarak matematiksel işlemler için bir fonksiyon prototipi hazırlayıp
örnek fonksiyonlar yazınız. Toplama ,çarpma, çıkarma, bölme gibi */

type MathOperationType = (digit1: number, digit2: number) => number;

const sumFn_1: MathOperationType = (digit1: number, digit2: number): number => {
  return digit1 + digit2;
};

console.log("Toplama işlemi: ", sumFn_1(10, 20));

const minusFn_1: MathOperationType = (
  digit1: number,
  digit2: number
): number => {
  return digit1 - digit2;
};

console.log("Çıkarma işlemi: ", minusFn_1(10, 20));

const divideFn_1: MathOperationType = (digit1, digit2) => digit1 / digit2;

const divideFn_2: MathOperationType = (digit1, digit2) => {
  if (digit2 === 0) {
    throw new Error("ikinci sayı sıfır olamaz");
  }
  return digit1 / digit2;
};

const result1 = divideFn_1(10, 0);
console.log(">>> result1: ", result1);
const result2 = divideFn_2(10, 0);
console.log(">>> result2: ", result2);
