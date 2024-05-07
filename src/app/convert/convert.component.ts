import { Component } from '@angular/core';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss'
})
export class ConvertComponent {

  meterValue: number = 0;
  feetValue: number = 0;
  celsiusValue: number = 0;
  fahrenheitValue: number = 0;

  convertMetertoFeet() {
    this.feetValue = this.meterValue * 3.28084;
  }

  convertFeettoMeter() {
    this.meterValue = this.feetValue / 3.28084;
  }

  convertCelsiustoFahrenheit(){
    this.fahrenheitValue = (this.celsiusValue * 9/5) + 32;
  }

  convertFahrenheitToCelsius() {
    this.celsiusValue = (this.fahrenheitValue - 32) * 5/9;
  }

}
