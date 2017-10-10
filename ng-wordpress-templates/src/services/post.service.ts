import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {ConfigService} from "../config/config.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PostService {

    constructor(private http: Http, private config: ConfigService) {
    }

    loadById(postId: number): Observable<any> {
        return this.http.get(`${this.config.baseUrl}/wp/v2/posts/${postId}`)
            .map(res => res.json());
    }

    loadByCategoryIds(categoryIds: Array<number>): Observable<any> {
        return this.http.get(`${this.config.baseUrl}/wp/v2/posts/?categories=${categoryIds.join(',')}`)
            .map(res => res.json());
    }
}
