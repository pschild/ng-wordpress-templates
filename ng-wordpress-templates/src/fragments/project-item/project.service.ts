import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {ConfigService} from "../../config/config.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class ProjectService {

    constructor(private http: Http, private config: ConfigService) {
    }

    loadByIds(ids: Array<number>): Observable<any> {
        return this.http.get(`${this.config.baseUrl}/wp/v2/project/?include=${ids.join(',')}`)
            .map(res => res.json());
    }

}
