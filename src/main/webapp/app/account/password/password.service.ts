import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PasswordService {

    constructor(private http: Http) {}

    save(newPassword: string): Observable<any> {
        return this.http.post('emclouduaa/api/account/change-password', newPassword);
    }
}
