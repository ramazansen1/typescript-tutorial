/* Örnek: useMemo() hooku yüksek hesaplama gücü gerektiren işlemleri
önbelleğe alan bir hooktur. Böylece aynı parametrelerle yapulan çağrıların
sonucunu hızlı bir şekilde getirir. Kullanımı şu şekildedir:

useMemo, "memoize" : ezberlemekten gelir.
*/
function calculateFactorial_1(factorial: number) {
  // burada yüksek güç gerektiren hesaplama yapılır ve sonucu döndürür.

  if (factorial <= 0) {
    return 1;
  } else {
    let result = 1;

    for (let i = 0; i < 1e6; i++) {
      result = 1;
      for (let i = factorial; i >= 1; i--) {
        result = result * i;
      }
    }

    return result;
  }
}

console.time("factorial");
console.log(calculateFactorial_1(5));
console.timeEnd("factorial");

console.time("factorial");
console.log(calculateFactorial_1(10));
console.timeEnd("factorial");

console.time("factorial");
console.log(calculateFactorial_1(15));
console.timeEnd("factorial");

console.time("factorial");
console.log(calculateFactorial_1(20));
console.timeEnd("factorial");

type UseMemoFnType_1 = (callback: () => number, dependencies: number) => number;

/* Farzedelim ki bu cache değişkenine dışarıdan erişemiyoruz. Sadece 
useMemo'nun erişebildiği bir değişken olduğunu düşünelim.  */

// Önbellek değişkeni
const cache_1: number[] = [];

const useMemo_1: UseMemoFnType_1 = (callback, dependencies) => {
  console.log(
    "useMemo_1 invoke edildi, parametreler: ",
    callback,
    dependencies
  );

  // eğer cache_1 'in dependencies değeri varsa cache_1[dependencies] return ederiz.
  if (cache_1[dependencies]) {
    console.log("Şu parametre için önbellekte değer mevcut: ", dependencies);
    return cache_1[dependencies];
  } else {
    console.log(
      "Şu parametre için önbellekte değer bulunamadı, hesaplama yapılacak:  ",
      dependencies
    );
    // eğer cache_1[dependencies] index'ini callback() ile çağırıp sonra onu return ederiz.
    cache_1[dependencies] = callback();
    return cache_1[dependencies];
  }
};

console.log("--------------- useMemo kullanılıyor: ----------------");

console.log("--------------- İlk çağrı ---------------------");
console.time("ilk çağrı factorial");
console.log(useMemo_1(() => calculateFactorial_1(5), 5));
console.timeEnd("ilk çağrı factorial");
console.log("--------------- İlk çağrı ---------------------");

console.log("--------------- İkinci çağrı ---------------------");
console.time("ikinci çağrı factorial");
console.log(useMemo_1(() => calculateFactorial_1(5), 5));
console.timeEnd("ikinci çağrı factorial");
console.log("--------------- İkinci çağrı ---------------------");

console.log("--------------- Üçüncü çağrı ---------------------");
console.time("üçüncü çağrı factorial");
console.log(useMemo_1(() => calculateFactorial_1(5), 5));
console.timeEnd("üçüncü çağrı factorial");
console.log("--------------- Üçüncü çağrı ---------------------");

console.log("--------------- Dördüncü çağrı ---------------------");
console.time("dördüncü çağrı factorial");
console.log(useMemo_1(() => calculateFactorial_1(5), 5));
console.timeEnd("dördüncü çağrı factorial");
console.log("--------------- Dördüncü çağrı ---------------------");

// console.log(">> cache", cache_1);
