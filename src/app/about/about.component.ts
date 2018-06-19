import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public name = 'Testing of Angular 5';
  public myId = 'testID';
  public isDisabled = true;

  public btnText = '';
  public btnTextType = '';

  public displanValue = false;

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

}
