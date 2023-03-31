import {Component, OnChanges, OnInit} from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-human-in-space',
  templateUrl: './human-in-space.component.html',
  styleUrls: ['./human-in-space.component.scss']
})


export class HumanInSpaceComponent {
  message?: string;
  amountOfPeople?: number;
  dataPeople?: { craft: string, name: string }[];
  dataISS?: { name: string }[];
  dataShenzhou15?: { name: string }[];
  buttonClicked: boolean = false;

  constructor(private httpService: HttpService) {
  }

  showPeople() {
    this.httpService.getRequest('http://api.open-notify.org/astros.json').subscribe((data) => {
      console.log(data);
      this.message = data.message;
      this.dataPeople = data.people;
      this.amountOfPeople = data.number;
      console.log(this.dataPeople);
      console.log(this.amountOfPeople);
      console.log(this.message)
      this.sortPeopleByCraft()
    });


  }

  sortPeopleByCraft() {

    this.dataShenzhou15?.splice(0);
    this.dataISS?.splice(0);

    if (!this.dataShenzhou15) {
      this.dataShenzhou15 = [];
    }
    if (!this.dataISS) {
      this.dataISS = [];
    }

    for (let i = 0; i < this.dataPeople!.length; i++) {
      if (this.dataPeople![i].craft === 'Shenzhou 15') {
        this.dataShenzhou15.push(this.dataPeople![i]);
        this.dataShenzhou15.sort((a, b) => a.name.localeCompare(b.name))
      } else if (this.dataPeople![i].craft === 'ISS') {
        this.dataISS.push(this.dataPeople![i]);
        this.dataISS.sort((a, b) => a.name.localeCompare(b.name))
      }
    }
  }

  rocketStart() {
    const element = document.getElementById('button');

    element?.classList.add('rocketStart');

    element?.addEventListener('animationend', () => {
      element?.classList.remove('rocketStart');
    }, { once: true });
  }




}
