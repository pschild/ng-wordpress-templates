import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class TimelineService {

    constructor(private http: Http) {
    }

    loadAll(): Observable<any> {
        return this.http.get(`http://wp.pschild.de/wp-json/wp/v2/timeline`)
            .map(res => res.json());
    }

}