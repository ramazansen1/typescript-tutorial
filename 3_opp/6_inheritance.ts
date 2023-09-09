/* Inheritance (Kalıtım, Miras Alma):

    Nesneler geliştikçe bir önceki nesildeki özellikler bir sonraki nesile aktarılır.
    Örneğin ilk bilgisayar olan ENIAC isimli bilgisayalar oda boyutlarındaydı ve çok
    enerji harcıyordu. Ayrıca bir klavyesi yoktu ama programlayıcı vardı ve ekranı
    da yoktu. Sonraki nesil olan IBM tabanlı bilgisayarlar ise masa boyutlarındaydı
    ve tek renk ekranı vardı, önceki nesile göre biraz daha hızlı çalışıyordu ve klavyesi
    sayesinde kullanılması daha kolasydı. Ondan sonra çıkan bilgisayarlar ise aynı özelliklere
    sahip olmasına rağmen yeni özelliklere sahipti.

    İşte bu özelliklerin bir sonraki jenerasyona aktarılması meselesine inheritance
    (yani kalıtım) denir. Bu olayı yazılım geliştirirken de kullanırız.

    >> OOP Terimleri:
    - Parent class: Extend edilen class (üstteki class)
    - Child class: Extend alan class (alttaki class)
*/

class EniacComputer_1 {
  public weight: number = 0;
  public dimension: [number, number, number] = [0, 0, 0];
  public energy_consumption: number = 0;
  public brand: string = "";
  public owner_fullname: string = "";
  public processor_speed: number = 0;

  public start() {
    console.log("EniacComputer_1 starting");
  }

  public shutdown() {
    console.log("Eniac computer shutting down");
  }

  public execute(program: () => any) {
    // girilen programı çalıştırıyor.
    const result = program();

    // burası eniac bilgisayarın yazıcısı (printer) olduğunu düşünelim.
    console.log("Program result: ", result);
  }
}

class ApolloSpaceCraftComputer_1 extends EniacComputer_1 {}

class SpaceXRocketComputer_1 extends ApolloSpaceCraftComputer_1 {}

class IbmComputer_1 extends EniacComputer_1 {
  public keyboard_mounted: boolean = true;
  public keyboard_layout: "iso" | "butterfly" | "other" = "other";
  public monitor_color_type: "monochrome" | "color" = "monochrome";
  public monitor_resolution: [number, number] = [0, 0];
  public floppy_disk_type: 3.5 | 5.25 | null = null;
}

class ModernComputer_1 extends IbmComputer_1 {
  public fingerprint_reader_exist: boolean = true;
  public touchpad_exist: boolean = true;
  public bluetooth_exist: string | null = null;
  public wifi_version: string | null = null;
}

const person_1 = new EniacComputer_1();
person_1.brand = "Eniac";
person_1.weight = 1000;
person_1.owner_fullname = "person_1";
person_1.processor_speed = 5000;
person_1.energy_consumption = 10000;

person_1.start();

person_1.execute(() => {
  return 5 + 10;
});

person_1.execute(() => {
  let total = 0;
  for (let i = 1; i <= 10; i++) {
    total += i;
  }
  return total;
});

const person_2 = new IbmComputer_1();
person_2.brand = "ibm";
person_2.weight = 25;
person_2.owner_fullname = "person_2";
person_2.processor_speed = 4_000_000;
person_2.energy_consumption = 2000;
person_2.floppy_disk_type = 3.5;
person_2.monitor_color_type = "monochrome";

// Ödev: Diğer class'lar için basit birkaç tane method yazıp kullanın.
