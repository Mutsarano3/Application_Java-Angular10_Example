import { Component, OnInit, OnDestroy } from '@angular/core';
import { InscriptionService } from '../services/inscription.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit, OnDestroy {

  users: any[];
  userSubscription: Subscription;
  id_template = parseInt(localStorage.getItem('id'));
  constructor(private userServices: InscriptionService, private router:Router) { }

  ngOnInit() {
     this.userSubscription = this.userServices.getAllUser().subscribe((value) => {
      this.users = value;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  OnDelete(id: number) {

    this.userServices.DeleteUser(id).subscribe(() => {
      console.log('Le user : ' + id + 'est supprimé');
      this.router.navigate(['/userlist']);
    }, (error) => {
      console.log(error);
    });
  }

}
