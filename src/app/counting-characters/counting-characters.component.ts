import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-counting-characters',
  templateUrl: './counting-characters.component.html',
  styleUrls: ['./counting-characters.component.scss']
})
export class CountingCharactersComponent {
inputObject = new FormControl();


onSubmit():void {
  let count = this.inputObject.value.replace(" ","").length;
  alert(this.inputObject.value + " has " + count + " characters");
}


}
