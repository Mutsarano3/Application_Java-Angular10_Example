import { Component, OnInit, OnDestroy } from '@angular/core';
import { InscriptionService } from '../services/inscription.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit,OnDestroy {

  users: any[];
  userSubject: Subscription;
  constructor(private userService: InscriptionService) {
   }

  ngOnDestroy() {
    this.userSubject.unsubscribe();
  }
  ngOnInit() {

    this.userSubject = this.userService.getAllUser().subscribe((value: any[]) => {
     this.users = value;
    }, (error) => {
      console.log(error);
    });
  }

}
