import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {NGWT_CONFIG, NgwtConfig} from "../../config/NgwtConfig";
import "rxjs/add/operator/map";

@Injectable()
export class ProjectService {

    constructor(private http: Http, @Inject(NGWT_CONFIG) private config: NgwtConfig) {
    }

    loadByIds(ids: Array<number>): Observable<any> {
        return this.http.get(`${this.config.baseUrl}/wp/v2/project/?include=${ids.join(',')}`)
            .map(res => res.json());
    }

}
