/*
Typescriptte kendimiz yeni type lar oluşturabiliriz. Yeni bir type tanımlamak için
önce "type" kewwordu yazılır. Ardından anlamlı bir isim belirlenir ve bu isim pascalcase
yöntemi kullanılarak yazılır. Ardından eşittir denir ve eşittirden sonra ki kısım bizim datamızı
modellediğimiz yanı type'ı yazdıgımız kısımdır.
*/

// snake case
const example_variable_1 = 10;
// camel case
const exampleVariable1 = 10;

// type'larda pascal case kullanılır.

type StudentType = {
  firstname: string;
  age: number;
  is_married: boolean;
};

type CarType = {
  model: string;
  price: BigInt;
  is_electric: boolean;
};

const student_2: StudentType = {
  firstname: "ramazan",
  age: 27,
  is_married: true,
};

const car_1: CarType = {
  model: "Arona",
  price: 222301239012912n,
  is_electric: false,
};

/* Önceden yaptıgımız bir projenin cevabının type'ını yazarak bir örnek */

type CategoryResultType = {
  // datanın türü dizi
  data: {
    id: number;
    // birden fazla type'lardan herhangi bir olması gerektiğinde pipe karakteriyle
    // bu typeları birleştirebiliriz. Bu yönteme "union" type tanımlama yöntemi denir.
    parent_id: number | null;
    name: string;
    slug: string;
    description: string;
    image: string;
    status: string;
    created_at: string;
    updated_at: string;
  }[];
  draw: number;
  recordsTotal: number;
  recordsFiltered: number;
  status: string;
};

const category_1: CategoryResultType = {
  data: [
    {
      id: 1,
      parent_id: 10,
      name: "macbook",
      slug: "bilgisayar",
      description: "apple",
      image: "",
      status: "success",
      created_at: "2023",
      updated_at: "2023",
    },
  ],
  draw: 1,
  recordsFiltered: 10,
  recordsTotal: 10,
  status: "success",
};

console.log(">>> category_1 ilk değer ataması: ", category_1);

// yukarıda  datayı dizi olarak tanımladığımız için push ederken { } vererek yapıyoruz.
category_1.data.push({
  id: 2,
  created_at: "2022",
  name: "example",
  description: "example",
  image: "asda",
  parent_id: 2,
  slug: "exp",
  status: "expamle",
  updated_at: "123",
});

console.log(">>> category_1 ikinci değer adaması: ", category_1);
