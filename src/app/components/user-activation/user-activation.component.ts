import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UsersService} from '../../_services/users.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

/**
 * @author Marta
 * activates user
 */

@Component({
  selector: 'app-user-activation',
  templateUrl: './user-activation.component.html',
  styleUrls: ['./user-activation.component.css']
})
export class UserActivationComponent implements OnInit {

  user: User = new User();

  constructor(private usersService: UsersService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usersService
      .getUserDetails(id)
      .subscribe(result => {
        this.user = result;
        let isAccepted;
        isAccepted = this.user.accepted;
        if (!isAccepted) {
          this.activate();
        }
      });
  }

    goBack(): void {
    this.location.back();
  }

    activate(): void {
      this.usersService
        .activate(this.user)
        .subscribe(result => this.user = result);
    }
  }


