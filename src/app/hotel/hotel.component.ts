import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  departments = [
    {'id': 1 , 'name': 'Angular'},
    {'id': 2 , 'name': 'Nodejs'},
    {'id': 3 , 'name': 'MongoDB'},
    {'id': 4 , 'name': 'Ruby'},
    {'id': 5 , 'name': 'Bootstrap'},
    {'id': 6 , 'name': 'Javascript'}
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(department){
    this.router.navigate(['/hotel', department.id])
  }

}
