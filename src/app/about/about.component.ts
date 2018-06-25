import { Component, OnInit } from '@angular/core';
import { IEmployee2 } from '../epmloyee';
import { Employees } from '../mock-employee';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public count = 2;

  public name = 'Testing of Angular 5';
  public myId = 'testID';
  public isDisabled = true;

  public btnText = '';
  public btnTextType = '';

  public displanValue = false;

  employees = Employees;
  selectedHero: IEmployee2;

  constructor() { }

  showValue() {
    console.log('true or false');
    // this.displanValue = true;
    if (this.displanValue === false) {
      this.displanValue = true;
    } else {
      this.displanValue = false;
    }
  }


  btnClick(event) {
    alert('Hey its button');
    console.log(event);
    this.btnText = 'Hey The Text is visible on Button Click';
    this.btnTextType = event.type;
  }


  ngOnInit() {
  }

  onSelect(employee: IEmployee2): void {
    this.selectedHero = employee; 
  }

  showMore(){
    this.count += 2;
  }

}
