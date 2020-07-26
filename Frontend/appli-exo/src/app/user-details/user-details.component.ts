import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InscriptionService } from '../services/inscription.service';
import { User } from '../model/User.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  user: User;
  userSubscription: Subscription;
  constructor(private route: ActivatedRoute, private userServices: InscriptionService, private router: Router) { }

  ngOnInit() {

    const id = this.route.snapshot.params['id'];
    this.userSubscription = this.userServices.getUserById(parseInt(id)).subscribe((value) => {
      this.user = value;
    }, (error) => {
      this.router.navigate(['**']);
    });



  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
