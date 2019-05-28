import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../_services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './no-auth.component.html',
  styleUrls: ['./no-auth.component.css']
})
export class NoAuthComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

}
