import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InscriptionService } from './services/inscription.service';
import { ListUserComponent } from './list-user/list-user.component';
import { ListUserItemComponent } from './list-user-item/list-user-item.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
  {path: 'inscription', component : InscriptionComponent },
  {path: 'userlist', component: ListUserComponent},
  {path: 'userlist/:id', canActivate: [AuthGuard], component: UserDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'delete', canActivate: [AuthGuard], component: DeleteUserComponent},
  {path: 'edit', canActivate: [AuthGuard], component: EditUserComponent},
  {path: '', component: InscriptionComponent},
  {path: '**', component: NotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    NotFoundComponent,
    ListUserComponent,
    ListUserItemComponent,
    UserDetailsComponent,
    LoginComponent,
    EditUserComponent,
    DeleteUserComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [InscriptionService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
