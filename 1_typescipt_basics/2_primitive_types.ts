/*
    Öncelikle değişkenlerin türlerini nasıl tanılacağımızı görelim

- Primitive types:
    -> String : sıralı karakterler
    -> number : virgüllü veya virgülsüz sayısal ifadeler
    -> bigint : çok büyük sayılar (örnegin milyar kere milyar)
    -> boolen : mantıksal ifade (true yada false)
    -> undefined : bu hem değer hem de tür olarak kullanılabilen bir türdür. 
    anlamı "tanımsız demektir."
    -> symbol
    -> null : bu da hem değer hem türdür. bir değişkenn tanımlı olduğu ama içerisinde 
    herhangi bir değer mevcut olmadığını belirtir.
    -> object : süslü parantezle ifade edilen değerler için kullanılır.
*/

let firstname_1: string = "ramazan";
let age_1: number = 27;
let attended_1: boolean = true;

console.log("ilk değerler: ", firstname_1, age_1, attended_1);

firstname_1 = "furkan";
age_1 = 10;
attended_1 = false;

console.log("ikinci değerler: ", firstname_1, age_1, attended_1);

let student_1: object;
student_1 = {};
console.log(">>> ilk değerler:", student_1);

student_1 = {
  id: 1,
  firstname: "ramazan",
  lastname: "şen",
  birth_year: 1996,
  is_attended: true,
};

console.log(">>> ikinci değerler:", student_1);

/* 
bigint türünü pek sık kullanmayız ama büyük sayılarla çalıştığımızda
kullanmamız gerekir. number türüyle benzerlik gösterir fakat atama yaparken
iki şekilde atama yapabiliriz.
! ! Birincisi >> `BigIng` yöntemi kullanarak
? ? İkincisi >> sayısal ifadenin sonuna `n`koyarak yaparız.

*/
let star_count_in_universe_1: bigint = BigInt(10000000000000000);
star_count_in_universe_1 = 1111111111111n;
let brain_cell_count_1: bigint = BigInt(100000000000000);

console.log("yıldız sayısı >>", star_count_in_universe_1);
console.log("hücre sayısı >>>", brain_cell_count_1);
