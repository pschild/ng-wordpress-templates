import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {ConfigService} from "../../config/config.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class TimelineService {

    constructor(private http: Http, private config: ConfigService) {
    }

    loadAll(): Observable<any> {
        return this.http.get(`${this.config.baseUrl}/wp/v2/timeline`)
            .map(res => res.json());
    }

}