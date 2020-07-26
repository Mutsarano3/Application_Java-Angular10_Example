import { Subject } from 'rxjs/Subject';
import { User } from '../model/User.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppSettings } from '../Settings/app.settings';
import { Injectable } from '@angular/core';

@Injectable()
export class InscriptionService {

    isAuth = false;
    constructor(private http: HttpClient) {}

    getAllUser() {
         return this.http.get<any[]>(AppSettings.ENDPOINT + '/');

    }

    EditUser(id: number, user: User) {
        return this.http.put(AppSettings.ENDPOINT + '/' + id, user);
    }

    DeleteUser(id: number) {
        return this.http.delete(AppSettings.ENDPOINT + '/' + id);
    }

    login(mail: string, mdp: string) {
        return this.http.post<any>(AppSettings.ENDPOINT + '/login', null, {
            responseType: 'text' as 'json',
            params: {
                email: mail,
                password: mdp
            },
        });
    }

    getUserById(id: number) {
        return this.http.get<any>(AppSettings.ENDPOINT + '/' + id);
    }

    addUser(user: User) {
        return this.http.post(AppSettings.ENDPOINT + '/', user);
    }
}