import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {NGWT_CONFIG, NgwtConfig} from "../config/NgwtConfig";

@Injectable()
export class PageService {

    constructor(private http: Http, @Inject(NGWT_CONFIG) private config: NgwtConfig) {
    }

    loadBySlug(slug): Observable<any> {
        return this.http.get(`${this.config.apiUrl}/wp/v2/pages/?slug=${slug}`)
            .map(res => res.json())
            .map(res => res[0]);
    }

}
