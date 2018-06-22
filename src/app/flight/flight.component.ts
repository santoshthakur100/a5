import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // Your jQuery code goes here
    $('#myInput').on('keyup', function () {
      let value: any = $(this).val().toLowerCase();
      $('#myList li').filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  }

}
