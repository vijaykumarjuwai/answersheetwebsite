import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  tests: any;
  constructor( private api: ApiService ) { }

  ngOnInit() {
    this.api.getTests().subscribe(res => {
      this.tests = res;
      console.log(res);
    });
  }

}
