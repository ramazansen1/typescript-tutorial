/* Tuple >> miktarı değişmeyen data türleri için kullanılır. Kullanımı diziye
benzemektedir ama aslında mantıksal olarak uzunluğu değişmez. 

Örneğin; bir renk bilgisine ulaşmak üç adet temel renk bilgisini vermemiz
yeterlidir. Bunlar RGB olarak bilinir ve bu üç renk bilgisinin
miktarı asla değişmez, her zaman üç adet renk kodu vardır. 

rgb(0, 0, 0)
rgb(255,255,255)
*/

/* 

Tuple'ların özellikleri:

- Tuple tanımlamak için köşeli parantezler kullanılır.
- Her bir item'ın türü ayrı ayrı belirlenebilir.
- Array'lerde her item aynı türde olmak zorundadır ama tuple'larda
    her item farklı türde olabilir.
- Tuple' da her itemın sırasının amacı bellidir ve bu sıralamaya bağlı 
kalarak değer atama/okuma işlemi yapılır.
*/

// Örnek: Renk kodlarını tutan bir tuple oluşturun ve kullanın.
type RgbColorType = [number, number, number];

let darkGreen_1: RgbColorType = [100, 200, 5];

/* Kullanırken aynı array gibi kullanırız. Normal arrayden pek farkı yoktur
ama item miktarı sabit olduğundan ve hani itemin hangi değere karşılık geldiğini
bildiğimizden dolayı doğrudan index no belirterek ihtiyaç duyduğumuz değere ulaşabiliriz.   */
console.log("dark green color codes blue: ", darkGreen_1[2]);
console.log("dark green color codes green: ", darkGreen_1[1]);

// dizilerin boyutu sınırsızdır ama tuple'ların boyutu sabittir.
// Yani aşağıdaki diziye istediğimiz kadar eleman atayabiliriz.
let exampleArry_1: number[] = [1, 2, 3, 4, 5, 6];

//////////////////Örnekler/////////////////////////
/* Örnek: IP adreslerini tutan bir tuple yazın  */

type IpAddressType_1 = [number, number, number, number];

let ramazanComputerIpAddress: IpAddressType_1 = [123, 56, 231, 222];
console.log("İlk değer ataması >>>", ramazanComputerIpAddress.join("."));

ramazanComputerIpAddress = [213, 121, 44, 33];
console.log(
  "İkinci değer ataması >>>",
  ramazanComputerIpAddress[0] +
    "." +
    ramazanComputerIpAddress[1] +
    "." +
    ramazanComputerIpAddress[2] +
    "." +
    ramazanComputerIpAddress[3]
);

/* Örnek: Sitemizi ziyaret eden kullanıcıların tarayıcı bilgilerini
    tuple kullanarak tutalım. Bu bilgiler 
    - işletim sistemi adı, 
    - işletim sisteminin versiyon numarası,
    - tarayıcı altyapı ismi, 
    - tarayıcı ismi, 
    - tarayıcı versiyon numaraları
    olsun. (UserAgent bilgileri) 
*/

// navigator.userAgent
// 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'

type OperatingSystemType_1 =
  | "linux"
  | "macos"
  | "windows"
  | "android"
  | "ios"
  | "others";

// Dördüncü itemin sonuna soru işarati ekleyerek opsiyonel hala getirdik.
// Opsiyonel parametreleri en sona ekleriz. Araya bir yere koymayız.
type SemanticVersion_1 = [number, number, number, number?, string?];

type BrowserNameType_1 =
  | "Google Chrome"
  | "Chromium"
  | "Opera"
  | "Edge"
  | "Safari"
  | "Brave"
  | "Yandex"
  | "Others";

type UserAgentParsedType_1 = [
  OperatingSystemType_1,
  SemanticVersion_1,
  string,
  BrowserNameType_1,
  SemanticVersion_1
];

let currentVisitorBrowser: UserAgentParsedType_1 = [
  "macos",
  [10, 15, 7],
  "Gecko",
  "Google Chrome",
  [166, 0, 0, 0, "test"],
];

console.log(currentVisitorBrowser);

//

/* Önemli not: Tuple'lar aslında dizid.r Bu sebepden dolayı tüm dizi fonksiyonları
tuple'lar üzerinde kullanılabilir. map(), forEach(), join(), find(), findIndex(),
reuce(), pust() vs gibi tüm dizi fonksiyonlarını tuple'lar için kullanılabilir.
Ama tuple'ların kullanım amacı dizilerin kullanım amacından biraz farklıdır.

    Örneğin aşağıdaki satır hatasız bir şekilde çalışır yani ramazan'ın
    ip adresini tuttuğumuz değişkene yeni bir item ekleyebiliriz. Ama bunun bir
    mantığı yoktur. Sintaks olarak hata vermez ama mantıksal olarak yanlıştır.

    ramazanComputerIpAddress.push(10000);

    Eğer uzunluğu (yada miktarı) artırıp-azalacak bir data tutacaksanız o zaman
    array kullanın. Aksi halde tuple kullanmanız daha doğru olur. */

/* Normalde obje tanımlamak mümkünken tuple tanımlamaya gerek yoktur.
 Fakat uzunluğu asla değişmeyecek olan data türleri için tuple kullanmak
 daha mantıklıdır. Obje tanımlamanın asıl amacı geliştirilebilir olması 
 gereken dataları tutmak içindir. Yukarı da ki örneğimizde bu üç adet renk kodunun
 boyutu asla değişmeyecek Bu durumda object türü tanımlamak yerine tuple tanımlamak 
 mantıksal olarak daha doğrudur*/
// type RgbColorObjectType = {
//   r: number;
//   g: number;
//   b: number;
// };
