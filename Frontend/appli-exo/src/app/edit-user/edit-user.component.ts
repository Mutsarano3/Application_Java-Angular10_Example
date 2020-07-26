import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InscriptionService } from '../services/inscription.service';
import { Subscription } from 'rxjs';
import { User } from '../model/User.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnDestroy {

  editformGroup: FormGroup;
  userSubscription: Subscription;
  user: User;
  
  constructor(private formBuilder: FormBuilder, private userServices : InscriptionService) { }

  ngOnInit() {
    this.userSubscription = this.userServices.getUserById(parseInt(localStorage.getItem('id')))
    .subscribe((value) => {
      this.user = value;
      console.log(this.user);
    }, (error) => {
      console.log(error);
    });

    this.initialForm();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  initialForm() {
    this.editformGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  OnSubmitModify() {
    const formValue = this.editformGroup.value;
    this.user.firstname = formValue['firstname'];
    this.user.name = formValue['name'];
    this.user.password = formValue['password'];
    this.userServices.EditUser(parseInt(localStorage.getItem('id')), this.user).subscribe(() => {
      console.log("Modification réussis");
    },(error) => {
      console.log(error);
    });
  }

}
