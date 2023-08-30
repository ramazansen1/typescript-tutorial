/* Örnek: useEffect() hook'unun type'ını ve basit implementasyonunu yazınız. 

useEffect(() => {
  api.post("api/auth/login", {user,pass})
  .then((response)=> {

  }).catch((err)=> {
    
  })
}, []);
*/

// useEffect içiindeki fonksiyondan birşey dönmediği için void dönüyor.
// bağlılık dizisine herhangi birşey gelebileceği için "any[]" dizi döner.
// useEffectten birşey döndürmediğimiz için "void" döndü.

type useEffectFnType_1 = (callback: () => void, dependencies: any[]) => void;
