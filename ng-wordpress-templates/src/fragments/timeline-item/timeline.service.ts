import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {BASE_URL} from "../../templates/tpl-timeline/tpl-timeline.module";

@Injectable()
export class TimelineService {

    constructor(private http: Http, @Inject(BASE_URL) private baseUrl: string) {
    }

    loadAll(): Observable<any> {
        return this.http.get(`${this.baseUrl}/wp/v2/timeline`)
            .map(res => res.json());
    }

}