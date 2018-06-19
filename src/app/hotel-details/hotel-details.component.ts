import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  public deparmentId;
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.deparmentId = id;

    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.deparmentId = id;
    });

  }

  goPrevious(){
    let previousId: number = this.deparmentId - 1;
    this.router.navigate(['/hotel', previousId]);
    console.log(">>>>>>>>>>>>>>>>>>> ", this.deparmentId);
  }

  goNext(){
    let nextId: number = this.deparmentId + 1;
    this.router.navigate(['/hotel', nextId]);
    console.log(">>>>>>>>>>>>>>>>>>> ", this.deparmentId);
  }

  goDepartment(){
    let selectedId = this.deparmentId ? this.deparmentId : null;
    this.router.navigate(['/hotel', {id : selectedId, test: 'testValue'+selectedId}]);
  }

}
