import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {NGWT_CONFIG, NgwtConfig} from "../config/NgwtConfig";

@Injectable()
export class ProjectService {

    constructor(private http: Http, @Inject(NGWT_CONFIG) private config: NgwtConfig) {
    }

    loadByIds(ids: Array<number>): Observable<any> {
        return this.http.get(`${this.config.apiUrl}/wp/v2/project/?include=${ids.join(',')}`)
            .map(res => res.json());
    }

}
