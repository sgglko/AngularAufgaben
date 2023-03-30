import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-rectangular-room',
  templateUrl: './rectangular-room.component.html',
  styleUrls: ['./rectangular-room.component.scss']
})
export class RectangularRoomComponent {

  // Change the calculation Method
  feetOrMeter = new FormControl();
  calculationMethod = "m"


  changeCalculationMethod(): void {
    if (this.feetOrMeter.value == true) {
      this.calculationMethod = "m";
      this.calculateInMeter();
    } else if (this.feetOrMeter.value == false) {
      this.calculationMethod = "f";
      this.calculateInFeet();
    } else {
      this.calculationMethod = "f";
      this.calculateInFeet();
    }
  }


  // Creates the input fields for length and width
  areaForm = new FormGroup(
    {
      length: new FormControl(
        "0", [Validators.required]
      ),
      width: new FormControl(
        "0", [Validators.required]
      )
    }
  )


  //calculates the area
  area: number = 0;
  width: any;
  length: any;
  calculateArea(): void {
    this.width = this.areaForm.get("width")?.value;
    this.length = this.areaForm.get("length")?.value;
    this.area = this.width * this.length;

  }

  calculateInFeet(): void {
    this.area *= 10.7639;
    this.width *= 3.28084;
    this.length *= 3.28084;
    this.calculationMethod = "f";
    this.areaForm.value.length = this.length;
    this.areaForm.value.width = this.width;
  }

  calculateInMeter(): void {
    this.area /= 10.7639;
    this.width /= 3.28084;
    this.length /= 3.28084;
    this.calculationMethod = "m";
  }

}
