import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../services/inscription.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isAuth: boolean;
  constructor(private userServices: InscriptionService) { }

  ngOnInit() {
    this.isAuth = this.userServices.isAuth;
  }

}
