/* 
Js'deyken dizilerin elemanlarına istediğimiz türde değerler ekleyebilirdik. Fakat
bu dizinin stabilitesini bozan bir  problemdir. Çünkü biz diziyi kullanırken (map(),
forEach(), filter() vs) gelen elemanların hepsinin AYNI TÜRDE olduğunu farzederek kullanırız. Js'deki
bu belirsizlik typescriptte giderilmiştir. Çünkü typscriptte dizi elamanlarının türleri de belirtilir.
*/

// örneğin aşağıdaki dizi bir string dizisidir ve tüm elemanlarının
// string olduğundan eminiz
const student_names_1: string[] = [];
student_names_1.push("test");
student_names_1.push("ramazan");
student_names_1.push("özge");
student_names_1.push("sümeyra");

console.log("students", student_names_1);

student_names_1.forEach((item) => {
  console.log("item value: ", item);
  console.log("item type: ", typeof item);
});

const firstname_2: string = "ramazan";

// ÖRNEKLER

const salaries_1: number[] = [1000.234, 1500.456, 3000.789, 2250.123];
salaries_1.push(1900);
salaries_1.push(2900);

salaries_1.map((salary) => {
  console.log("Salaryy: ", salary.toFixed(2));
});

/////////////////////////////////

/* 
Objelerin dizilerini oluştururken `object` ifadesi kullanılabilir.
Fakat bu ifade objenin içeriğini belirtmediği için tam olarak istediğimiz kesinliği bize sağlamaz.
Bu problemi çözmek için bir sonraki örnege bakınız.
*/
const names_1: object[] = [];

names_1.push({});
names_1.push({
  id: 1,
});
names_1.push({
  firstname: "ramazan",
});
names_1.push({
  firtname: "özge",
  lastname: "şen",
  is_attended: true,
});

console.log("names_1 value >>>", names_1);
console.log("names_1 type >>>", typeof names_1);

// objeyi daha spesifik hale getirerek yazma
const names_2: {
  id: number;
  firstname: string;
  lastname: string;
  is_attended: boolean;
}[] = [];

names_2.push({
  id: 1,
  firstname: "ramazan",
  lastname: "şen",
  is_attended: true,
});

names_2.push({
  id: 2,
  firstname: "özge",
  lastname: "şen",
  is_attended: false,
});
names_2.push({
  id: 3,
  firstname: "sümeyra",
  lastname: "özben",
  is_attended: true,
});

console.log("names_2 value >>>", names_2);
console.log("names_2 type >>>", typeof names_2);

names_2.forEach((item) => {
  item.id;
  item.firstname;
  item.lastname;
});
