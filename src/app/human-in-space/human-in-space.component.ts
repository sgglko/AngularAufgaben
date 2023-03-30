import {Component, Inject} from '@angular/core';
import { HttpService } from '../http.service';

interface Data {
  message: string;
  amountOfPeople: number;
  dataPeople: string[];

}
@Component({
  selector: 'app-human-in-space',
  templateUrl: './human-in-space.component.html',
  styleUrls: ['./human-in-space.component.scss']
})


export class HumanInSpaceComponent {
  Data: any = [];
  constructor(private httpService: HttpService) {}

  apiCall() {
    this.httpService.getRequest('http://api.open-notify.org/astros.json').subscribe(data => {
      console.log(data);
      this.Data = data;
    });
  }

}

