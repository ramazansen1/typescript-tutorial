/* Immediate Call function(hemen çağırılan fonksiyon) 

Bazen bir fonksiyonun tanımlandığı noktada kullanılması ve bir daha asla
kullanılmaması gerektiği durumlar olur. Böyle durumlarda immediate call function
yazılır.

Bunun nasıl yazıldığına geçmeden önce typescriptteki fonksiyon 
tanımlama yöntemlerini hatırlayalım.

    Typescriptte kabaca dört şekilde fonksiyon tanımlama yöntemi vardır;

    - Yöntem 1: İsimli fonkisyon tanımlamak
    - Yöntem 2: İsimsiz fonksiyon tanımlamak ve bunu bir değişkene aktarmak.
    - Yöntem 3: Arrow function tanımlama ve bunu bir değişkene aktarmak.
    - Yöntem 4: Single line arrow function.
*/

// 1: İsimli fonksiyon tanımlama
function exampleFn_1(param1: string, param2: number) {
  console.log("Birinci function invoke edildi");
}

// 2: İsimsiz fonksiyon tanımlayıp değişkene atma
const exampleFn_2 = function (param1: string, param2: string) {
  console.log("İkinci function invoke edildi");
};

// 3: Arrow function
const exampleFn_3 = (param1: number, param2: boolean) => {
  console.log("Üçüncü function invoke edildi");
};

// 4: Single line arrow function (tek satırdan oluşur ve tek bir iş  yapar.)
const exampleFn_4 = (param1: number, param2: number) => param1 + param2;

/* Yapmak istediğimiz şey fonksiyonu tanımlandığı yerde çağırmak ve birdaha
asla çağırmamak(immediate call function) 

Nasıl Yazılır? Önce peşpeşe iki tane parantez açılıp kapatılır. Sonra birinci 
parantezin içerisine arrow function yazılır. Böylece o fonksiyon nodejs tarafından derhal çağırılmış
olur.
*/

// ()() ilk parantez fonksiyonunu tuttuğumuz yer, ikinci parantez çağırdığımız yer
(() => {
  // burası arrow function içeriği
  console.log("Birinci function invoke edildi");
})();

(async () => {
  // bu fonksiyon immediate call function'dır.
  // async işlemlerde yapılabilir.
  console.log("İkinci function invoke edildi");
})();

/* Örneğin daha önceki projelerimizde useEffect() hookuna asenkron fonksiyon 
göndermeye çalışmıştık ama bunu yapamamıştık çünkü useEffect() tanımı gereği
sadece senkron fonksiyon alıyordu. Ama bizim asenkron bir bölgeye ihtiyacımız
vardı. İşte bu durumda bu asenkron bölgenin bir kez tanımlanması ve hemen orada 
çağrılması gerekiyordu. Bu senaryoyu gerçekleştirmemin en iyi yolu immediate
call function yazmaktır. */

/*
useEffect(()=>{
    ? burası senkron bölge

    (async ()=>{
        ? burası asenkron bölge
    })()

    ?! Aslında immediate call function yazmak yerine normal bir
    ?! fonksiyon yazıp hemen çağırabiliriz. Ama bu bizi güvence altına
    ?! almaz. Yani ikinci kez çağırma ihtimalimiz vardır.
    async function callMe(){
        
    }
    callMe()

    ! ...
    ! ...
    ! ... Mesela burada işlemler yapıp ikinci kez
    ! ... callMe() fonksiyonunu çağırabiliriz. Bu mantıksal
    ! ... bir hatadır.
    ! ...
    ! ...

    callMe()
})



*/
