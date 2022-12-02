import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  year:any

  constructor(private data:DataService, private route:ActivatedRoute) {
    this.route.params.subscribe(params => this.year = params['year']);
  }

  ngOnInit(): void {
    this.data.GetYears().subscribe(data => this.year = data);
  }

}
