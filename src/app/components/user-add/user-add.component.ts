import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  @Input() userData = { user_name: '', user_surname: '', user_login: '',
                        user_accepted: 'false', user_role: 'USER'};


  constructor(public usersService: UsersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  addUser() {
    this.usersService.addUser(this.userData).subscribe((result) => {
      this.router.navigate(['/users/']);
    }, (err) => {
      console.log(err);
    });
  }

}
