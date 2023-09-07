/* Soru: Bir telefon mağazında yazılımcı olarak işe girdiğimizi düşünelim.
Bu firmada antika telefonlar dahil güncel telefonlar ve eski telefonlar hem
sıfır hem ikinci el olarak satıldığını düşünelim. Tüm bu telefonların
özzelliklerini kullancıya göstereceğiz aynı zaman da ilan verilirken
bu özelliklerin seçim işlemlerinin yapılmasını istiyoruz. Örnek tasarım olarak
sahibindende ki ilan sayfalarını düşünebiliriz. */

class AntiquePhone_1 {
  public key_type: "rotation " | "button";
  public color: [number, number, number]; // rgb (tuple olarak kullanabiliriz.)
  public manufacture_country: string;
  public manufacture_date: Date;
  public brand: string;
  public price: number;
}

class CellularPhone_1 extends AntiquePhone_1 {
  public readonly key_type: "button" = "button";
  public manufacture_country: string;
  public price: number;
  public screen_resolution: [number, number];
  public screen_color_type: "monochrome" | "color";
  public antenna: boolean;
  public processor_name: string;
  public processor_speed: number;
}

class SmartPhone_1 extends CellularPhone_1 {
  public screen_resolution: [number, number];
  public screen_color_type: "monochrome" | "color";
  public manufacture_country: string;
  public price: number;
  public processor_name: string;
  public processor_speed: number;
  public touch_type: boolean;
  public bluetooth: boolean;
  public wireless: boolean;
}

// bilgisayarın şuan ki tarih ve saatini verir.
console.log(new Date());
