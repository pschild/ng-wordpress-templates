import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {NGWT_CONFIG} from "../config/NgwtConfig";

@Injectable()
export class TimelineService {

    constructor(private http: Http, @Inject(NGWT_CONFIG) private config: any) {
    }

    loadAll(): Observable<any> {
        return this.http.get(`${this.config.apiUrl}/wp/v2/timeline`)
            .map(res => res.json());
    }

}