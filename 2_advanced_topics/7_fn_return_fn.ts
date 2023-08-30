/* Fonksiyonlara parametre olarak fonksiyon gönderebileceğimiz gibi
fonksiyonlardan fonksiyon da dönebilir. Bu durumda bu dönen değeri
yani fonksiyonu bir değişkene aktardığımızda bu değişken invok edilebilen
bir fonksiyona sahip olmuş olur. Böylece bu fonksiyonu çağırabiliriz.

Örneğin useDispatch() fonksiyonundan bir fonksiyon döner. Bu fonksiyon
redux'ın içerisinden gelir ve redux'ın state'ini güncelleme işini yapar.

? useDispatch'ten dönen fonksiyonu değişkene aktar 
const dispatch = useDispatch()

! Sonra bu fonksiyonu invoke et.
dispatch({
    type:"foo",
    payload:"bar"
})

*/

// 1. ()'ler fonksyonun parametesi
// 2. ()'ler ise geriye döndürdüğü değer (yani fonksiyon)
// action:object dönen değerin parametresi
// dönen değer de bir fonksiyondur. dispatchden bir değer dönmediği için void olur.

type UseDispatchFnType_1 = () => (action: object) => void;

/* Örnek: useDispactch hookunun type'ını ve implementasyonu */
const useDispatch_1: UseDispatchFnType_1 = () => {
  console.log("useDispatch_1 invoke edildi");

  // yukarıda ki type'dan actionun türünü belirmemiş olduğumuz için
  // yeniden yazmadık
  return (action) => {
    console.log("Dönen fonksiyon invoke edildi, action:", action);
  };
};

const dispatch_1 = useDispatch_1();

// dispatch_1 çağırdığımızda yukarıda ki return'den sonra ki fonksiyon çalışır.
dispatch_1({
  type: "foo",
  payload: "bar",
});
console.log("---------------------------------");
/* Örnek: useState hookunun type'ını ve basit implementasyonunu 

const [counter, setCounter] = useState()

! useState uzun hali.
const counterState = useState(100)
counterState[0] = değer gelir.
counterState[1] = setter fonksiyon gelir. 
setCounter (counter + 1)

Yani useState() den tuple dönmüş olur.

const [token,setToken] = useState(()=> {

    return test
})

setToken("bar")
setToken((previousState) => {
  return  previousState + 1
})

*/

// initialState bir fonksiyon olacaksa o fonksiyon olacaksa o fonksiyon parametre almamalı
// ve mutlaka bir değer döndürmeli
// fonksiyonu parametresi opsiyonel olması için soru işareti yazarız.
type InitialStateParamType = any | (() => any | undefined) | number;
type SetterFnType = (newState?: any | ((previousState: any) => any)) => void;

type UseStateFnType_1 = (
  initialState?: InitialStateParamType
) => [any, SetterFnType];

// setter fonksiyondan birşey dönmez o yüzden "void"
// setter fonksiyonun parametresine hem bir değer yada bir fonksiyon gönderebiliriz
// yada hiç bir değer de göndermeyebiliriz.

// Basit bir useState fonksiyon implementasyonu
const useState_1: UseStateFnType_1 = (
  initialState?: any | (() => any | undefined)
) => {
  console.log("useState_1 invoke edildi, initialState:", initialState);

  // setcounterın bulunduğu kısım
  return [
    initialState,
    (newState?: any | ((previousState: any) => any)) => {
      console.log("setter fonksiyon invoke edildi, newState: ", newState);

      let calculatedNewState;

      if (typeof newState === "function") {
        // newState'in bir parametresi var önceki state o yüzden initialState veriyoruz.
        calculatedNewState = newState(initialState);
        // fonksyon değilse'de bize değeri calculatedNewState olarak verecek.
      } else {
        calculatedNewState = newState;
      }

      console.log("calculatedNewState:", calculatedNewState);
    },
  ];
};

const counterState = useState_1(0);
console.log(">>> counterState:", counterState);

const [counter_1, setCounter_1] = useState_1(0);
console.log(">>> counter_1:", counter_1);
console.log(">>> setCounter_1:", setCounter_1);

// istersek değer gönderebiliriz.
setCounter_1(123);

// istersek fonksiyon gönderbiliriz.
setCounter_1((previousState: any) => {
  console.log(
    "setCounter'a gönderilen fonksiyon invoke edildi, previousState: ",
    previousState
  );
  // yei state değeri
  return 999;
});
