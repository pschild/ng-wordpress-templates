import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {NGWT_CONFIG, NgwtConfig} from "../config/NgwtConfig";

@Injectable()
export class NavigationService {

    constructor(private http: Http, @Inject(NGWT_CONFIG) private config: NgwtConfig) {
    }

    loadNavigation(): Observable<any> {
        return this.http.get(`${this.config.apiUrl}/pschild-angular/v1/menu/${this.config.menuName}`)
            .map(res => res.json());
    }

}
