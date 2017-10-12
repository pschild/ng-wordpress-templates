import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {NGWT_CONFIG, NgwtConfig} from "../config/NgwtConfig";
import "rxjs/add/operator/map";

@Injectable()
export class TimelineService {

    constructor(private http: Http, @Inject(NGWT_CONFIG) private config: NgwtConfig) {
    }

    loadAll(): Observable<any> {
        return this.http.get(`${this.config.baseUrl}/wp/v2/timeline`)
            .map(res => res.json());
    }

}