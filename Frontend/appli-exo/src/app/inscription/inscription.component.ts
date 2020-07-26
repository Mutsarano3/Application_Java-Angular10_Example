import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InscriptionService } from '../services/inscription.service';
import { Router } from '@angular/router';
import { User } from '../model/User.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{

  userForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder, private userService: InscriptionService, private router: Router) { }

  ngOnInit() {
    this.initialForm();
  }


  initialForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  OnSubmit() {
    const formUser = this.userForm.value;
    const  newuser = new User(formUser['name'], formUser['firstname'], formUser['email'],formUser['password']);
    this.userService.addUser(newuser).subscribe(() => {
      console.log('User enregistré');
      this.router.navigate(['/userlist']);
    }, (error) => {
      console.log(error);
    });


  }

}
