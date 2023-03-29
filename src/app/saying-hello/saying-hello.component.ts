import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-saying-hello',
  templateUrl: './saying-hello.component.html',
  styleUrls: ['./saying-hello.component.scss']

})
export class SayingHelloComponent {
inputName = new FormControl("");


sayHello():void {
  alert("Hello," + this.inputName.value + ", nice to meet you!");
}
}
