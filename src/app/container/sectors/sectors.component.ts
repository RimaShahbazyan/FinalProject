import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {
  tableData = [{
    'sector': 'Armenia',
    'percentage': '50'
  }];
  selectiveData = ['akuhkuj', 'hkuhk'];
  constructor() { }

  ngOnInit() {
  }

}
