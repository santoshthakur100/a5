import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  public selectedId;
  departments = [
    {'id': 1 , 'name': 'Angular'},
    {'id': 2 , 'name': 'Nodejs'},
    {'id': 3 , 'name': 'MongoDB'},
    {'id': 4 , 'name': 'Ruby'},
    {'id': 5 , 'name': 'Bootstrap'},
    {'id': 6 , 'name': 'Javascript'}
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    })
  }

  onSelect(department){
    this.router.navigate(['/hotel', department.id])
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
