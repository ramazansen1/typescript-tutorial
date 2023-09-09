class Temperature {
  private _value: number;
  private _location: string;

  constructor(location: string) {
    this._value = 0;
    this._location = location;
  }

  private convertToFahrenheit(newValue: number): number {
    return newValue * 1.8 + 32;
  }

  private convertToCelsius(newValue: number): number {
    return ((newValue - 32) * 5) / 9;
  }

  public set location(country: string) {
    this._location = country;
  }

  public set value(newValue: number) {
    if (this._location === "ABD") {
      this._value = this.convertToCelsius(newValue);
    } else {
      this._value = newValue;
    }
  }

  public get value(): number {
    if (this._location === "ABD") {
      return this.convertToFahrenheit(this._value);
    }
    return this._value;
  }
}

let newValue = 50;

const turkeyTemperature = new Temperature("Turkey");
turkeyTemperature.value = newValue;

const abdTemperature = new Temperature("ABD");
abdTemperature.value = 122;

console.log({ turkeyTemperature, abdTemperature });
console.log([turkeyTemperature.value, abdTemperature.value]);
