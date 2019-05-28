import { Component, OnInit } from '@angular/core';

/**
 * @author Marta Prosniak
 * default view for unauthorized requests
 */

@Component({
  selector: 'app-no-auth',
  templateUrl: './no-auth.component.html',
  styleUrls: ['./no-auth.component.css']
})
export class NoAuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
