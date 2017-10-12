import {Inject, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {NGWT_CONFIG, NgwtConfig} from "../config/NgwtConfig";

@Injectable()
export class PostService {

    constructor(private http: Http, @Inject(NGWT_CONFIG) private config: NgwtConfig) {
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
